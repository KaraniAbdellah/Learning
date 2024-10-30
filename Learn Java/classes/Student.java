
public class Student {
    private int no;
    String name;
    private static String college="IT";

    public Student(int no, String name) {
        this.no = no;
        this.name = name;
    }

    public void display() {
        System.out.printf("name = %s, no = %d, college = %s%n", this.name, this.no, this.college);
    }

}

