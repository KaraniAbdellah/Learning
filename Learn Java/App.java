// last start revesing finalKeyword

//////////////////////////////////////////////////
// ArrayList Class
/*
    Dynamic Array(no size limit) & Array Of Object
    Arraylist exit in java.util package
    ArrayList:
        used for [Wrapper Class || Generic Class]
    
    Syntax:
        ArrayList list = new ArraysList();
        ArrayList<Class> list = new ArrayList();
    
    Wrapper Class: 
        Float, Integer, Double, Boolean, Character, ...
    Generic Class:
        Student, Prof, ...
    
    NOTE: if size = 10 --> new size in add will be 15
        10 >> 1 = 5
        oldCapacity + oldCapacity / 2 = newCapacity
        Solution: trimToSize() 

    Is ArrayList Good Enough:
        Access is Good
        Add & remove (we need shifting)

*/  

/*
import java.util.AbstractList;
import java.util.ArrayList;
import java.util.List;
import java.util.AbstractCollection;
import java.util.Collection;

import revise.*;

public class App {
    public static void main(String args[]) {
        // Hierarchy Of Array List
        ArrayList list = new ArrayList();
        AbstractList list3 = new ArrayList();
        AbstractCollection list4 = new ArrayList();
        Collection list5 = new ArrayList();
        List list2 = new ArrayList();

    }
}
*/

