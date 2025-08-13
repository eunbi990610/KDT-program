package sec05.chap07.ex02;

public class Swith extends FormElement {

    private boolean on;

    public Swith(int space, boolean on) {
        super(space);
        this.on = on;
    }

    @Override
    void func() {
        on = !on;
        System.out.println((on? "on" : "off") + "으로 전환");

    }
}
