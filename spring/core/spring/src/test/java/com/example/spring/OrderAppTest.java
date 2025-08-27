package com.example.spring;

import com.example.spring.discount.FixedDiscountPolicy;
import com.example.spring.member.*;
import com.example.spring.order.Order;
import com.example.spring.order.OrderService;
import com.example.spring.order.OrderServiceImpl;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class OrderAppTest {

    MemberService memberService = new MemberServiceImpl(new MemoryMemberRepository());
    OrderService orderService = new OrderServiceImpl(new MemoryMemberRepository(),new FixedDiscountPolicy());



    @Test
    void createOrder() {
        Long memberId = 1L;
        Member member = new Member(memberId, "memberA",Grade.VIP);
        memberService.join(member);

        Order order = orderService.createOrder(memberId, "itemA", 10000);

        Assertions.assertThat(order.getDiscountPrice()).isEqualTo(1000);
    }




}