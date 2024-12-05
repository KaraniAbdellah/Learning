// Other Concept about Interface

/* 
import abstraction_two.*;
public class App {
    public static void main(String args[]) {
        // Marker Interface
        Admin admin = new Admin();
        if (admin instanceof Marker) {
            System.out.println("YES!!");
        }
        else System.out.println("No!!");

        // Generic Interface Without Casting
        Generic UserObj = new User();
        // User user = (User) UserObj.GetUser(); error --> must has a type
        Object user2 = UserObj.GetUser(); 

        // Generic Interface With Casting
        Generic <User> UserObj1 = new User();
        User user4 = (User) UserObj1.GetUser();
        User user5 = UserObj1.GetUser();
        Object user6 = UserObj1.GetUser();
    }
}
*/

