package revise.abstract_classes;

public abstract  class User {
    private int user_id;
    private String user_name;

    public abstract void sayUser();
    public abstract void sayId();


    public int getUser_id() {
        return user_id;
    }
    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }
    public String getUser_name() {
        return user_name;
    }
    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

}
