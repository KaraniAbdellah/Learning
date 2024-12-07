package abstract_class;

public class Hatchback extends Car {
    @Override
    public void autopilot() {
        System.out.println("Hello AutoPilot");
    }
    @Override
    public void streamingServices() {
        System.out.println("Hello streamingServices");
    }
    @Override
    public void parkingSensors() {
        System.out.println("Helloo parkingSensors");
    }
}