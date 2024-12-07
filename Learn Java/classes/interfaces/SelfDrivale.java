package interfaces;

public interface SelfDrivale {
    public abstract void destination(String d);
    public abstract void drive();
    default void newMethod() {
        System.out.println("Solution");
    }
}

