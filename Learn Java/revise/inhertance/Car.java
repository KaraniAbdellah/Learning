package revise.inhertance;

final public class Car {
    private String name;
    private int id;
    private int year;

    // final int price = 100;
    final int price; // each object has own price
    final static int degree = 10; // all object has one degree
    {
        price = 10; // can not be assigned
    }
    // Car() {
    //     price = 1001;
    // }

    
    static int matricle;
    static {
        matricle = 10;
    }
    public Car() {

    }

    public Car(String name, int id, final int year) {
        this.name = name;
        this.id = id;
        id = 100;
        // this.price = 10;
        // year = 10;
        this.year = year;
    }

    public int getId() {
        return id;
    }

    public int getYear() {
        return year;
    }

    public int getPrice() {
        return price;
    }

    public static int getDegree() {
        return degree;
    }

    public static int getMatricle() {
        return matricle;
    }

    public void getName() {
        System.out.println("name = " + this.name);
    }
    // public void setPrice() {
    //     this.price = 19;
    // }

    final public void SayHello() {
        System.err.println("Helllo from Car.java");
    }
}
