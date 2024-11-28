package revise.abstract_classes;

public class Admin extends User {
    public void sayUser() {
        System.out.println("Hello User = " + super.getUser_name());
    }
    public void sayId() {
        System.err.println("Hello Id = " + super.getUser_id());
    }
    public Admin() {}
    public Admin(int user_id, String user_name) {
        super(user_id, user_name);
    }
}
