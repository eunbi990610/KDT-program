package com.example.spring.beanfind;

import com.example.spring.AppConfig;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class ApplivationContextInfoTest {


    AnnotationConfigApplicationContext ac = new AnnotationConfigApplicationContext(AppConfig.class);

    @Test
    @DisplayName("모든 빈 출력하기 ")
    void findAllBean(){
        String[] beanDefinitionNames = ac.getBeanDefinitionNames();
        for (String beanDefinitionName : beanDefinitionNames) {
            Object bean = ac.getBean(beanDefinitionName);
            System.out.println("name = "+ beanDefinitionName + ", Object = " + bean);
//            AppConfig 도 빈으로 등록이됨

        }
        /*실행 결과
        name = org.springframework.context.annotation.internalConfigurationAnnotationProcessor, Object = org.springframework.context.annotation.ConfigurationClassPostProcessor@76012793
        name = org.springframework.context.annotation.internalAutowiredAnnotationProcessor, Object = org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor@635572a7
        name = org.springframework.context.annotation.internalCommonAnnotationProcessor, Object = org.springframework.context.annotation.CommonAnnotationBeanPostProcessor@79d94571
        name = org.springframework.context.event.internalEventListenerProcessor, Object = org.springframework.context.event.EventListenerMethodProcessor@4dd02341
        name = org.springframework.context.event.internalEventListenerFactory, Object = org.springframework.context.event.DefaultEventListenerFactory@3212a8d7
        name = appConfig, Object = com.example.spring.AppConfig$$SpringCGLIB$$0@7a1a3478
        name = memberService, Object = com.example.spring.member.MemberServiceImpl@495b0487
        name = memberRepository, Object = com.example.spring.member.MemoryMemberRepository@55dfcc6
        name = orderService, Object = com.example.spring.order.OrderServiceImpl@222eb8aa
        name = discountPolicy, Object = com.example.spring.discount.FixedDiscountPolicy@93cf163
         */
    }


    @Test
    @DisplayName("애플리케이션 빈 출력하기 ")
    void findApplicationBean(){
        String[] beanDefinitionNames = ac.getBeanDefinitionNames();
        for (String beanDefinitionName : beanDefinitionNames) {
            BeanDefinition beanDefinition = ac.getBeanDefinition(beanDefinitionName);

            //BeanDefinition.ROLE_APPLICATION : 내가 애플리케이션을 개발하기 위해서 생성한 빈
            if(beanDefinition.getRole() == BeanDefinition.ROLE_APPLICATION){
                Object bean = ac.getBean(beanDefinitionName);
                System.out.println("name = "+ beanDefinitionName + ", Object = " + bean);
            }
        }
        /* 출력 결과
        name = appConfig, Object = com.example.spring.AppConfig$$SpringCGLIB$$0@79d94571
        name = memberService, Object = com.example.spring.member.MemberServiceImpl@4dd02341
        name = memberRepository, Object = com.example.spring.member.MemoryMemberRepository@3212a8d7
        name = orderService, Object = com.example.spring.order.OrderServiceImpl@7a1a3478
        name = discountPolicy, Object = com.example.spring.discount.FixedDiscountPolicy@495b0487

         */

    }



}
