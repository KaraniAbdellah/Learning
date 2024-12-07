package abstract_class;

public abstract class Car {
    private float height;
    private float weight;
    private int numberOfWheels;

    // No-arg Constractor
    public Car(){}
    // Pametiraze contractor
    public Car(float height, float weight, int numberOfWheels) {
        this.height = height;
        this.weight = weight;
        this.numberOfWheels = numberOfWheels;
    }

    // abstract method
    public abstract void autopilot();
    public abstract void streamingServices();
    public abstract void parkingSensors();
    // Concrete method
    public void sayHello() {
        System.out.println("Hello");
    }
    // setter & getters
    public float getHeight() {
        return height;
    }
    public void setHeight(float height) {
        this.height = height;
    }
    public float getWeight() {
        return weight;
    }
    public void setWeight(float weight) {
        this.weight = weight;
    }
    public int getNumberOfWheels() {
        return numberOfWheels;
    }
    public void setNumberOfWheels(int numberOfWheels) {
        this.numberOfWheels = numberOfWheels;
    }
}
    
