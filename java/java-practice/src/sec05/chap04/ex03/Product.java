package sec05.chap04.ex03;

public class Product {

    private static double discount = 0.2;
    private static double increaseLimit = 1.2;

    private String name;
    private int price;
    public Product(String name, int price) {
        this.name = name;
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        if (name.isBlank()) return; //빈칸을 제외하고 문자열 길이가 0이라면 리턴
        this.name = name;
    }// setter은 전달받은 인자를 특정 조건이 맞는지 확인하는 역할도 함

    public int getPrice() {
        return (int) (price * (1 - discount));
    }

    public void setPrice(int price) {
        //  ⭐ this 사용 주의 //
        int max = (int) (this.price * increaseLimit);
        // this.price => 입력받은 price아님!! 인스턴스 생성할 때 입력받은 금액임!
        this.price = price < max ? price : max;
    }
}