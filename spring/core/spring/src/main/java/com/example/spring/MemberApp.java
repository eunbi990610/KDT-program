package com.example.spring;

import com.example.spring.member.Grade;
import com.example.spring.member.Member;
import com.example.spring.member.MemberService;
import com.example.spring.member.MemberServiceImpl;

public class MemberApp {
    public static void main(String[] args) {
        MemberService memberService = new MemberServiceImpl();
        //회원 서비스 인터페이스로 구현해서 회원 서비스형 객체에 저장할꺼야

        Member member = new Member(1L, "memberA", Grade.VIP);
//        회원 객체 생성 및 초기화

        memberService.join(member);

        Member findMember = memberService.findMember(1L);
        System.out.println("member = " + member.getName());
        System.out.println("findMember = " + findMember.getName());
    }
}
