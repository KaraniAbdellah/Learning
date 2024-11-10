package relations;

public class Personnal_info {
    private String name;
    private int brithday_year;
    private String account_number;

    public Personnal_info() {}

    public Personnal_info(String name, int brithday_year, String account_number) {
        this.account_number = account_number;
        this.name = name;
        this.brithday_year = brithday_year;
    }

    public String getName() {
        return name;
    }
    @Override
    public String toString() {
        return this.name;
    }
}


