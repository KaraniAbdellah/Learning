// revise ArrayList

import java.util.*;
import revise.*;

public class App {
    public static void main(String args[]) {
        // Copy Constractor || Shallow Copy
        ArrayList <Integer>marks = new ArrayList<Integer>();
        marks.add(1);
        ArrayList <Integer>notes = new ArrayList(marks);
        marks.add(22);
        System.out.println("notes = " + notes);
        System.out.println("marks = " + marks);
        
        // Clone Constractor || Reference Copy
        marks = notes;
        marks.add(999);
        System.out.println("notes = " + notes);
        System.out.println("marks = " + marks);


    }
}

