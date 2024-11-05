package polymorphism;

public class User extends Person {
    private String work;

    public User(String name, int id, String work) {
        super(name, id);
        this.work = work;
    }

    @Override
    public int getId() {
        return super.getId() + 100;
    }
    
    public void getName() {
        System.out.println("name = " + this.name);
    }

    // @Override --> can not be overrides
    public static void print() {
        System.out.println("Hello From User");
    }

    

}
