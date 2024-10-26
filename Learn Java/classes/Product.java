public class Product {
    private String name;
    private float price;

    public Product() {
        this.name = "t-shirt";
        this.price = 12.2f;
    }
    public void display() {
        System.out.printf("name = %s, price =  %f", this.name, this.price);
    }
    public Product(String n, float p) {
        this.name = n;
        this.price = p;
    }
}