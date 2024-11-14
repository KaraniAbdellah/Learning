package revise;

public class User {
    private static int count = 0;
    private String name;
    private int id;
    private int n;
    static public String college = "IT";
    static {
        System.out.println("HELLO FROM STATIC BLOCK (USER)");
    }
    // no-arg constractor
    public User() {
        
    }
    // paramezid constractor
    public User(String name, int id) {
        this.name = name;
        this.id = id;
        User.count++;
    }

    // Copy Constractor
    public User(User user1) {
        this.name = user1.name;
        this.id = user1.id;
    }

    public void getName() {
        System.out.println("name = " + this.name);
    }
    public void setName(String name) {
        this.name = name;
    }
    public static void sayHello() {
        System.out.println("Hello From User");
    }
    public void getUsers() {
        System.out.println("users = " + User.count);
    }
    public static void Print() {
        System.out.println("name " + count);
    }
    
    public static class OuterClass {
        public void Print() {
            System.out.println("Hello From Inner Class");
        }
    }
    public int getN() {
        return this.n;
    }
    public void setN(int n) {
        this.n = n;
    }

}
