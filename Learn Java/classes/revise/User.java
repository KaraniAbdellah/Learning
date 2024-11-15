package revise;

public class User {
    protected String name;
    protected int id;

    // No-Arg Constractor
    public User() {}

    // Parametized Constractor 
    public User(String name, int id) {
        this.id = id;
        this.name = name;
    }

    // Inherit static Method
    public static void print() {
        System.out.println("HELLLOE");
    }

    // Getters
    public void getName() {
        System.out.println("name = " + this.name);
    }

    // Method to Override
    public int calc_taux(int per) {
        return per * 100;
    }

    

}
