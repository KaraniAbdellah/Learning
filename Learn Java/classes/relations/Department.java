package relations;

public class Department {
    private String dep_name;
    private int dep_nbr;

    public Department() {
    }
    
    public Department(int dep_nbr, String dep_name) {
        this.dep_nbr = dep_nbr;
        this.dep_name = dep_name;
    }

    public String getDep_name() {
        return dep_name;
    }
}

