// Relationships (Association, Aggregation "has-a", Composition "part-of")
/*
    Between classes we have: 
        Association (has-a)
        inheritance (is-a)
        composition  (part-of)
        aggregation (has-a)
    
    Association: is a connection between two seperate classes
        that are setup through thier object
        Unary Association: from A to B
        Binary Association: from A to B & inverse
        EX: Personn has-a Address
        NOTE: in unary association we have three types
            [general, composition, agregation]
    
    Aggregation:
        ClassA <-- ClassB
            ClassB is part-of ClassA
            ClassA has-a ClassB
        Company <-- Employee
            if Employee go Company still
    
    Composition
        ClassA <-- ClassB
            ClassA has no meaning without ClassB
        Organization <-- Department
            no Organization no Department
*/

import inheritance.Employee;
import polymorphism.*;

public class App {
    public static void main(String argv[]) {
        
        

    }
}
