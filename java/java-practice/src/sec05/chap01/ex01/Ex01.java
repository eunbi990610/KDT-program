package sec05.chap01.ex01;

import java.util.Scanner;

public class Ex01 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("숫자를 입력해주세요");

        while (sc.hasNextInt()){
            System.out.println("입력값 : " + sc.nextInt());
        }

        sc.close();

    }



}
