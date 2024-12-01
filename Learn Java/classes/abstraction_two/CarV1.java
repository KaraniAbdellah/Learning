
package abstraction_two;

public class CarV1 implements Moveble, SelfDrivale {
    private int x, y, number_of_places;

    public CarV1() {}
    public CarV1(int x, int y, int number_of_places) {
        this.x = x;
        this.y = y;
        this.number_of_places = number_of_places;
    }

    // Implement the abstract class "SelfDrivable"
    @Override
    public void destination(String d) {
        System.out.println("destiantion = " + d);
    }
    @Override
    public void drive() {
        System.out.println("drive...");
    }
    @Override
    public void moveUp() {
        y++;
    }
    @Override
    public void moveDown() {
        y--;
    }
    @Override
    public void moveLeft() {
        x--;
    }
    @Override
    public void moveRight() {
        x++;
    }
}
