package com.example.spring.singleton;

import com.example.spring.AppConfig;
import com.example.spring.member.MemberRepository;
import com.example.spring.member.MemberServiceImpl;
import com.example.spring.order.OrderServiceImpl;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;


public class ConfigurationSingletonTest {


    @Test
    void configurationSingletonTest(){
        ApplicationContext ac = new AnnotationConfigApplicationContext(AppConfig.class);

        MemberServiceImpl memberService = ac.getBean("memberService", MemberServiceImpl.class);
        OrderServiceImpl orderService = ac.getBean("orderService", OrderServiceImpl.class);
        MemberRepository memberRepository = ac.getBean("memberRepository", MemberRepository.class);

        MemberRepository memberRepository1 = memberService.getMemberRepository();
        MemberRepository memberRepository2 = orderService.getMemberRepository();

        System.out.println("memberService -> memberRepository1 = " + memberRepository1);
        System.out.println("orderService -> memberRepository2 = " + memberRepository2);
        System.out.println("memberRepository -> memberRepository = " + memberRepository);
        // 출력되는 인스턴스 3개가 모두 동일한 인스턴스 => 싱글톤
        // 스프링이 자동으로 싱글톤을 유지해준다.

        Assertions.assertThat(memberService.getMemberRepository()).isSameAs(memberRepository);
        Assertions.assertThat(orderService.getMemberRepository()).isSameAs(memberRepository);

    }

    @Test
    void configurationDeep(){
        ApplicationContext ac = new AnnotationConfigApplicationContext(AppConfig.class);
        AppConfig bean = ac.getBean(AppConfig.class);

        System.out.println("bean = " + bean.getClass());
        // 순수한 클래스라면 class 'com.example.spring.AppConfig' 이렇게 출력되어야 한다.
/*        bean = class com.example.spring.AppConfig$$SpringCGLIB$$0
         -> 이건 내가 만든 순수한 클래스를 스프링이 CGLIB라는 바이트코드 조작 라이브러리를 사용해서 AppConfig 클래스를 상속받은
         임의의 다른 클래스를 만들고, 그 다른 클래스를 스프링이 빈으로 등록한 것
         이 임의의 다른 클래스가 싱글톤이 보장되도록 도와준다.

        CGLIB
        @Bean이 붙은 메서드마다 이미 스프링 빈이 존재하면 존재하는 빈을 반환하고, 스프링 빈이 없으면 생성해서 스프링 빈으로 등록하고
        반환하는 코드가 동적으로 만들어짐 -> 싱글톤이 보장됨

        * AppConfig@CGLIB는 AppConfig의 자식 타입이므로, AppConfig 타입으로 조회할 수 있다.
*/

    }



}
