package relations;

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


