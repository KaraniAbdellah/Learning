// ArrayList Methods
/*
    contains
        ArrayListName.contains((Integer) 0);
    retainAll
        notes.retainAll(nums);
        "get the ele correspond" 
    subList
        ArrayListName.subList(fromIndex, toIndex);
        "get from index to index"
    clear & isEmpty
        notes.isEmpty();
        notes.clear();
    ensureCapacity & trimToSize
        ArrayListName.ensureCapacity(100);
        "increase capacity with 100 new ele"
        nums.trimToSize();
        "unsed ele from the memory"
    sort
    min
    max
*/

/* 
import java.lang.reflect.Array;
import java.util.*;

public class App {
    public static void main(String args[]) {
        ArrayList <Integer>nums = new ArrayList(Arrays.asList(1, 2));
        ArrayList <Integer>notes = new 
        ArrayList<>(Arrays.asList(1, 1, 1, 2, 2, 2, 3, 4)); 
        
        // contains
        boolean check = nums.contains((Integer) 0);
        System.err.println("check = " + check);

        // retainAll
        notes.retainAll(nums);
        System.out.println(notes);

        // subList
        ArrayList <Integer>nums_r = new ArrayList<>
        (notes.subList(0, 2));
        System.out.println(nums_r); // [1, 1]

        // clear
        boolean check_empty = notes.isEmpty();
        notes.clear();
        System.out.println("check_empty = " + check_empty + " notes = " + notes);
        
        // ensureCapacity & trimToSize
        nums.ensureCapacity(100);
        nums.trimToSize();

        // forEach && sort
        nums.forEach(n->System.out.println(n));
        Collections.sort(nums, Collections.reverseOrder()); 
        System.out.println("nums = " + nums);
    }
}
*/




