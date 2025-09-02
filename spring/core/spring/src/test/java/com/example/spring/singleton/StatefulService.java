package com.example.spring.singleton;

public class StatefulService {

//    private int price;
//    public void order(String name, int price){
//        System.out.println("name = " + name+", price = " + price);
//
//        this.price = price; //공유되는 필드 -> 특정 클라이언트가 값을 변경하면 다른 클라이언트의 결과에도 영향을 미치게 된다.
//    }

//    싱글톤 무상태 코드
    public int order(String name, int price){
        System.out.println("name = " + name+", price = " + price);
        return price;
    }


//    public int getPrice() {
//        return price;
//    }

}
