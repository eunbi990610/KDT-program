package sec03.chap01;

public class Ex01 {
    public static void main(String[] args) {
        String str_a1 = "덜컹";

        // 💡 repeat : 문자열을 주어진 정수만큼 반복
        String str_a2 = str_a1.repeat(2);
        String str_a3 = str_a1
                .concat(" ") //'덜컹 '
                .repeat(3) //'덜컹 덜컹 덜컹 '
                .trim(); //앞뒤의 공백을 지워주는 메서드로 맨 뒤의 ' ' 공백을 지워줌


    String str_b1 = "대한민국 다 job 구하라 그래";

    //  💡 substring : ~번째 문자부터 (~번째 문자까지) 잘라서 반환
    String str_b2 = str_b1.substring(7);
    String str_b3 = str_b1.substring(7, 10);
    String str_b4 = str_b1.substring(11, 14);

    String piece1 = "다 ";
    String piece2 = "구하라";
    String str_b5 = str_b1.substring(
            str_b1.indexOf(piece1),
            str_b1.indexOf(piece2) + piece2.length()
    );

        String str_e1 = "02=123.4567_8900";

        //  💡 replaceAll / replaceFirst : ⭐️ 정규표현식 사용 가능
        //  전부 치환 / 첫 번째 일치부분만 치환
        String str_e2 = str_e1
                .replaceAll("[=._]", "-")
                .replaceFirst("[-@#]", ")");
    }
}
