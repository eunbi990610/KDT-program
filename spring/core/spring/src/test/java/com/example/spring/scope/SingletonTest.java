package com.example.spring.scope;

import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.Scope;

public class SingletonTest {

    @Test
    void singletonBeanFind(){
        AnnotationConfigApplicationContext ac = new AnnotationConfigApplicationContext(SingletonBean1.class);

        SingletonBean1 bean1 = ac.getBean(SingletonBean1.class);
        SingletonBean1 bean2 = ac.getBean(SingletonBean1.class);
        System.out.println("bean1 = " + bean1);
        System.out.println("bean2 = " + bean2);

        Assertions.assertThat(bean1).isSameAs(bean2);

        ac.close();
    }

    @Scope("singleton")
    static class SingletonBean1{
        @PostConstruct
        public void init(){
            System.out.println("SingletonBean1.init");
        }
        @PreDestroy
        public void destroy(){
            System.out.println("SingletonBean1.destroy");
        }
    }
}
