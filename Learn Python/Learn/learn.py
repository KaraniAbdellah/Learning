# How The Code Executed => Line By Line
print("*" * 10) # ***********

# Variables && Assignment
''' - Variable Type
    --- [int float string bool dictionary list complex]
    - Variable naming
    --- Do Not begin With Zero
    --- Do Not Use Reserve Word [try, for, in, def, print, input ...]
    --- Python Is Sensible [My Is Deferent By my]
'''
price = 10
price = 20
rating = 4.7
name = "Abdellah Karani"
is_learned = True
is_learned = False
a, b = 4, 50
a, b = b, a # Change The Content a And b
x, y, z = "Orange", "Banana", "Cerise"



# Escape Sequences Character
print("Hello\tWorld!") # Hello    World
print("Hello\rWorld!") # World!o
print("This is a backslash: \\") # This is a backslash: \
print("Hello\bWorld!") # HellWorld!
print("\u03A9")  # Omega symbol (Greek letter) Ω
print("\U0001F609")  # 😀 (smiling face emoji)



# Getting Input => input() && print()
'''
    - input Always Return String => Go To Type Conversion
'''
name = input("What is Your Name? ")
color = input("What is Your Favorite Color? ")
print(name + "Likes" + color)
print(name, "Likes", color)


# Type Conversion
birth = input("Birth Year: ")
birth = "1990"
age = 2019 - birth # Error 
age = 2019 - int(birth) # Not Error 
print(birth)


# Using Built Function To Convert
birth = "1990"
birth = int(birth) # 1990
birth = float(birth) # 1990
birth = bool(birth) # 1990
print(type(birth)) # boolean

weight = input("What Is Your Weight : ")
weight_kg = int(weight) * 0.45 # without int return error
print(weight_kg) # 72.0


# Strings
course = "Python's Course For \"Beginners\""
print(course) # Python's Course For "Beginners"

message = '''
Hi John 
How Are Your 
    Dear Your Friend
'''
print(message)

index = "Abdellah Karani"
print(index[0]) # A
print(index[-1]) # i
print(index[0:8]) # Abdellah
print(index[0:]) # Abdellah Karani => Length
print(index[:8]) # Abdellah => Start From 0
print(index[1:-1]) # bdellah Karan


# sep && end
print("Hello World") # Hello World
print("Hello","World", sep = "-") # Hello-World => spe = "Separator"
print("Hello","World", sep = "-" * 10) # Hello----------World
print("Hello", end = "??")
print("World") # Hello??World => end = "Separator" => Return New Line
print("Good Morning") # Good Morning
# sep Take The Separator And Add Him Between Word
# end Take Separator And Return New Line Have All Statement


# Formatted Strings
first = "John"
last = "Week"
message = first + " [" + last + "] is a Coder"  
msg = f'{first} [{last}] is a Coder' # Formatted Strings
print(message)
print(msg)


# Strings Methods
# upper() || lower() || find("") || replace("", "") || "..." in Variable
course = "Python For Beginners"

print(len(course)) # 20
print(course.upper()) # PYTHON FOR BEGINNERS
print(course) # Python For Beginners
print(course.lower()) # python for beginners
print(course) # Python For Beginners

print(course.find("P")) # 0
print(course.find("X")) # -1
print(course.find("Beginners")) # 11 => Because Beginners Start With Index 11

print(course.replace("Beginners", "Advanced")) # Python For Advanced
print(course.replace("beginners", "Advanced")) # Python For Beginners => Can Not Find "beginners"

print("beginners" in course) # False
print("Beginners" in course) # True


# Arithmetic Operator
### Normal Operator
print(10 + 3) #  13
print(10 - 3) # 7
print(int(10 / 3)) # 3
print(10 // 3) # 3
print((10 / 3)) # 3.3333333333333335
print((10 % 3)) # 1
print((10 ** 3)) # 1000

### Augment Assignment Operator => Exponentiation > Multiplication
x = "face"
y = "Book"
print(x + y) # faceBook
x = 10
x += 3
x -= 3
x *= 3
x /= 3
x //= 3
x **= 3
x = x + 2 * 3 ** 2 # 10 + 2 * (3 ** 2) 
print(x) # 28

### comparison expression
x = 10
y = 20
result = x > y
result = x < y
result = x <= y
result = x >= y
result = x == y
result = x != y

### Logical Operator
x = 10 
y = 20
result = (x < y) and (y < x) # false
result = (x < y) or (y < x)  # true
result = (x < y) or not (y > x) # true
print(result)



# Math Function => Search
import math # For Import Math Function
x = -10.3
print(round(x)) # -10
print(abs(x)) # 10.3
print(math.ceil(10.4)) # 11
print(math.floor(10.9)) # 10
print(math.factorial(10)) # 3628800
print(math.fmod(10, 4)) # 2 => Modula
print(pow(2, 3)) # 8 => power
pow(x, y, z) # x ** y % z
print(math.sqrt(64)) # 8
print(math.pi) # Return The Value Of Pi => 3.14
print(math.log2()) # return The Logarithm In base 2
print(math.trunc(12.4)) # return integer value => 12
#########################################################



# If Statement
temperature = int(input("Enter The Temperature Please : "))
if temperature < 0 or not temperature < 100:
    print(f"It Is Cold Day") 
elif temperature >=0 and temperature <= 40:
    print(f"It Is May Bet A Normal Day")
else:
    print(f"It Is Hot Day")

### Nested Statement
x = int(input("Enter A Number Please : "))
y = int(input("Enter Another Number Please : "))
if y == 0:
    print("Impossible Division")
    answer = input("For Change The Numbers : Yes(y) or No (n)")
    if answer.upper() == "Y":
        y = y - x
        x = x + y
        y = x - y
        print(f"The Result Is : {x / y}")
else:
    print(f"The Result Is : {x / y}")

data = "Hello"
if data >= "a" and data <= "z":
    print("We Can Compare The Character By Code ASCII") ## a = 64 and b = 65 => a < b
### Ternary Statement
x = int(input("Enter A Number Please : "))
y = int(input("Enter Another Number Please : "))
print("Impossible Division") if y == 0 else print(f"The Result Is : {x / y}")


###############################


# Loop

### Introduction
'''
    - What Is A Sequence
    --- In Python, a sequence is a collection of objects, arranged in a particular order.
    --- A sequence can be either a list, a tuple, or a string. Sequences are iterable, 
    --- meaning you can loop over the elements in a sequence one by one

    ---- Example In C Is Array 
    List, Dictionary Tuples ... Chaine de Character
'''
Country = "Maroc" # In Memory ["M", "a", "r", "o", "c"]
for i in Country:
    print(i) # M a r o c
'''
in Python In Loop We Use range Function 
    - range (Start, End, Stop)
    - range(n) => n is Last Index In Sequence if range(8) => [0, 1, 2, 3, 4, 5, 6, 7]
    - range(n, m) => Range Between n And m The Sequence range(2, 4) => [2, 3]
    - range(n, m, p) => p Is pas range(0, 10, 2) => [0, 2, 4, 6, 8]
'''


### For Loop && Nested Loop
for i in range(0, 5):
    print(i + 1) # 1 2 3 4 5 

for i in range(0, 11):
    print(f"{i} * 7 = {7 * i}") # Multiplication Table

s = 0
for i in range(1, 21):
    s += i
print(f"The Sum Is {s}") # 210

for i in range(1, 11):
    print(f"Multiplication Of Number : {i}")
    for j in range(1, 11):
        print(f"{i} * {j} = {i * j}")

line = int(input("Enter The Line Number : "))
colone = int(input("Enter The Colone Number : "))
for i in range(line):
    for j in range(colone):
        print("* ", end=" ")
    print()


### While Loop
condition = 5
while (condition) == True:
    print("It Is True")
print("Good Job")
# Example
a = int(input("Enter a Number : "))
i = 1
while (a < 1 or a > 10) and i <= 10:
    print(f"{a} x {i} = {a * i}")
    i += 1


### Break and Continue
## Example For Break => When The Number negative => Stop The Loop
s = 0
for i in range(0, 8):
    print("Enter A Note ", i + 1, ":", end = " ")
    nbr = int(input())
    if nbr < 0:
        break
    s += nbr
print(f"The Sum Is : {s}")
## Example For Continue => When The Number negative => Continue In Last Index
s = 0
for i in range(0, 8):
    print("Enter A Note ", i + 1, ":", end = " ")
    nbr = int(input())
    if nbr < 0:
        continue
    s += nbr
print(f"The Sum Is : {s}")


#####################################################


# Function, lambda function, Module and Package
## Function
'''
    - def => KeyWord
    - DRY => Do Not Repeat Your Self
    - Argument
    - Parameter
    - Syntax

    def Function_Num (Argument):
        // Block Of Code
        return Result

    def Function_Num (Argument: type, Arg2: type) -> type:
        // Block Of Code
        return Result [return Depend The Type Of Return]

    - Use Case About Define A Function
    --- Without Argument And return
    --- With Argument And Without return => Procedure [My Be Uniq Language Is Pascal]
    --- Without Argument And With return
    --- With Argument And return 
    - Use Cases About Call Function
    --- Function_Name(arg1, arg2, ...)
    --- Function_Name()
    --- VarName = Function_Name() => VarName = y / Function_Name 
    --- VarName = Function_Name(arg1, arg2, ...)
'''
def sayHello():
    print("Hello World!") 
sayHello() # Hello World!

def sayHello(Fname, Lname):
    print(f"Hello {Fname} {Lname}")
print(sayHello("Abdellah", "Karani")) # Hello Abdellah

def calc():
    a = -10
    b = 10
    return a + b 
print(calc()) # 0

def calc(x, y):
    return x + y
x = 10 / calc(10, -20) # 10 / -10 => -1
print(x) ## -1


### Advanced Example
def Singe(A, B):
    if A * B > 0:
        print(f"{A} And {B} Have The Same Singe")
    else:
        print(f"{A} And {B} Have Not The Same Singe")
def Min(A, B):
    if A < B:
        return A
    else:
        return B 
def Max(A, B):
    if A > B:
        return A
    else:
        return B
def Active():
    A = int(input("Enter A : "))
    B = int(input("Enter B : "))
    Singe(A, B)
    print(f"The Min Is :", Min(A, B))
    print(f"The MAx Is :", Max(A, B))
Active()


#### Local Variable And Global Variable || Scope
'''
    - Local Variable
    --- Reserve An Space In Memory And Stock Value But 
        When The Function Done Delete The Space
    --- global => Keyword => For Not Add A New Space In Memory

    - Example
'''
y = 3 # y => Global Variable
def show():
    global x
    y = 2 # y => Local Variable => Programme Add New Space For y
    x = 7 # x => Local Global => Programme Do not Add A New Apace In Memory
    print(y)
    print(x)
show() # 2 \n 7
print(y) # 3
print(x) # NameError: name 'x' is not defined 
def f():
    global x
    x = 10
    print(x)
f()
print(x)
##### Example
def EX2():
    def function(x, y):
        global a ### Not Reserve In Space Temporary In Memory
        a = 45
        x, y = y, x
        b = 17 
        print(a, b, x, y)
    a, b, x, y = 3, 15, 3, 4
    function(9, 81) # Output : 45 17 81 9
    print(a, b, x, y) # Output : 45 15 3 4
#### Another Example
def EX3():
    a = 1
    def f():
        print(a)
    def g():
        a = 2
        print(a)
    def h():
        global a
        a = 45
        print(a)
    print(a) # 1
    f() # 1
    print(a) # 1
    g() # 2
    print(a) # 1 
    h() # 45
    print(a) # 45
    #### Another Example
    z = 10
    def f():
        global z
        z = 3
    def g(x, y):
        global z
        return x + y + z
    f()
    total = g(4, 5) 
    print(total) # 12
#### Example Important
x = 3
def f():
    # m = x --> Function Use Directly x = 3
    global x
    print (x)
    x = x + 1 ## Looking in local scope
    print(x) ## UnboundLocalError --> Without global x
f()
'''
In Python, when you use a variable inside a function, Python assumes it's 
a local variable by default
~---~ This is a part of the variable scoping rules in Python ~---~
'''


### Typing The Parameter
'''
    - Typing Parameter
    --- Required Argument
    --- Default Argument
    --- With Labels Argument [KeyWord] =>
    ---- function (a = 2, b = 2) => All Argument
    - When We Change The Argument => Change The Result 
'''
# - Required Argument
def Subtract(a, b):
    c = a - b 
    print("a - b = ", c)
a = int(input("Enter A Number :")) # 6
b = int(input("Enter A Number :")) # 2
Subtract(b, a) # -4
Subtract(a) # Subtract() missing 1 required positional argument: 'b'
Subtract(a, b, x) # name 'x' is not defined
Subtract() #  missing 2 required positional arguments: 'a' and 'b'

# - Default Argument
def Subtract(a = 3, b = 0):
    c = a - b 
    print("a - b = ", c)
a = int(input("Enter A Number :")) # 6
b = int(input("Enter A Number :")) # 2
Subtract(a) # 6
Subtract() # 3

# - With Labels Argument [KeyWord]
def Subtract(a, b):
    c = a - b
    print("a - b = ", c)
Subtract(a = 10, b = 5) # 5

##### Important Examples
# - Game 1 Valid Or Not
def Valid_not():
    def show(a, b):
        print(a, b)
    show() # Not Valid
    show(8, 4) # Valid
    show(85) # Not Valid
    # show(a = 3, 2) # Not Valid
    show(2, a = 3) # Not Valid
    show(2, 3, 3) # Not Valid
    # show(b = 6, 8) # Not Valid
    show(a = 8, b = 6) # Valid
    show(b= 6, a = 8) # Valid
    show(2, 1, b = 9)  # Not Valid
# - Game 2 Valid Or Not
def Valid_not():
    def show(a, b = 5, c = "N"):
        print(a, b, c)
        show(8) #  Valid
        show(a = 5) # Valid
        show(8, 5) # Valid
        show(8, 5, c = 2) # Valid 8 5 2
        show(8, 5, 2) # Valid 8 5 2
        show(2, 3, 1, 1) # Not Valid
        # show(c = 8, 8) # Not Valid !!! => Depend In Keyword
        show(c = 7, a = 1) # Valid
        show(4, e = 1) # Not Valid
        show(4, c = 4) # Valid
        show(0, 7, b = 1) # Not Valid !!! => Keyword
        show(4, c = 4, b = 2) # Valid



### lambda function or anonymous function
'''
    - Regular Function --> Function With A Name
    - Anonymous Function --> Function Without A Name

    - A lambda function can take any number of arguments,
    - but can only have one expression.

    - Syntax
    -- lambda arguments : expression

    - Why Use Lambda Functions ?
    -- The Power Is When We use It With regular Function
    - 0x00000152a3419e40 --> the hexadecimal memory address
    -- where the lambda function is stored
'''
addOne = lambda a: a + 1
print(addOne(10)) # 11
summing = lambda a, b, c : a + b + c + addOne(9)
print(summing(5, 6, 2)) # 23

def power_function(n):
    return lambda a : a * n
myDoubler = power_function(2)
print(myDoubler) # <function power_function.<locals>.<lambda> at 0x00000152a3419e40>
print(myDoubler(11)) # 22
print(power_function(10)(10)) # 100



## Modules
'''
    - import math => math Is Modules Installer
    - Goals Of Modules
    --- For Import The Function From Another Files[fichier]
    --- DRY => Do Not Repeat Yourself
    --- Complexity => Simple
    --- Duplication => Useful

    - Import The Files [fichier] Methods
    # Method 1
    -- from fileName import * => Overwrite => Import All Files
    --- functionName(Arguments)
    # Method 2
    -- from fileName import somme, division => Import Function somme And division
    --- functionName(arg1, arg2, ..., argN)
    # Method 3
    -- import fileName 
    --- fileName.functionName(args)
    # Methods 4
    -- import fileName as f 
    --- fileName.f(args)
    as => Keyword
    # Methods 5
    -- from fileName import somme as s
    --- s(args)
'''
# - Methods
from play import *
from play import singe, min, max, sayHello
import play
import play as p
from play import sayHello as s
# - Method 1 And 2
from play import *
from play import singe, min, max, sayHello
singe(10, -10)
min(10, -10)
max(10, -10)
sayHello()

# - Method 3
import play
play.singe(10, -100)
play.sayHello()

# - Method 4
import play as f
f.max(10, -2200)
f.min(10,12)

# - Method 5
from play import sayHello, min as x
x(10, -10)
sayHello()



## Package
'''
    - Like Modules But It Useful When You Have The Directory In Each Function
    - Group Of Modules Exist In Same Directory
    - Add Files [__init__.py] => For Python Consider Like A Package
    - This Must Exit In Directory --> __init__.py => Empty File
'''
# Add the path to your project directory
import sys
sys.path.append(r'c:\\Users\\lenovo\\Desktop\\Learning\\Learn Python')
from projet.function import sayHello, min, max, singe
sayHello()
min(10, -10)
max(10, -10)
singe(10, -10)



## Modules Standard 
import math as m
x = 10
######### math Function
print(m.factorial(x))
import random 
######### random
# n = random.randrange(start, end, step)
n = random.randrange(0, 102, 2)
print(n)
######### statistics
import statistics
mode = statistics.mode([10, 20, 20, -10, 20, -10, 102]) # Number That Repeated => 20
sd = statistics.stdev([10, 20, 20, -10, 20, -10, 102]) # Ecart Type
print(mode, sd)
######## date
from datetime import date
today = date.today()
print(today)
######## Open Website
import webbrowser
webbrowser.open("https://www.youtube.com")
######## Convert Bitcoin => Must Install This Library
from xdrlib import BtcConverter # xdrlib = forex_python.bitcoin
bitcoin = BtcConverter()
print(bitcoin.get_latest_price("EUR"))
print(bitcoin.converter_to_btc(6000, "USD"))


#####################################################


# Data Structure  => List, Tuples, Sets, Dictionary
#############
## List


### Big Introduction
'''
    - List Have Not A Fix Size And It Is Orders[0, ... , len(ListName) - 1] And Modifiable
    -- Orders
    --- [0, 1, 2, 3, ..., n - 1] === [-n, ... ,-4 ,-3 ,-2, -1]
    - The Element May Be In A Different Type [string, boolean, integer, float, list] 
    - Confined By Square Bracket And Each Element Between Virgule
'''


### Method of Creating A List
'''
    - ListName = [V1, V2, ..., Vn]
    - ListName = list ((V1, V2, ... , Vn))
    - ListName = list ((range(Start, End, Step)) 
    --- Create A Sequence But Not Including The End
    --- Start, End, And Step Should Be Numbers
'''
# - Method 1
numbers = [10, -10, 0, 287]
days = ["Monday", "Thursday", "Wednesday", "Tuesday", "Friday", "Saturday", "Sunday"]
empty = []
# - Method 2
empty = list (())
group = list ((10, "Hello", "  ", "World")) # [10, 'Hello', '  ', 'World']
array = list (("Ali")) # ['A', 'l', 'i']
# - Method 3
Sequence = list((range(1, 10))) # [1, 2, 3, 4, 5, 6, 7, 8, 9]
Sequence = list((range(1, 10, 3))) # [1, 4, 7]


### Access Of List
'''
    - print(LisName)
    - print(ListNAme[index])
    - ListName[index] = Y 
    - Can Access In Positive or Negative Indexing
'''
array = [10, 20, 30, 40]
print(array) # [10, 20, 30, 40]
print(array[0]) # 10
print(array[-1]) # 40
print(array[len(array) - 1]) # 40
print(array[-4], array[-3]) # 10 20

# - Example
n = int(input("Enter A Number : "))
numbers = list(range(1, n + 1))
print(numbers)
even = list(range(0, n + 1, 2))
print(even)
odd = list(range(1, n + 1, 2))
print(odd)


### Slicing
'''
    - Slice
    --- Create A New List
    --- Not Including The End
    - Syntax
        lisName[StartIndex : EndIndex : Step]
        --- Step => We Start Count Of The Next Start Element 
'''
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# With Positive Sense
four = numbers[0:100:1] # [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
one = numbers[0:4] # [1, 2, 3, 4]
one = numbers[0:10:2] # [1, 3, 5, 7, 9]
tow = numbers[:4] # [0:4:1] => [1, 5, 9]
three = numbers[::2] # [0:len(numbers):2] => [1, 3, 5, 7, 9]

# With Negative Sense
print(numbers[-1:-10:-2]) # [10, 8, 6, 4, 2]
print(numbers[-4: -2: 1]) # [7, 8]
print(numbers[-3: -5: -1]) # [8, 7]
print(numbers[::3]) # [1, 4, 7, 10]
print(numbers[-3::-3]) # [8, 5, 2]
print(numbers[::-1]) # [10, 9, 8, 7, 6, 5, 4, 3, 2]
print(numbers[1:-3:]) # [2, 3, 4, 5, 6, 7]
print(numbers[-4:0:-1]) # [7, 6, 5, 4, 3, 2]
print() 

# Big Example
sayHello = ["H", "e", "l", "l", "o", ",", " ", "W", "o", "r", "l", "d", "!"]
print(sayHello[0:-8]) # Hello
print(sayHello[::-4]) # !ooH
print(sayHello[-12:6:2]) # ['e', 'l', ',']
print(sayHello[2:50:5]) # ['l', 'W', '!']
print(sayHello[-2:-13:-3]) # do,l
print(sayHello[-9:-9:-1]) # []
print(sayHello[-12:-2:2]) # el,Wr
print(sayHello[-12:-2:-2]) #  []


### Operations
'''
    - Concatenation [+]
    --- Syntax
            NewList = List1 + List2 || List1 += List2
    - Repetition [*]
    --- Syntax
            NewList = List1 * n || List1 *= n [Create List n Time]
    - Comparison [==, !=, <=, =>, >, <]
    --- Syntax
            x = List1 == List2 => Return True or False [Depend The First Element]
    - Multiple Assignment
    --- Syntax
            Var1, Var2, Var3 = ListName ---> NbrEle == Vars
    - Multiple Assignment Slicing
    --- Syntax
            ListNAme[::] = ["Add", "Here"] => NbrEle == Vars
'''
# - Comparison, Repetition And Concatenation
list1 = [1, 2, 13, 14]
list2 = [5, 6, 7, 8]
print(list1 + list2) # [1, 2, 13, 14, 5, 6, 7, 8]
print(list1 * 2) #  [1, 2, 13, 14, 1, 2, 13, 14]
print(list1 != list2) # True
print(list1 == list2) # False
print(list1 >= list2) # False
print(list1 <= list2) # True

# - Multiple Assignment
player = ["Lionel Messi", 1987, 1.69]
name = player[0]
datE = player[1]
taille = player[2]
name, datE, taille = player # One Line
print(name) # Lionel Messi
print(datE) # 1987
print(taille) # 1.69

# - Multiple Assignment Slicing
'''
    - side1 <= side2
    - Except If Want Change All Element In The List
'''
Melange = ["Ali", -6, 10, 2.5, "d", True]
Melange[:3:1] = [23, 0, False]
print(Melange) # [23, 0, False, 2.5, 'd', True]
Melange[-2::] = ["x", False]
print(Melange) # [23, 0, False, 2.5, 'x', False]
Melange[1:4:] = ["Remove"]
print(Melange) # [23, 'Remove', 'x', False]
Melange[1:2] = ["Ali", "OK", 100]
print(Melange) # [23, 'Ali', "OK", 100, 'x', False]
Melange[3:5] = []
print(Melange) # [23, 'Ali', 'OK', False]
Melange[-2:-2] = ["WE", "HERE"]
print(Melange) # [23, 'Ali', 'WE', 'HERE', 'OK', False]
Melange[100::] = ["End"]
print(Melange) # [23, 'Ali', 'WE', 'HERE', 'OK', False, 'End']
Melange[0::2] = ["X", "X", "X", "X"]
print(Melange) # ['X', 'Ali', 'X', 'HERE', 'X', False, 'X']
Melange[::3] = [8]
print(Melange) # Error
Melange[0::2] = ["X", "X"]
print(Melange) #  Error => Must In Same Length 
Melange[::] = ["Try", "Again", "The", "End"]
print(Melange) # ['Try', 'Again', 'The', 'End']
print("-------------------------------")

# - Exercises 
list1 = list(range(1, 10, 4)) 
print(list1) # [1, 5, 9]
list2 = list(range(1, 16, 5)) 
print(list2) # [1, 6, 11]
list3 = list1 + list2 
print(list3) # [1, 5, 9, 1, 6, 11]
list4 = list1 * 4
print(list4) # [1, 5, 9, 1, 5, 9, 1, 5, 9, 1, 5, 9]
print(list4 == list3) # False
list3[-3:-1] = [1, 5, 9]
print(list3) # [1, 5, 9, 1, 5, 9, 11]
list5 = [4, 5] * 2 + list1[::-1]
print(list5) # [4, 5, 4, 5, 9, 5, 1]
print(list5 <= list3) # False
list6 = list(range(0, 5, 3)) + list2 * 2
print(list6) # [0, 3, 1, 6, 11, 1, 6, 11]



## in Operator
'''
    - For Check If Element Exit In List Or No
    - Syntax
    --- Element in ListName
    --- Element not in ListName
    --- return True or False
    - Syntax for
    --- for Element in ListName: print(Element)

    - enumerate Method
    --- For Use Two Variables On The Same Loop
    - Syntax
    --- for index, value in enumerate(listName, start):

    - zip Method
    - For Using A Lot of Lists In The Same Loop
    - Syntax
    --- for V1, V2, V3, ..., Vn in zip(L1, L2, L3, ..., Ln):
    - Loop Stop In The List That Have Small Length
'''
nbr = [1, 2, 3, 13, 12, 3, 4, 10]
print(2 in nbr) # True
print(-1 not in nbr) # True

## With List Sequence
for note in nbr:
    print(note) ## All Element In Vertical 
for i in range(len(nbr)):
    print("Note Number", i, "Is", nbr[i])

## With enumerate Method
for i, note in enumerate(nbr, start=1):
    print("Note Number", i, "Is", note) ## i Will Be Start With 1

# With zip Method
names = ["M", "E", "A", "Q", "O"]
notes = [12, 13, 9, 7, 16]
for n, m in zip(notes, names):
    print(m, "=", n)

# Example 1
language = ["C#", "C++", "Java", "PHP", "Python"]
Date = [2000, 1980, 1995, 1994, 1991]
Creator = ["Microsoft", "Bjran", "Sun", "Rasmus", "Guido"]
for i, j, k in zip(language, Date, Creator):
    print(i, "Create In", j, "By", k)
# Example 2
notes = []
for i in range(0, 5):
    n = float(input("Enter Notes Number : "))
    notes.append(n)
for  i, note in enumerate(notes, start=1):
    print("Notes Student Number {} is {}".format(i, note))



## 2D List

### Introduction, Creating, Filling, Operations
'''
    - 2D List Is List Of Lists => Matrix === List Imbreque

    Create Matrix
    - Method 1
    --- ListName = [[1, 2], [1, 3], [3, 4]]
    - Method 2
    --- ListName = [
        [1, 2],
        [1, 3],
        [3, 4]
    ]

    Fill The Matrix
    - Method 1
    - Method 2

    Operations
    -- Can Use All Built In Function And Method That We Say
'''
## Create A 2D List || Imbreque
MyList = [10, ["Math", "Chimie"], True, "Maroc", ["Python",["Php", "Js", "Css"], "C++"]]
print(MyList) # List Imbreque
# 1D + 1D = 2D
matrix = []
for i in range(10):
    FirstList = []
    for j in range(4):
        FirstList.append(i)
    matrix.append(FirstList)
print(matrix)


## Access An Element
MyList = [10, ["Math", "Chimie"], True, "Maroc", ["Python",["Php", "Js", "Css"], "C++"]]
print(MyList[1][0]) # Math
print(MyList[4][1][2]) # Css
MyList = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11]
]
print(MyList[:]) # [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]]
print(MyList[1]) # [4, 5, 6, 7]
print(MyList[-1]) # [8, 9, 10, 11]
print(MyList[2][0]) # 8
print(MyList[1][-2]) # 6
print(MyList[1][0:2]) # [4, 5]
print(MyList[2][::-1]) # [11, 10, 9, 8]


## Fill The Matrix
### Method 1
MyList = [
    [60, 55, 1],
    ["Maroc", True],
    ["Python", "Php", "JS", "Html"],
]
### Method 1
for line in MyList:
    for j in line:
        print(j, "\t", end = "\t")
    print()
### Method 2
for i in range(len(MyList)):
    for j in range(len(MyList[i])):
        print(MyList[i][j], end = "\t") # Print All Element Of MyList
    print()


## Operations
MyList = [
    [60, 55, 1],
    ["Maroc", True],
    ["Python", "Php", "JS", "Html"],
]
### Add
MyList.append(1)
print(MyList) # Add 1 In Last List
MyList[0].append(1)
print(MyList[0]) # Add 1 First List => [60, 55, 1, 1]

MyList.insert(0, "Function")
print(MyList) # Add Function In First Index [0]
MyList[3].insert(2, "Node JS")
print(MyList[3]) # ['Python', 'Php', 'Node JS', 'JS', 'Html']

MyList.extend([2, 3])
print(MyList) # Add 2 And 3 In End Of List
MyList[1].extend([3, 4])
print(MyList[1]) # [60, 55, 1, 1, 3, 4]

# Suppression
MyList = [
    [60, 55, 1],
    ["Maroc", True],
    ["Python", "Php", "JS", "Html"],
]
MyList.remove(MyList[0])
print(MyList) # ['Maroc', True], ['Python', 'Php', 'JS', 'Html']
MyList.remove(['Maroc', True])
print(MyList) # ['Python', 'Php', 'JS', 'Html']

MyList[0].pop(1) # [[60, 1], ['Maroc', True], ['Python', 'Php', 'JS', 'Html']]
print(MyList)

MyList.clear()
print(MyList) # []

del MyList[2]
print(MyList) # [60, 55, 1], ['Maroc', True]
del MyList[0][1]
print(MyList) # [60, 1], ['Maroc', True]
del MyList[::]
print(MyList) # []

# Math Operation + Others
MyList = [
    [60, 55, 1],
    ["Maroc", True],
    ["Python", "Php", "JS", "Html"],
]
print(len(MyList)) # 3
print(len(MyList[2])) # 4

print(sum(MyList)) # unsupported operand type(s) for +: 'int' and 'list'
print(sum(MyList[0])) # 116

print(max(MyList[0])) # 60
print(min(MyList[0])) # 1

print(MyList[0].count(55)) # 1

MyList.reverse()
print(MyList) # ['Python', 'Php', 'JS', 'Html'], ['Maroc', True], [60, 55, 1]
MyList[0].reverse()
print(MyList[0]) # ['Html', 'JS', 'Php', 'Python']

MyList.reverse()
MyList[0].sort()
print(MyList[0]) # [1, 55, 60]
MyList[0].sort(reverse=True)
print(MyList[0]) # [60, 55, 1]
MyList[2].sort(key= str.upper,reverse=True) ## Can Not Sort The Boolean Value
print(MyList[2]) # ['Python', 'Php', 'JS', 'Html']
MyList[2].sort(key=len, reverse=True)
print(MyList[2])  # ['Python', 'Html', 'Php', 'JS']

print(MyList)
OtherListC = sorted(MyList[0], reverse=True)
OtherListD = sorted(MyList[0], reverse=False)
print(OtherListC) # [60, 55, 1]
print(OtherListD) # [1, 55, 60]
OtherListStr = sorted(MyList[2], reverse=True, key=len)
print(OtherListStr) # ['Python', 'Html', 'Php', 'JS']

print(MyList[0].index(60, 0, len(MyList[0]))) # 0

# Duplication
NbrList = MyList[0].copy()
print(NbrList) # [60, 55, 1]


### Beautiful Example
warm = ["yellow", "Orange"]
hot = ["red"]
brightColors = [warm] # [["yellow", "Orange"]]
brightColors.append(hot)
print(brightColors) #  [["yellow", "Orange"], ["red"]] 
hot.append("pink")
print(brightColors) # [['yellow', 'Orange'], ['red', 'pink']]

def remove_defs(L1, L2):
    for e in L1:
        for e in L2:
            L1.remove(e)
    return L1 # Not Correct
print(remove_defs([1, 2, 3, 4], [1, 2, 5, 6 ])) # list.remove(x): x not in list

def remove_defs(L1, L2):
    L1_copy = L1.copy()
    for e in L2:
        if e in L1_copy:
            L1.remove(e)
    return L1
print(remove_defs([1, 2, 3, 4], [1, 2, 5, 6 ])) # [3, 4]



#############
## Tuples
'''
    - Unchangeable, Allow Duplicates, Ordered, Tuple Items --> [index]
    - Syntax --> TupleName = (X, Y, Z, ...) or NTuple = tuple()
    - Like List But It Is Can Not Change The Element
    - Access To Element With Index
    - Create List Of Tuples
    - UseCases
    --- Slicing
    --- Update Tuples
    - 2D Tuples --> Syntax --> TupleName = ((X1, Y1), (X2, Y2), (Z1, Z2), ...)
    --- Methods && Built-In-Function [max(), min(), len(), count(), index() ...]
'''
coordinates = tuple() ## Create A Tuple
coordinates = (21, 23) # (X, Y)
print(coordinates) # (21, 23)
print(coordinates[::]) # (21, 23)
print(coordinates[0]) # 21

coordinates[0] = 10
print(coordinates) # 'tuple' object does not support item assignment

listOfTuples = [(23, 23), "Hello", ("Hi", "How", "Are"), "You"]
print(listOfTuples) # (23, 23), 'Hello', ('Hi', 'How', 'Are'), 'You']
listOfTuples[0] = 12
print(listOfTuples) # [12, 'Hello', ('Hi', 'How', 'Are'), 'You']

### Tuple1 + Tuple2 && Slicing + Example
cooX = (21, 23) # len = 2
cooY = (12, 34)
R = cooX + cooY
print(R) # (21, 23, 12, 34)
print(len(R)) # 4
print(R[0:3:]) # (21, 23, 12)
print(cooX[-1]) # 23

def getData():
    Tuple = ((1, "Hello"), (2, "How"), (3, "Are"), (4, "You"), (5, "?"))
    nums = ()
    words = ()
    for t in Tuple:
        nums = nums + (t[0],) ## (1, ) + (2, ) + (3, ) + (4, ) + (5, )
        words = words + (t[1],)
    nums = sum(nums)
    words = max(words)
    return (nums, words)
print(getData()) # 15 You

### Update Tuple, Unpacking Tuple
x = ("apple", "banana", "cherry")
y = list(x)
y[1] = "kiwi"
x = tuple(y)
print(x) # ('apple', 'kiwi', 'cherry')


### Operations
'''
    - Concatenation [+]
    - Repetition [*] or Multiply
    - Comparison [==, !=, <=, =>, >, <]
    - Multiple Assignment or Unpacking Tuple
    - Multiple Assignment Slicing
'''
tuple1 = ("a", "b" , "c")
tuple2 = (1, 2, 3)
tuple3 = tuple1 + tuple2
tuple4 = tuple2 * 2
tuple5 = tuple1 >= tuple1
print(tuple4) # (1, 2, 3, 1, 2, 3)
print(tuple3) # ('a', 'b', 'c', 1, 2, 3)
print(tuple5) # True

fruits = ("Unpacking", "banana", "Tea")
(green, yellow, red) = fruits
print(green) # Unpacking
print(yellow) # banana
print(red) # Tea

fruits = ("Multiple", True, "banana", 12, "Slicing")
myList = list(fruits)
myList[1:4] = [False, "Tea", 21]
fruits = tuple(myList)
print(fruits) # ('Multiple', False, 'Tea', 21, 'Slicing')

### Methods && Built-In-Function
myList = [1, 2, 3, 4, 45, 556, 3, "Functions"]
MyTuple = tuple(myList)
print(min(MyTuple)) # 1
print(max(MyTuple)) # 556
print(MyTuple.index(1)) # 0
print(MyTuple.count(3)) # 2



#############
## Dictionary
### Intro
'''
    - Dictionaries are used to store data values in key:value pairs
    - A Dictionary is a Collection Which Is
    --- ordered* [Just In Version  Python 3.7]
    --- changeable
    --- Do Not Allow Duplicates [Uniq Key]
    --- If Are Duplicated Keys --> Get The Last Key
    - Key Can Be Number Or String
'''
info = {
    "name": "Abdellah",
    "LatName": "Karani",
    "age": 19,
}
print(info) # {'name': 'Abdellah', 'LastName': 'Karani', 'age': 19}


### Access In Item && Get The Keys
'''
    - Two Method For Access To Keys
    - DicName["KeyName"]
    - DicName.get("KeyName", "Alt Text If Doesn't Exist")

    --- get --> Get None If No Key
    --- ["key"] --> Get Warning

    - For Get The Keys && Values
    --- DicName.keys --> Return List Of Keys
    --- DicName.values --> Return List Of Values
'''
info = {
    0: "zero",
    "name" : "Abdellah",
    "LastName": "Karani",
    "age": 19, 
    "age": 20,
    "Check": True,
    "Favorite": ["Tomatoes", "Orange", "Apple"]
}
print(info) # {'name': 'Abdellah', 'LastName': 'Karani', 'age': 19}
print(info["name"]) # Abdellah
print(info["age"]) # 20
print(info.get("age", "No Age Key")) # 20
print(info[0]) # zero
print(info["Check"]) # True
print(info.get("Favorite"))
print(info.get("Favorite")[0]) # Tomatoes

# print(info["Country"]) # Warning
print(info.get("Country")) # None
print(info.get("Country", "The Key Does Not Exist")) # None

keyInfo = info.keys()
valueInfo = info.values()
print(keyInfo) # dict_keys(['brand', 'model', 'year'])
print(valueInfo) # dict_values(['Ford', 'Mustang', 1964])


### Change Values && Update Dictionary
'''
    - You can change the value Of An Item
    --- DictName["item"] = value

    - The update() Method Will Update The Dictionary Item
    --- DictName.update({"key", value})
'''
car = {
    "brand": "Ford",
    "model": "Mustang",
    "year": 1964
}
car["year"] = 2018 ## Update The Value Of year Key
print(car) # {'brand': 'Ford', 'model': 'Mustang', 'year': 2018}

car.update({"year": 2020})
car.update({"brand": "Tesla"})
print(car) # {'brand': 'Tesla', 'model': 'Mustang', 'year': 2020}


### Add Item && Remove Item
'''
    - Just Use New key And New Value
    --- DictName["NeWKey"] = "Value"

    - For Remove use pop(), popitem(), del And clear()
    --- DictName.pop("key")
    --- DictName.popitem() --> Remove Last Item
    --- del DictName["key"] --> Delete The Item
    --- del DictName --> Delete The Dictionary Completely
    --- DictName.clear() --> For Empties The Dictionary
'''
car = {
    "brand": "Ford",
    "model": "Mustang",
    "year": 1964
}
car["color"] = "red"
print(car) # We Add color

car.pop("model")
car.popitem()
del car["brand"]
car.clear()
print(car) # {}


### copy && Loop
'''
    - For Copy Use copy() method
    --- varName = car.copy()

    - For Loop --> Use in Operator And DictName Sequence
'''
car = {
    "brand": "Ford",
    "model": "Mustang",
    "year": 1964
}
myCar1 = car.copy()
myCar2 = dict(car)
print(myCar1) # {'brand': 'Ford', 'model': 'Mustang', 'year': 1964}
print(myCar2) # {'brand': 'Ford', 'model': 'Mustang', 'year': 1964}

#### Print all keys
for i in car:
    print(i) # brand model year
for i in car.keys():
    print(i) # brand model year

#### Print all values
for i in car:
    print(car[i]) # Ford Mustang 1964
for i in car.values():
    print(i) # Ford Mustang 1964

#### Print Key And Value
for x, y in car.items():
    print(x, y) # brand Ford \n model Mustang \n year 1964


### Nested Dictionary
myFamily = {
    "child1" : {
        "name" : "Emil",
        "year" : 2004
    },
    "child2" : {
        "name" : "Tobias",
        "year" : 2007
    },
    "child3" : {
        "name" : {
            "Child11": "Linus",
            "Child12": "Jon"
        },
        "year" : 2011
    },
}
all = {
    "Family": myFamily,
}
print(myFamily.get("child1")) # {'name': 'Emil', 'year': 2004}
print(myFamily["child3"]["name"].values()) # dict_values(['Linus', 'Jon'])
print(all["Family"]["child3"]["name"]["Child11"]) # Linus


### Methods
'''
    - dict.fromkeys(keys, value)
    --- Return A Dictionary With Specified Keys And values
    --- keys --> Required || value --> Optional [Default : None]

    - dictionary.setdefault(keyName, AltValue)
    --- Returns the value of the specified key. If the key does not exist: 
    --- insert the key, with the specified value
    --- keyName --> Required || value --> Optional [Default : None]
'''
x = ('key1', 'key2', 'key3') ## ['key1', 'key2', 'key3']
y = 0
MyDict = dict.fromkeys(x, y)
print(MyDict) # {'key1': 0, 'key2': 0, 'key3': 0}

car = {
    "brand": "Ford",
    "model": "Mustang",
    "year": 1964,
}
x = car.setdefault("model", "Bronco")
y = car.setdefault("NoKey", "Bronco")
print(car)
print(x) # Mustang
print(y) # Bronco



#############
## Sets
### Intro
'''
    - Sets Are Used To Store Multiple Items in a Single Variable && Can Be Any Data Type
    - A set Is A Collocation Wish Is :
    -- unordered --> Unordered Means That The Items Don't Have a Defined Order
    --- unchangeable --> We Cannot Change The Items After The Set Has Been Created
    --- Duplicates Not Allowed --> Set Cannot Have Two Items In same Value

    - Set Like A random
    - Note: Set items are unchangeable, but you can remove items and add new items
    - Note: False and 0 or True and 1 --> Considered The Same Value

    Can Use len(setName) && type(setName) --> number && <class 'set'>
'''
MyList = [1, 2, 2, 1, 4, 5, 2, 4, 5, 4, 4, 6, 1, 3, True]
language = ["Js", "Html", "React", "Vue", "Js", "Vue"]

Uniq_set = set(MyList)
print(Uniq_set) ## {1, 2, 3, 4, 5, 6}
Lan_set = set(language)
print(Lan_set) ## {'Html', 'Vue', 'Js', 'React'}

print(type(Uniq_set)) ## <class 'set'>
print(Uniq_set[0]) # 'set' object is not subscriptable
print(len(Uniq_set)) # 6


### Access Set Items, Add Set Item, remove Items
'''
    - Access To Items
    --- Can Not Access With index --> Use Loop

    - Add Items
    --- SetName.add(Element) --> Add In First Set

    - Add Any Data Type [], (), or {}
    --- To Add Setx Items To Sety Items, Use The update() Method
    --- update() Method Use For Any Data Type 
    --- BothSet.update(SetX) --> We Add SetX to BothSet

    - Remove An Item From Set
    --- To remove an item in a set, use the remove(), or the discard() method
    --- SetN.remove() -->  If the item does not exist --> Error
    --- SetN.discard() -->  If the item does not exist --> no Error
    --- SetN.pop() --> Will Remove A random Item
    --- SetN.clear --> The clear() method empties the set
    --- del SetN --> Delete The Set Completely
'''
set1 = {"abc", 34, True, 40, "male"}
set2 = {"API", "DSA", "DB", "OS", "NW"}
myList = [1, 2, 3, 4]

for i in set1:
    print(i) # True 34 male 40 abc

set1.add(0)
print(set1) # {0, True, 34, 'abc', 'male', 40}

set1.update(set2)
set1.update(myList)
print(set1) ## We Add Set2 Items And MyList Items To Set1 Items

set1.remove("abc")
set1.discard(True)
set1.discard("Function")
set1.pop() ## random Item
print(set1) ## remove "abc" && True From set1


### Join Sets
'''
    There are several ways to join two or more sets in Python By Using : 
    -- SetX.union(SetY) --> Returns a New Set With All Items From Both Sets
    -- SetX.update(SetY) --> Method Inserts The Items in setX into setY
    -- union() and update() Will Exclude Any Duplicate Items

    Keep ONLY the Duplicates
    -- BothSet.intersection_update(SetY) 
    --> Keep Only The Duplicated Item In BothSet
    -- z = x.intersection()
    --> Return New Set

    Keep All, But NOT the Duplicates
    -- BothSet.symmetric_difference_update(SetY)
    --> Keep The Element There Are Not Present in Both Set
    -- z = x.symmetric_difference(Y) 
    ---> Keep All Without The Duplicates In A Variable
'''
set1 = {"a", "b" , "c"}
set2 = {1, 2, 3}

set3 = set1.union(set2)
print(set3)
set1.update(set2)
print(set1)


x = {"apple", "banana", "cherry"}
y = {"google", "microsoft", "apple"}

y.intersection_update(x)
NewIn = y.intersection(x)
print(y)
print(NewIn)

x.symmetric_difference_update(y)
NewSy = x.symmetric_difference(y)
print(x) ## {'google', 'banana', 'microsoft', 'cherry'}
print(NewSy) ## {'google', 'banana', 'microsoft', 'cherry'}

'''
Python Collections (Arrays)
There are four collection data types in the Python programming language:

- List : collection which is ordered and changeable. Allows duplicate members.
- Tuple : collection which is ordered and unchangeable. Allows duplicate members.
- Set : collection which is unordered, unchangeable*, and unindexed. No duplicate members.
- Dictionary : collection which is ordered** and changeable. No duplicate members.
'''
MyList = ["Function", True, 10]
myDict = {
    "name": "Abdellah",
    "age": 20,
}
myTuple = (20, "Function", True)
mySet = {"Function", True, 10}


################
# Python Try Except
'''
    - try --> We Try To Execute
    - except --> If The try Code Return An Error
    - except ErrorName as e --> We Print The Error [Why try Does Not Executed] 
    --- NameError, SyntaxError, ZeroDivisionError, TypeError, ValueError

    --> NameError: 'x' is not defined
    --> TypeError: can only concatenate str (not "int") to str
    --> SyntaxError: invalid syntax

    - else --> Will Executed If No Error

    - finally --> Will Executed if There is an Error or Not
'''
try:
    print(x) # x Not Defined
except:
    print("Error")
else:
    print("I Will Not Executed Because Of The Error")
finally:
    print("will be executed regardless if the try block raises an error or not")

while True:
    try:
        x = int(input("Please enter a number: "))
        break
    except ValueError as v:
        print(f"Oops!  That was no valid number.  Try again...{v}")

def divide_numbers(a, b):
    try:
        result = a / b
        print(f"The result of {a} divided by {b} is: {result}")
    except ZeroDivisionError as e:
        print(f"Error: {e} Not Allowed")
divide_numbers(10, 10) # 1
divide_numbers(10, 0) # Error: division by zero Not Allowed
# divide_numbers(a, b) ### Error
try:
    divide_numbers(a, b)
except NameError as e:
    print(f"Error: {e}") # Error: name 'a' is not defined

'''
    - raise --> Stop The Programme And Raise An Error
    - You Can Raise Any Type Of Error
    - We Choose The Raise According To The Use Cases in except
'''

x = -1
if x < 0:
    raise Exception("Sorry, no numbers below zero")
    raise TypeError("Not Integer")
    raise SyntaxError("Syntax Error")
    raise ValueError("Error Value")



################
# Python Iterators
'''
    Technically, in Python, an iterator is an object which implements
        the iterator protocol, which consist of the methods 
        __iter__() and __next__().
'''
## Iterator vs Iterable
'''
    - Iterable
        Object Contains Data That Iterated with index
        Example [tuple, set, dictionary, list, string ...]
    - Iterator
        Object Used To Iterate Over Iterable Using next() Method 1 Element At Time
        You Can Generate Iterator From Iterable Using Iter() Method
        For Loop Already Call Iter() Method Behind The Scene
        Gives "StopIteration" If There is No Next Element
'''
myTuple = ("apple", "banana", "cherry") # tuple is iterable but not iterator
# print(next(myTuple)) # 'tuple' object is not an iterator
myIter = iter(myTuple) # now it iterator
print(next(myIter)) # apple
for item in myIter:
    print(item)
for item in ("apple", "banana", "cherry"):
    print(item)

## Create Iterator
'''
    To create an object/class as an iterator you have to implement 
        the methods __iter__() and __next__() to your object.

    The __iter__() method acts similar, you can do operations (initializing etc.),
        but must always return the iterator object itself.

    The __next__() method also allows you to do operations, and must 
        return the next item in the sequence.
'''
class Iterator:
    def __iter__(self):
        self.a = 10
        return self
    def __next__(self):
        if self.a <= 20:
            x = self.a
            self.a += 1
            return x
        else : raise StopIteration
myObject = Iterator()
myIter = iter(myObject)
print(next(myIter))
for item in myIter:
    print(item)



################
# Python Generator
'''
    Generate is Function With "yield" KeyWord Instead of "return"
    It Support Iteration And return Generate yield by Calling To Function
    By Using next() it Resume Where it Called "yield" Not From Beginning
    When Called It is Not Start Automatically, its Only Give You The Control 
'''
def Generate():
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5
myGen = Generate()
print(next(myGen)) # 1
print(next(myGen)) # 2
for nbr in myGen:
    print(nbr) # 3 4 5



################
## Python Decorators
'''
    - We Called Also Meta Programming
    - Decorators Is Height Ordered Function
    - Decorators Take function like a parameter
    - Decorates for improve the behavior of the function
'''
def myDecorators(func): # Decorators
    def NestedFunc(): ## Just For Decoration
        print("Top")
        func()
        print("Down")
    return NestedFunc

# deco = myDecorators(sayHello)
# deco

@myDecorators
def sayHello():
    print("Hello From Middle")
sayHello() # Top \n Hello From Middle \n Down

def sayHowAreYou():
    return "How Are You"
print(sayHowAreYou()) # How Are You


## Decorators --> Function With Parameter
'''
    if function has a parameter should be the nested
        function enter with parameter
    can use two decorator in the same function
'''
def myDecoratorsOne(func):
    def NestedFunc(a, b):
        if a < 0 or b < 0:
            print("Beware Of The Number Is Less Then Zero")
        func(a, b)
    return NestedFunc

def myDecoratorsTwo(func):
    def NestedFunc(a, b):
        print("Coming From Decorators Two")
        func(a, b)
    return NestedFunc

@myDecoratorsOne
@myDecoratorsTwo
def calc(a, b):
    print(a + b)
calc(10, -2)


## Speed Test Example
from time import time ## Give The Current Time In Second
def speedTest(func):
    def wrapper():
        start = time()
        func()
        end = time()
        print(f"Function Running Is : {end - start}")
    return wrapper
@speedTest
def bigMap():
    for number in range(0, 101):
        print(number)
bigMap()




############
## Packing And Unpacking Functions
'''
    *kwargs --> Represented Like A Tuple
    **kwargs --> Represented Like A Dictionary
'''

def calc(a, b, c, d):
    return a + b + c + d
print(calc(10, 1, 2, 3))
def calc(*args): ## Packing = Emballage
    s = 0
    for i in args: ## Unpacking
        s += i
    return s
print(calc(10, 1, 2, 3))
def showSkills(*args):
    for i in args:
        print(i)
showSkills("Html", "Git", "Css", "Sass", "Js")

myDict = {
    "Html" : 80,
    "Git" : 60,
    "Css" : 60, 
    "Sass" : 0, 
    "Js" : 20,
    "NewSkill": 10,
}
def showSkills(**kwargs):
    for skill, value in kwargs.items():
        print(f"{skill} => {value}")
showSkills(Html = 80, Git = 60, Css = 60, Sass = 0, Js = 20)
showSkills(**myDict) ## Unpack The Dictionary
