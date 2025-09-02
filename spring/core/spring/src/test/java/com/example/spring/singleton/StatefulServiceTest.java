package com.example.spring.singleton;

import com.example.spring.AppConfig;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.Bean;

import static org.junit.jupiter.api.Assertions.*;

class StatefulServiceTest {

    @Test
    void statefulServiceSingleton() {
        ApplicationContext ac = new AnnotationConfigApplicationContext(TestConfig.class);
        StatefulService statefulService1 = ac.getBean(StatefulService.class);
        StatefulService statefulService2 = ac.getBean(StatefulService.class);

//        //ThreadA : A 사용자가 10000원 주문
//        statefulService1.order("userA", 10000);
//        //ThreadB : B 사용자가 20000원 주문
//        statefulService2.order("userB", 20000);
//
//        //ThreadA : A 사용자가 주문 금액  조회
//        int price = statefulService1.getPrice();
//        System.out.println("price = " + price); //price = 20000
//
//        Assertions.assertThat(statefulService1.getPrice()).isEqualTo(10000);
////        실패 -> price 공유 필드를 사용해서 사용자 A의 값을 가져와야하는데 price가 공유필드이므로 A가 조회하기 전에
////        B가 price의 금액을 수정해버림

        ////    싱글톤 무상태 코드
        int userAPrice = statefulService1.order("userA", 10000);
        int userBPrice = statefulService1.order("userA", 20000);

        System.out.println("userAPrice = " + userAPrice);


    }

    static class TestConfig{
        @Bean
        public StatefulService statefulService(){
            return new StatefulService();
        }
    }


}