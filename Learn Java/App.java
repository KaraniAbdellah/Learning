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


public class App {
    public static void main(String args[]) {
        int[] numbers = new int[5];
        numbers[0] = 10;
        for (int i:numbers) System.err.println(i);
    }
}





















