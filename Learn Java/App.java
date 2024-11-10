// Relationships Practice
/*
    delete emp =  delete personnal_info
    create object in class ---> Composition    
    pass object to the class ---> Agregation

    - in general Association we don't
        declare instanceOf other class
    - No, in a binary association, deleting one 
        object doesn’t automatically delete the other
*/


import relations.*;

public class App {
    public static void main(String argv[]) {
        Department dept = new Department(1001, "safa");

        Employee emp = new Employee(12, 1000, "ahmed", 
        2005,  "10393903", dept);

        System.out.println(emp.toString());
        System.out.println(emp); // like emp.toString()
        

        

    }
}
