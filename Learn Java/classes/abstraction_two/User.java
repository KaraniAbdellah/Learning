package abstraction_two;

public class User implements Generic {
    @Override
    public Object GetUser() {
        return new User();
    }
}
