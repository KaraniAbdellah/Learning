package classes_object;

public class Student {
    // Declare a static variable
    static int count = 1;
    // Attribut
    private int no;
    private String name;
    private String password;
    private static String college="IT";

    public Student(String name, String password) {
        this.no = count;
        this.name = name;
        this.password = password;
        count++;
    }

    static void showPassword(String password) {
        System.out.printf("Password = %s", password);
    }

    public void display() {
        System.out.printf("name = %s, no = %d, college = %s%n", this.name, this.no, this.college);
    }

}





