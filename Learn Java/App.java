// FInal KeyWord

/*
 * Final Variable: can not be ressigned
 * Final Parameters: can not be change value
 * Final Method: can not be @override
 * Final Class: can not be inherit
 * NOTE: "all final keyword can be access to thier values"
*/


import revise.*;

public class App {
    public static void main(String args[]) {
        Car car1 = new Car("Tesla", 1000, 10);
        car1.getName();
        System.out.println("year = " + car1.getYear());
        car1.SayHello();
        



        
        
    }
}


