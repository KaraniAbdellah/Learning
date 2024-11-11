package relations;

public class Developer {
    private String position;
    private int salary;

    public Developer() {
        
    }
    public Developer(String position, int salary) {
        this.position = position;
        this.salary = salary;
    }

    public String getPosition() {
        return this.position;
    }

}
