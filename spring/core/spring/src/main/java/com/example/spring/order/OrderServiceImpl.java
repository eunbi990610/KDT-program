package com.example.spring.order;

import com.example.spring.discount.DiscountPolicy;
import com.example.spring.member.Member;
import com.example.spring.member.MemberRepository;
import com.example.spring.member.MemoryMemberRepository;

// 주문 서비스의 구현 클래스
public class OrderServiceImpl implements OrderService {

//    private final MemberRepository memberRepository = new MemoryMemberRepository();

/*
    할인 정책을 정액 방식에서  정률 방식으로 변경 하려고 한다
    => OrderServiceImpl 에서 discountPolicy의 구현 클래스를 변경해야한다.
    지금까지의 코드들의 문제점
    1. 역할과 구현을 분리 O
    2. 다형성 활용, 인터페이스와 구현 객체 분리 O
    3. OCP, DIP 같은 객체지향 설계 원칙을 준수한 것 처럼 보이나 사실은 아니다.
    OrderServiceImpl 구현 클래스에서 DiscountPolicy 타입의 참조변수인 discountPolicy를 생성함으로
    DiscountPolicy에 의존하고 있는것 처럼 보이지만,
    discountPolicy는 RateDiscountPolicy 구현 클래스로 만들어진 것이므로
    인터페이스 뿐만 아니라 구현클래스에도 의존하고 있는것이다. => DIP 위반

    그리고 할인 정책을 정액에서 정률로 변경하기 위해서 FixedDiscountPolicy 를 RateDiscountPolicy로 변경하는 순간,
    OrderServiceImpl의 소스 코드도 함께 변경해야 한다 => OCP 위반

 */
//    private final DiscountPolicy discountPolicy = new FixedDiscountPolicy();
//    private final DiscountPolicy discountPolicy = new RateDiscountPolicy();
    // OrderServiceImpl 에서 DiscountPolicy 타입을 필드로 선언하였으므로 이 타입이 없다면
    // OrderServiceImpl은 컴파일 자체가 안되니까 때문에 OrderServiceImpl 가 DiscountPolicy를 의존한다. 라고 생각했음!

    /*
    DIP, OCP 위반 해결 방법
    이렇게 작성하면 인터페이스만 의존한 것임
    DiscountPolicy 인터페이스만 의존하게 되면 createOrder() 구현부분에서 discountPolicy.discount()메서드가
    구현부분이 없는 상태이기 때문에 널포인터에러가 발생한다.
    =>java.lang.NullPointerException: Cannot invoke "com.example.spring.discount.DiscountPolicy.discount(com.example.spring.member.Member, int)" because "this.discountPolicy" is null
    (널에다가 '.'찍어면 널포인터에러 발생)
    */
    private final MemberRepository memberRepository;
    private final DiscountPolicy discountPolicy;

    public OrderServiceImpl(MemberRepository memberRepository, DiscountPolicy discountPolicy) {
        this.memberRepository = memberRepository;
        this.discountPolicy = discountPolicy;
    }
    /* 설계 변경으로
    OrderServiceImpl은 FixedDiscountPolicy 를 의존하지 않는다.
    단지 DiscountPolicy 인터페이스만 의존한다.
    OrderServiceImpl 입장에서 생성자를 통해 어떤 구현 객체가 들어올지는 알 수 없다.
    OrderServiceImpl의 생성자를 통해서 어떤 구현 객체를 주입할지는 오직 외부 AppConfig에서 결정한다.
    OrderServiceImpl은 이제 실행에만 집중 하면 된다.
     */

    @Override
    public Order createOrder(Long memberId, String itemName, int itemPrice) {

        Member member = memberRepository.findById(memberId);
        int discountPrice = discountPolicy.discount(member, itemPrice);

        return new Order(memberId, itemName, itemPrice, discountPrice);

    }
}
