


import polymorphism.*;

public class App {
    public static void main(String[] args) {
        Person person = new Person("Ahmed", 20);
        System.out.println("id = " + person.getId());
        User user = new User("Omar", 23, "dev");
        System.out.println("id = " + user.getId());
        user.getName();

        // Change the type
        Person person2 = new User("Ali", 200, "DEVOPS");
        System.out.println("salary = " + person2.getSalary());

        User user2 = new User("dd", 34, "dd");
        user2.print();
    }
}

