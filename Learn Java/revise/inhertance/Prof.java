package revise.inhertance;

public class Prof {
    
    private String name;
    private float salary;
    private Student student;

    public Prof() {

    }
    
    public Prof(String name, float salary, Student student) {
        this.name = name;
        this.salary = salary;
        this.student = student;
    }

    public String getName() {
        return this.name;
    }
    @Override
    public String toString() {
        return "Profname = " + this.name +
        " StudentName = " + this.student.getName();
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    

}
