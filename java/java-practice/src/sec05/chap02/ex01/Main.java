package sec05.chap02.ex01;

public class Main {
    public static void main(String[] args) {
        Slime slime1 = new Slime();
        Slime slime2 = new Slime();

        slime1.attack(slime2);
        //참조형 인자는 값을 복사해서 주는 것이 아닌 주소값을 넘겨주기 때문에
        // attack()메소드 실행만으로 전달인자의 값이 실제로 감소하게 된다.
    }
}
