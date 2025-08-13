package sec04;

public class Ex02 {
    public static void main(String[] args) {


        double xx = 3, yy = 4;
        addSubtMultDiv(xx, yy);

        xx = 10; yy = 2;
        addSubtMultDiv(xx, yy);

        xx = 7; yy = 5;
        addSubtMultDiv(xx, yy);

        System.out.println("\n---------------\n");

        if (
                checkIfContain(
                        "Hello World",
                        "Hello"
                )
        ) {
            System.out.println("포함됨");
        } else {
            System.out.println("포함 안 됨");
        }

        System.out.println("\n---------------\n");

        System.out.println(
                checkIfContain(
                        "Hello World",
                        "hello"
                ) ? "포함됨" : "포함 안 됨"
        );


        System.out.println("\n---------------\n");

        int count1 = getCount();
        int count2 = getCount();

        double avg = getAverage(new int[] {3,4,5,6,7});
        System.out.println("avg" + avg);

        System.out.println("\n---------------\n");

        int[] numbers = {3,5,4,6,7,1,9};

        int maxOfNumbers = getMaxAndMin(numbers)[0];
        int minOfNumbers = getMaxAndMin(numbers)[1];

        System.out.println("\n---------------\n");



    }

    // 메서드는 외부에서 선언해야함!
    static void addSubtMultDiv (double a, double b) {
        System.out.printf("%f + %f = %f%n", a, b, a + b);
        System.out.printf("%f - %f = %f%n", a, b, a - b);
        System.out.printf("%f * %f = %f%n", a, b, a * b);
        System.out.printf("%f / %f = %f%n", a, b, a / b);
    }

    static boolean checkIfContain (String text, String token) {
        return text.toLowerCase().contains(token.toLowerCase());
    }

    static int count = 0;
    static int getCount(){
        System.out.println("카운트 증가");
        return ++count;
    }

    static double getAverage (int[] nums){
        double sum = 0;
        for(int num : nums){
            sum += num;
        }
        return sum/ nums.length;
    }


    //  자바의 메소드는 하나의 값만 반환 가능
    //  여러 값을 반환하려면 배열 또는 이후 배울 객체를 활용
    static int[] getMaxAndMin (int[] nums){
        int max = nums[0];
        int min = nums[0];
        for(int num : nums){
            max = max > num ? max : num;
            min = Math.min(min, num);
        }
        return new int[] {max, min};
    }



}
