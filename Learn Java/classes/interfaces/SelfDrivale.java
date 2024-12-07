package interfaces;

public interface SelfDrivale {
    public abstract void destination(String d);
    public abstract void drive();
    // add new method without do the implementation
    default void newMethod() {
        System.out.println("Solution");
    }
    // this is commun method with Moveble.java
    /* 
    default void SameMethod() {
        System.out.println("Comun Method");
    }
    */
}

