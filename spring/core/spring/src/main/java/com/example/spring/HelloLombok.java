package com.example.spring;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString // Lombok 어노테이션으로 자동으로 getter, setter, toString을 만들어져서 그냥 꺼내 쓰기만 하면 됨
public class HelloLombok {

    private String name;
    private int age;

    public static void main(String[] args) {
        HelloLombok lombok = new HelloLombok();
        lombok.setAge(33);
        System.out.println(lombok.toString());
    }



}
