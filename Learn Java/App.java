// Introduction To OOP.
// Objet & Class
/*
    Class: is a blue print or prototype, template 
    from wich objects are created
    
    Object: instance of class that represente a data

    Create instance App to acess to classes in file
    Use App instance to create objects since Classes
        is inner Class for App
    
    Defferent between objects in data value

    Access Level Modofiers
        [public, protected, private, Package-Private(by default)]
        public: i can access to attribute by using class
        protected: it is normal but for protecting the data
        private: we can access inside class (not by objects)
    
    Data Heading is Encapsulation

    signs in attributs inside class:
        -: private
        +: public
        #: protected
        empty space: default
*/

/* 
public class App {
    // create class
    class Car {
        String name;
        public int max_speed;
        private float price;
        protected int model;

        public void setName(String n) {
            this.name = n;
        }
        public void getName() {
            System.out.println("value is " + this.name);
        }
    }
    public static void main(String args[]) {
        // create a object
        App app = new App();
        Car car_obj1 = app.new Car();
        car_obj1.name = "Clio";
        Car car_obj2 = app.new Car();
        car_obj2.name = "Mercidess";
        System.out.println(car_obj1.name + car_obj2.name);

        car_obj1.getName();
        car_obj2.setName("Ford");
        car_obj2.getName(); // value if Ford

    }
}
*/










