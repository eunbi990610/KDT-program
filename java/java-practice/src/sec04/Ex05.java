package sec04;

public class Ex05 {
    public static void main(String[] args) {
        int intNum = 3;
        modifyIntArg(intNum);

        int[] intNums = {1, 2, 3};

        System.out.println("\n------------------\n");
        //  배열은 참조형이지만 그 안의 값들은 원시형
        modifyIntArg(intNums[0]);
        for(int i : intNums){
            System.out.println(i);
        }// 매개변수로 원시형을 넣었으므로 원본이 변경되지 않음

        System.out.println("\n------------------\n");

        //  참조형인 배열 자체를 인자로 사용 // 매개변수로 들어간 값은 값이 아닌 배열의 주소이다.
        // 배열의 주소에 해당하는 값이 변경되므로, 메서드 실행시 원본이 수정된다.
        modifyAryElem(intNums);
        for(int i : intNums){
            System.out.println(i);
        }
    }

    //  원시값은 '복사해서' 가져옴
    //  메소드 내부에서 값을 변경해도 원본에 영향 끼치지 않음
    static void modifyIntArg (int num) {
        System.out.printf("수정 전: %d%n", num++);
        System.out.printf("수정 후: %d%n", num);
    }

    //  ⭐️ 참조값은 주소값이므로 원본 그 자체를 가리킴
    static  void modifyAryElem (int[] ary) {
        System.out.printf("수정 전: %d%n", ary[1]++);
        System.out.printf("수정 후: %d%n", ary[1]);
    }


}
