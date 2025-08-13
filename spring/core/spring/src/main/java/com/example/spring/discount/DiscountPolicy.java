package com.example.spring.discount;

import com.example.spring.member.Member;

public interface DiscountPolicy {
    int discount(Member member, int price);
    // 인터페이스에는 역할만 작성
    // discountPolicy 인터페이스는 회원과 구매한 물품의 가격을 넘기면 할인 금액을 측정하는 역할
}
