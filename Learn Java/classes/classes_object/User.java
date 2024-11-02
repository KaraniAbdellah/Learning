package classes_object;

class User {
    private String name;
    private int code;

    public void setName(String new_name) {
        this.name = new_name;
    }
    public void setCode(int new_code) {
        this.code = new_code;
    }

    public void display() {
        System.out.printf("name = %s & code = %d%n", this.name, this.code);

    }

    // No Arg Constractor
    public User() {
        this.name = "John";
        this.code = 0;
    }

    // Parametized Constractor
    public User(String name, int code) {
        this.name = name;
        this.code = code;
    }

    // Copy Constractor
    public User(User obj) {
        this.name = obj.name;
        this.code = obj.code;
    }

}





