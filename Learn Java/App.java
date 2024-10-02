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







