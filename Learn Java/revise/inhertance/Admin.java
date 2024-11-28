package revise.inhertance;

public class Admin extends User {
    private float salary;

    public Admin() {
        
    }
    
    public Admin(String name, int id, float salary) {
        super(name, id);
        this.salary = salary;
    }

    // Override Method
    @Override
    public int calc_taux(int per) {
        return super.calc_taux(per) - 10;
    }

}
