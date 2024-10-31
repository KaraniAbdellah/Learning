public class Admin {
    private int id;
    private String name;
    private static String org_name = "IT";
    static int count = 0;

    public void getName() {
        System.out.println("name = " + this.name);
    }
    public void getId() {
        System.out.println("id = " + id);
    }
    public void setName(String new_name) {
        this.name = new_name;
    }
    public void setId(int newId) {
        this.id = newId;
    }
    public Admin() {
        this.name = name;
        this.id = id;
    }
    public Admin(String name, int id) {
        this.name = name;
        this.id = id;
        count++;
    }
    public void display() {
        System.out.printf("name = %s, id = %d, ORG = %s%n",
        this.name, this.id, this.org_name);
    }
    public Admin(Admin adm) {
        this.name = adm.name;
        this.id = adm.id;
    }
    public static void getNbrAdmin() {
        System.out.println("count = " + count);
    }
    public static class InnerClass {
        public void display(int a) {
            System.out.println("a = " + a);
        }²
    }

}


