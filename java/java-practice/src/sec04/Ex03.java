package sec04;

public class Ex03 {
    public static void main(String[] args){


        double avg = getAverage(3,51,6,3,45);
        System.out.println(avg);

        //  💡 배열을 넣으면 자동으로 펼쳐져 인식됨
        int[] numbers = {3,4,5,6,7,8,9};
        double arrAvg = getAverage(numbers);
        System.out.println(arrAvg);


        String class3Desc = descClass(3, "목아진", "짱구", "맹구", "유리");

        String[] kids = {"짱구", "철수", "훈이"};
        String class3DescByArr = descClass(3, "목아진", kids);


    }

    //  💡 ... 연산자 : 해당 위치 뒤로 오는 연산자들을 배열로 묶음
    //  int[] (배열 자체를 받음)과는 다름!
    static double getAverage(int... nums){
        double result = 0.0;
        for(int num : nums){
            result += num;
        }
        return result / nums.length;
    }


    static String descClass(int classNo, String teacher, String... kids){
        return "%d반의 담임은 %s 선생님, 원생들은 %s입니다. "
                .formatted(classNo, teacher, String.join(",",kids));
    }
}
