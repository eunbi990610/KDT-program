package sec05.chap01.ex01;

import java.util.Scanner;

public class Ex03 {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        String [] strInputs = new String [5];

        for (int i = 0; i < strInputs.length; i++) {
            strInputs[i] = sc.nextLine();
        }

        sc.close();

        for (String str : strInputs) {
            System.out.println(str);
        }
    }
}
