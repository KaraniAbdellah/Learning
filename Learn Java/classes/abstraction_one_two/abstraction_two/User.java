package abstraction_two;

public class User <T> implements Generic <T> {
    @Override
    public T GetUser() {
        return (T) new User();
    }
}


