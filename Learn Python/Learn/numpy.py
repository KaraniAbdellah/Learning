# NumPy Tutorial
'''
    NumPy is a Python library.
    NumPy is used for working with arrays.
    NumPy is short for "Numerical Python".

    NumPy arrays are stored at one continuous place in memory unlike lists,
    so processes can access and manipulate them very efficiently.

    This behavior is called locality of reference in computer science.
    This is the main reason why NumPy is faster than lists. Also it is 
    optimized to work with latest CPU architectures.
'''


## NumPy Creating Arrays
'''
    NumPy is used to work with arrays. The array object 
    in NumPy is called ndarray.
    We can create a NumPy ndarray object by using 
    the array() function.
    
    - Create An ndarray
        arrName = np.array(arrayWithDemensoin)
        type(arrname) --> Object
        arrName.ndim --> Demensoin Of Array
        arrName = np.array(array, ndmin=NumberOfDemensoin)
'''
import numpy as np
arr0 = np.array(23) # 0-D
arr1 = np.array([1, 2, 3, 4, 5]) # 1-D
arr2 = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) # 2-D
arr3 = np.array([[[1, 2], [3, 4]], [[5, 6], [7, 8]]]) # 3-D
print(type(arr1))
print(arr0.ndm) # 0 Demensoin

myDemArray = np.array([1, 2, 3], ndmin=3)
print(myDemArray) # This Array Will has 3 Demensoin


## NumPy Array Indexing
'''
    indexing start with 0 
    syntax is --> arrName[i1, i2, i3] --> Dimensoin
'''
arr1 = np.array(["Function", "Describe", "The", "World"])
print(arr1[0])
print(arr1[1] + arr1[2]) # DescribeThe

arr2 = np.array([[1, 2, 3], [4, 5, 6]])
print(arr2[0, 1]) # 2
print(arr2[-1, 0]) # 4
print(arr2[-2, -1]) # 3

arr3 = np.array([[[1, 2, 3], [4, 5, 6]], [[1, 2, 3], [4, 5, 6]]])
print(arr3[0, 1, 2]) # 6
print(arr3[-1, -1, -3]) # 4



## NumPy Array Slicing
'''
    Slicing in python means taking elements from one
    given index to another given index

    syntax --> ArrayName[start:end:step]
        start, end & step is optional
        start --> Default is 0
        end --> Default is length of array
        step --> Default is 1
    Not Including The End
    Negative Indexing With -1 
'''
arr = np.array([1, 2, 3, 4, 5, 6, 7])
print(arr[::]) # [1, 2, 3, 4, 5, 6, 7]
print(arr[-4:-7:-2]) # [4 2]
print(arr[-4:0:-2]) # [4, 2]


arr2 = np.array([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]])
print(arr2[1, 1:3]) # [7, 8]
print(arr2[0:2, 2]) # [3, 8]
print(arr2[-2::1, -3:-4:-1]) # [[3], [8]]




## Data Types
'''
    ## Data Types
    strings, integer, float, boolean, complex
    i - integer   b - boolean   f - float
    O - object    S - string
    ## Create Array With Define Data Type
    - syntax
        myArr = np.array([1, 2, 3], dtype="S")
        type = myArr.dtype
    - for type [i, u, f, s, U] we can define byte size
        myArr = np.array([1, 2], dtype="i4")
            each element in array take 4 bytes
    - astype("type") function creates a copy of the array
'''
arrS = np.array(["apple", "banana", "cherry"], dtype="S4")
print(myArr.dtype) # String with 4 bytes
# myArr1 = np.array(["a", "2", "3"], dtype="i4")
# print(myArr1) # ValueError:

arr = np.array(["12", "12", "1"], dtype="S")
newArr = arr.astype("i")
print(newArr)




## Copy vs View
'''
    ## copy 
        - new arry
        - Any Change will not affect original array [vise-versa]
        - newArr = arr.copy()
    ## view
        - just view in array
        - Any Change will affect original array [vise-versa]
        - newArr = arr.view()
    ## Verfier if the table copy or view
        The copy returns None.
        The view returns the original array.
'''
arr = np.array([1, 2, 3, 4], dtype="i")
newArr1 = arr.copy()
newArr2 = arr.view()
arr[0] = 100
print(arr) # [100, 2, 3, 4]
print(newArr1) # [1, 2, 3, 4]
print(newArr2)
print(newArr1.base) # None
print(newArr2.base) # [100 2 3 4]



## Shape and Reshape
'''
    - Shape
    Shape return Tuple That Has Number Of Element
    tuple(Dim1, Dim2, Dim3, NumberOfElement)
    arrName.shape()

    - Reshaping
    Reshaping means changing the shape of an array
    arrName.reshape(dim1, ..., nbrOfElement)
    if You Do not NbrOfElement pass -1
    arr.reshape(-1) --> Convert To 1 Dimn
'''
arr = np.array([[[1, 2, 3, 4]], [[5, 6, 7, 8]]])
print(arr.shape) # (2, 1, 4)

arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
newArr1 = arr.reshape(4, 3)
newArr2 = arr.reshape(2, 3, -1)
print(newArr1) # [[ 1  2  3] [ 4  5  6] [ 7  8  9] [10 11 12]]
print(newArr2)
print(newArr1.reshape(-1))



## Join Array
'''
    join use --> np.concatenate((arr1, arr2))
    np.hstack((arr1, arr2)) --> Concatenate in rows
    np.vstack((arr2, arr2)) --> Concatenate in columns
    np.dstack((arr1, arr2)) --> Depth Concatenation
'''
arr1 = np.array([1, 2, 3])
arr2 = np.array([4, 5, 6])
conct = np.concatenate((arr1, arr2))
stackArr = np.stack((arr1, arr2), axis=1) 
HstackArr = np.hstack((arr1, arr2)) # Concatenate in rows
VstackArr = np.vstack((arr2, arr2)) # Concatenate in columns
DstackArr = np.dstack((arr1, arr2))
print(conct)
print(VstackArr)



## Search 
'''
    np.where(expression) --> Search Depend Expression --> return Index
    np.searchsorted(ArrName, Ele, side="left") --> Use Binary Search
'''

arr = np.array([1, 2, 3, 4, 5, 6])
newarr = np.array_split(arr, 2)
print(newarr)
x = np.where(arr == 4) # exist in index 3
y = np.where(arr%2 == 0) # array([1, 3, 5] --> Even Value
print(x)
print(y)

SortedArr = np.array([6, 7, 8, 9])
index = np.searchsorted(SortedArr, 7, side="left") # side="right"
print(index) # 1 --> Using Binary Search



## Sort
'''
    - np.sort(arr) --> Sorting in croissant order
'''
arr = np.array([1, 2, -1, 10, 12, -21])
newArr = np.sort(arr)
print(newArr) # [-21  -1   1   2  10  12]





