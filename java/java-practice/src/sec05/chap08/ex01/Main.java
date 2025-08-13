package sec05.chap08.ex01;

public class Main {
    public static void main(String[] args) {
        //  ⭐ 다형성
        PolarBear polarBear = new PolarBear();
        Mammal mammal = polarBear;
        Swimmer swimmer = polarBear;

        GlidingLizard glidingLizard = new GlidingLizard();
        Eagle eagle = new Eagle();

        Hunter[] hunters = {
                polarBear, glidingLizard, eagle
        }; // Hunter 인터페이스를 implement 한 클래스의 타입인 인스턴스는 모두 Hunter 배열 안에 저장이 가능함!

        //  💡 인터페이스 역시 다형성에 의해 자료형으로 작용 가능
        for (Hunter hunter : hunters) {
            hunter.hunt();
        }
    }
}
