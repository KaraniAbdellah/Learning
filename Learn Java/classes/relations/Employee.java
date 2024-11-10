package relations;

public class Employee {
    private int id;
    private int salary;
    private Personnal_info personnal_info; // relationship Composition 
    private Department dept; // relationship Agregation
    
    
    public Employee(int id, int salary, String name, 
        int brithday_year, String account_number, Department dept) {
        this.id = id;
        this.salary = salary;
        // this.personnal_info = personnal_info;
        this.personnal_info = new Personnal_info(name, brithday_year, account_number);
        this.dept = dept;
    }

    @Override
    public String toString() {
        return "id = " + this.id + "\nname = " + personnal_info + 
        "\ndepName = " + dept.getDep_name();
    }


}



