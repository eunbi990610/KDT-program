package com.example.spring.beanfind;

import com.example.spring.AppConfig;
import com.example.spring.member.MemberRepository;
import com.example.spring.member.MemoryMemberRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.NoUniqueBeanDefinitionException;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.assertj.core.api.Assertions.*;

public class ApplivationContextSameBeanFindTest {


    AnnotationConfigApplicationContext ac = new AnnotationConfigApplicationContext(SameBeanConfig.class);


    @Test
    @DisplayName("타입으로 조회시 같은 타입이 둘 이상 있으면, 중복 오류가 발생한다. ")
    void findBeanByTypeDuplicate(){
        MemberRepository bean = ac.getBean(MemberRepository.class);
//        org.springframework.beans.factory.NoUniqueBeanDefinitionException:
//        No qualifying bean of type 'com.example.spring.member.MemberRepository' available:
//        expected single matching bean but found 2: memberRepository1,memberRepository2
        assertThrows(NoUniqueBeanDefinitionException.class, ()->ac.getBean(MemberRepository.class));
//        assertThrows(기대하는_예외타입,실행할_코드블록)
    }

    @Test
    @DisplayName("타입으로 조회시 같은 타입이 둘 이상 있으면, 빈 이름을 지정하면 된다. ")
    void findBeanByName(){
        MemberRepository bean = ac.getBean("memberRepository1",MemberRepository.class);
        assertThat(bean).isInstanceOf(MemberRepository.class);
    }

    @Test
    @DisplayName("특정 타입을 모두 조회하기")
    void findAllBeanByType(){
        Map<String, MemberRepository> beansOfType = ac.getBeansOfType(MemberRepository.class);
        for(String key :  beansOfType.keySet()){
            System.out.println("key = " + key + ", value = " + beansOfType.get(key));
        }
        System.out.println("beansOfType = " + beansOfType);
//        assertThat(beansOfType.size()).isEqualTo(2); //SUCCESS
        assertThat(beansOfType.size()).isEqualTo(1); // FAIL
    }


    @Configuration // 중복테스트를 위해 동일한 클래스를 두개 만들어야하는데 실제 코드를 건들이지 않기 위해서 사용
    static class SameBeanConfig{
//       클래스 안에 클래스를 사용했다는것이 이 파일 안에서만 사용하겠다! 라는 뜻!
        @Bean
        public MemberRepository memberRepository1(){
            return new MemoryMemberRepository();
        }

        @Bean
        public MemberRepository memberRepository2(){
            return new MemoryMemberRepository();
        }

    }



}
