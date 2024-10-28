
public class App {
    public static void main(String[] args) {
        User user1 = new User();
        user1.setName("LSLS");
        user1.setCode(10);

        User user2 = new User("ahmed", 1220);

        user2.display();

        // make a user3 from user2 using copy contractor
        User user3 = new User(user2);

        user3.display();
        


    }
}


// do a small recap and ask moahmed about contarctor default



