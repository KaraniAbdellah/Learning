// labeled break & labeled continue

/*
    label: is name of block of code
    use break with label to stop block code execution
    break is stop the block of code

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

