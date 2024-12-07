
import abstraction_two.CarV1;
import abstraction_two.SelfDrivale;

// Interface (Default - Private - Static Methods, Nested Interface)
/*
    - The Problem is when we add new method --> must implemented new method
        but sometime some classes does not requires to implemente

    -> Solution for Old Java Version:
        create "Car11.java" --> fix for "Car1.java"
        create interface that contain new method
        "Car11.java" implement interface ceated & extend from "Car1.java"

    -> Solution for New Java Version:
        in interface add new method
        default void newMethod() {
            System.out.println("Solution");
        }
        we can Override Default Method --> with public
    
    - Suppose that we have two interfaces has method with same signutare:
        Moveble.java: 
            default void SameMethod() {
                System.out.println("Comun Method");
            }
        SelfDrivale:
            default void SameMethod() {
                System.out.println("Comun Method");
            }
        --> this is an error
    
    - We can write a body for static method
        static void MethodStatic() {
            System.out.println("This A Static Method");
        }
    
    - if We HAve a class implment & extend from interfaces
        & we have same signature 

*/

import interfaces.*;

public class App{
    public static void main(String args[]) {
        CarV1 carv1 = new CarV1(1, 0, 0);
        carv1.newMethod();
    }
}


