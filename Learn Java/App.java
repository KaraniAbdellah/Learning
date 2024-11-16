// last start revesing relationships

import revise.*;
// lets practive agregation and & composition

public class App {
    public static void main(String args[]) {
        Prof prof = new Prof("Aya", 10293);
        Student student = new Student("ahmed", 10, prof, "Hafida", 1029303);
        System.out.println(student.toString());
        
        
    }
}


