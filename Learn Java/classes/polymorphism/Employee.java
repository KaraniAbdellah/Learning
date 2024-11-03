package polymorphism;

public class Employee {
    protected String name;
    private int salary;
    
    // Constractor
    public Employee() {
        System.out.println("Hello From Employee Class");
    }
    public Employee(String name, int salary) {
        this.name = name;
        this.salary = salary;
    }

    // Method to overriding
    public int getSalary() {
        return this.salary;
    }
    // getters & static method
    public void getName() {
        System.out.println("name = " + this.name);
    }
    public static void print() {
        System.out.println("Based Class");
    }
}
