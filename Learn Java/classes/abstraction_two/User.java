package abstraction_two;

public class User <T> implements Generic <T> {
    @Override
    // public Object GetUser() {
    //     return new User();
    // }
    public T GetUser() {
        return (T) new User();
    }
}
