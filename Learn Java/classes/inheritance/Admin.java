package inheritance;

public class Admin extends User {
    private String salary;

    public Admin() {
        System.out.println("helo from Admin");
    }
    public Admin(String name, int id, String salary) {
        super(name, id);
        this.salary = salary;
    }

}


