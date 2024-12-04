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














