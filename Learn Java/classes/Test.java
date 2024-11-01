public class Test {
    int number;
    public Test() {
        this.number = 1;
    }
    public static Test sumObj(Test t1, Test t2) {
        // return t1 + t2; not support
        Test t3 = new Test();
        t3.number = t1.number + t2.number;
        return t3;
    }
}

