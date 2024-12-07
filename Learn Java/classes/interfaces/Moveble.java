package interfaces;

public interface Moveble {
    int x = 10; // public final static Attribute
    public abstract void moveUp();
    public abstract void moveDown();
    public abstract void moveLeft();
    public abstract void moveRight();
    // this is commun method with SelfDrivale.java
    /* 
    default void SameMethod() {
        System.out.println("Comun Method");
    }
    */
    // body static method
    static void MethodStatic() {
        System.out.println("This A Static Method");
    }
}
