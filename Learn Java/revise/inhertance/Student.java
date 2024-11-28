package revise.inhertance;

public class Student {

    private String name;
    private int id;
    private Prof prof;
    // private Director director;

    public Student() {

    }
    public Student(String name, int id, Prof prof) {
        this.name = name;
        this.id = id;
        this.prof = prof;
        // this.director = new Director(dir_name, dir_salary);
    }

    // @Override
    // public String toString() {
    //     return "StudentName = " + this.name + 
    //     " ProfName = " + this.prof.getName() +
    //     " DirName = " + this.director.getName();
    // }
    public String getName() {
        return this.name;
    }
    @Override
    public String toString() {
        return "StudentName = " + this.name +
        " Profname = " + this.prof.getName();
    }

    
}