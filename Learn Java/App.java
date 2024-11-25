// try to revise all thing (fast revise)

/*
    Abstract Class: can have abstract and non-abstract methods
    Concrete Class: is class that has implementation for methods
    Concrete Method: is method has body

    We can not define object with abstract Class

    - Rules of asbtract class:
        We do not have 
            abstract varaible
            abstract contractor
            abstract with static Methods
        private abstract void autopilot(); --> error
*/
import abstraction.*;
public class App {
    public static void main(String args[]) {
        SUV suv1 = new SUV();
        suv1.autopilot(); // Hello AutoPilot
        suv1.sayHello(); // Hello

        // Car car2 = new Car(10, 10, 10); // Cannot instantiate the type Car

        // Define SUV object with Contractor of abstract Class
        SUV suv2 = new SUV(12, 23, 4);
        suv2.streamingServices();

    }
}


