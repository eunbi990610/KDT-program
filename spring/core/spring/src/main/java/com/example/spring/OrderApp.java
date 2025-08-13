package com.example.spring;

import com.example.spring.member.Grade;
import com.example.spring.member.Member;
import com.example.spring.member.MemberService;
import com.example.spring.member.MemberServiceImpl;
import com.example.spring.order.Order;
import com.example.spring.order.OrderService;
import com.example.spring.order.OrderServiceImpl;

public class OrderApp {
    public static void main(String[] args) {
        MemberService memberService = new MemberServiceImpl();
        OrderService orderService = new OrderServiceImpl();
        //memberService,orderService : 인터페이스 타입의 참조변수 = 구현체 객체 ==> 클라이언트 코드
        //변수의 정적 타입은 인터페이스, 실제 객체 타입은 구현 클래스
        //ex. 리모콘(인터페이스)로 티비(실제 기기_구현체)를 조종하는 느낌
        // 타입을 인터페이스로 받는 이유 -> DIP 교체/확장이 쉽기 때문에 /코드 수정이 최소화 할 수 있는 방법
        // 서비스 로직은 인터페이스에 정의된 기능(약속한 메서드)만 쓰므로 구현이 바뀌어도 영향이 작다.

        //현재는 main에서 직접 new 로 생성하고 있는데 이러면
        // 생성위치가 클라이언트에 붙어 있어서 구현 교체가 퍼져나갈 수 있다.
        //=> main에서 직접 new를 하면, 그 코드를 어떤 구현 클래스를 쓸지 스스로 결정하게 되고,
        // 나중에 구현을 바꾸고 싶을 때 그 코드를 반드기 같이 고쳐야 한다는 뜻  = "구현 교체가 퍼져나간다."


        Long memberId = 1L;
        Member member = new Member(memberId, "memberA", Grade.VIP);
        memberService.join(member);

        Order order = orderService.createOrder(memberId, "itemA", 10000);

        System.out.println("order = " + order);
    }
}
