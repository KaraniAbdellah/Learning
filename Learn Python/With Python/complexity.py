# Computational Complexity.
'''
    ------- Big O Notation For Space And Time -------
        The Worst Of Cases
    If We Want To Transfer A File That Has Size of 1TB To France
    - Use Airplane
    - Use Electronic Transfer
    The Response is Use AirPlane
        Airplane --> Take A Constance Time --> Depend Anything
        Electronic Transfer --> Take One More Day --> Depend Size Of The File
        O(s) --> s is Time Complexity

    We Have House UnCleaned That Have Width And Height
    We Want To Know How Much Time It Take For Cleaned

    Add vs Multiply

    More Complexities
        Excellent
            O(1) -> Constance Complexity, O(log2(n)) -> Logarithmic Complexity [Divide By 2]
        Good
            O(n) -> Linear Complexity
        Bad
            O(n*log2(n)) -> Quasi-Linear
        Horrible
            O(n^2) -> Quadrate Complexity, O(2^n) -> Exponential  Complexity
            O(n!) -> Factorial Complexity

    Global Roles --> Same of Limit
        - Japing Constance && Small Expression
        O(2N)  = O(N), O(N + 3) = O(N), O(3*N^2) = O(N^2)
        O(N^2 + N) = O(N^2), O(N + log(N)) = O(N), O(5*2^N + 1000*N^100) = O(2^N)
        - O(B^2 + A) --> Can Not SampleFate

    Recursion Function
        - We Need To Compute How Much Call Them Self
        - Every Function Create A Space In Memory [Stack Memory That Contain All Functions]

    For Decrease The Time Complexity Use More Space Memory
'''
# Example
w = 1
h = 1
for i in range(0, w):
    for j in range(0, h):
        print(i, j)
# Complexity is O(W * H)

# Add vs Multiply
arrA = [1, 2, 3, 4] # A is Size
arrB = [1, 2, 3, 4] # B is Size
for i in arrA:
    print(i)
for i in arrB:
    print(i)
# Complexity is O(A + B) = O(A) + O(B)

for i in arrA:
    for j in arrB:
        pass # print(i, j)
# Complexity is O(A * B) = O(A) * O(B)

## Recursion
def factorial(n):
    if (n <= 1): return 1
    else: return (n) * factorial(n - 1) ## Will O(n) Time and Space
def Factorial(n: int) -> int:
    res = 1
    for i in range(2, n + 1):
        res *= i
    return res ## Will be O(n) but Space O(1)

def fibonacci(n: int) -> int:
    if n == 0: return 0
    if n == 1: return 1
    else: return fibonacci(n -1) + fibonacci(n - 2) 
    # T(n) = T(n-1) + T(n-2) + c  <==> T(n)	= 2T(n-1) + c 
    # 2^k * T(n - k) + (2^k - 1) * c ===> O(2 ^ N)


## Recursion + Memorization --> in This Example We Delete Right Side
def fibonacci_2(n: int, cache = {0: 0, 1 : 1}) -> int: # O(2N) -> O(N)
    if n in cache:
        return cache[n]
    cache[n] = fibonacci_2(n - 1, cache) + fibonacci_2(n - 2, cache)
    return cache[n]
for i in range(0, 10):
    print(fibonacci_2(i), end = " ")

## Another To Do It --> O(n)
from functools import lru_cache
@lru_cache(maxsize = 1000)
def fibonacci_3(n):
    if (n == 0): return 0
    if (n == 1): return 1
    else: return fibonacci_3(n - 1) + fibonacci_3(n - 2)
for i in range(0, 10):
    print(fibonacci_2(i), end = " ")


## Recursion --> iterative approach --> O(n)
def fibonacci_4(n: int):
    cache = [0] * (n + 1)
    if n != 0: cache[1] = 1
    for i in range(2, n + 1):
        cache[i] = cache[i - 1] + cache[i - 2]
    return cache[n]
for i in range(0, 10):
    print(fibonacci_4(i), end = " ")






