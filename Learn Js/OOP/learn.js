// Start Learn OOP
/*
    
*/
// Classes and objets
/*
    - Classes are a template for creating objects
    - Classes is ES6 features
    - JavaScript does not support multiple constructors for a class
    - A default constructor is not explicitlydefined like
         in some other programming languages (e.g., Java or C++)
*/

// Old Version
function Product(name, price) {
    this.name = name;
    this.price = price;

    this.displayProduct = function() {
        console.log(`name = ${this.name}`);
        console.log(`price = ${this.price}`);
    }
}
const salesTax = 0.05;
const product1 = new Product("Shirt", 100.23);
product1.displayProduct();

// ES6 Version
class Employee {
    constructor(name, salary, bonus) {
        this.name = name;
        this.salary = salary;
        this.bonus = bonus;
    }
    DisplayEmployee() {
        console.log(`name = ${this.name}`);
        console.log(`salary = ${this.salary}`);
    }
    static Bonus() {
        return this.salary + this.bonus; 
    } 
}

const employee = new Employee("ahmed", 20202);
employee.DisplayEmployee();
Employee.Bonus();
// employee.Bonus(); employee.Bonus is not a function





