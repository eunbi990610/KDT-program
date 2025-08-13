package sec04;

public class Ex01 {
    public static void main(String[] args) {
        int count =10;
        int[] multiOf4 = new int[count];

        for(int i=1, c=0; c < count; i++){
            if( i % 4 ==0 ){
                multiOf4[c++] = i;
            }
        }

        for(int i=0;i<multiOf4.length;i++){
            System.out.println(multiOf4[i]);
        }
        System.out.println("for each");
        for(int a : multiOf4){
            System.out.println(a);
        }


        System.out.println("\n---------------\n");

        for(String s : "호롤로로".split("")){
            System.out.println(s);
        }
    }
}
