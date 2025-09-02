package com.example.spring.singleton;

public class SingletenService {

    private static final SingletenService instance = new SingletenService();
    //자기 자신의 객체를 하나만 생성하게
    //static 으로 객체 인스턴스를 생성하였기 때문에 class영역에 올라가서 프로그램이 시작할 때 단 한번만 만들어진다.
    // final 변수 재할당이 불가능하고, instance 참조 변수를 다르 객체로 바꿀 수 없게 막는다.


    // 인스턴스를 꺼내 사용할 때 사용하는 메서드
    public static SingletenService getInstance(){
        return instance;
    }

// private 생성자 -> 외부에서 new로 객체를 만들지 못하게 막기 위해서
    private SingletenService(){}

    public void logic(){
        System.out.println("싱글톤 객체 로직 호출");
    }


}
