// Start Practice Interface
/*
    class can implement multiple interfaces [not extend]
    interface can extend an multiple interfaces
    By default Attributes in interface in 
        public static final --> "must give to him a init value"
*/
/* 
    Abstract Class:

    Can inherit from a regular (non-abstract) class.
    Can have methods with or without a body (partially implemented).
    Can have attributes and constructors.
    Supports single inheritance (one abstract class at a time).


    Interface:
    Cannot inherit from a regular (non-abstract) class. 
        It can only extend other interfaces.
    All methods are abstract by default (before Java 8).
    No attributes (only constants allowed).
    Supports multiple inheritance (a class can
        implement manyinterfaces).
*/
// revise the interfaces

import abstraction_two.CarV1;

public class App {
    public static void main(String args[]) {
        CarV1 C1 = new CarV1(1, 2, 100);
        C1.destination("10102939");
    }
}

