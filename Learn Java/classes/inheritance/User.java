package inheritance;

public class User {
    private String name;
    private int id;

    public User() {
        System.out.println("helo from User");
        this.name = "john";
        this.id = 10;
    }
    public User(String name, int id) {
        this.name = name;
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }
    public void setId(int id) {
        this.id = id;
    }
    public void getName() {
        System.out.println("name = " + this.name);
    }
    public void getId() {
        System.out.println("name = " + this.id);
    }
}
