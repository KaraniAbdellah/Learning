package polymorphism;

public class Person {
    protected String name;
    protected int id;

    public Person(String name, int id) {
        this.name = name;
        this.id = id;        
    }
    public Person() {
        this.name = "john";
        this.id = 12;
    }

    // Method to Override
    public int getId() {
        return this.id;
    }
    
    public void getName() {
        System.out.println("name = " + this.name);
    }
    public static int getSalary() {
        return 100;
    }

}


