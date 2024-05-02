## Start With Function

'''
    In Affectation Variable Create Another Memory Space And Affect The Value
        x = x + 1 <==> x += 1
        Python Create A Copy And Change A Copy
        Number Is Unchangeable
    In List Python Do not Create A Copy it Is Use The Same Place In Memory
        lst2 += [3] Different Of lst2 = lst2 + [3]

    Example
        strip() --> Delete White Spaces [Space, \n ...]

    Mutable Objects [Changeable] and Immutable Objects [Unchangeable]
    - Mutable Objects
        We Do Not Create A New Space Memory
        List || Dict
    - Immutable Objects
        We Create A New Space In Memory
        x += 1
        str = str1 + "World"
        tuple1 = tuple1 + (3,)
'''

def incr(x):
    print(id(x)) # 140706767364680
    x = x + 1
    print(id(x)) # 140706767364712
    global b
    b += 1
    print(c) # 10
a = 2
b = 5
c = 10
print(id(a)) # 140706767364680
print(f"a = {a}") # 2
incr(a)
print(id(a)) # 140706767364680
print(f"b = {b}") # 6


def append(l1: list, l2: list):
    # l2.append(3)
    l2 += [3] # Like Append
    l1 = l1 + [2] # Create a New List
lst2 = [0, 1]
lst1 = [0, 1]
append(lst1, lst2)
print(lst1) # [0, 1]
print(lst2) # [0, 1, 3]

## Example
try:
    with open("input8.csv", "r") as file:
        # print(list(file))
        # file.seek(0)
        max_grade = -1
        best_student = None
        for line in file:
            identifier, f_name, l_name, grade = line.strip().split(",")
            if max_grade < int(grade):
                max_grade = int(grade)
                best_student = (f_name, l_name, identifier)
        if (best_student is None): print("No Best Student")
        print(f"Name : {best_student[0]} {best_student[1]} ID : {best_student[2]} Grade : {max_grade}")
except:
    print("File empty!")



# Start With Classes
'''
    Each Function Should Be Take Self
        Self is Object
        ObjectName.method() ==> ObjectName.method(ObjectName)
            In Object : self.Attr ==> Object.Attr
'''
class Student:
    def __init__(self, f_name, l_name, grade, identifier) -> None: # Contractor
            self.l_name = l_name
            self.f_name = f_name
            self.name = f"{f_name} {l_name}"
            self.grade = grade
            self.identifier = identifier
    def get_letter_grade(self):
        if self.grade >= 90: return "A"
        elif self.grade >= 80: return "B"
        elif self.grade >= 70: return "C"
        else: return "F"
    def theBest(self):
        return f"Name : {best_student.name}, ID : {best_student.identifier},\
            Grade : {best_student.grade}\
            Grade Letter : {self.get_letter_grade()}"
try:
    with open("input.csv", "r") as file:
        best_student = None
        max_grade = -1
        for line in file:
            identifier, f_name, l_name, grade = line.strip().split(",")
            if max_grade < int(grade):
                max_grade = int(grade)
                best_student = Student(f_name, l_name, max_grade,identifier)
        print(best_student.theBest()) # --> best_student.theBest(best_student)
except:
    print("File empty!")






