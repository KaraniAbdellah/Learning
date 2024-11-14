// Final Keyword [Part 1]
/*
    Final Variable (Constance Var)
        can not change the value of final variables
        always must be initialized with:
            (constrator || in Declaring || Block)
        you can not set by (setters || direct access)
        ----------
        final static float DEGREE_OF_SUCCESS = 10;
            shared between all object
        final float DEGREE_OF_SUCCESS = 10;
            each object has own DEGREE_OF_SUCCESS
    
    static varibales
        initialize just in (Static Block || in Declaring)
    
    Final Blank Varibles
        we give initilize after Declaring

    "sometimes we need to se limitions"
*/


import final_keyword.*;

public class App {
    public static void main(String args[]) {
        // Final Variable
        Student s1 = new Student(122, "ahmed");
        // s1.std_id = 999;
        // s1.setStd_id(101);

    }
}

