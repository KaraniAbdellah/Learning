// Introduction To Java && Installing Tools
/*
    We Can Make :
        Web Applications
        Gaming Applications
        Mobile Applications
        Desktop Applications
    
    Java is a Class-Based, Object-Oriented Programming Language
    Java is Availble For Most OS

    file.java --> JavaC [Compiler] --> Byte Code [0, 1]
        --> JVM [Java Virtual Machine] [Interpreter]
    
    Each Code In Java Should Be Write In class

    Each Programme Has Start:
        public static void main(String args[]) { // code }
        static public void main(String [] argv) { // code }
*/
package Learning;





/////////////////////////////////// 
/////////////////////////////////// 
// Basics Of Input And Output
/////////////////////////////////// 
/////////////////////////////////// 


// JRE, JDK, & JVM
/*
    problem is that program X in WinDows is not like program Y in linux
    JVM: Java Virtual Machine
    JDK: Java Development Kit
        contain a lot of tool to compila java code
        like: javac, Library, Debuging Tool, ...
    JRE: Java Runtime Environment
    
    JDK (Java Development Kit) includes:
        JRE (Java Runtime Environment): For running Java applications.
        JVM (Java Virtual Machine): Part of JRE, executes Java bytecode.
        JavaC: java compiler
*/

//  Print in Output
/*
    System.out.print(Data); --> For Print Data
    System.out.println(Data); --> It Add New Line
    Sout + tab --> System.out.println();
    syso + ctrl + Space --> System.out.println(); [Eclipse]

    class System {
        .......
        public void print() {
            .......
        }
    }
*/

/* 
public class learn {
    public static void main(String args[]) {
        System.out.print("\nHello World\n");
        System.out.print(4);
        System.out.print(5 / 0);
        System.out.print("Abdellah");
    }
}
*/




// Escape Sequences and Comments
/* 
    Comments
        // Comments For Single Line

    Escape Sequence
        \t: Adds a new tab
        \b: Adds BackSpace in text [remove last letter]
        \n: Adds a new line
        \r: Adds a carriage return
        \f: Adds a formfeed in the text [make new page]
        \': Adds a single quote [old version]
        \": Adds a double quote
        \\: Adds a backslash
*/

/*
public class learn {
    static void main(String args[]) {
        System.out.println("\nHello World");
        System.out.println("Hello \t World");
        System.out.println("Abdellah\b\b"); // abdell
        System.out.println("\"I Love 'Java");
        // System.out.println('Hello Wolrd'); Error
        System.out.println("Abdellah\rKarani"); // Karaniah
        System.out.println("I Love\fPogramming");
    }
}
*/




// Data Types
/*
    int myNum = 5;               // Integer (whole number)
    float myFloatNum = 5.99f;    // Floating point number
    char myLetter = 'D';         // Character
    boolean my_bool = true;       // Boolean
    String myText1 = "Hello";     // String
    int $ = 1000;


    Each Data Type Give The Varibales 0 at The Begining

    // Primitive Data Type
    byte --> 8 bit  || -128 --> 127
    short --> 16 bit  || -32768 --> 32767
    int --> 32 bit  || -2147483648 --> 2147483647
    long --> 64 bit || 9223372036854775807 --> -9223372036854775808
    float --> 32 bit ||  3.4028235E38 --> 1.4E-45
    double --> 64 bit || 1.7976931348623157E308 --> 4.9E-324
    char --> 16 bit || Store One Character
    boolean --> can be true or false

    // Object Data Type
    String --> like an array


*/

/*
public class learn {
    static void main(String args[]) {
        int $ = 10;
        System.out.println($);
        byte nbr_byte = 0b00000010101; // byte nbr_byte = 100;
        System.out.println(nbr_byte);
        short short_nbt = 10202;
        System.out.println("short_nbt = " + short_nbt);
        float float_nbr = 12.123456789f;
        System.out.println("float_nbr = " + float_nbr);
        float double_nbr = 12.123456789f;
        System.out.println("double_nbr = " + double_nbr);
        float long_nbr = 12123456789L;
        System.out.println("long_nbr = " + long_nbr);
        char charcater = 'c';
        System.out.println("charcater = " + charcater);
        boolean boolean_value = true;
        System.out.println("Boolean = " + boolean_value); // true

        String str = "Hello Java";
        System.out.println("str = " + str);

        // get max range of data type
        System.out.println(Integer.MIN_VALUE);
        System.out.println(Integer.MAX_VALUE);

        System.err.println(Float.MAX_VALUE);
        System.err.println(Float.MIN_VALUE);

        System.err.println(Double.MAX_VALUE);
        System.err.println(Double.MIN_VALUE);

        System.err.println(Long.MAX_VALUE);
        System.err.println(Long.MIN_VALUE);
    }
}
*/




// Arithmetic Operators && Typing Casting && (Prefix & Postfix)
/*
    + : additions
    - : substraction
    * : multiplication
    / : division
    % : mudulo
    ----------------------------

    (int) 12.3939 --> 12
    ----------------------------
    
    int nbr = 10;
    nbr++ --> 10 before call to variable after is 11
    ++nbr --> 12
    nbr-- --> 12 before call to variable & after is 11
    --nbr --> 10
    ----------------------------

    nbr += 10;
    nbr *= 10;
    nbr /= 10;
    nbr -= 10;
    nbr >>= 10;
    nbr <<= 10;
    nbr >>>= 10;
*/

/*
public class App {
    static public void main(String args[]) {
        // Arithmetic & Typing Casting
        int x = 6 + 34 * (7 / 10);
        int y = 5 % 4;
        System.out.println("x = " + x + " " + "y = " + y); // x = 6
        System.out.println((int) 12.0 / 5); // 2
        // (Prefix & Postfix)
        int nbr = 10;
        nbr++;
        ++nbr;
        nbr--;
        --nbr;
        nbr += 10; // nbr = nbr + 1
        System.out.println("nbr = " + nbr); // nbr = 20
    }
}
*/




// Java User Input (Scanner), Printf methods
/*
    --- Scanner
    import java.util.Scanner; --< import Scanner
    Scanner input = new Scanner(System.in); --> create Scanner
    int value = input.nextInt(); --> Chosoe Variable For Store Int
    System.out.println(value); --> Get The Value

    ---> Others : nextBoolean() nextFloat() nextLong()
        next() : get first word in string
        nextLine() : get all string
-----------------------------------------------

    --- Printf
    System.out.printf("Specifier", variables);
    System.out.printf("value is %s %n", value);
    
    ---> Others: %d %c %f %s
        %n --> new line
        %.3f --> get just three digits
        %C --> Capital Character
        %s --> Capital String
-----------------------------------------------

    ---- charAt((0))
    get first chracter
    char single = input.next().charAt((0));
-----------------------------------------------
*/

/*
import java.util.Scanner;
public class learn {
    static public void main(String args[]) {
        // Scanner
        Scanner input = new Scanner(System.in);
        System.out.print("Enter A Value : ");
        String value = input.nextLine();
        System.out.println("value is " + value);

        // Printf
        System.out.printf("value is %S %n", value); // HELLO WORLD

        System.out.print("Enter A Single Character : ");
        char single = input.next().charAt((0));
        System.out.printf("single character is %c", single);
    }
}
*/





/////////////////////////////////// 
/////////////////////////////////// 
// Control Flow
/////////////////////////////////// 
/////////////////////////////////// 


// Control Folow [if - if else - if else if]
/*
    if (condition) {
        // code
    } else if (condition) {
        // code
    } else {
        // code
    }
*/

/* 
public class learn {
    static public void  main(String args[]) {
        int a = 30;
        if (a % 2 == 0) {
            System.out.printf("%d is even number%n", a);
            if (a > 10)
                System.out.printf("%d is large then 10%n", a);
        } else if (a < 40) {
            System.out.printf("%d is odd number%n", a);
        } else {
            System.out.printf("%d is zero%n");
        }
    }
}
*/




// Exercises, Practice, Ternary Operator
/*
 * Exercises
 * Ternary Operator [?:]
 * Instanceof Method [Work Just For No Primitive Data Type]
*/

/*
public class learn {
    static public void main(String args[]) {
        int mark;
        Scanner input = new Scanner(System.in);
        System.out.print("Enter Youe Mark : ");
        mark = input.nextInt();
        // Condition With If Statement
        boolean cond1 = mark >= 50 && mark <= 100;
        boolean cond2 = mark <= 50 && mark > 0;
        if (cond1) System.out.println("A");
        else if (cond2) System.out.println("D");
        else System.out.println("fail");
        // Condition With Ternary Operator
        String mention = (cond1 || cond2) ? "Good" : "Bad";
        System.out.printf("Mention : %S%n", mention);
        // Instanceof Method
        System.out.println(mention instanceof String); // true
        System.out.println(input instanceof Scanner); // true
    }
}
*/




// Switch Statements
/*
    Switch Is Statment for Control Flow
    Switch Can Not Take Float Point Data Types [double, float]
    Syntax :
        switch (value) {
            case 1: // code // break;
            case 2: // code // break;
            ....
            case n: // code // break;
            default: // code // break;
        }
    Break: For Stop The Swicth Exectuion
    Condition Does Not Support Inside Case
    Case 1 and Case 2 Can Be Have The Same Result
*/

/*
public class App {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);
        System.out.print("Today is : ");
        String day = input.next();
        switch (day) {
            case "Mon" + "day":
            case "Thursday":
            case "Weednesday":
            case "Thuesday":
            case "Sunday": System.out.println("Working"); break;
            case "Saturday": System.out.println("Weekend"); break;
            default: System.out.println("value ot of range"); break;
        }
    }
}
*/




// Repetition Control Statement (While Loop)
/*
    while (conditon) {
        // code
    }
    ----------------

    for (initilize: conditoon: step) {
        // code
    }
    ----------------

    do {
        // code
    } while (condition);
*/

/*
public class learn {
    public static void main(String args[]) {
        // while loop
        int a = 10;
        while (a-- > 0) {
            System.out.printf("a = %d%n", a);
        }
        System.out.println("---------");
        // for loop
        for (int i = 0; i < 10; i++) {
            System.out.printf("i = %d %n", i);
        }
        System.out.println("---------");
        // do while loop
        int x = 10;
        do {
            System.out.printf("x = %d%n", x);
            x--;
        } while (x <= 10 && x > 0);
    }
}
*/




// Questions and Exercises in Loops
/* 
public class learn {
    public static void main(String main[]) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter A Value : ");
        int nbr = input.nextInt();
        float sum = 0f;
        
        for (int i = 1; i < nbr; i++) {
            sum += 1.0 / i;
            // sum += 1 / i; will give 1 
        }
        System.err.printf("sum = %f%n", sum);
    }
}
*/




// Branching Statements ( Break/Continue )
/*
    break: Exit from control structure
    continue: Skips remaining statements in loop body

    if (true) {
        break; --> error
    }
    if (true) {
        continue;
    }
*/

/*
public class App {
    public static void main(String main[]) {
        int n = 10;
        for (int i = 0; i < n; i++) {
            System.out.println(i);
            if (i == 5) break;
            if (i == 2) continue;
            System.err.println("go go");
        }
    }
}
*/




// Repetition Control Statement (Nested Loops)
/*
    There Nested Loop and Outer Loop
*/

/*
public class App {
    public static void main(String main[]) {
        for (int i = 0; i < 3; i++) {
            System.out.println("Outer Loop " + i);
            for (int j = 0; j < 3; j++) {
                System.out.println("Nested Loop " + j);
            }
        }
    }
}
*/




// labeled break & labeled continue
/*
    label: is name of block of code
    use break with label to stop block code execution
    break stops the block of code

    stop:{
        int i = 9;
        if (i == 0) break stop;
        System.out.println("i != 0");
    }
*/

/*
public class learn {
    public static void main(String args[]) {
        // labeled break example
        innerLoop:{
            for (int i = 0; i < 10; i++) {
                outerLoop:for (int j = 0; j < 5; j++) {
                    if (i < j) {
                        break outerLoop;
                    }
                    if (i == 5) {
                        break innerLoop;
                    }
                    System.out.print("* ");
                }
                System.out.println("");
            }
        }
        stop:{
            int i = 9;
            if (i == 0) break stop;
            System.out.println("i is defrenct of zero");
        }

        // labeled continue;
        nextRow: for (int i = 0; i < 5; i++) {
            System.out.println("");
            for (int j = 0; j < 10; j++) {
                if (i < j) continue nextRow;
                System.out.print("* ");
            }
            System.out.printf("#line %d", i + 1);
        }
    }
}
*/





/////////////////////////////////// 
/////////////////////////////////// 
// Methods-Functions
/////////////////////////////////// 
/////////////////////////////////// 


// Methods-Functions Part 1
/*
    Syntax:
        type name(args) {
            // code 
            return value;
        }
    type: [int, float, void, ....]

    Function Call:
        static void print() --> without using object to call
        void print() --> you need a object like intermediate
        public static void print() --> i can this function from any file
            --- access type [public, private, protected, ...]

    Function With Argument:
        static int sum(int x, int y) --> return integer
    
    EveryThing Inder Class
    
    // public --> Anyone can use this.
    // static --> You can use the method without creating an object.
*/

/*
public class learn {
    // print message
    public static void print() {
        System.out.println("Hello World");
        return;
    }
    // sum two numbers
    static int sum(int x, int y) {
        print();
        return x + y;
    }
    public static void main(String args[]) {
        print();
        print();
        int re = sum(10, 10);
        System.out.printf("sum = %d%n", re);
    }
}
*/





// Variable Number Of Arguments & forEach
/*
    void sum(int...nums) // nums is an array
    for (int i:nums) {
        s += i;
    }
*/

/*
public class App {
    protected static void find_largest(float a, float b, float c) {
        float max = a;
        if (max < b) max = b;
        if (max < c) max = c;
        System.out.println("the max number is " + max); 
    }
    private static float averge(float n1, float n2, float n3) {
        return (n1 + n2 + n3) / 3;
    }
    public static int sum(int...nums) {
        int s = 0;
        for (int i:nums) {
            s += i;
        }
        return s;
    }

    public static void main(String argc[]) {
        float n1 = 10.2f, n2 = 10.4f, n3 = 90.3f;
        find_largest(n1, n2, n3);
        System.err.printf("The Averge Number is %f%n", averge(n1, n2, n3));
        System.out.println("Sum = " + sum(10, 19, 32, 34, 29, 23));
    }
}
*/





//  Built in Method / Function
/*
    * Java Number Methods 
        Math.function_name()
        float x = (int) 10.3f;
    * Java String Methods
    * Java Character Methods
    * Java Array Methods
*/

/*
import static java.lang.Math.*;
import static java.lang.String.*;

public class learn {
    public static void main(String main[]) {
        // Math Function
        double a = abs(-1.2);
        System.err.println("abs = " + a);
        double c = ceil(10.30);
        System.out.println("ciel = " + c);
        double f = floor(102.90);
        System.err.println("floor = " + f);
        long r = Math.round(19292.90); // without import Math
        System.err.println("round = " + r);
        double ran = (int) Math.floor(Math.random() * 10) + 1; // without import Math
        System.err.println("random = " + ran);
        System.err.println("max = " + max(10, 10.9));
        // String Function
        String str1 = "Hello";
        String str2 = "World";
        String new_str = join("-", str1, str2);
        System.out.println("New String : " + new_str);
        System.out.println("Length : " + new_str.length());
    }
}
*/





// Overloading Method / Function
/*
    - method overloading: means having multiple methods with the
        same name but different parameters(number, type, or order of parameters).
    - another definition: two method has a defferent signature.

    - Signature: its Method Name & its Parameter
*/

/* 
public class learn {
    // Different Signature
    public static int sum(int a, int b) {
        return a + b;
    }
    public static float sum(float a, float b, float c) {
        int s = sum((int) a, (int) b);
        return s + c;
    }
    public static void main(String[] args) {
        float s = sum(1.2f, 90.1f, 89f);  
        System.err.println("sum = " + s);   
    }
}
*/





// Recursion/Recursive Methods Part 1
/*
    - Base-Case Required in Recursion
    - Each Function Store In Stack [Space in Memory]
*/

/*
public class learn {
    static int count = 0;
    public static void fun() {
        System.err.println("fun");
        count++;
        if (count < 5) fun();
    }
    public static int fact(int n) {
        if (n == 0) return 1; // base-case
        else return n * fact(n - 1);
    }
    public static void main(String[] args) {
        int n = 15;
        System.out.printf("fact(%d) = %d%n", n, fact(n));
    }
}
*/





/////////////////////////////////// 
/////////////////////////////////// 
// Arrays
/////////////////////////////////// 
/////////////////////////////////// 


// One Dimensional Arrays (1D Array)
/*
    - Array: Container Of Objects 
        Have Fixed Number Values
        Single Types
        Zero-Based 
        Values Intialze With Zero
    
    - Type Of Array: 
        static arrays: Numbers of values are fixed
        dynamique arrays: We Don't Know Nbr Of Values
    
    - Syntax:
        int[] numbers; // Declares an array of integers
        numbers = new int[5]; // Allocates memory for 5 integers
*/

/*
public class App {
    public static void main(String []args) {
        int size = 5;
        int[] T = new int[size];
        float P[] = {1.4f, 2.3f, 3}; /// array has 3 ele
        char C[] = new char[4];
        String S[] = {"Abdellah", "Hello", "Karani"};
        C[1] = '9'; T[0] = 1;

        System.out.printf("T = %d & P = %f & C = %c%n", T[0], P[0], C[0]);
        System.out.println("The Length = " + P.length);

        for(String name: S) {
            System.out.println(name);
        }
        
    }
}
*/





// One Dimensional Array (Char Array)
/*
    with array of character --> you can print without loop
    you can casting --> (char) 97 --> a
    there is no NULL terminator
    in.next().toCharArray() --> if there is space --> stop printing
    in.nextLine().toCharArray() --> continue printing

    toCharArray() --> convert string to character array

    why we use array of character
        - quick
        - space
        - storage for example the password
*/

/* 
public class App {
    public static void main(String[] args) {
        char arr[] = {72, 73};
        System.err.println("msg = " + arr); // HI

        char name[] = new char[10];
        Scanner in = new Scanner(System.in);
        String str = in.nextLine();
        name = str.toCharArray();
        // name = in.next().toCharArray();
        System.out.println("name = " + name);

        String extra = new String(name, 0, 3);
        System.out.println("extra = " + extra);
    }
}
*/






// Array Character Examples
// import java.util.Arrays;
// import java.util.Scanner;

/*
public class App {
    public static void main(String[] args) {
        // define an array name
        char name[] = new char[5];
        name[0] = 'd';
        System.out.printf("name = %s%n", Arrays.toString(name));

        // define a string and using array of character
        Scanner in = new Scanner(System.in);
        System.err.println("Enter A String : ");
        String last_name = in.next();
        System.err.println("The last name = " + last_name);

        // convert string to array of character
        char copy_arr[] = last_name.toCharArray();
        System.out.println("The Char Array = " + copy_arr); 

    }    
}   
*/





// Passing Arrays to Methods
/*
    - passe array to function as an argument
    - return array from function
    - assign array to another array [call by refrence]
        when assign arr1 to arr2 --> both arrays point to the same memory location.
    - in java 
        --> array pass as call by refrence [just copy of refrence]
        --> variables pass as call by value
*/

/*
public class learn {

    static int get_sum(int[]x) {
        int sum = 0;
        for (int i:x) sum += i;
        return sum;
    }

    static int[] get_arr(int size) {
        int arr[] = new int[size];
        return arr;
    }

    static  void set_value_arr(int index, int value, int[] arr) {
        arr[index] = value;
    }

    static void set_value_var(int x, int value) {
        x = value;
    }

    public static void main(String args[]) {
        int nums[] = {1, 2, 3, 4};
        int sum1 = get_sum(new int[] {1, 2, 3}); // pass anonymose array
        int sum2 = get_sum(nums);
        System.out.printf("sum1 = %d & sum2 = %d%n", sum1, sum2);

        // return array from function
        int[]  new_arr = get_arr(10);
        System.out.printf("@ = %s%n", new_arr); // [I@27c170f0 --> @ Of Arr
        new_arr[0] = 10;
        System.err.printf("1rst = %d%n", new_arr[0]); // 10

        // call by refrence
        int[] notes = new int[] {10, 20, 13, 14};
        int[] markes = new int[] {-10, -20, -13, -14};
        notes = markes; // notes values changed to markes values
        notes[0] = 100; // markes[0] changes also
        System.out.printf("markes[0] = %d%n", markes[0]); // 100

        set_value_arr(0, 900, markes);
        System.out.printf("markes[0] = %d%n", markes[0]); // 900
        System.out.printf("notes[0] = %d%n", notes[0]); // 900

        int y = 99;
        set_value_var(y, 999);
        System.err.println("y = " + y); // 99 not 999

    }
}
*/







// Multidimensional Arrays & Passing Multidimensional Arrays to Methods
/*
    Declaration:
        int arr[][] = new int[n_lines][];
        int[n_line0] = new int[3];
 */
/* 
public class learn {
    // passing multi to method
    public static void print_array(int[][] arr) {
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[i].length; j++) {
                System.out.println(arr[i][j]);
            }
        }
    }
    public static void main(String args[]) {
        // define an array
        int arr[][] = {{1, 2, 3}, {1, 2, 3}, {2, 3, 4}};
        // another definition
        int arr1[][] = new int[3][];
        arr1[0] = new int[4];
        arr1[1] = new int[4];
        arr1[2] = new int[4];
        // print the array
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[i].length; j++)
                System.out.printf("%d%n", arr[i][j]);
        }
        // passing multi to an array
        print_array(arr);
    }
}
*/





// String 
/* 
import java.util.Scanner;
public class App {
    public static void main(String[] args) {
        // define a string
        String message = "Hello, World!";
        System.out.println(message);
        // make user enter the string
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String userInput = scanner.nextLine();
        System.out.println("You entered: " + userInput);
    }
}
*/




/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// Introduction to Object-Oriented Programming
/*
    OOP Concepts:
        Classes
        Objects
        Abstraction(Interface)
        Polymorphisme
        Encapsulation
        Inheritance
        Association
        Composition
        Aggregation
*/





// CLasses & Objects
/*
    - Use setters() & getters() methods to
        change and access to the attributs

    - Access Level Modifiers
        we can not use --> car1.model = 100
        we must use setters functions
        =========
        + public
            can acces from any class in projects
        # protected
            keep it hidden from other classes
        - private
            just from this class with setters & getters
        ~ Default or Package private
            just from package
    
    - Data Hiding:
        method must be public
        attribute must be private
        --> "I practice Encapsulation"
*/

/* Car.java
public class Car {
    // Define Attributes
    public String name;
    int maxSpeed;
    float price;
    private int model;
    // Define Methods
    void setName(String newName) {
        this.name = newName;
    }
    void getName() {
        System.out.println("name = " + this.name);
    }
}
*/

/* App.java
public class App {
    public static void main(String[] args) {
        Car car1 = new Car();
        Car car2 = new Car();
        car2.maxSpeed = 122;
        // car1.model = 10; car2.model = 100; error: is not visible
        car1.name = "Tesla";

        System.out.println("maxSpeed = " + car1.maxSpeed); // maxSpeed = 100

        car1.setName("R4");
        car1.getName();
    }
}
*/





// Constructor [Part 1]
/*
    - Constractor give to object attribute intialize value
    - to write a constractor respect three rules:
        constractor name = class name
        no explicit return type
        can not be anstract, static, final or synchronized

    - Constractor Type
        No-argument constrcator
            constrcator does not accept any args
        Parameterized constractor
            constrcator accept argument
        Default contarctor
            auto created by java compiler

    - Overloading 
        is when multiple methods have the 
        same name but different parameters
    
    - Object can take just one constractor
    - this reference to the constractor
    - constractor chaining
        constractor call another cons by using:
            this (name, price);
    - if constractor private we can not called it from main
*/

/* Product.java
public class Product {
    private String name;
    private float price;

    public Product() {
        this.name = "t-shirt";
        this.price = 12.2f;
    }
    public void display() {
        System.out.printf("name = %s, price =  %f", this.name, this.price);
    }
    public Product(String n, float p) {
        this.name = n;
        this.price = p;
    }
}
*/

/* App.java
public class App {
    public static void main(String main[]) {
        // No-argument constrcator
        Product p1 = new Product(); // Constractor is Called
        p1.display();
        // Parameterized constractor
        Product p3 = new Product("M", 10f);
        p3.display();
    }
}
*/





// Constrcator Part 2
/*
    - Copy Constructor
        constublic class App {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}

    - Call to default constructor
        if we do not write construtor

    - Finalizers vs Destructor
        used when we end use object, 
        we remove space in memory(heap)
        +Destructor
            Java does not have destructors like C++
            Java has garbage collection, which automatically cleans up memory.
        +Finalizers || finalize method
            were used for cleanup but are not recommended.
*/

/* Product.java
    Copy Constructor
    public Product(Product obj) {
        this.name = obj.name;
        this.price = obj.price;
        // Another method
        this (obj.name, obj.price); // call another constructor
    }
    // Set price
    public void setPrice(float p) {
        this.price = p;
    }
*/

/*
public class App {
    public static void main(String args[]) {
        Product p1 = new Product("M", 12.3f);
        Product p2 = new Product(p1); // Copy Constructor
        p2.display();
    }
}
*/





// Static keywords || Static Variable & Method
/*
    static variable: means it conserve the
        initial value 1 can be access from ClassName
    
    statis method: we can use just ClassName for call it
*/

/* Student.java
public class Student {
    // static variable
    static int count = 1;
    // Attribut
    private int no;
    private String name;
    private String password;
    private static String college="IT";

    public Student(String name, String password) {
        this.no = count;
        this.name = name;
        this.password = password;
        count++;
    }
    static void showPassword(String password) {
        System.out.printf("Password = %s", password);
    }
    public void display() {
        System.out.printf("name = %s, no = %d, college = %s%n", this.name, this.no, this.college);
    }
}
*/

/* 
public class App {
    public static void main(String[] args) {
        Student std1 = new Student("Abdellah", "ksks");
        Student std2 = new Student("Abdellah", "ksks");
        std1.display();
        std2.display();
        System.out.println("count = " + std.count);
        std1.showPassword("dd");
    }
}
*/





// Static keywords || static Method & Static Block
/* Student.java
    Restriction for static Method
        static method can not use non static data member
        || call no-static method directly
    
    Static Block:
        - When we run the programm static block call
        - the goal is to give initialization to static var
            inside each static block you call just static var
*/

/*  
public class App {
    static int x = 10;
    static {
        x = 20;
        System.out.println("Hello World");
    }
    public static void main(String[] args) {
        System.out.println("x = " + x); // x = 20
    }
    
}
*/





// Static keyword || Static Class [Part 3]
/*
    Static Class:
        A class can be made static only if it is a nested class
        create object from innerClass
*/

/* OuterClass.java
public class OuterClass {
    public static class InnerClass {
        public void print() {
            System.out.println("Hello From InnerClass");
        }
    }    
}
*/

/*
public class App {
    public static void main(String[] args) {
        OuterClass.InnerClass nested_class = new OuterClass.InnerClass();
        nested_class.print(); // Hello
    }
}
*/





// Passing Objects to Methods (by Value vs by Reference)
/*
    for primitive data type(int, float, ...)
        cannot support call by refrence
    do wrap to primitive data type inside object
*/

/* Test.java
public class Test {
    int number;
}
*/

/*
public class App {
    static void fun(int n) {
        n++;
    }
    static void Incr(Test obj) {
        obj.number++;
    }
    public static void main(String[] args) {
        // Method 1
        int n = 10;
        fun(n);
        System.out.println("n = " + n); // n = 10

        // Method 2
        Test obj = new Test();
        obj.number = 10;
        Incr(obj);
        System.out.println("n = " + obj.number); // n = 11

    }
}
*/





// Returning Objects & Comparing Objects
/*
    obj1 + obj2: is not support in java
    obj1 == obj2: compare the refrence
    obj1 = obj2: two refrences are equals
*/

/* Test.java
public class Test {
    int number;
    public Test() {
        this.number = 1;
    }
    public static Test sumObj(Test t1, Test t2) {
        // return t1 + t2; not support
        Test t3 = new Test();
        t3.number = t1.number + t2.number;
        return t3;
    }
}
*/

/* 
public class App {
    public static void main(String[] args) {
        // Returning Objects
        Test t1 = new Test();
        Test t2 = new Test();
        Test t3 = Test.sumObj(t1, t2);
        System.out.println("n = " + t3.number);

        // Comparing Objects
        if (t1 == t2) {
            System.out.println("Equal");
        } else {
            System.out.println("Not Equal");
        }
    }
}
*/





///////////////////////////////////////
// Inheritance (Types/ Access Modifiers)
/*
    in Inheritance we can inherit (member, fields & nested classes)
        constractor are not member (we cannot inherited)
    
    Notation:
        Super Class || Parent Class
        SubClass || Child Class
        Specialization: object inherit from general class
        Generalization: create a general class
        IS-A relationship: Dog IS-A Animal
    
    Types of Inheritance:
        - Single Inhertance: B inherit from A
        - Multilevel Inheritance: C inherit from B & B inherit from A
        - Hierarchical Inheritance: B & C inherit from A
        - Multiple Inheritance: C inherit From A & B
        - Heybrid Inheritance: D inherit from B & C, ...

    Note:
        Multiple & Heybrid not support --> must use interface
    
    Access Modifiers & Inheritance
        - private members cannot access by SubClass (setters & getters)
        - protected: we can access from SubClass & Super Class
*/






// Inheritance (Super Keyword / Object Class / Package-Private vs Protected)

/*
    subClass Call to constrcator SuperClass & then SubClass
    Priority always is for parent class (specialization)
    
    we can create constractor to Developer
        but we can use the superClass constractor by "super" 

    the parent class inherit from Object Class
*/

/* App.java
import inheritance.*;
public class App {
    public static void main(String[] args) {
        Employee em1 = new Employee("Abdellaj", "Manager", 12.2);
        Developer d1 = new Developer();
        System.out.println("name = " + d1.getName());
        System.out.println("name = " + em1.getName());

        // Without super
        // Developer d2 = new Developer("Ahmed", "DevOps", 12223.23);

        // With Super
        Developer d2 = new Developer("Omar", "Dev", 12, "websit");
        System.out.println("name = " + d2.getName());

        // Object Class
        Employee em2 = new Employee();
        System.out.println(em2.toString());

    }
}
*/

/* Developer.java
package inheritance;

public class Employee {
    protected String name;
    protected String position;
    protected double salary;

    // constructors
    public Employee() {
        this("john", "employee", 12);
    }

    public Employee(String name, String position, double salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    // Getters and Setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }
}
*/

/* Developer.java
public class Developer extends Employee {
    String projectName;

    public Developer() {

    }

    // Without super
    public Developer(String name, String position, double salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    public Developer(String name, String position, double salary, String projectName) {
        // call to no-arg const
        super(name, position, salary);
        this.projectName = projectName;
        super.getName();
        // call to no-arg const
        // super();
    }

    public void setProject(String new_project) {
        this.projectName = new_project;
    }

    public void getProject() {
        System.out.println("ProjectName = " + this.projectName);
    }
}
*/






///////////////////////////////////////
// Polymorphism (Method Overloading and Method Overriding)
/*
    Polymorphism: polyform
        it refres to use single type entity(methods, object, ...)
        to represent diffrent operations (types).
    
    We can acheive by:
        Method Overloading
        Method Overriding
    
    Method Overloading:
        same method name but diffrent
        signatures(parm Number || par types)
    
    Method Overriding:
        There must be an IS-A relationship(inheritance)
        same method name as in the parent class
        same paramters as in the parent class
*/






// Polymorphism(Explanation of Examples, Static Methods)
/*
    if we change parent type object to child type,
        parent can acces to child methods (not a static methods)
    
    Employee e3 = new SalariedEmployee("Omar", 11, 12);
        e3 is of type Employee, but it holds a SalariedEmployee,
        e3 access to the SalariedEmployee Methods
        e3 in override method he go to the child methods

    can we override a static method ?
        NO
    
    if we change the object type:
        static method: object go to the baseClass methods
        override method: object go the subClass methods
*/

/* App.java
import polymorphism.*;

public class App {
    public static void main(String[] args) {
        Employee e1 = new Employee("Ahmed", 1000);
        SalariedEmployee e2 = new SalariedEmployee("Omar", 500, 100);
        System.out.println("salary = " + e1.getSalary());
        System.out.println("salary = " + e2.getSalary());

        // Change the Object Type
        e1 = new SalariedEmployee("Ali", 500, 100);
        System.out.println("salary = " + e1.getSalary());
        // e1.getBonus(); method not common
        e1.getName(); // still has the access

        // Access To Static Method
        Employee e3 = new SalariedEmployee("Omar", 11, 12);
        e3.print(); // Based Class [no overrding]
        e2.print(); // SubClass [can access]
    }
}
*/

/*  Employee.java
package polymorphism;
public class Employee {
    protected String name;
    private int salary;
    
    // Constractor
    public Employee() {
        System.out.println("Hello From Employee Class");
    }
    public Employee(String name, int salary) {
        this.name = name;
        this.salary = salary;
    }

    // Method to overriding
    public int getSalary() {
        return this.salary;
    }
    // getters & static method
    public void getName() {
        System.out.println("name = " + this.name);
    }
    public static void print() {
        System.out.println("Based Class");
    }
}
*/

/* SalariedEmplyee.java
package polymorphism;

public class SalariedEmployee extends Employee {
    private int bonus;

    public SalariedEmployee(String name, int salary, int bonus) {
        super(name, salary);
        this.bonus = bonus;
        this.name = name; // it is protected
    }

    // Overriding to getSalary() Method
    @Override
    public int getSalary() {
        return super.getSalary() + this.bonus;
    }
    public void getBonus() {
        System.out.println("bonus = " + this.bonus);
    }
    public static void print() {
        System.out.println("SubClass");
    }
}
*/






// Polymorphism(Late binding , Early binding)
/*
    Late binding: Dynamic Polymorphism
    Early binding: Static Polymorphism

    compile time: phase when the source code is translated
        into bytecode before it runs.

    Method Overloading: this is example of compile time polymorphism
        (Early binding)
    
    Method Overriding: this is example of Late binding
        (Method detect at runtime)
    
    Late binding: happens when the method to be called
        is determined at runtime.

    Early binding: happens when the method to be called
        is determined at compile-time.

    Polymorphic Array (Generic) Array Types
        array can contain more then data type in the same time
*/

/* Animal.java
public class Animal {
    public void sound() {
        System.out.println("Animal sound");
    }
}
*/

/* Dog.java
public class Dog extends Animal {
    public void sound() {
        System.out.println("Bark");
    }
}
*/

/* App.java
public class App {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.sound(); // Bark

        Animal animal = new Dog(); // Reference type is Animal, but object is Dog
        animal.sound(); // Outputs: Bark (determined at runtime)

        Animal animal2 = new Animal();
        animal2.sound(); // Animal Sound

        // Polymorphic Array
        Animal [] refArray = new Animal[] {new Animal(), new Dog()};
        // refArray[0] = new Animal();
        // refArray[1] = new Dog();

        for (int i = 0; i < refArray.length; i++)
            refArray[i].sound();

    }
}
*/





///////////////////////////////////////
// Relationships (Association, Aggregation "has-a", Composition "part-of")
/*
    Between classes we have:
        Association (has-a)
        inheritance (is-a)
        composition  (part-of)
        aggregation (has-a)
    
    Association: is a connection between two seperate classes
        that are setup through object
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
        Note: composition [remove ObjectA will be Remove also ObjectB]
*/





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

/* Employee.java
public class Employee {
    private int id;
    private int salary;
    private Personnal_info personnal_info; // relationship Composition 
    private Department dept; // relationship Agregation
    
    
    public Employee(int id, int salary, String name, 
        int brithday_year, String account_number, Department dept) {
        this.id = id;
        this.salary = salary;
        // this.personnal_info = personnal_info;
        this.personnal_info = new Personnal_info(name, brithday_year, account_number);
        this.dept = dept;
    }

    @Override
    public String toString() {
        return "id = " + this.id + "\nname = " + personnal_info + 
        "\ndepName = " + dept.getDep_name();
    }
}
*/

/* Personnal_info.java
public class Personnal_info {
    private String name;
    private int brithday_year;
    private String account_number;

    public Personnal_info() {}

    public Personnal_info(String name, int brithday_year, String account_number) {
        this.account_number = account_number;
        this.name = name;
        this.brithday_year = brithday_year;
    }

    public String getName() {
        return name;
    }
    @Override
    public String toString() {
        return this.name;
    }
}
*/

/* Department.java
public class Department {
    private String dep_name;
    private int dep_nbr;

    public Department() {
    }
    
    public Department(int dep_nbr, String dep_name) {
        this.dep_nbr = dep_nbr;
        this.dep_name = dep_name;
    }

    public String getDep_name() {
        return dep_name;
    }
}
*/






// Single & Binary Association
/*
    Signle association: like Agregation
        Developer has a User reference
    Binary association:
        each class should have a reference to the other
    
    Single Association = Unidirectional
    Binary Association = Bidirectional
*/

/* User.java
public class User {
    private String name;
    private int id;
    private Admin admin; // Signle Association

    public User() {}
    public User(String name, int id, Admin admin) {
        this.name = name;
        this.id = id;
        this.admin = admin;
    }
    @Override
    public String toString() {
        return "name = " + this.name + " status = " + admin.getStatus();
    }
    public void setAdmin(Admin admin) {
        this.admin = admin;
    }
}
*/

/* Admin.java
public class Admin {
    private String permission;
    private int status;
    private User user;

    public Admin() {
    }

    public Admin(String permisssion, int status, User user) {
        this.permission = permisssion;
        this.status = status;
        this.user = user;
    }

    public int getStatus() {
        return this.status;
    }
    public void setUser(User user) {
        this.user = user;
    }
}
*/

/* App.java
public class App {
    public static void main(String args[]) {

        // Binary Association
        Admin admin = new Admin("All", 122, null);
        User user1 = new User("Ahmed", 10, admin);
        admin.setUser(user1);

        System.out.println(user1.toString());

    }
}
*/





//////////////////////////////////////////// 
// Final Keyword [Part 1] --> Final Variable
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
    
    Final Blank Variables
        we give initilizae after Declaring

    "sometimes we need to do limitions"
*/

/* Student.java
public class Student {
    private String name;
    // private final int std_id = 100;
    final int std_id;
    Student() {
        std_id = 10;
    }
    // final static float DEGREE_OF_SUCCESS = 10;
    final static float DEGREE_OF_SUCCESS;
    static {
        DEGREE_OF_SUCCESS = 100;
    }

    public Student(int std_id, String name) {
        this.std_id = std_id; // must be initialized
        this.name = name;
    }
    public int getStd_id() {
        return this.std_id;
    }
    // public void setStd_id(int age) {
    //     this.std_id = std_id;
    // }
}
*/

/* App.java
import final_keyword.*;
public class App {
    public static void main(String args[]) {
        Student s1 = new Student(122, "ahmed");
        // s1.std_id = 999;
        // s1.setStd_id(101);
    }
}
*/






// Final Keyword [Part 2]
/*
    final Paramters
    final Methods
*/

/* User.java
public class User {
    private int id;
    private String name;

    public User() {}
    public User(String name, final int id) {
        this.name = name;
        // id = 100; can not
        this.id = id;
    }
    public int getId() {
        return id;
    }
    // can not override this method
    @Override
    final public String toString() {
        return "User [id=" + id + ", name=" + name + "]";
    }

}

class Admin extends User {
    private int salary;
    public String toString() {
        return "Admin []";
    }
}
*/

/* 
import final_keyword.*;
public class App {
    public static void main(String args[]) {
        User user1 = new User("ahmed", 1910);
        System.out.println("id = " + user1.getId());
    }
}
*/






// Final Keyword [Part 2]
/*
    final Classes
        can not be inherited
    final References
*/

/* User.java
final public class User {
    private int id;
    private String name;

    public User() {}
    public User(String name, int id) {
        this.name = name;
        this.id = id;
    }
}
*/

/* App.java
import final_keyword.*;
public class App {
    public static void main(String args[]) {
        User user1 = new User("ahmed", 1910);
        final User user2 = new User("abdellah", 13393);
        // user2 = new User("abdellah", 13393); // cannot be assigned
    }
}
*/

/*
 * Stop value Change
 * Stop Method Overriding
 * Stop Inheritance
*/
/*
 * Final Variable: can not be ressigned
 * Final Parameters: can not be change value
 * Final Method: can not be @override
 * Final Class: can not be inherit
 * Final Refrence: car1 = car2; // with car1 is final object
 * NOTE: "all final keyword can be access to thier values"
*/





//////////////////////////////////////////////////
// ArrayList Class
/*
    Dynamic Array(no size limit) & Array Of Object
    Arraylist exit in java.util package
    ArrayList:
        used for [Wrapper Class || Generic Class]
    
    Syntax:
        ArrayList list = new ArraysList();
        ArrayList<Class> list = new ArrayList();
    
    Wrapper Class: 
        Float, Integer, Double, Boolean, Character, ...
    Generic Class:
        Student, Prof, ...
    
    NOTE: if size = 10 --> if we add an ele --> new size will be 15
        10 >> 1 = 5
        newCapacity = oldCapacity + oldCapacity / 2
        Solution: trimToSize()

    Is ArrayList Good Enough:
        Access is Good
        Add & remove (we need shifting)
    
    AbstractList, List, Collection & Iterbale are Interface
        can not define object with them
*/  

/*
import java.util.AbstractList;
import java.util.ArrayList;
import java.util.List;
import java.util.AbstractCollection;
import java.util.Collection;

import revise.*;

public class App {
    public static void main(String args[]) {
        // Hierarchy Of Array List
        ArrayList list = new ArrayList();
        AbstractList list3 = new ArrayList();
        AbstractCollection list4 = new ArrayList();
        Collection list5 = new ArrayList();
        List list2 = new ArrayList();

    }
}
*/






// ArrayList
/*
    ArrayList Contractor:
        ArrayList() --> empty constractor
        ArrayList(capacity)
        ArrayList(Collection<? extends E>c) --> copy Contractor 
        
    Declaration
        // size = 10 byDefault
        ArrayList<Integer> nums = new ArrayList<>();

    Print
        System.out.println(nums + "\n--------");
    Methods(Add, Get, AddAll) 
        - add(ele);
        - ArrayListName.size();
        - ArrayListName.get(index);
        - ArrayListName.addAll(ArrayListName);
        - ArrayListName.addAll(Arrays.asList(1, 2, 3, 4));
        - ArrayListName.addAll(index, Arrays.asList(1, 2, 3, 4));
    
    Copy Constructor
        ArrayList notes = new ArrayList(Arrays.asList(1, 2, 3));
        ArrayList marks = new ArrayList<>(notes);
    
    // Copy Type
        notes1 = notes.clone(); --> Shallow Copy
        notes = notes1; --> Reference Copy
*/

/* 
import java.util.*;
import revise.*;

public class App {
    public static void main(String args[]) {
        // Declaration
        ArrayList<Integer> nums = new ArrayList<>();

        // Methods
        nums.add(1);
        nums.add(2);
        nums.add(0, 0); // shift 10 to right
        nums.add(nums.size(), 3);

        // add range of eles
        ArrayList<Integer> nums1 = new ArrayList<Integer>();
        nums1.add(-1);
        nums1.addAll(nums);
        nums1.addAll(Arrays.asList(1, 2, 3));
        nums1.addAll(3, Arrays.asList(5, 5, 5));

        // Print
        System.out.println("nums = " + nums);
        System.out.println("nums1 = " + nums1);
        System.out.println("-------");
        int s = nums.size();
        for (int i = 0; i < s; i++) {
            System.out.println(nums.get(i));
        } System.out.println("--------");
        for (int num: nums) {
            System.err.println(num);
        }

        // Copy Constructor
        ArrayList <Integer> notes = new ArrayList(Arrays.asList(1, 2, 3));
        ArrayList <Integer> marks = new ArrayList<>(notes);
        notes.add(1);
        System.out.println("notes = " + notes); // [1, 2, 3, 1]
        System.out.println("marks = " + marks); // [1, 2, 3]

        // Clone Contractor
        ArrayList <Integer> notes1;
        notes1 = (ArrayList) notes.clone(); // Shallow Copy
        System.out.println("notes1 = " + notes1); // [1, 2, 3, 1]
        notes = notes1; // Reference Copy
        notes1.add(-10);
        System.out.println("note = " + notes); // [1, 2, 3, 1, -10]
    }
}
*/






// ArrayList Methods || Polymorphic ArrayList
/*
    Set
        ArrayListName.set(0, 2);
    Remove
        ArrayListName.remove(0, 2);
        ArrayListName.remove((Integer) 2);
    Remove All
        ArrayListName.removeAll(Arrays.asList("A", "C"));
    Remove Range
        app.removeRange(0, 1);
    RemoveIf
        ArrayListName.removeIf(num->num % 2 == 0);
    
    Array of Objects, Polymorphic Array
        Object []nums = new Object[3];
*/

/* 
import java.util.*;
import revise.*;

public class App extends ArrayList {
    public static void main(String args[]) {

        // Set & Remove
        ArrayList <Integer> list = new ArrayList<>(Arrays.asList(1, 2, 3));
        System.out.println(list);
        list.set(0, 2);
        list.remove(0);
        list.remove((Integer) 2);
        System.out.println(list);

        // Remove All
        ArrayList <String> notes = new ArrayList<>(
            Arrays.asList("A", "B", "C", "A", "D", "C"));
        notes.removeAll(Arrays.asList("A", "C"));
        System.out.println(notes);

        // Remove range
        App app = new App();
        app.add(1); app.add(2); app.add(3);
        app.removeRange(0, 1);
        System.out.println(app); // [2, 3]

        // Remove If
        ArrayList <Integer> notes1 = new ArrayList<>
            (Arrays.asList(1, 2, 3, 4, 5, 6));
        notes1.removeIf(num->num % 2 == 0);
        System.out.println(notes1); // [1, 3, 5]

        // Array of Object || Polymorphic Array
        Object []nums = new Object[3];
        nums[0] = (Integer) 1;
        nums[1] = (Float) 1.2f;
        nums[2] = (Boolean) true;
        for (Object obj: nums) {
            System.out.println(obj);
        }

    }
}
*/






// ArrayList Methods
/*
    contains
        ArrayListName.contains((Integer) 0);
    retainAll
        notes.retainAll(nums);
        "get the ele correspond" 
    subList
        ArrayListName.subList(fromIndex, toIndex);
        "get from index to index"
    clear & isEmpty
        notes.isEmpty();
        notes.clear();
    ensureCapacity & trimToSize
        ArrayListName.ensureCapacity(100);
        "increase capacity with 100 new ele"
        nums.trimToSize();
        "unsed ele from the memory"
    sort
    min
    max
*/

/* 
import java.lang.reflect.Array;
import java.util.*;

public class App {
    public static void main(String args[]) {
        ArrayList <Integer>nums = new ArrayList(Arrays.asList(1, 2));
        ArrayList <Integer>notes = new 
        ArrayList<>(Arrays.asList(1, 1, 1, 2, 2, 2, 3, 4)); 
        
        // contains
        boolean check = nums.contains((Integer) 0);
        System.err.println("check = " + check);

        // retainAll
        notes.retainAll(nums);
        System.out.println(notes);

        // subList
        ArrayList <Integer>nums_r = new ArrayList<>
        (notes.subList(0, 2));
        System.out.println(nums_r); // [1, 1]

        // clear
        boolean check_empty = notes.isEmpty();
        notes.clear();
        System.out.println("check_empty = " + check_empty + " notes = " + notes);
        
        // ensureCapacity & trimToSize
        nums.ensureCapacity(100);
        nums.trimToSize();

        // forEach && sort
        nums.forEach(n->System.out.println(n));
        Collections.sort(nums, Collections.reverseOrder()); 
        System.out.println("nums = " + nums);
    }
}
*/





////////////////////////////////////////////////////////////
/*
    Abstraction: hiding the internal implementation(methods, feature)
        and only showing the functionality to the users.
    
    We achieve Abstraction By:
        Abstract Class
        Interface
    
    Abstract Class:
        - non-access modifiers
        - Class declared with abstract keyword is known as an abstract
            class in java. (can have abstrcat || no abstrcat method)
        - Allow you to create blueprints for concrete classes
        - Concrete class: is a class that has an Implementation
            for all methods (that are abstracted)
        - NOTE: we define just the prototype, the Method
            will be implmented in Classes.
        - cannot be instantiated
        - can we have constrcator & static & final (Methods)
*/






// Abstract Class part 1 (Examples, Abstract rules)
/* Car.java
public abstract class Car {
    private float height;
    private float weight;
    private int numberOfWheels;

    // No-arg Constractor
    public Car(){}
    // Pametiraze contractor
    public Car(float height, float weight, int numberOfWheels) {
        this.height = height;
        this.weight = weight;
        this.numberOfWheels = numberOfWheels;
    }

    // abstract method
    public abstract void autopilot();
    public abstract void streamingServices();
    public abstract void parkingSensors();
    // Concrete method
    public void sayHello() {
        System.out.println("Hello");
    }
    // setter & getters
    public float getHeight() {
        return height;
    }
    public void setHeight(float height) {
        this.height = height;
    }
}
*/

/* SUV.java
public class SUV extends Car {
    public SUV(float height, float weight, int numberOfWheels) {
        super(height, weight, numberOfWheels);
    }
    public SUV(){}

    @Override
    public void autopilot() {
        System.out.println("Hello AutoPilot");
    }
    @Override
    public void streamingServices() {
        System.out.println("Hello streamingServices");
    }
    @Override
    public void parkingSensors() {
        System.out.println("Helloo parkingSensors");
    }
}
*/

/*
    Abstract Class: can have abstract and non-abstract methods
    Concrete Class: is class that has implementation for methods
    Concrete Method: is method has body

    We can not define object with abstract Class

    - Rules of asbtract class:
        We do not have 
            abstract varaible
            abstract contractor
            abstract with static Methods
        private abstract void autopilot(); --> error
*/
/* 
import abstraction.*;
public class App {
    public static void main(String args[]) {
        SUV suv1 = new SUV();
        suv1.autopilot(); // Hello AutoPilot
        suv1.sayHello(); // Hello

        // Car car2 = new Car(10, 10, 10); // Cannot instantiate the type Car

        // Define SUV object with Contractor of abstract Class
        SUV suv2 = new SUV(12, 23, 4);
        suv2.streamingServices();

    }
}
*/







////////////////////////////////////////////////////////////
/// Interface
/*
    Interface: Pure Abstraction
        - is blueprint template
        - contain a list of methods signature (abstract methods)
        - it can acheive multiple inheritance
        - Class can implements one or more interfaces
*/







// Start Practice Interface
/*
    - class can implement multiple interfaces [not extend]
    - interface can extend an multiple interfaces
    - By default Attributes in interface in 
        public static final --> "must give to him a init value"
*/

/* App.java
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
*/

/* SelfDrivale.java
package abstraction_two;
public interface SelfDrivale {
    public abstract void destination(String d);
    public abstract void drive();
}
// public interface SelfDrivale extends Moveble
*/

/* Moveble.java
package abstraction_two;

public interface Moveble {
    int x = 10; // public final static Attribut
    public abstract void moveUp();
    public abstract void moveDown();
    public abstract void moveLeft();
    public abstract void moveRight();
}
*/

/* CarV1.java
package abstraction_two;

public class CarV1 implements Moveble, SelfDrivale {
    private int x, y, number_of_places;

    public CarV1() {}
    public CarV1(int x, int y, int number_of_places) {
        this.x = x;
        this.y = y;
        this.number_of_places = number_of_places;
    }

    // Implement the abstract class "SelfDrivable"
    @Override
    public void destination(String d) {
        System.out.println("destiantion = " + d);
    }
    @Override
    public void drive() {
        System.out.println("drive... V1");
    }
    // ....
}
*/

/* CarV2.java
package abstraction_two;

public class CarV2 implements Moveble, SelfDrivale {
    private int x, y, number_of_places;

    public CarV2() {}
    public CarV2(int x, int y, int number_of_places) {
        this.x = x;
        this.y = y;
        this.number_of_places = number_of_places;
    }

    // Implement the abstract class "SelfDrivable"
    @Override
    public void destination(String d) {
        System.out.println("destiantion = " + d);
    }
    @Override
    public void drive() {
        System.out.println("drive... V2");
    }
    // ....
}
*/





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
    
    - if We HAve a class implement & extend from interface & Class
        & we have same signature in interface & class
        we are creating object --> Always Object Take Classe Method

    - in Java 9 --> ca create private method inside interface
    - we can say also nested interface
*/






// Marker & Generic in Interface
/*
    Marker or Taggin Interface: 
        Empty interface, When a class uses it, it tell to Java:
        “This class can be used in a special way“

    Generic Interface:
        we return object from method but 
        we do not know the type of object
        --> Use Casting in Object Definition
        --> Use <T> in return type & Make Class Generic

    Benifits:
        Security, Multiple Interface,
        Loose Coupling (no depedency between classes) 

*/

/* App.java
import abstraction_two.*;
public class App {
    public static void main(String args[]) {
        // Marker Interface
        Admin admin = new Admin();
        if (admin instanceof Marker) {
            System.out.println("YES!!");
        }
        else System.out.println("No!!");

        // Generic Interface
        Generic UserObj = new User();
        User user = (User) UserObj.GetUser();
        User user1 = UserObj.GetUser();
        Object user2 = UserObj.GetUser();
    }
}
*/

/* App.java
import abstraction_two.*;
public class App {
    public static void main(String args[]) {
        // Marker Interface
        Admin admin = new Admin();
        if (admin instanceof Marker) {
            System.out.println("YES!!");
        }
        else System.out.println("No!!");

        // Generic Interface Without Casting
        Generic UserObj = new User();
        // User user = (User) UserObj.GetUser(); error --> must has a type
        Object user2 = UserObj.GetUser(); 

        // Generic Interface With Casting
        Generic <User> UserObj1 = new User();
        User user4 = (User) UserObj1.GetUser();
        User user5 = UserObj1.GetUser();
        Object user6 = UserObj1.GetUser();
    }
}
*/

// Marker Interface
/* Admin.java
    package abstraction_two;
    public class Admin implements Marker {
        public Admin() {}
    }
*/
/* Marker.java
    package abstraction_two;

    public interface Marker {
    // this is an marker interface 
    }
*/

// Generic Interface
/* User.java
    package abstraction_two;
    // With Generic Class
    public class User <T> implements Generic <T> {
        @Override
        public T GetUser() {
            return (T) new User();
        }
    }
    // Without Generic Class
    public class User implements Generic {
        @Override
        public Object GetUser() {
            return new User();
        }
    }
*/
/* Generic.java
    // With Generic
    package abstraction_two;
    public interface Generic <T> { // for Template
        public T GetUser();
    }
    // Without Generic
    public interface Generic{ // for Template
        public Object GetUser();
    }
*/







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
    - we say implement (realize) not "extend"
        between two interfaces we say "extend"
    - in UML design
    - does not have Constractors
    
    - class in Java can implement multiple interfaces
    - class in Java cannot extend multiple abstract classes
*/








