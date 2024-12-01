// Start Practice Interface
/*
    class can implement multiple interfaces [not extend]
    interface can extend an multiple interfaces
    By default Attributes in interface in 
        public static final --> "must give to him a init value"
*/
// revise the interfaces

import abstraction_two.CarV1;

public class App {
    public static void main(String args[]) {
        CarV1 C1 = new CarV1(1, 2, 100);
        C1.destination("10102939");
    }
}

