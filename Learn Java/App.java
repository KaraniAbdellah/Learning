
// Revise All By Exemple

public class App {
    static int count = 0;
    static{
        count++;
        System.out.println("count from static = " + count);
    }
    public static void main(String[] args) {
        Admin adm = new Admin();
        adm.setName("Ahmed");
        adm.setId(122);
        adm.getName();
        adm.getId();

        Admin adm2 = new Admin("Mohamed", 24);
        Admin adm5 = new Admin("Mohamed", 24);
        Admin adm4 = new Admin("Mohamed", 24);
        adm2.display();

        Admin adm3 = new Admin(adm2);
        adm3.display();
        System.out.println("count = " + adm3.count);

        Admin.getNbrAdmin();

        // Define the innerClass
        Admin.InnerClass inner = new Admin.InnerClass();
        inner.display(1);


    }
}




