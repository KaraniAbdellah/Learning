// ArrayList Methods || Polymorphic ArrayList
/*
    Set
        ArrayListName.set(0, 2);
    Remove
        ArrayListName.remove(0, 2);
        ArrayListName.remove((Integer) 2);
    Remove All
        ArrayListName.removeAll(Arrays.asList("A", "C"));
    Remove Range
        app.removeRange(0, 1);
    RemoveIf
        ArrayListName.removeIf(num->num % 2 == 0);
    
    Array of Objects, Polymorphic Array
        Object []nums = new Object[3];
*/

/* 
import java.util.*;
import revise.*;

public class App extends ArrayList {
    public static void main(String args[]) {

        // Set & Remove
        ArrayList <Integer> list = new ArrayList<>(Arrays.asList(1, 2, 3));
        System.out.println(list);
        list.set(0, 2);
        list.remove(0);
        list.remove((Integer) 2);
        System.out.println(list);

        // Remove All
        ArrayList <String> notes = new ArrayList<>(
            Arrays.asList("A", "B", "C", "A", "D", "C"));
        notes.removeAll(Arrays.asList("A", "C"));
        System.out.println(notes);

        // Remove range
        App app = new App();
        app.add(1); app.add(2); app.add(3);
        app.removeRange(0, 1);
        System.out.println(app); // [2, 3]

        // Remove If
        ArrayList <Integer> notes1 = new ArrayList<>
            (Arrays.asList(1, 2, 3, 4, 5, 6));
        notes1.removeIf(num->num % 2 == 0);
        System.out.println(notes1); // [1, 3, 5]

        // Array of Object || Polymorphic Array
        Object []nums = new Object[3];
        nums[0] = (Integer) 1;
        nums[1] = (Float) 1.2f;
        nums[2] = (Boolean) true;
        for (Object obj: nums) {
            System.out.println(obj);
        }

    }
}
*/

