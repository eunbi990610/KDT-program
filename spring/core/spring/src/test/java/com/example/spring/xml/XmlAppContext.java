package com.example.spring.xml;

import com.example.spring.member.MemberService;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.GenericXmlApplicationContext;

public class XmlAppContext {

    @Test
    void xmlAppContext(){
        ApplicationContext ac = new GenericXmlApplicationContext("appConfing.xml");
        MemberService memberService = ac.getBean("memberService", MemberService.class);
//      Assertions.assertThat(memberService).isInstanceOf(MemberService.class); 에러 발생
//      org.springframework.beans.factory.BeanDefinitionStoreException: IOException parsing XML document from class path resource [appConfing.xml]






    }

}
