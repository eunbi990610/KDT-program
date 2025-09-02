package com.example.spring;

import com.example.spring.member.MemberRepository;
import com.example.spring.member.MemoryMemberRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.FilterType;

@Configuration
@ComponentScan(
        basePackages = "com.example.spring.member",
        excludeFilters = @ComponentScan.Filter(type= FilterType.ANNOTATION, classes = Configuration.class)
)
public class AutoAppConfig {
        @Bean(name = "memoryMemberRepository")
    public MemberRepository memoryRepository(){
            return new MemoryMemberRepository();
        }

}
