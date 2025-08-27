package com.example.spring.member;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;

public class MemberServiceTest {

    MemberService memberService = new MemberServiceImpl(null);

    @Test
    void join(){
        //given => when에서 확인할 메서드에 사용되는 객체나 데이터를 정의하는 곳
        Member member = new Member(1L, "memberA", Grade.VIP);

        //when => 테스트할 메서드(서비스) 작성하는 곳
        memberService.join(member);
        Member findMember = memberService.findMember(1L);


        //then => 테스트 진행하는 곳
        Assertions.assertThat(member).isEqualTo(findMember);
        // member의 값이 findMember 와 동일한지 확인하는 테스트
    }

}
