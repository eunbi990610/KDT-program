package com.example.spring.beanfind;

import com.example.spring.AppConfig;
import com.example.spring.member.MemberService;
import com.example.spring.member.MemberServiceImpl;
import com.example.spring.member.MemoryMemberRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.NoSuchBeanDefinitionException;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import static org.assertj.core.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.*;

public class ApplicationContextBasicFindTest {

    AnnotationConfigApplicationContext ac = new AnnotationConfigApplicationContext(AppConfig.class);

    @Test
    @DisplayName("빈 이름으로 조회 ")
    void findBeanByName(){
        MemberService memberService = ac.getBean("memberService", MemberService.class);
        assertThat(memberService).isInstanceOf(MemberServiceImpl.class);
    }

    @Test
    @DisplayName("빈 이름 없이 타입으로만 조회 ")
    void findBeanByType(){
        MemberService memberService = ac.getBean(MemberService.class);
        assertThat(memberService).isInstanceOf(MemberServiceImpl.class);
    }

    @Test
    @DisplayName("구체 타입으로 조회 ")
    void findBeanByName2(){
        MemberService memberService = ac.getBean("memberService", MemberServiceImpl.class);
        assertThat(memberService).isInstanceOf(MemberServiceImpl.class);
    }           // 실제 구체 부분을 적는 것은 좋지 않은 코드 (MemberServiceImpl) -> 역할과 구현을 구분해야하기 때문에
                // 이 코드는 구현을 의존하는 코드!

    @Test
    @DisplayName("빈 이름으로 조회X -FAIL TEST")
    void findBeanByNameX(){
        MemberService memberService = ac.getBean("xxxxx", MemberService.class);
//      org.springframework.beans.factory.NoSuchBeanDefinitionException: No bean named 'xxxxx' available
        assertThrows(NoSuchBeanDefinitionException.class,
                () -> ac.getBean("xxxxx", MemberService.class));
//      무조건 예외가 터져야함!! 예외가 처져야 성공하는 테스트 코드
    }


}
