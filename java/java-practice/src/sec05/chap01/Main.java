package sec05.chap01;

public class Main {
    public static void main(String[] args) {
        char btn1print = '1';
        int btn1space = 1;
        String btn1Mode = "Dark";
        placeButton(btn1print, btn1space, btn1Mode);

        char btnPlusPrint = '+';
        int btnPlusSpace = 3;
        String btnPlusMode = "DARK";
        placeButton(btnPlusPrint, btnPlusSpace, btnPlusMode);

        char btnClearPrint = 'C';
        int btnClearSpace = 2;
        String btnClearMode = "DARK";
        placeButton(btnClearPrint, btnClearSpace, btnClearMode);

    }

    static void placeButton (char print, int space, String mode) {
        System.out.printf(
                "표시: %c, 공간: %s, 모드: %s%n",
                print, space, mode
        );
    }

}
