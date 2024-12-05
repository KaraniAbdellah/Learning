// Other Concept about Interface
/*
    Marker or Taggin Interface: 
        Empty interface, When a class uses it, it tell to Java:
        “This class can be used in a special way“

    Generic Interface:
        we return object from method but 
        we do not know the type of object
        --> Use Casting in Object Definition

*/

import abstraction_two.*;


public class App {
    public static void main(String args[]) {
        // Marker Interface
        Admin admin = new Admin();
        if (admin instanceof Marker) {
            System.out.println("YES!!");
        }
        else System.out.println("No!!");

        // Generic Interface
        Generic UserObj = new User();
        User user = (User) UserObj.GetUser(); // we know the type
        // Object user = UserObj.GetUser(); // we know the type



    }
}

