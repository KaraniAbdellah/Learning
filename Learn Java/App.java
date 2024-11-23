
import java.lang.reflect.Array;
import java.util.*;

public class App {
    static void Menu() {
        System.out.println("1. Add Element");
        System.out.println("2. Remove Element");
        System.out.println("3. Print Element");
        System.out.println("4. Exit");
    }
    static void add_ele(ArrayList nums) {
        Scanner in = new Scanner(System.in);
        System.out.print("Enter the number : ");
        int ele = in.nextInt();
        nums.add((Integer) ele);
    }
    static void remove_ele(ArrayList nums) {
        Scanner in = new Scanner(System.in);
        System.out.print("Enter the number : ");
        int ele = in.nextInt();
        nums.remove((Integer) ele);
    }
    static void print_ele(ArrayList nums) {
        System.out.println(nums);
    }
    public static void main(String args[]) {
        ArrayList <Integer>nums = new ArrayList<Integer>(5);
        Scanner in = new Scanner(System.in);
        int choise;
        do {
            Menu();
            System.out.print("Enter You Choice: ");
            choise = in.nextInt();
            if (choise == 1) {
                add_ele(nums);
            } else if (choise == 2) {
                remove_ele(nums);
            } else if (choise == 3) {
                print_ele(nums);
            }else;
        } while (choise != 4);

        
    }
}




