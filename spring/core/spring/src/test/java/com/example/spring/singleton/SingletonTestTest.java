package com.example.spring.singleton;

import com.example.spring.AppConfig;
import com.example.spring.member.MemberService;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class SingletonTestTest {

    @Test
    @DisplayName("스프링 없는 순수한 DI 컨테이너")
    void pureContainer(){
        AppConfig appConfig = new AppConfig();

//        1. 조회 : 호출할 때 마다 객체를 생성
        MemberService memberService1 = appConfig.memberService();
//        2. 조회 : 호출할 때 마다 객체를 생성
        MemberService memberService2 = appConfig.memberService();

        //참조값이 다른 것을 확인
        System.out.println("memberService1 = " + memberService1);
        System.out.println("memberService2 = " + memberService2);

        // memberService1 != memberService2
        Assertions.assertThat(memberService1).isNotSameAs(memberService2);


    }

    @Test
    @DisplayName("싱글톤 패턴을 적용한 객체 사용")
    void singletonServiceTest() {
        SingletenService singletenService1 = SingletenService.getInstance();
        SingletenService singletenService2 = SingletenService.getInstance();
//        SingletonService singletonService = new SingletonService();//Cannot resolve symbol 'SingletonService'

        System.out.println("singletenService1 = " + singletenService1);
        System.out.println("singletenService2 = " + singletenService2);

        Assertions.assertThat(singletenService1).isSameAs(singletenService2);
        //isSameAs == 객체의 참조어? 참조값을 비교 -> 동일한 인스턴스 인지
        //isEquals == 값이 동일한지


    }

    @Test
    @DisplayName("스프링 컨테이너와 싱글톤 ")
    void springContainer() {
//        AppConfig appConfig = new AppConfig();
        ApplicationContext ac = new AnnotationConfigApplicationContext(AppConfig.class);
        MemberService memberService1 = ac.getBean("memberService", MemberService.class);
        MemberService memberService2 = ac.getBean("memberService", MemberService.class);

        Assertions.assertThat(memberService1).isSameAs(memberService2);



    }




}
