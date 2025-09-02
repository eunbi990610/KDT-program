package com.example.spring.scan.filter;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.NoSuchBeanDefinitionException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.FilterType;

import static org.assertj.core.api.Assertions.*;


public class ComponentFilterAppConfigTest {

    @Test
    void filterScan(){
        ApplicationContext ac = new AnnotationConfigApplicationContext(ComponentFilterAppConfig.class);
        BeanA beanA = ac.getBean("beanA", BeanA.class);
        assertThat(beanA).isNotNull();

//        ac.getBean("beanB", BeanB.class);
//        org.junit.jupiter.api.Assertions.assertThrows(
//                NoSuchBeanDefinitionException.class,
//                () -> ac.getBean("beanB", BeanB.class)
//        );
    }

    @Configuration // 이게 빈 설정 파일이다.
    @ComponentScan( // 스프링 빈으로 등록할 컴포넌트 스캔 설정 정보
            includeFilters = @ComponentScan.Filter(
                    type= FilterType.ANNOTATION, classes = MyIncludeComponent.class),
            excludeFilters = @ComponentScan.Filter(
                    type = FilterType.ANNOTATION, classes = MyExcludeComponent.class
            ))
    static class ComponentFilterAppConfig{

    }

}
