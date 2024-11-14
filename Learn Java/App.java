
import revise.*;

public class App {
    
    public static void main(String args[]) {
        User user1 = new User("ahmed", 10);
        user1.setN(10);
        System.out.println("n = " + user1.getN());
        user1.setN(incr(user1));
        System.out.println("n = " + user1.getN());


        user1.setN(incr(user1));

    }
}

