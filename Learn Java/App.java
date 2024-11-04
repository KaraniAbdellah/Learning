

import polymorphism.*;

public class App {

    public static void main(String[] args) {
        System.out.println("repeat the last lessons");
        Employee em1 = new Employee();
        em1.getSalary();
        Employee em2 = new SalariedEmployee("ahmed", 22, 100);
        em2.getSalary();
    }
}
