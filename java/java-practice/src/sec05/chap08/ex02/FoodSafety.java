package sec05.chap08.ex02;

public interface FoodSafety {

    static void announcement () { // 인터페이스 인데 구현부가 있음
        System.out.println("식품안전 관련 공지");
    }


    default void regularInspection () {
        System.out.println("정기 체크");
    }

    void cleanKitchen ();
    void employeeEducation ();
}
