

import revise.*;

public class App {
    public static void main(String args[]) {
        User user1 = new User("mohamed", 100);
        Admin admin1 = new Admin("Ahmed", 200, 20000);
        user1.getName();
        int taux1 = user1.calc_taux(10);
        int taux2 = admin1.calc_taux(10);
        System.out.printf("AdminTaux = %d, UserTaux = %d%n", taux2, taux1);

        user1.print();
        admin1.print();

        User refUser[] = new User[] {new User(), new Admin()};




    }
}
