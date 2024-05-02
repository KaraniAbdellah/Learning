# OOP
## Python Objects and Class
from oop import Doctor
'''
    Python is an object oriented programming language.
    Almost everything in Python is an object, with its properties and methods.
    A Class is like an object constructor, or a "blueprint" for creating objects

    ## Create Class && Object
    - Syntax 
        class MyClass:
            x = 5
        ObjectsName = MyClass()

    ## The __init__() Function
    - All classes have a function called __init__(), 
    - which is always executed when the class is being initiated
    - Note : The __init__() function is called automatically 
        every time the class is being used to create a new object.

    ## The __str__() Function
    - function controls what should be returned when the
        class object is represented as a string.
'''
class Employee:
    def __init__(self, name : str, age: int, country :str, salary : str, isManager: bool):
        self.name = name
        self.age = age
        self.country = country
        self.salary = salary
        self.isManager = isManager
    def __str__(self) -> str:
        return f"{self.name}, {self.age} Living in {self.country}, {self.salary}"
person1 = Employee("Abdellah", 19, "Maroc", "7000$", True)
person2 = Employee("Franco", 19, "France", "10000$", True)
print(person1.name) # Abdellah
print(person1) # Abdellah, 19 Living in Maroc, 7000$

print(person2.isManager) # True
print(person2) # Franco, 19 Living in France, 10000$


## Object Methods && Modify Object Propriety && Delete Prop
'''
    - Objects can also contain methods. Methods in objects 
        are functions that belong to the objects

    - Note: self parameter
        used to access variables that belongs to the class
        it does not have to be named self , you can call it whatever you like
        it has to be the first parameter of any function in the class:

    - Modify Like This 
        ObjectName.Prop = New_Value

    - Delete a Prop or Object
        del ObjectName.prop
        del ObjectName

    - pass Statement
        if For reason have a class without a content print pass for no getting an error
'''
class Describe:
    def __init__(self, color, size):
        self.color = color
        self.size = size
    def myFunc(abc):
        return f"Color : {abc.color} And Size : {abc.size}"
flower = Describe("red", "1.3cm")
print(flower.myFunc()) # Color : red And Size : 1.3cm

flower.color = "Yellow"
print(flower.color)

del flower.color
try: 
    print(flower.color)
except Exception as e:
    print(f"{e}")

class Person:
    pass



## Python Inheritance --> Part 1
''' 
    Inheritance allows us to define a class that inherits all
    the methods and properties from another class
    - Parent class : is the class being inherited from, also called base class.
    - Child : class is the class that inherits from another class, also called derived class.

    class Parent:
        Prop ..
    class Child(Parent)
        pass
'''
class Person: ## Parent Class
    def __init__(self, fname, lname):
        self.firstname = fname
        self.lastname = lname
    def PrintName(self):
        print(self.firstname, self.lastname)

PersonObj = Person("John", "Doe")
PersonObj.PrintName() # John Doe
class Student(Person): ## Student Inherit All Propriety Form Person
    pass
StudentObj = Student("Mike", "Olsen")
StudentObj.PrintName() # Mike Olsen

StudentObj.age = 10
print(StudentObj.age)
PersonObj.isManager = True
print(PersonObj.isManager) 
print(StudentObj.isManager) ## 'Student' object has no attribute 'isManager'



## Python Inheritance --> Part 2
''' 
    ## Add the __init__() Function
    - Note : The child's __init__() function overrides to The parent Class
    - Solution : Call To The Parent Class
        ParentClass.__init__(self, fname, lname, age)

    class Parent:
        Prop ...
    class Child(Parent)
        def __init__(self, arg1, arg2, New)
            ParentClass.__init__(self, arg1, arg2, ...)
            super().__init__(arg1, arg2, ...)
        self.NewProp = New
'''
class Person: ## Parent Class
    def __init__(self, fn1ame, ln1ame, a1ge):
        self.firstname = fn1ame
        self.lastname = ln1ame
        self.age = a1ge
    def PrintName(s):
        print(s.firstname, s.lastname)

class Student (Person): ## Child Class
    def __init__(self, fname, lname, age, year): ## Add year
        # Person.__init__(self, fname, lname, age)
        super().__init__(fname, lname, age)
        ## Add a New Prop Called GraduationYear
        self.GraduationYear = year
        ## Add A Method Called Welcome
    def welcome(self) -> str:
        return f"Welcome, {self.firstname} {self.lastname}"
StudentObj = Student("Abdellah", "Karani", 19, 2019) ## Add 2019
print(StudentObj.firstname) # Abdellah
print(StudentObj.GraduationYear) # 2019
print(StudentObj.welcome()) # Welcome, Abdellah Karani



### Example
from oop import Doctor
class Doctor:
    def __init__(doc, country, age):
        doc.count = country
        doc.ag = age
    def YearStudied(self):
        print("I Studied 6 Year")
    def WorkPlace(self):
        print("I Work In Hospital")
    def PayByWho(self):
        print("I Get Paid By Government")
## Parent Class
DoctorObj = Doctor("maroc", 40)
print("Hi Iam From",DoctorObj.count, "I Am", DoctorObj.ag, "Years old") 
DoctorObj.YearStudied()
DoctorObj.WorkPlace()
DoctorObj.PayByWho()

## Child Class
class FamilyDoctor (Doctor):
    def __init__(self, country, age, name):
        Doctor.__init__(self, country, age)
        super().__init__(self, country, age)
        self.name = name
    def PayByWho(self):
        print("I Get Paid By People")
FamilyDoctorObj = FamilyDoctor("France", 50)
FamilyDoctorObj.YearStudied() # I Studied 6 Year
FamilyDoctorObj.WorkPlace() # I Work In Hospital
FamilyDoctorObj.PayByWho() # I Get Paid By Government --> before Adding Method
FamilyDoctorObj.PayByWho() # I Get Paid By People --> After Adding Method


## Another Example
class Person:
    def __init__(self, name, address, NumC, hours):
        self.name = name
        self.address = address
        self.NumC = NumC
        self.hours = hours

class Student:
    def __init__(self, name, address, NumC, hours, grades):
        Person.__init__(self, name, address, NumC, hours)
        self.grades = grades
    def getGrades(self):
        return self.grades

class Teacher:
    def __init__(self, name, address, NumC, hours, pyRate):
        Person.__init__(self, name, address, NumC, hours)
        self.PayRate = pyRate
    def getSalary(self):
        return self.PayRate

person = Person("Ahmed", "Maroc", 12, 30)
student = Student("Abdellah", "Maroc", 10, 20, ["Bac+1", "Bac+2"])
teacher = Teacher
print(person.name)
print(person.address)
print(person.NumC)
print(person.hours)
print("-------------")
print(student.name)
print(student.address)
print(student.NumC)
print(student.hours)
for item in student.grades:
    print(item, end=" ")
print(student.getGrades())

## Polymorphism
'''
    The word "polymorphism" means "many forms", and in programming 
    it refers to methods/functions/operators with the same name that
    can be executed on many objects or classes.
'''
## Class Polymorphism
class Person1:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def sayHello(self):
        return f"Hello {self.name}"
class Person2:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def sayHello(self):
        return f"Hello {self.name}"
class Person3:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def sayHello(self):
        return f"Hello {self.name}"
obj1 = Person1("Abdellah", 20)
obj2 = Person1("Ahmed", 24)
obj3 = Person1("Omaima", 21)
for item in (obj1, obj2, obj3):
    print(item.name)
    print(item.age)
    print(item.sayHello())
    print("=========")

## Another Example
class fell:
    def __init__(self) -> None:
        self.posRow: tuple
        self.posColumn: tuple
    def setNewPos(self,newRow, newColumn): # setters method
        self. posRow = newRow
        self.posColumn = newColumn
    def getPos(self): # getters method
        return (self.posRow, self.posColumn)
Fell = fell()
Fell.posColumn = (1, 2)
Fell.posRow = (1, 2)
Fell.setNewPos((3, 4), (5, 6))
print(Fell.posRow)
print(Fell.posColumn)



## Inheritance Class Polymorphism
class Vehicle: # Parent
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model
    def move(self):
        print("Move!")
class Car(Vehicle): # Child 1
    pass
class Boat(Vehicle):# Child 1
    def move(self):
        print("Sail!")
class Plane(Vehicle):# Child 1
    def move(self):
        print("Fly!")
car1 = Car("Ford", "Mustang") # Create a Car object
boat1 = Boat("Ibiza", "Touring 20") # Create a Boat object
plane1 = Plane("Boeing", "747") # Create a Plane object
for x in (car1, boat1, plane1):
    print(x.brand)
    print(x.model)
    x.move()



