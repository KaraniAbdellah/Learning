package final_keyword;

public class Student {
    private String name;
    // private final int std_id = 100;
    final int std_id;
    Student() {
        std_id = 10;
    }
    // final static float DEGREE_OF_SUCCESS = 10;
    final static float DEGREE_OF_SUCCESS;
    static {
        DEGREE_OF_SUCCESS = 100;
    }

    public Student(int std_id, String name) {
        this.std_id = std_id; // must be initialized
        this.name = name;
    }
    public int getStd_id() {
        return this.std_id;
    }
    // public void setStd_id(int age) {
    //     this.std_id = std_id;
    // }

    


}
