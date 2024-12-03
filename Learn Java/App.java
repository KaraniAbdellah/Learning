// Start Practice Interface
/*
    - class can implement multiple interfaces [not extend]
    - interface can extend an multiple interfaces
    - By default Attributes in interface in 
        public static final --> "must give to him a init value"
*/


import abstraction_two.*;

public class App {
    public static void main(String args[]) {
        CarV1 C1 = new CarV1(1, 2, 100);
        C1.destination("10102939");

        // Reasibilty
        SelfDrivale car = new CarV1(0, 0, 0);
        car.drive(); // drive... V1
        car = new CarV2(0, 0, 0);
        car.drive(); // drive... V2
    }
}














// Abstract Class VS Interface
/*
    Abstract Class:
    - We Can inherit from a regular (non-abstract) class
    - We Can have methods with or without a body (partially implemented).
    - We Can have attributes and constructors.
    - Supports single inheritance (one abstract class at a time).


    Interface:
    - We Cannot inherit from a regular (non-abstract) class. 
        It can only extend other interfaces.
    - All methods are abstract by default [no implementation] (before Java 8).
    - No attributes (only constants allowed).
    - Supports multiple inheritance (a class can implement many interfaces).
    

    - class in Java can implement multiple interfaces
    - class in Java cannot extend multiple abstract classes
*/

