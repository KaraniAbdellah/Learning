
package abstraction2;

public class CarV1 implements Moveble, SelfDrivale {
    private int x, y, number_of_places;

    public CarV1() {}
    public CarV1(int x, int y, int number_of_places) {
        this.x = x;
        this.y = y;
        this.number_of_places = number_of_places;
    }

    // Implement the abstract class "SelfDrivable"
    public void destination(String d) {
        System.out.println("destiantion + " + d);
    }
    public void drive() {
        System.out.println("drive...");
    }
    public void moveUp() {
        y++;
    }
    public void moveDown() {
        y--;
    }
    public void moveLeft() {
        x--;
    }
    public void moveRight() {
        x++;
    }
}
