package polymorphism;

public class SalariedEmployee extends Employee {
    private int bonus;

    public SalariedEmployee(String name, int salary, int bonus) {
        super(name, salary);
        this.bonus = bonus;
        this.name = name; // it is protected
    }

    // Overriding to getSalary() Method
    @Override
    public int getSalary() {
        return super.getSalary() + this.bonus;
    }
    public void getBonus() {
        System.out.println("bonus = " + this.bonus);
    }
    public static void print() {
        System.out.println("SubClass");
    }
}


