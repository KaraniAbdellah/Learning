// Other Concept about Interface
/*
    Marker or Taggin Interface: 
        Empty interface, When a class uses it, it tell to Java:
        “This class can be used in a special way“

    Generic Interface:
        
*/

import abstraction_two.*;


public class App {
    public static void main(String args[]) {
        Admin admin = new Admin();
        if (admin instanceof Marker) {
            System.out.println("YES!!");
        }
        else System.out.println("No!!");


    }
}

