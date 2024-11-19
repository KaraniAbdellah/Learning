// ArrayList
/*
    Declaration
    Print
    Methods(Add, Get, AddAll, Copy Constructor, Clone) 
*/

import java.util.*;

import revise.*;

public class App {
    public static void main(String args[]) {
        // Declaration
        ArrayList<Integer> nums = new ArrayList<>(); // size = 10 byDefault
        ArrayList<String> names = new ArrayList<String>();

        // Methods
        nums.add(10);
        nums.add(230);
        nums.add(0, 1001); // shift 10 to right

        // Print
        System.out.println(nums);
        int s = nums.size();
        for (int i = 0; i < s; i++) {
            System.out.println(nums.get(i));
        }
        for (int num: nums) {
            System.err.println(num);
        }


    }
}


