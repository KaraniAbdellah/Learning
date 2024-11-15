package final_keyword;

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