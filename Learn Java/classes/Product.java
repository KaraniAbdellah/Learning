public class Product {
    private String name;
    private float price;

    public void display() {
        System.out.printf("name = %s, price =  %f", this.name, this.price);
    }

    // No-Arg constructor
    public Product() {
        this.name = "t-shirt";
        this.price = 12.2f;
    }
    // Parameterized constructor
    public Product(String n, float p) {
        this.name = n;
        this.price = p;
    }
    // Copy Constructor
    public Product(Product obj) {
        this.name = obj.name;
        this.price = obj.price;
        // Another method
        this (obj.name, obj.price); // call another constructor
    }
    // Set price
    public void setPrice(float p) {
        this.price = p;
    }
}