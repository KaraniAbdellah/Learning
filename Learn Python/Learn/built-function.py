# Start Built In Function

### format() Function 
'''
    - format(var, var) => Optional Method That Gives Users && 
    - More control When Displaying Output
    - {Number Of Position} => By Default Start With 0
    - {KeyWord} => By Default Start With 0
'''

animal = "Cow"
item = "Moon"
# print("The", animal, "jumped Over The", item) # The Cow Jumped Over The Moon
print("The {} Jumped Over The {}".format(animal, item)) # The Cow Jumped Over The Moon
print("The {0} Jumped Over The {1}".format(item, animal))  # The Cow Jumped Over The Moon
print("The {1} Jumped Over The {0}".format(item, animal))  # The Cow Jumped Over The Moon
print("The {1} Jumped Over The {1}".format(item, animal))  # The Cow Jumped Over The Cow

print("The {animal} Jumped Over The {item}".format(animal = "Cow", item = "Moon"))  
# The Cow Jumped Over The Moon

text = "The {} Jumped Over The {}"
print(text.format(animal, item)) # The Cow Jumped Over The Moon

name = "Abdellah"
print("Hello, My Name Is {}".format(name))
# print("Hello, My Name Is {1}".format(name)) # Error
print("Hello, My Name Is {:20} Nice To Meet You".format(name)) # Space After Abdellah
# Hello, My Name Is Abdellah     Nice To Meet You
print("Hello, My Name Is {:>10} Nice To Meet You".format(name)) # Space Before Abdellah
# Hello, My Name Is   Abdellah Nice To Meet You
print("Hello, My Name Is {:^10} Nice To Meet You".format(name)) # Space Between Abdellah
# Hello, My Name Is  Abdellah  Nice To Meet You

print("Hello, My Name Is {0:^10} Nice To Meet You".format(name)) 
# Can You Add Position Argument And Argument
# Hello, My Name Is  Abdellah  Nice To Meet You

nbr = 3.14159
nbr1 = 100000
print("The Number Pi Is : {:.2f}".format(nbr)) # The Number Pi Is : 3.14
print("The Number Come Is : {:,}".format(nbr1)) # The Number Come Is : 100,000
print("Pi in Binary : {:b}".format(nbr1)) # Pi in Binary : 11000011010100000 => Binary
print("Pi in Octal : {:o}".format(nbr1)) # Pi in Octal : 303240  => Octal
print("Pi in Hex : {:X}".format(nbr1)) # Pi in Hex 186A0  => Hex
print("Pi in Hex : {:E}".format(nbr1)) # Pi in e : 1.000000E+05  => e5

print("The Number Pi Is : ",format(nbr, ".2f"))
# The Number Pi Is :  3.14



### List Method And Functions
'''
    - Creation =>  list()
    - Add =>  append(), insert(), extend()
    - Removal => remove(), pop(), clear(), del()
    - Operations => len(), sum(), max(), min(), count(), reverse(), sort(), sorted()
    - Search => index()
    - Duplication => copy()
'''

# - Creation 
'''
    - list(range(start, end, step))
        Not Including The End
'''
list1 = list((1, 2, 3, 4, 5))
print(list1) # [1, 2, 3, 4, 5]
list_range = list(range(1, 10, 2)) 
print(list_range) # [1, 3, 5, 7, 9]


# - Add
'''
    - append()
    --- For Add An Element In The End Of List
    --- Syntax => listName.append(element)

    - insert()
    --- For Insert An Element With Inserting Index
    --- Syntax => listName.insert(index, element)

    - extend()
    --- Add A Sequence [Tuples, Lists, Str, numbers...]
    --- Syntax => NomList.extend(Seq)
'''
list1 = ["Function", "Describe", "The"]
list1.append("World")
print(list1) # ['Function', 'Describe', 'The', 'World']

list1 = ["Function", "Describe"]
list1.insert(0, "Science")
print(list1) # ['Science', 'Function', 'Describe']

list1 = [1, 2, 3]
lang = ["Ar", "Fr", "En"]
list1.extend([4, 5, 6])
list1.extend(lang)
list1.extend("ES")
print(list1) # [1, 2, 3, 4, 5, 6, 'Ar', 'Fr', 'En', 'E', 'S']


# - Removal
'''
    - remove()
    -- Delete The Occurrence Element If Exit If Not Error
    -- Syntax => NomList.remove(Element)

    pop()
    -- Delete Element With Index If No Index Take The Latest Element
    -- Syntax => NomList.pop(index)

    - clear()
    -- Delete All Element Of The List
    -- Syntax => NomList.clear()

    - Instruction del
    -- For Delete A Element With Index Or Sequence
    -- Syntax => del NomList[index] || del NomList[Sequence]
'''
info = ["Desk", "Internet", "Keyboard", "No Fap", 100]
info.remove("No Fap")
print(info) #['Desk', 'Internet', 'Keyboard', 100]
info.remove("N") # Error

info = ["Desk", "Internet", "Keyboard", "No Fap", 100]
badHabit = info.pop(3)
print(info) # ['Desk', 'Internet', 'Keyboard', 100]
print(badHabit) # No Fap

info = ["Desk", "Internet", "Keyboard", "No Fap", 100]
info.clear()
print(info) # []

info = ["Desk", "Internet", "Keyboard", "No Fap", 100]
del info[3]
print(info) # ['Desk', 'Internet', 'Keyboard', 100]
del info[-3:]
print(info) # ['Desk']


# - Operations
'''
    - len()
    -- Return Number Of Element 
    -- Syntax => len(ListName)

    - sum()
    -- Return Sum Of The Element
    -- Syntax => sum(ListName)

    - max() && min()
    -- Return Max And Min Of A Sequence [Strings or Numbers]
    -- Syntax => min(ListName) || max(ListName)

    - count()
    -- Return Number Of Repetition Of An Element
    -- Syntax => ListName.count(Element)

    - reverse()
    -- Return Reverse of A Sequence
    -- Syntax => ListName.reverse()

    - sort() => Method
    -- Tri The List 
    -- Syntax => ListName.sort(key = , reverse = )
    --- key => For Method Of Sorting
    --- reverse => False [Croissant Tri Is Default] True [Decreasing]
    --- Default Sort By ASCII 
    --- sort Affecter Of Original List

    - sorted() => Function
    --- Tri The Element Like Sort Method
    --- Syntax => ListName = sorted(OriginalList, key="", reverse="")
    --- Sorted Does Not Affecter Of Original List
'''
info = ["Desk", "Internet", "Keyboard", "No Fap", 100]
print(len(info)) # 5

Numbs = [50, -50, 100]
print(sum(Numbs)) # 100

info = [50, -50, 100, 0]
m = sum(info) / len(info)
print(m) # 25.0

Numbs = [50, -50, 100, 0, -9, 90, 6576, 657, 87]
Strs = ["Karani", "Abdellah", "XBOX"]
info = [100, "Abdellah", "Xbox", -100]
print(max(Numbs)) ## 6576
print(max(Numbs[:5])) # 100
print(min(Strs)) # Abdellah
print(max(Strs)) # XBOX
print(min(info)) # Error
print(max(info)) # Error

Numbs = [100, 3, 100, 23, 3, 4, 3]
n = Numbs.count(3)
print(n) # 3

info= ["Function", "Described", "World"]
info.reverse() 
print(info) # ['World', 'Described', 'Function']

info = [10, -3, 4, 12]
info.sort()
print(info) # [-3, 4, 10, 12]
info.sort(reverse= True)
print(info) # [12, 10, 4, -3]

lang = ["Python", "C++", "Java", "Php", "c#"]
lang.sort(key=str.upper ,reverse=False) # Sorting By Making All Element Upper
print(lang) # ['c#', 'C++', 'Java', 'Php', 'Python']
lang.sort(key=len, reverse=True) # Sorting By Length Of The Element
print(lang) # ['Python', 'Java', 'C++', 'Php', 'c#']

lang = [1, -1, 4, 6, 19]
list1 = sorted(lang, reverse = True)
print(list1) # [19, 6, 4, 1, -1]
print(lang)  # [1, -1, 4, 6, 19]


# - Search
'''
    - index
    --- For Search An Element In The List 
    --- Syntax => ListName.index(Element, Start, End)
    ----- Start And End Is Optional
    ----- Not Including The End
'''
lang = [1, 2, 3, 4, 4, 566, 67]
print(lang.index(1)) # 0
print(lang.index(566,0, len(lang))) # 5
lang = ["a", "b", "c", "d", "e", "f", "a", "b", "c", "d", "e", "f"]
print(lang.index("b")) # 1
print(lang.index("b", 5)) # 7
print(lang.index("c", 4, 10)) # 8
print(lang.index("a", 3, 6)) # Not In The List
print(lang.index("y")) # Not In The List


# - Duplication
'''
    - copy()
    --- For Save The Element Of The List
    nbr1 = [1 ,2 ,3 ,3 ,4 ,4] # nbr1 Pointe In [1, ..., 4]
    nbr2 = nbr1 # nbr2 Pointe In [1, ..., 4]
    --- In Memory There Is One List And Two Variables
    --- When We Use Copy We Have Two Variables Pointer In Two List 
    --- Syntax => ListName = listOriginal.copy()
'''

MyList1 = [1, 2, 3, 4, 5, 6]
MyList2 = MyList1.copy()
MyList1.append(-1)
print(MyList1) # [1, 2, 3, 4, 5, 6, -1]
print(MyList2) # [1, 2, 3, 4, 5, 6]


### Exercise 1
analyse = [10, 12, 14.5, 6, 2.5]
algebra = [8, 6.5, 12, 14.5, 10.5]
probability = [9.5, 14, 12, 15, 13.5]
statistics = [19, 20, 10, 19, 18]

s = sum(analyse + algebra + statistics + probability)
moyene = s / (len(analyse) * 4)
maximum = [max(analyse + probability + statistics + algebra)]
minimum = [min(analyse + probability + statistics + algebra)]
print("The Sum Is ", format(s, ".2f"))
print("The Moyene Is ", format(moyene, ".2f"))
print(f"The Maximum Is {max(maximum)}")
print(f"The Minimum Is {min(minimum)}")


### Exercise 2
string = input("Enter A String : ")
palindrome = list((string))
alt = palindrome.copy()
palindrome.reverse()
if palindrome == alt:
    print("{} Is Palindrome".format(string)) 
else:
    print("{} Is Not Palindrome".format(string)) 


### Exercise 3
myList = ["Function", "Describe", "The", "World"]
myList.sort(key=len, reverse=True)
long = myList[0]
print("The Longest Word Is : {}".format(long))


















