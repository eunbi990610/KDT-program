package sec05.chap08.ex01;

public class PolarBear extends Mammal implements Hunter, Swimmer {
    // 부모class가 포유류인 북극곰은 사냥과 수영을 할 수 있다.
    public PolarBear() {
        super(false);
    }

    @Override
    public void hunt() {
        System.out.println(position + ": 물범 사냥");
    }

    @Override
    public void swim() {
        System.out.println("앞발로 수영");
    }
}