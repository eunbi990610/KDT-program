package com.example.spring;

import com.example.spring.discount.DiscountPolicy;
import com.example.spring.discount.FixedDiscountPolicy;
import com.example.spring.member.MemberRepository;
import com.example.spring.member.MemberService;
import com.example.spring.member.MemberServiceImpl;
import com.example.spring.member.MemoryMemberRepository;
import com.example.spring.order.OrderService;
import com.example.spring.order.OrderServiceImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {
//    public MemberService memberService(){
//        return new MemberServiceImpl(new MemoryMemberRepository());
//    }

//    public OrderService orderService(){
//        return new OrderServiceImpl(new MemoryMemberRepository(), new FixDiscountPolicy());
//    }



    //환경 구성에 관한 모든 것은 AppConfig에서 진행
    @Bean
    public MemberService memberService(){
        return new MemberServiceImpl(memberRepository());
        //=> 생성자 주입
    }
    @Bean
    public MemberRepository memberRepository() {
        return new MemoryMemberRepository();
    }
    @Bean
    public OrderService orderService(){
        return new OrderServiceImpl(memberRepository(),
                                     discountPolicy());
    }
    @Bean
    public DiscountPolicy discountPolicy(){
        return new FixedDiscountPolicy();
    }



}
