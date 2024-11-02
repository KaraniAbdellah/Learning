// Circle Class

package classes_object;

public class Circle {
    private double radius;
    private String color;

    public void setradius(double r) {
        this.radius = r;
    }
    public void setColor(String c) {
        this.color = c;
    }
    public double getRadius() {
        return this.radius;
    }
    public double getArea() {
        return this.radius * 2;
    }
    public void AllValues() {
        System.out.printf("radius = %f & color = %s%n", this.radius, this.color);
    }
}



