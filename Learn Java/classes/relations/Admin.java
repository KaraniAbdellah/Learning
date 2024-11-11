package relations;

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

