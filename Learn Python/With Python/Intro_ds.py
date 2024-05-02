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
numbers = [10, -10, 0, 287, "Saturday", "Sunday"]
empty = []
# - Method 2
empty = list (())
group = list ((10, "Hello", "  ", "World")) # [10, 'Hello', '  ', 'World']
array = list (("Ali")) # ['A', 'l', 'i']
# - Method 3
Sequence = list((range(1, 10))) # [1, 2, 3, 4, 5, 6, 7, 8, 9]


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
print(numbers[::3]) # [1, 4, 7, 10]
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



## in Operator
'''
    - For Check If Element Exit In List Or No
    - Syntax
    --- Element in ListName
    --- Element not in ListName
    --- return True or False

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




## 2D List

### Introduction, Creating, Filling, Operations
'''
    - 2D List Is List Of Lists => Matrix === 2D List

    Create Matrix
    - Method 1
    --- ListName = [[1, 2], [1, 3], [3, 4]]
    - Method 2
    --- ListName =  [1, 2], [1, 3],[3, 4]]

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
print(car) # We Add color Key

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



## Copy Concept in Python
'''
    Created A New List || Tuple || Dict || Set
    If I Change A Copy Will Not Affected To Original List
    If I Change A Original Will Not Affected To Copy List
'''
def remove_defs(L1, L2):
    for e in L1:
        if e in L2:
            L1.remove(e)
    return L1 # Not Correct
print(remove_defs([1, 2, 3, 4], [1, 2, 5, 6 ]))
def remove_defs(L1, L2):
    L1_copy = L1.copy()
    print(L1_copy)
    for e in L2:
        if e in L1_copy:
            L1.remove(e)
    print(L1_copy)
    return L1
print(remove_defs([1, 2, 3, 4], [1, 2, 5, 6])) # [3, 4]


## Append To Array --> Append Reference
'''
    You are actually appending a reference to the same list object
'''
warm = ["yellow", "Orange"]
hot = ["red"]
brightColors = [warm] # [["yellow", "Orange"]]
brightColors.append(hot) ## Append Reference
print(brightColors) #  [["yellow", "Orange"], ["red"]] 
hot.append("pink")
print(brightColors) # [['yellow', 'Orange'], ['red', 'pink']]


## List + Allocation Dynamic
'''
    List in First Reserve a Space In Memory
    If Space Plein Add New Space The Equal Space That Exist

    Size That Take Tuple Is Small Then List
'''


## Multiplication Operator
'''
    You are actually creating a list with four references to the same inner list [12]
'''
L1 = [[12]] * 4
print(L1)
L1[0][0] = True
print(L1) # [[True], [True], [True], [True]]


## Tricks --> Know All Method and Function That Exist 
s = "Hello"
l = [1, 2, 3]
t = (1, 2, 3)
print(dir(s))
print(dir(l))
print(dir(t))
print(help(l.sort()))


## Deep Copy && Shallow Copy
'''
    Deep Copy We Copy Just Value
    Shallow Copy We Copy Reference --> Any Change Will Affect To Reference
'''
## Deep Copy && Shallow Copy
# Shallow Copy --> By Reference
x = [1, 2] 
L = [x, 3, 4] 
print(f"L :", L)
x[0] = 10
print(x) # [10, 2]
print(L) # [[10, 2], 3, 4]
L[0][1] = True
print(x) # [10, True]

# Deep Copy --> By Value
L1 = [1, 2, 3, 4]
L2 = L1.copy() # Deep Copy Just Value
L2[0] = 10
print(L1)
L1[0] = 10
print(L2)


# Advanced Example
import copy
x = [1, 2]
L = [x, 3, 4] # Shallow Copy
L2 = L.copy() # Deep Copy --> By Reference
print(L) # [[1, 2], 3, 4]
x[0] = 100
print(L) # [[100, 2], 3, 4]
print(L2) # [[100, 2], 3, 4]
L2[0][1] = 2024 # Changing By Reference
print(x) # [100, 2024]
print(L) # [[100, 2024], 3, 4]
L2[0] = 30
print(L2) # [30, 3, 4]
print(L) # [[100, 2024], 3, 4]
# For Solve The Problem Do The Shallow Copy Of x
L2 = copy.deepcopy(L)
print(L2) # [[100, 2024], 3, 4]
L2[0][1] = 12
print(L2) # [[100, 12], 3, 4]
print(L) # [[100, 2024], 3, 4]
L[0][1] = "TRue"
print(x) # [100, 'TRue']


