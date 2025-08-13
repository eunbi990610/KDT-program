package sec05.chap01.ex03;

public class Main {
    public static void main(String[] args) {
        //  본사 소속의 매장을 내는 코드
//        YalcoChicken store1 = new YalcoChicken();
//        store1.no = 3; // 🔴
//        store1.name = "판교";
//
//        YalcoChicken store2 = new YalcoChicken();
//        store2.no = 17;
//        store2.name = "강남";
//
//
//        //  인스턴스의 필드들에 접근
//        int store1No = store1.no;
//        String store2Name = store2.name;
//
//        //  인스턴스의 메소드 호출
//        String store1Intro = store1.intro();

        //  클래스로 인스턴스를 생성 - 💡 new 연산자 + 생성자 호출
        //  본사의 방침대로 매장을 내는 것
        YalcoChicken store1 = new YalcoChicken(3, "판교");
        YalcoChicken store2 = new YalcoChicken(17, "강남");
        YalcoChicken store3 = new YalcoChicken(24, "제주");

        String[] intros = {store1.intro(), store2.intro(), store3.intro()};
    }


}
