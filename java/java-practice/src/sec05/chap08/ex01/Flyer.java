package sec05.chap08.ex01;

public interface Flyer {
    String aka = "날짐승"; // ⭐️ final - 초기화하지 않을 시 오류
    void fly ();
    //flyer 인테페이스에는 fly추상메서드가 꼭 있어야한다!!
}
