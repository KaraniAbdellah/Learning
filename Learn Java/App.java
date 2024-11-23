
import java.util.*;

public class App {
    public static void main(String args[]) {
        ArrayList <Integer>nums = new ArrayList<Integer>(5);
        Scanner in = new Scanner(System.in);
        for (int i = 0; i < 5; i++) {
            System.out.printf("%d: number = ", i);
            int n = in.nextInt();
            System.out.println(n);
            nums.add(n);
            System.out.println(nums);
            if (nums.contains((Integer) n) == true) {
                nums.remove((Integer) n);
            }
        }
        
    }
}




