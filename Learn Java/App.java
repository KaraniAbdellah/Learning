
/*
    Signle association: like Agregation
        Developer has a User reference
    Binary association:
        each class should have a reference to the other
    
    Single Association = Unidirectional
    Binary Association = Bidirectional
*/

import relations.*;

public class App {
    public static void main(String args[]) {

        // Binary Association
        Admin admin = new Admin("All", 122, null);
        User user1 = new User("Ahmed", 10, admin);
        admin.setUser(user1);

        System.out.println(user1.toString());

    }
}

