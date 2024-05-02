# Introduction
'''
    Each Date Type In Python Is Object
    Instance Attributes || object Attributes --> Propriety That Exist In Initializing Function
    Each Object Have A Different Memory Address --> Two Object Is Different
    id(objectName) --> Get The Id Of Object
    If Object Has An Parameter --> Error --> Default Parameter
    method is function in class
        instance Methods --> Take A self
        instance Methods --> Take A self and another parameter
        Class Method --> Take A Self
        Statics Method --> Take Nothing --> LIke A Helper Method
'''


class Student:
    ## class Attribute
    NumberOfStudent = 0
    def __init__(self, name="John Deo", age=0, courses="none"):
        ## instance attribute
        self.name = name
        self.age = age
        self.courses = courses
        Student.NumberOfStudent += 1
    def sayHello(self):
        # return f"Hello {self.name}, Your Age is {self.age}, You Have {self.courses}"
        return "Hello {}, Your Age is {}, You Have {}".format(self.name, self.age, self.courses)
    def isOld(self, num):
        if self.age <= num:
            print(f"Student Is Not Old")
        else:   
            print(f"Student Is Old")


student_1 = Student("Abdellah", 20, ["C", "OPP", "JS"])
student_2 = Student("Abdellah", 20, ["C", "OPP", "JS"])

print(student_1 == student_2) # False
print(id(student_1), id(student_2)) # Different Id

## Where Is Encapsulation
student_1.name = "Ahmed"
student_1.age = 10
print(student_1.age, student_1.name) # 10 Ahmed
print(Student.NumberOfStudent) # 2 --> Have Two Object

print(student_1.sayHello())
print(student_2.sayHello())
student_2.isOld(60) 
print("-----------------")




# Encapsulation
'''
    Each Attribute in __init__ function is Public Attribute
    Encapsulation Does Not Work Where is Public Attribute
    Public --> Private --> __attribute
    Where is An Public Attribute Can Not Access To Attribute or Change
    Change To Private Attribute
        objectName.attr = "value" --> Making A New Attribute
        setMethodName(NewName) --> For Change The Value If The Attribute
    You Can Make For Each Attribute Getters Methods And Setters Methods
'''
class Person:
    def __init__(self, name="John Deo", age=0, courses="none"):
        self.__name = name # Private Attribute
        self.age = age # Public Attribute
        self.courses = courses
    def getName(self):
        return f"{self.__name}"
    def setName(self, Newname):
        self.__name = Newname
    def describe(self):
        return f"Hello {self.name}" ## Access To New Attribute

student_1 = Person("Ahmed", 30, ["C", "OPP", "JS"])
student_2 = Person("Mohamed", 20, ["OS", "NetWork", "DSA"])

## With Public Attribute
print(student_1.getName())
student_1.name = "Islam" ## Change The Value Of The Attribute
print(student_1.name)
student_1.setName("Omaima")
print(student_1.name)

# ## With Private Attribute
student_2.name = "John Deo" ## Add New Attribute
print(student_2.name) # John Deo 
print(student_2.getName()) # Mohamed
print(student_2.describe()) ## Hello John Deo




## Class Method
'''
    @classmethod In Technique For Modifier The Behavior Of The Function
    With Decretory We Can Make Another __init__ Functions 
    Take A Class Like A Parameter Not A Self
    Difference Between Instance Method and Class Method
        Class Method --> Class As Parameter, Can Modifier The Class Attribute

    Magic Functions || dunder [double underSchool]
        Change The Content Of Memory To Another Function
        dir(ClassName) --> Get All Magic Function
        Function That Responsible Of Represent The Text Object When I Print It
'''
from datetime import date
class Person:
    def __init__(self, name="John Deo", age=0): ## Contractor
        self.__name = name 
        self.__age = age 
    def describe(self):
        return f"My name is {self.__name} and my age is {self.__age}"
    @classmethod
    def initFromBirthday(cls, name, birthday):
        return cls(name, date.today().year - birthday)

person_1 = Person("Abdellah", 20)
person_2 = Person.initFromBirthday("Ahmed", 1993)
print(person_2.describe())
print(person_1.describe())




class Pizza():
    def __init__(self, ingredients:list):
        self.ingredients = ingredients
    @classmethod
    def veg(cls):
        return cls(["tomatoes", "potatoes", "onions", "mozzarella"])
    @classmethod
    def margherita(cls):
        return cls(["tomatoes", "potatoes", "onions", "vanilla"])
    def __str__(self):
        return f"Pizza Ingredients Are {self.ingredients}"

pizza_1 = Pizza(["potatoes", "tomatoes"])
pizza_2 = Pizza.veg()
pizza_3 = Pizza.margherita()
print(dir(Pizza))
print(pizza_1)
print(pizza_2)
print(pizza_3)



## Statics Method
'''
    Difference Between class method and statics method
        - Class method take a Class as Parameter
        Can Change The Class Attribute 
        - Statics Does Not take Any Parameter
        Can Not Change Anythings
'''
class Math:
    @staticmethod
    def add(x, y):
        return x + y
    @staticmethod
    def add5(x):
        return x + 5
    @staticmethod
    def PI():
        return 3.14

x = Math.add(10, 5)
y = Math.add5(x)
print(x, y) # 15 20


class Pizza():
    def __init__(self, ingredients:list, radius:int):
        self.radius = radius
        self.ingredients = ingredients
    def __str__(self):
        return f"Pizza Ingredients Are {self.ingredients}"
    def area(self):
        return Pizza.circle_are(self.radius)
    @staticmethod
    def circle_are(r):
        return r ** 2 ** Math.PI()

pizza = Pizza(["Vanilla", "Sonde"], 10)
print(pizza.area())

class Dates:
    def __init__(self, date):
        self.__date = date
    def getDate(self):
        return self.__date
    @staticmethod
    def toDashDate(date):
        return date.replace("/", "-")

d  = Dates("15-12-2024")
dateWithDash = Dates.toDashDate("15/12/2024")
print(d.getDate()) # 15-12-2024
print(dateWithDash) # 15-12-2024



## Polymorphism && Inheritance
'''
    We Inherit [ Methods, ClassMethod, classAttr, StaticsMethod, instanceAttr ]
    isinstance(objectName, ClassNAme) --> For Confirm If That Object Make From ClassNAme
'''
from datetime import date
class Person:
    x = 0
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def describe(self) -> str:
        return f"Hello {self.name} You Are {self.age} "
    @classmethod
    def SimpleINit(cls, name, birthday, country, isManager, salary):
        return cls(name, date.today().year - birthday, country, isManager, salary)
    @staticmethod
    def calc(salary, age):
        return salary + age


class Man(Person):
    gender = "Male"
    Number_of_man = 0
    def __init__(self, name, age, isManager, country, salary):
        self.country = country
        self.__isManager = isManager
        self.salary = salary
        # Person.__init__(self, name, age)
        super().__init__(name, age)
        Man.Number_of_man += 1
    def describe(self):
        string = super().describe() ## Overwrite Of The Function --> Polymorphism
        isManager = "You Are" if self.__isManager == True else "You Are Not"
        salary = super().calc(self.salary, self.age)
        return string + f"and Your country is {self.country} And {isManager} A Manager\
            and Your Salary Will Be {salary}"


man1 = Man("Abdellah", 19, True, "Morocco", 29203)
print(man1.describe())
print(man1.gender, man1.Number_of_man)
print(man1.x) # 0
print(man1.age) # 19

# person2 = Person.SimpleINit("Ahmed", 1990, "France", False)
# print(person2.describe) // Because Of The Parameter That Give To The __init__
man2 = Man.SimpleINit("Abdellah", 2005, "Maroc", True, 5677)
print(man2.describe())

print(isinstance(man1, Man)) # True
print(isinstance(man1, Person)) # True



# Abstraction
'''
    prevents a user from creating an object of that class
    + compels a user to override abstract methods in a child class

    Abstract Class = a class which contains one or abstract methods.
    Abstract Method = a method that was has a declaration but does not an implementation#
        Does Not Contains Any Functionality --> Use pass KeyWord
    Every Method Exit In Abstract Class Should Be Exit In Child If Not Make Error
'''

from abc import ABC, abstractmethod
# from abc import ABCMeta, abstractmethod

class Shape(ABC): # class Shape(metaclass=ABCMeta)
    @abstractmethod
    def area(self):
        pass
    @abstractmethod
    def perimeter(self):
        pass

class Square(Shape):
    def __init__(self, side):
        self.__side = side
    def area(self): ## Overwrite To Abstract Methods
        return self.__side * self.__side
    def perimeter(self):
        return self.__side * 4

class Rect(Shape):
    def __init__(self, width, length):
        self.__width = width
        self.__length = length
    def area(self):
        return self.__width * self.__length
    def perimeter(self):
        return (self.__width * self.__length) * 2


square = Square(10)
print(f"The Square Area is {square.area()} And Perimeter {square.perimeter()}")
rect = Rect(10, 20)
print(f"The Rectangle Area is {rect.area()} And Perimeter {rect.perimeter()}")




# Dunder Function
'''
    Every Class Has A Dunder Function
    Object1 + Object2 -- > Error --. Use __add__(self, other) --> self.name, other.name
    Object1 > Object2 -- > Error --. Use __add__(self, other) --> self.age, other.age

'''

class Man:
    def __init__(self, name, age) -> None:
        self.name = name
        self.age = age
    def __add__(self, other):
        names = self.name + " and " + other.name
        ages = self.age + " and " + other.age
        return f"Sum Names {names} And Sum Ages {ages}"
    def __lt__(self, other):
        return self.age < other.age

man1 = Man("Abdellah", "20")
man2 = Man("Ahmed", "30")

print(dir(Man)) # All Dunder Function
print(man1 + man2) # Error --> Return String
print(man1 < man2) # Error --> True











