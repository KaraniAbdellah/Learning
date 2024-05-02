# NamedTuple()
import collections
from collections import namedtuple
Student = collections.namedtuple('Student',['name', 'age', 'DOB'])
di = {'name': "Nihil", 'age': 19, 'DOB': '1391997'}
# using ** operator to return namedtuple from dictionary
print("The namedtuple instance from dict is  : ")
print(Student(**di))

myColor = namedtuple("color", ["red", "green", "yellow"])
color1 = myColor(red=122, green=322, yellow=322)
color2 = myColor(red=21, green=43, yellow=126)
print(color1.red)
print(color2[1])



## Another Example
from typing import NamedTuple
class person(NamedTuple):
    name : str
    age: int
    salary: float
def verification(path):
    try:
        with open(path, "r") as file:
            myList = [person(*line.split(",")) for line in file]
            print(myList)
            file.seek(0)
            myList2 = []
            for line in file:
                myList2.append(person(line.split(",")[0], line.split(",")[1]))
            for x in myList:
                print(x.nom)
                print(x.note)
    except:
        print("Can Not Open This File")
    return myList
# verification("file.txt")


## *
arr = ['sunday', 'monday', 'tuesday', 'wednesday']
# without using asterisk
print(' '.join(map(str,arr))) 
# using asterisk
print (*arr)

def addition(*args):
    return sum(args)
print(addition(5, 10, 20, 6))


# using asterisk
def food(**kwargs):
    for items in kwargs:
        print(f"{kwargs[items]} is a {items}")
food(fruit = 'cherry', vegetable = 'potato', boy = 'srikrishna')


arr = [[i for i in range(0, 10)]  for j in range(0, 3)]
print(arr) 



