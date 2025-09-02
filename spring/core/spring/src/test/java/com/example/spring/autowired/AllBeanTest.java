package com.example.spring.autowired;

import com.example.spring.AutoAppConfig;
import com.example.spring.discount.DiscountPolicy;
import com.example.spring.member.Grade;
import com.example.spring.member.Member;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import java.util.List;
import java.util.Map;

public class AllBeanTest {

    @Test
    void findAllBean() {
        ApplicationContext ac = new AnnotationConfigApplicationContext(AutoAppConfig.class, DiscountService.class);

        DiscountService discountService = ac.getBean(DiscountService.class);
        Member member = new Member(1L, "userA", Grade.VIP);
         discountService.discount(member,10000, "fixDiscountPolicy");
    }

    static class DiscountService{
        private final Map<String, DiscountPolicy> policyMap;
        private final List<DiscountPolicy> policies;

       @Autowired
        public DiscountService(Map<String, DiscountPolicy> policyMap, List<DiscountPolicy> policies) {
            this.policyMap = policyMap;
            this.policies = policies;
            System.out.println("policyMap = " + policyMap + ", policies = " + policies);
//            policyMap = {}, policies = []
            // 현재는 DiscountService.class 만 스프링 빈으로 등록한 것
            // 출력하려면 DiscountPolicy를 가져와야 한다.
        }

        public int discount(Member member, int price, String discountCode) {
           DiscountPolicy discountPolicy = policyMap.get(discountCode);
           return discountPolicy.discount(member, price);
        }
    }

}
