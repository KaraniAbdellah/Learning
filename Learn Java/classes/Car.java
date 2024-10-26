// Car Class
public class Car {
    // Define Attributes
    public String name;
    int maxSpeed;
    float price;
    private int model;
    // Define Methods
    void setName(String newName) {
        this.name = newName;
    }
    void getName() {
        System.out.println("name = " + this.name);
    }
}

