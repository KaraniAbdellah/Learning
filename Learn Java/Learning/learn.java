// Introduction To Java && Installing Tools
/*
    We Can Make :
        Web Applications
        Gaming Applications
        Mobile Applications
        Desktop Applications
    
    Java is a Class-Based, Object-Oriented Programming Language
    Java is Availble For Most OS

    file.java --> JavaC [Compiler] --> Byte Code
        --> JVM [Java Virtual Machine] [Interpreter]
    
    Each Code In Java Should Be Write In class

    Each Programme Has Start:
        public static void main(String args[]) { // code }
        static public void main(String [] argv) { // code }
*/
package Learning;




//  System.out.print
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
        next() : get firs word in string
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





