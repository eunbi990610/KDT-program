package com.example.spring;

import com.example.spring.member.Grade;
import com.example.spring.member.Member;
import com.example.spring.member.MemberService;
import com.example.spring.member.MemberServiceImpl;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class MemberApp {
    public static void main(String[] args) {
//        MemberService memberService = new MemberServiceImpl();
        //회원 서비스 인터페이스로 구현해서 회원 서비스형 객체에 저장할꺼야

        //변경 후
//        AppConfig appConfig = new AppConfig();
//        MemberService memberService = appConfig.memberService();

//        스프링 사용
        ApplicationContext applicationContext = new AnnotationConfigApplicationContext(AppConfig.class);
//AnnotationConfigApplicationContext : AppConfin.class의 환경설정정보을 가지고 @Bean이 붙은 메서드를 스프링 컨테이너에 넣어 관리하준다.
// (어노테이션을 기반의 config로 ApplicationContext을 만들어라 )
        MemberService memberService = applicationContext.getBean("memberService", MemberService.class);
        // getBear(빈 이름, 빈 타입 ) 빈의 이름 기본값은 메서드명



        Member member = new Member(1L, "memberA", Grade.VIP);
//        회원 객체 생성 및 초기화

        memberService.join(member);

        Member findMember = memberService.findMember(1L);
        System.out.println("member = " + member.getName());
        System.out.println("findMember = " + findMember.getName());
    }
}
