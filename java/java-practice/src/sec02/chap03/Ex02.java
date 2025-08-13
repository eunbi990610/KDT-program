package sec02.chap03;

public class Ex02 {
    public static void main(String[] args) {

        System.out.println("원주율: " + 3.14);
        System.out.println("원의 둘레: 지름 X " + 3.14);
        System.out.println("원의 넓이: 반지름의 제곱 X " + 3.14);
        System.out.println("구의 부피: 반지름의 세제곱 X 4/3 X " + 3.14);

        System.out.println("\n- - - - -\n"); // 💡 \n : 줄바꿈

        double pi = 3.14; // 새로 변수를 생성해서 초기화한 코드
// double란 종류의 데이터를 담는다, pi랑 주머니를 만들고 그 안에 3.14라는 값을 넣는 코드

        System.out.println("원주율: " + pi);
        System.out.println("원의 둘레: 지름 X " + pi);
        System.out.println("원의 넓이: 반지름의 제곱 X " + pi);
        System.out.println("구의 부피: 반지름의 세제곱 X 4/3 X " + pi);

        System.out.println("\n- - - - -\n");

        pi = 3.14159265358979; // 💡 값이 바뀔 수 있으므로 '변수'라 부름 // 이미 생성된 변수 사용

        System.out.println("원주율: " + pi);

        System.out.println("\n- - - - -\n");

//        pi = 3.14159265358979; // 💡 값이 바뀔 수 있으므로 '변수'라 부름 // 같은 변수에 현재 값을 다시 넣을려면 오류가 발생함
//        변수를 재정의할 시 다른 값을 넣어야함

        System.out.println("원주율: " + pi);

        //  자바의 변수: 앞에 담을 데이터의 자료형을 명시
        //  - (이후 배울 var 제외)
        int age; // 💡 변수 선언: 주머니 만들기

        //  ⚠️ 아직 값이 없으므로 사용할 수는 없음
//        System.out.println(age);

        age = 20; // 초기화: 빈 주머니에 값 넣기

        //  이제 해당 값을 사용 가능
        System.out.println(age);
    }
}