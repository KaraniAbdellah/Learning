package inheritance;

public class Developer extends Employee {
    String projectName;

    public Developer() {

    }

    // Without super
    /*public Developer(String name, String position, double salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }*/

    public Developer(String name, String position, double salary, String projectName) {
        // call to no-arg const
        super(name, position, salary);
        this.projectName = projectName;
        super.getName();
        // call to no-arg const
        // super();
    }

    public void setProject(String new_project) {
        this.projectName = new_project;
    }

    public void getProject() {
        System.out.println("ProjectName = " + this.projectName);
    }
}
