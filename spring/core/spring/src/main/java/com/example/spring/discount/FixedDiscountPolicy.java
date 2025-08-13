package com.example.spring.discount;

import com.example.spring.member.Grade;
import com.example.spring.member.Member;

public class FixedDiscountPolicy implements DiscountPolicy {

    private int discountFixedAmount = 1000;

    @Override
    public int discount(Member member, int price) {
        if(member.getGrade() == Grade.VIP){
            return discountFixedAmount;
        }else {
            return 0;
        }
    }
}
