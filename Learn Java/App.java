// ArrayList
/*
    Declaration
        // size = 10 byDefault
        ArrayList<Integer> nums = new ArrayList<>();
    Print
        System.out.println(nums + "\n--------");
    Methods(Add, Get, AddAll, Copy Constructor, Clone) 
        - add(ele);
        - ArrayListName.size();
        - ArrayListName.get(index);
        - ArrayListName.addAll(ArrayListName);
        - ArrayListName.addAll(Arrays.asList(1, 2, 3, 4));
        - ArrayListName.addAll(index, Arrays.asList(1, 2, 3, 4));
*/

import java.util.*;

import revise.*;

public class App {
    public static void main(String args[]) {
        // Declaration
        ArrayList<Integer> nums = new ArrayList<>();
        ArrayList<String> names = new ArrayList<String>();

        // Methods
        nums.add(1);
        nums.add(2);
        nums.add(0, 0); // shift 10 to right
        nums.add(nums.size(), 3);

        // add range of eles
        ArrayList<Integer> nums1 = new ArrayList<Integer>();
        nums1.add(-1);
        nums1.addAll(nums);
        nums1.addAll(Arrays.asList(1, 2, 3));
        nums1.addAll(3, Arrays.asList(5, 5, 5));

        // Print
        System.out.println("nums = " + nums);
        System.out.println("nums1 = " + nums1);
        System.out.println("-------");
        int s = nums.size();
        for (int i = 0; i < s; i++) {
            System.out.println(nums.get(i));
        } System.out.println("--------");
        for (int num: nums) {
            System.err.println(num);
        }

        // Copy Constructor
        


    }
}


