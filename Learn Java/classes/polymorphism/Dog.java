package polymorphism;

public class Dog extends Animal {
    public void sound() {
        System.out.println("Bark sound");
    }
    public int is_agr() {
        return super.is_agr() + 1;
    }
    public static void print() {
        System.out.println("HELO FROM DOG");
    }
    public void print1() {
        System.out.println("HELO FROM DOG");
    }
}

