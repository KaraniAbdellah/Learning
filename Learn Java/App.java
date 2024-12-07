// Interface (Default - Private - Static Methods, Nested Interface)
/*
    The Problem is when we add new method --> must implemented new method
        but sometime some classes does not requires to implemente

    Solution for Old Java Version:
        create "Car11.java" --> fix for "Car1.java"
        create interface that contain new method
        "Car11.java" implement interface ceated & extend from "Car1.java"

    Solution for New Java Version:
        in interface add new method
        default void newMethod() {
            System.out.println("Solution");
        }

*/

public class App{
    public static void main(String args[]) {
        System.out.println("MSG");
    }
}


