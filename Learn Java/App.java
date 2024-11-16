// last start revesing relationships

import revise.*;
// lets practive agregation and & composition

public class App {
    public static void main(String args[]) {
        // Binary Association
        Prof prof1 = new Prof("Aya", 10, null);
        Student student1 = new Student("hasan", 133, prof1);
        prof1.setStudent(student1);
        System.out.println(student1.toString());
        System.out.println(prof1.toString());


    }
}


