// ArrayList
/*
    ArrayList Contractor:
        ArrayList() --> empty constractor
        ArrayList(capacity)
        ArrayList(Collection<? extends E>c) --> copy Contractor 
        
    Declaration
        // size = 10 byDefault
        ArrayList<Integer> nums = new ArrayList<>();
    Print
        System.out.println(nums + "\n--------");
    Methods(Add, Get, AddAll) 
        - add(ele);
        - ArrayListName.size();
        - ArrayListName.get(index);
        - ArrayListName.addAll(ArrayListName);
        - ArrayListName.addAll(Arrays.asList(1, 2, 3, 4));
        - ArrayListName.addAll(index, Arrays.asList(1, 2, 3, 4));
    
    Copy Constructor
         
    
*/

import java.util.*;

import revise.*;

public class App {
    public static void main(String args[]) {
        // Declaration
        ArrayList<Integer> nums = new ArrayList<>();

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
        ArrayList <Integer> notes = new ArrayList(Arrays.asList(1, 2, 3));
        ArrayList <Integer> marks = new ArrayList<>(notes);
        notes.add(1);
        System.out.println("notes = " + notes); // [1, 2, 3, 1]
        System.out.println("marks = " + marks); // [1, 2, 3]



    }
}


