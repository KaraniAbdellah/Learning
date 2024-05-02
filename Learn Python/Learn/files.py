# File Handling 
byte_data = '\x48\x65\x6C\x6C\x6F'
print(byte_data)
## File handling [read(), open(), close(), ...]
'''
    - Must Import Extension Of The File --> csv, html, json, ...
    - File handling is an important part of any web application
    - Python has several functions for creating, reading, updating, and deleting files

    - open(path_name, mode) function
    -- function for open a file --> takes two parameter --> filePath and mode
    - filepath : where is the file --> use a the path of the file
    - mode
        "r" - Read - Default value. Opens a file for reading, error if the file does not exist
        "a" - Append - Opens a file for appending, creates the file if it does not exist 
            create in Parent File --> "Learn Python"
        "w" - Write - Opens a file for writing, creates the file if it does not exist
        "x" - Create - Creates the specified file, returns an error if the file exists
        "r+ - read and write
        "t" - Text - Default value. Text mode
        "b" - Binary - Binary mode (e.g. images) [e.g --> for example]

    - file.read(CharacterNbr) --> read file content
    - file.readline() --> read one line ---> readline(nbrChar)
    - file.readlines() --> read all line --> return a list
    - for i in file: print(i) --> read line by line
    - f.seek(0) --> read more one time
    - f.readable() --> is file can read it or not --> return True or False
    - f.close() --> close the file

    - seek() function is used for file handling to move the file pointer
        to a specified position within a file.
        -- Syntax --> file_object.seek(offset, whence)
        --- offset : It specifies the number of bytes to move the file pointer [Char Number]
        --- whence: It specifies the reference point for the offset can take this value : 
            0: (default): The beginning of the file.
            1: The current file position.
            2: The end of the file.
    - tell() --> Know Your Position
        fileName.tell()
'''
import os
file_path = r'C:\\Users\\lenovo\Desktop\\Learning\\Learn Python\\demo\\file.txt'
path = os.path.join("C:", "Users", "lenovo", "Desktop", "Learning", "Learn Python", "file.txt")

try:
    f = open(r"C:\\Users\\lenovo\Desktop\\Learning\\Learn Python\demo\\file.txt", "r")
    print(f.readline()) # read First Line
    f.seek(0) # Reset
    print(f.read()) # read all content
    print(f.read(5)) # First 5 character
    print(f.readline()) # read second line
    f.seek(10, 0)
    print(f.readlines()) # reading Begin Form Char 10 --> return a list
    print(f.readlines()[0]) # read first line
    f.seek(0)
    for i in f: print(i)
except:
    print(f.readable())
    f.close()



## Write And Creates Files
'''
                    |   r   r+  w   w+  a   a+
--------------------|-------------------------
read                |   +   +       +       +
write               |       +   +   +   +   +
create              |           +   +   +   +
truncate            |           +   +
position at start   |   +   +   +   +
position at end     |                   +   +

    - truncate --> Delete Old Content and Write in File
    - (w, w+) --> All Content Delete -> Use Append -> a
    - a --> write and append
    - a+ --> Append And Read and write
    - r --> read
    - r+ --> Read and Write
    - w --> write and append
    - w+ --> write and read and append
'''
try:
    f = open("demo/file.txt", "w+")
    print(f.writable())
    f.write("THis is New Line")
    myList = ["\nMake ", "Tea ", "Not ", "Love "]
    f.writelines(myList)
    f.seek(0)
    print(f.read())
    f.close()
except:
    print("Can Not Open This File")
else:
    print("Successful Reading And Writing")



## Delete A File and Checks
'''
    - import os --> For Handling The Directory
        os.remove("fileName or folderName") --> Remove
        os.path.exists("fileName or folderName") --> Check If Exit
        os.path.isfile(fileName)
        os.path.isdir(directName)
'''
import os
try:
    os.path.exists("file.txt")
    os.path.isfile("file.txt") # True
    os.path.isdir("file.txt") # False
    size = os.path.getsize("filename")
    os.remove("file.txt")
except:
    print("The file does not exist")
try:
    x = os.path.exists("demo") # True
    print(x) # True
    os.rmdir("demo")
    # Note: You can only remove empty folders
except:
    print("This Folder Does Not Exit")



## With KeyWord
'''
    with open("Path", "mode") as KeyWord:
        // Code Block

    - with --> close The file auto
        This is because the with statement calls 2 built-in methods
        behind the scene  __enter()__ and __exit()__
        The __exit()__ method closes the file when the operation
        you specify is done

    - fileName.closed --> Check If The File Closed or Not
    - file.__exit__() --> like fileName.close --> close The file
'''
try: 
    file = open("demo/file.txt", "r")
    print(file.read())
    print(file.read()) ## Can Not Read it
    file.__exit__() ## Can Close The File
    if file.closed: ## Check If The file closed Or Not
        print("It Closed")
except:
    print("Unknown File")

with open("demo/file.txt", "r") as file:
    print(file.read())



# Directory Handling --> Python OS Module Functions
## Handling the Current Working Directory --> (CWD)

'''
    - os.getcwd() --> Get The Current Directory
    - os.chdir('Learn Python') --> Change The Directory
    - os.mkdir(DirectName) --> Make a Directory
    - os.rmdir(DirectName) --> Delete The Directory
    - os.removedirs(directName) --> Remove A Directory
    - os.remove(FilePath) --> Remove A File
    - os.listdir(DirectPathName) --> List All Directory or Files That Exit In path 
    - os.path.join(path1, path2) --> path1 + path2

    - os.name --> name of Os [posix ,nt ,os2 ,ce ,java,  andriscos]
    - os.error --> an alias for built-in OSError exception
    - os.popen --> return mode --> is not recommended
    - os.close or file.close()--> close a file

    - os.rename("currentFile", "NewName") --> rename The File --> NewFile --> Current Direct
    - os.path.getsize(fileName) --> File Size in Bytes
    - os.path.exists(fileName) --> True or False Depend Existence of The File
'''
import os
print(os.getcwd()) # C:\Users\lenovo\Desktop\Learning\Learn Python
os.chdir('../') 
print(os.getcwd()) # C:\Users\lenovo\Desktop\Learning
os.chdir('Learn Python') 
print(os.getcwd()) # C:\Users\lenovo\Desktop\Learning\Learn Python


path1 = r'C:\\Users\\lenovo\Desktop\\Learning\\Learn Python'
path2 = r'make'
os.mkdir("make")
os.rmdir("make")
# os.removedirs("make")
joined = os.path.join(path1, path2)
print(joined) # C:\\Users\\lenovo\Desktop\\Learning\\Learn Python\make
directLIst = os.listdir(path1)
print(directLIst) # ['algorithm', 'demo', ...]
for item in directLIst:
    print(item, end=" ")


print(os.name)
print(os.error) ## alias of OSError
try:
    with open(r"file.txt", "r+") as file:
        file.write("Hello My File")
        file.close()
except IOError as e:
    print(f"{e}")


try:
    file = os.popen("file.txt", 'w') ## Open This File
    file.write("Hello")
    os.rename("file.txt", "rename.txt")
    print("Successfully opened and renamed")
    os.close
except IOError as e:
    print(f"Not Opening because of {e}")


size = os.path.getsize("rename.txt")
print(size)



## Another Concept --> shutil && csv
## Cursor Position
with open("file.txt", "w+") as file:
    file.seek(0)
    file.tell()
## Copy a File
import shutil
source = "source.txt"
destination = "destination.txt"
shutil.copy(source, destination)
shutil.move(source, destination)
## CSV File
import csv
# Write And Read The CSV File 
with open('donnees.csv', 'r') as file:
    content = csv.reader(file)
    for line in content:
        print(line) ## Each Line In Single List
with open('nouveau.csv', 'w', newline='') as file:
    csvFile = csv.writer(file)
    csvFile.writerow(["Nom", "Age"]) ## Delete The Old Content
    csvFile.writerow(["Alice", 25])




