// Repeat this


import inheritance.Employee;
import polymorphism.*;

public class App {
    public static void main(String argv[]) {
        Animal animal = new Animal();
        animal.sound();
        System.out.println("is_arg = " + animal.is_agr());
        
        Animal animal1 = new Dog();
        System.out.println("is_arg = " + animal1.is_agr());

        animal1.print();
        animal1.print1();

        


    }
}
