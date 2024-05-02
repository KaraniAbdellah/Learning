# Start Algorithms
import math
# Start Instruction OIf Basic

def HellWorld():
    name = input("Enter Your Name : ")
    age = int(input("Enter Your Age : "))
    print(f"Hello {name}, Your Age Is {age}")
    print("Hello ", name, ", Your Age Is ", age)


def age_year():
    year = int(input("Enter Your Birthday : "))
    age = 2023 - year
    print(f"Your Age Is {age}")


def Surface_Perimeter():
    large = float(input("Enter The Larger Please: "))
    longueur = float(input("Enter The Longueur Please : "))
    surface = large * longueur
    rectangle = (large + longueur) * 2
    print(f"The Rectangle Is {rectangle} And Surface Is {surface}")


def pow():
    print("Programme Work Lie This X ^ Y")
    x = int(input("Enter A x : "))
    y = int(input("Enter A y : "))
    print(f"The Result Is : {x ** y}")
    print(f"The Result Is : {pow(x, y)}")


def Operation():
    x = float(input("Enter First Number : "))
    y = float(input("Enter Second Number : "))
    if y == 0:
        change = input("For Division Is Impossible Are You Want To Change => Yes(y) Or No(n) : ")
        if (change == "y"):
            z = x
            x = y
            y = z
            print(f"somme = {x + y}, Multiplication {x * y}, Division {x / y}, Subtraction {x - y}")
        else:
            print(f"somme = {x + y}, Multiplication {x * y}, Division Impossible, Subtraction {x - y}")
    else:
        print(f"somme = {x + y}, Multiplication {x * y}, Division {x / y}, Subtraction {x - y}")


def Etoile():
    line = int(input("Enter The Line Number : "))
    colone = int(input("Enter The Colone Number : "))

    for i in range(0, line):
        for j in range(0, colone):
            print("* ", end = " ")
        print()



def Moyene_sum():
    n1 = int(input("Enter Note Number 1 : "))
    n2 = int(input("Enter Note Number 2 : "))
    n3 = int(input("Enter Note Number 3 : "))
    n4 = int(input("Enter Note Number 4 : "))
    n5 = int(input("Enter Note Number 5 : "))
    s = n1 + n2 + n3 + n4 + n5
    m = s / 5
    print(f"The Sum Is {s} And Mayenne Is {m}")


def Volume():
    rayon = float(input("Enter The rayon: "))
    volume = (4 * math.pi * (pow(rayon, 3))) / 3
    print("The Volume Is : ", format(volume, ".2f"))


def Change_Var():
    A = float(input("Enter A Number  A : "))
    B = float(input("Enter A Number  B : "))
    # C = A
    # A = B
    # B = C
    A, B = B, A
    print(f"A = {A} And B = {B}")


def Time_change():
    time = int(input("Enter a The Time In Second : "))
    T = time
    hour = int(time / 3600)
    time = time % 3600
    minute = int(time / 60)
    second = time % 60
    print(f"T = {T} Seconds => {hour} Hours {minute} Minutes {second} Seconds")


def Distance():
    import math
    print("coordinates Of AB Is : (Xa, Ya) And (Xb, Yb)")
    Xa = float(input("Enter The Xa :"))
    Ya = float(input("Enter The Ya :"))
    Xb = float(input("Enter The Xb :"))
    Yb = float(input("Enter The Yb :"))
    AB = math.sqrt(pow(Xb - Xa, 2) + pow(Yb - Ya, 2))
    print(f"AB = {AB}")


def Resistance():
    print("Resistance Is R1, R2 And R3")
    R1 = float(input("Enter R1 : "))
    R2 = float(input("Enter R2 : "))
    R3 = float(input("Enter R3 : "))
    Rs = R1 + R2 + R3
    Rp = (R1 * R2 * R3) / (R1 * R2 + R1 * R3 + R2 * R3)
    print(f"Respectively Is Rs = {Rs} And Parallelism Rp = {Rp}")

    ########################## 
    # Start Condition

def Singe():
    A = int(input("Enter A Number A : "))
    B = int(input("Enter A Number B : "))
    if A * B > 0:
        print(f"{A} And {B} Have Same Singe")
    else:
        print(f"{A} And {B} Have Not Same Singe")


def Calc():
    A = int(input("Enter Number A : "))
    B = int(input("Enter Number B : "))
    if A * B > 0:
        A, B = B,A
        print(f"A = {A} And B = {B}")
    else:
        M = A + B
        S = A * B
        print(f"A = {A} + {B} = {M} And B = {A} * {B} = {S}")


def Price():
    nbr = float(input("Enter Number Of Copier : "))
    if nbr < 10:
        price = nbr * 0.30
        print(f"The Price Is : {price} DH")
    elif nbr > 10 and nbr < 30:
        price = 10 * 0.30 + (nbr - 10) * 0.25
        print(f"The Price Is : {price} DH")
    else:
        price = 10 * 0.30 + 20 * 0.25 +  (nbr - 30) * 0.20
        print(f"The Price Is : {price} DH")


def Verification():
    age = int(input("Enter Your Age Please : "))
    if age >= 6 and age <= 7:
        print("Poussin")
    elif age >= 8 and age <= 9:
        print("Pupille")
    elif age >= 10 and age <= 11:
        print("Minime")
    elif age >= 12 and age <= 16:
        print("Cadet")
    else:
        print("This Category Does Not Exit")


def lastYear():
    s = 0
    for i in range(0,3):
        n = float(input(f"Enter Note {i + 1} : "))
        s += n
    m = s / 3
    print("The Sum Of Your Notes Is {:.2f}".format(m))
    print("The Mayenne Of Your Notes Is {:.2f}".format(m))
    if m >= 16:
        print("Very Good")
    elif m >= 14 and m < 16:
        print("Good")
    elif m >= 12 and m < 14:
        print("Nice")
    elif m >= 10 and m < 12:
        print("Passable")
    elif m <= 10:
        print("Bad")
    else:
        print("Unknown")


def Equation():
    import math
    print("The Equation Is Ax^2 + Bx + C")
    A = float(input("Enter A :"))
    B = float(input("Enter B :"))
    C = float(input("Enter C :"))
    D = pow(B, 2) - 4 * A * C
    if D == 0:
        Z = (-B / (2 * A))
        print(f"The Solution Is {Z}")
    elif D > 0:
        X = ((-B - math.sqrt(D)) / (2 * A))
        Y = ((-B + math.sqrt(D)) / (2 * A))
        print("The Solution Is {:.2f} And {:.2f}".format(X, Y))
    else:
        print("No Solution")


def Male_Female():
    age = int(input("Enter Your Age : "))
    sex = str(input("Enter Your Sex Male(M) Or Female(F) : "))
    if (sex.upper() == "M" or sex.lower() == "m") and age >= 20:
        print("Must Pay The Impost")
    elif  (sex.upper() == "F" or sex.lower() == "f") and (age >= 18 and age <= 35):
        print("Must Pay The Impost")
    else:
        print("Do Not Need To Pay")


def PTTC():
    PHT = float(input("Enter The Price : "))
    Category = str(input("Choice Your Category [A, B or C] :"))
    if Category.upper() == "A" or Category.lower() == "a":
        PTTC = PHT + PHT * 0.07
        print("The Price is {:.2f}".format(PTTC))
    elif Category.upper() == "B" or Category.lower() == "b":
        PTTC = PHT + PHT * 0.2
        print("The Price is {:.2f}".format(PTTC))
    elif Category.upper() == "C" or Category.lower() == "c":
        PTTC = PHT + PHT * 0.25
        print("The Price is {:.2f}".format(PTTC))
    else:
        print("Unknown Category")

def OPeration():
    Operator = str(input("Enter The Operator : "))
    A = float(input("Enter A : "))
    B = float(input("Enter B : "))
    if Operator == "/":
        if B == 0:
            print("Impossible Operation")
        else:
            print("In Division Is {:.2f}".format(A / B))
    elif Operator == "+":
        print("In Sum Is {:.2f}".format(A + B))
    elif Operator == "-":
        print("In Subtraction Is {:.2f}".format(A - B))
    elif Operator == "*":
        print("In MUltiplication Is {:.2f}".format(A * B))
    else:
        print("Unknown Operator")


def direction():
    nbr = int(input("Enter A Number : "))
    if nbr == 6:
        print("Right")
    elif nbr == 4:
        print("Left")
    elif nbr == 8:
        print("Top")
    elif nbr == 2:
        print("Bottom")
    else:
        print("Unknown Number")


def Even_odd():
    nbr = int(input("Enter A Number : "))
    if nbr % 2 == 0:
        print("This Number Is Pair")
    else:
        print("Number Is Impair")


def Bissextile():
    year = int(input("Enter The Year : "))
    if (year % 4 == 0 and not year % 100 == 0) or (year % 400 == 0): 
        print("{:.2f} is Bissextile".format(year))
    else:
        print("{:.2f} is Not Bissextile".format(year))


def LArge_char_nbr():
    data = str(input("Enter A Character : "))
    if data <= "z" and data >= "a":
        print("{} This Is Character".format(data)) 
    elif data <= "9" and data >= "0":
        print("{} This Is Number".format(data))
    else:
        print("{} This Is Special Character".format(data))


    #########################################
    # Loop

def Next_tenNumber():
    nbr = int(input("Enter A Number : "))
    for i in range(nbr + 1, nbr + 11):
        print(f"{i}", end = " ")


def x():
    nbr = int(input("Enter A Number : "))
    i = nbr
    while(nbr + 10 > i):
        print(f"{i + 1}", end = " ")
        i += 1


def Sum():
    nbr = int(input("Enter A Number : "))
    s = 0
    for i in range(1, nbr + 1):
        s += 1 / i
    print("The Sum Is {:.2f}".format(s))


def SumNextNumber():
    nbr = int(input("Enter A Number : "))
    s = 0
    for i in range(1, nbr + 1):
        s += pow(10, i)
    print("The Sum Is {}".format(s + 1))


def Factorial():
    # nbr = int(input("Enter A Number : "))
    while True:
        nbr = int(input("Enter A Integer Number : "))
        if nbr > 0: 
            break
    p = 1
    if nbr > 0:
        for i in range(1, nbr + 1):
            p *= i
        print("The Factorial Of {} Is {}".format(nbr, p))
    else:
        print("The Factorial Of {} Is {}".format(nbr, 1))


def y():
    nbr = int(input("Enter A Number : "))
    counter = 1
    result = 0
    j = 1
    while (counter <= nbr): 
        if (j % 2 != 0): 
            result += pow(j, 2) 
            counter += 1 
        j += 1
    for i in range(nbr):
        result += j ** 2
        j += 2
    print(f"The Sum Is {result}")


def Positive():
    while True:
        nbr = int(input("Enter A Number Positive : "))
        if nbr > 0:
            break
    for i in range(1, nbr + 1):
        if (nbr % i == 0):
            print(i, end = " ")


def Amal_birthday():
    age = int(input("Enter The Age Of Amal : "))
    s = 0
    for i in range(1, age + 1):
        s += 500 + 3 * i 
    print(f"The Age Is {age} And Compte Exist {s} dh")


def Marrakech_Agadir():
    year = 0
    marrakech = 1_000_000
    agadir = 500_000
    while (agadir < marrakech):
        marrakech += 50_000
        agadir += (agadir * 8) / 100
        year += 1
    print("After {:} Year Population Agadir passe Marrakech".format(year))


def Consecutive():
    n = int(input("Enter The N Please : "))
    U = 6
    for i in range(0, n):
        U = 4 * U + 10
    print(f"U{n} =", U)


def Fibonacci():
    U = 0
    V = 1
    while True:
        n = int(input("Enter Number n Large Then 2 : "))
        if n >= 2:
            break
    print(f"term Is : ")
    print(f"U{0} = {0}", end = " ")
    for i in range(n):
        W = U + V
        print(f"U{i + 1} = {W}", end = " ")
        V = U
        U = W
# print(Fibonacci())


def Prime():
    nbr = int(input("Enter A Number : "))
    x = True
    for i in range(2, int(nbr / 2) + 1):
        if nbr % i == 0:
            x = True
    print(f"{nbr} Not Prime Number") if x == False else print(f"{nbr} Is Prime Number")


def team():
    nbr = int(input("Enter A Team Number : "))
    for i in range(1, nbr + 1): # nbr = 4 => [1, 2, 3, 4] => Sequence
        for j in range(1, nbr + 1):
            if i != j:
                print(f"Team {i} vs Team {j}")
        print()


def random_Game():
    import random 
    n = random.randint(1, 30)
    x = 0
    print("--- You Have Just 5 Try ---")
    while (x < 5):
        nbr = int(input("Enter A Number : "))
        if nbr < n:
            print(f"Result Is Big Then {nbr}")
        elif nbr > n:
            print(f"Result Is Small Then {nbr}")
        else:
            print(f"Very Good, You Win")
            break
        x += 1
        if x == 5:
            print(f"Opus!")



def Calculate():
    repeat = "Y"
    while(repeat == "Y" or repeat == "y"):
        print("--- The Menu ---")
        print("+ => Addition \n- => Subtraction \n* => Multiplication \n\ => Division \n% => Modulo \npow => Puissance")
        operator = str(input("Enter The Operator : "))
        nbr1 = int(input("Enter A Number : "))
        nbr2 = int(input("Enter A Another Number : "))
        if operator == "/":
            print("Impossible Devision") if nbr2 == 0 else print(f"The Division Is : {nbr1 / nbr2}")
        elif operator == "*":
            print(f"The Multiplication Is : {nbr1 * nbr2}")
        elif operator == "+":
            print(f"The Addition Is : {nbr1 + nbr2}")
        elif operator == "-":
            print(f"The Subtraction Is : {nbr1 - nbr2}")
        elif operator == "%":
            print(f"The Modulo Is : {nbr1 % nbr2}") if nbr2 != 0 else print("Impossible Modulo")
        elif operator == "pow":
            print(f"The Puissance Is : {pow(nbr1, nbr2)}")
        else:
            print("Unknown Operator")
        repeat = str(input("Try Again (Y/N) : "))


def Chiffer_Number(): 
    nbr = int(input("Enter A Number : "))
    # count = len(nbr)
    # print(f"Number Of Chiffer Is : {count}")
    r = nbr % 10
    count = 1
    while(r != nbr):
        nbr = nbr // 10
        r = nbr % 10
        count += 1
    print(f"The Number Of Chiffer Is : {count}")


def somme(nbr1, nbr2):
    return nbr1 + nbr2


def Factorial(n):
    p = 1
    for i in range(1, n + 1):
        p *= i
    return p


def Fib(n):
    if n == 0 or n == 0:
        return 0
    else:
        U = 0
        V = 1
        for i in range(2, n + 1):
            W = U + V
            V = U
            U = W
        return W 


def Fib(n):
    if n == 1 or n == 0:
        return n
    else:
        return Fib(n - 2) + Fib(n - 1)


def fact(n):
    if n == 0:
        return 1
    else:
        return fact(n - 1) * n
# print(fact())


def tri_bulle():
    array = [5, 1, 4, 2, 8]
    for i in range(len(array) - 1):
        if array[i] > array[i + 1]:
            tmp = array[i + 1]
            array[i + 1] = array[i]
            array[i] = tmp
    return print(array)
# tri_bulle()


def sort():
    array = [5, 1, 4, 2, 8]
    for i in range(len(array)):
        indexMin = i 
        for j in range(i + 1, len(array)):
            if (array[j] < array[indexMin]): 
                indexMin = j
        tmp = array[indexMin]
        array[indexMin] = array[i]
        array[i] = tmp
    return print(array)
# sort()


def inverse_number():
    nbr = int(input("Enter A Number : "))
    inverse = 0
    while(nbr != 0):
        inverse = (inverse * 10) + (nbr % 10)
        nbr = nbr // 10
    return print(inverse)
# inverse_number()


def palindrome():
    nbr = int(input("Enter A Number : "))
    pld = nbr
    inverse = 0
    while(nbr != 0):
        inverse = (inverse * 10) + (nbr % 10)
        nbr = nbr // 10
    if pld == inverse:
        print(f"{pld} Is Palindrome")
    else:
        print(f"{pld} Is Not Palindrome")
# palindrome()


def pgcd():
    nbr1 = int(input("Enter A Number 1 : "))
    nbr2 = int(input("Enter A Number 2 : "))
    if nbr1 > nbr2:
        min = nbr2
    else:
        min = nbr1
    for i in range(1, min + 1):
        if (nbr1 % i == 0 and nbr2 % i == 0):
            pgcd = i
    print(f"PGCD({nbr1, nbr2}) = {pgcd}")
# pgcd()


def nbr_parfait():
    # Number Parfait => 6 = 1 + 2 + 3
    nbr = int(input("Enter A Number : "))
    x = 0
    for i in range(1, nbr):
        if nbr % i == 0:
            x += i
    if x == nbr:
        print(f"{nbr} is parfait")  
    else:
        print(f"{nbr} Is Not Parfait")
# nbr_parfait()


import random
def jeu():
    Computer_score = 0
    User_score = 0
    null_Round = 0
    while(True):
        userCount = 0
        computerCount = 0
        user = str(input("Room[R], Paper[p], Scissors[S] For Quite Tap [Q] : "))
        # Quite Condition & Continue
        if (user == "Q"):
            break
        if (user != "S" and user != "P" and user != "R"):
            continue
        # Random By Numbers 
        n = random.randrange(1, 3, 1)
        if n == 1:
            computer = "R"
            print(f"Computer Choice ... Room")
        elif n == 2:
            computer = "P"
            print(f"Computer Choice ... Paper")
        else:
            computer = "S"
            print(f"Computer Choice ... Scissors")
        # Start Conditions
        if ((computer == "R" and user == "P") or (computer == "S" and user == "R") or 
        (computer == "P" and user == "S")):
            User_score += 1
            userCount += 1
        elif computer == user:
            null_Round += 1
        else:
            Computer_score += 1
            computerCount += 1
        # Result
        if userCount > computerCount:
            print("You Win")
        elif computerCount == userCount:
            print("Null Round")
        else:
            print("You Lose")
        print(f"Computer {Computer_score} || Equal {null_Round}  || You {User_score}")
# jeu()

def Decimal_Binary():
    n = int(input("Enter A Decimal Number : "))
    ord = 0
    b = 0
    p = 1
    while(n > 0):
        rest = n % 2
        p = 10 ** ord
        b = b + rest * p
        ord += 1
        n = n // 2
    print(f"Binary Is : {b}\n")
# Decimal_Binary()


def Decimal_Binary():
    n = int(input("Enter A Decimal Number : "))
    print(f"Binary Is : ", end = "")
    while(n > 0):
        rest = n % 2
        n = n // 2
        print(f"{rest}", end = "")
# Decimal_Binary()

def sum(n):
    if n == 0:
        return 0
    else: 
        return sum(n - 1) + n


def TriangleN():
    n = int(input("Enter N : "))
    for i in range(0, n):
        for i in range(0, i + 1):
            print("* ", end = " ")
        print()
# TriangleN()


def Triangle1divN():
    n = int(input("Enter N : "))
    for i in range(0, n):
        for j in range(0, n - 1 - i):
            print(" ", end = " ")
        for k in range(n - i - 1, n):
            print("*", end = " ")
        print()
# Triangle1divN()


def cadre():
    line = int(input("Enter Line Number :"))
    colone = int(input("Enter The Colone Number : "))
    for i in range(0, line):
        for j in range(0, colone):
            if i == line - 1 or i == 0 or j == 0 or j == colone - 1:
                print("*", end = " ")
            else:
                print(" ", end = " ")
        print()
# cadre()


def cadre_caree():
    print("--- Number Should Be Odd ---")
    while True:
        colone = int(input("Enter The Colone Number : "))
        if colone % 2 != 0:
            break
    for i in range(0, colone):
        for j in range(0, colone):
            if i == 0 or i == colone - 1 or j == 0 or j == colone - 1 or i == j or j == colone - i - 1:
                print("*", end = " ")
            else:
                print("$", end = " ")
        print()
# cadre_caree()



def lasagne():
    print("--- Number Should Be Odd ---")
    while True:
        colone = int(input("Enter The Colone Number : "))
        if colone % 2 != 0:
            break
    for i in range(0, colone):
        for j in range(0, colone - i - 1):
            print(" ", end = " ")
        for k in range(0, colone):
            print("*", end = " ")
        print()
# lasagne() 


def Triangle():
    # Making A Triangle By Number Os Lines
    line = int(input("Enter The Line Number : "))
    for i in range(0, line):
        for j in range(0, line - i - 1):
            print(" ", end = " ")
        for k in range(-i, i + 1): # range(1, (2 * i) - 1 + 1)
            print("*", end = " ")
        print()
# Triangle()


def calcEtoile_Triangle():
    # Calc The Number Of Etoile By Number Of Lines
    n = int(input("Enter The Line Number : "))
    x = 1
    result = 0
    while n > 0:
        result = result + x 
        x = x + 2 
        n -= 1
    print(result)
# calcEtoile_Triangle()


def Checker_Make_Triangle(nbr):
    # Check If This Number Will Be Make A Triangle Or Not
    # n = int(input("Enter A Number : "))
    x = 1
    result = 0
    i = 0
    checker = False
    while nbr > i:
        result = result + x
        if result == nbr: 
            checker = True
            break 
        x = x + 2 
        i += 1
    print(f"Can Make A Triangle With {nbr}") if checker == True else print("Oops!")
    return checker
# Checker_Make_Triangle()


def DetectLinesNbr(nbr):
    x = 1
    result = 0
    line = 1
    while True:
        result = result + x
        if result == nbr: 
            break 
        x = x + 2 
        line += 1
    return line
# print(DetectLinesNbr(9))



def MakingTriangle():
    nbr = int(input("Enter Number Of Etoile That You Want : "))
    if Checker_Make_Triangle(nbr) == True:
        for i in range(0, DetectLinesNbr(nbr)):
            for j in range(0, DetectLinesNbr(nbr) - i - 1):
                print(" ", end = " ")
            for k in range(-i, i + 1):
                print("*", end = " ")
            print()
    else:
        print("Can Not Making A Triangle With This Number")
# MakingTriangle()


def Empty_triangle():
    line = int(input("Enter The Line Number : "))
    for i in range(0, line):
        for j in range(0, line - i):
            print(" ", end = " ")
        # for k in range(1, 2 * i):
        for k in range(-i, i + 1):
            if k == -i or k == i or i == line - 1:
                print("*", end = " ")
            else:
                print(" ", end = " ")
            print("*", end = " ")
        print()
# Empty_triangle()


def Two_inverse_Triangle():
    colone = int(input("Enter The Colone Number : "))
    for i in range(0, colone - 1):
        for j in range(0, i + 1):
            print("*", end = " ")
        print()
    for i in range(0, colone):
        for j in range(0, colone - i):
            print("*", end = " ")
        print()
# Two_inverse_Triangle()



def Two_inverse_Triangle():
    colone = int(input("Enter The Colone Number : "))
    p = 1
    for i in range(1, (2 * colone)):
        for j in range(1, p + 1):
            print("*", end = " ")
        if (i < colone):
            p += 1
        else:
            p -= 1
        print()
# Two_inverse_Triangle()


# (line * 2) - 1                                    
def diamante():
    line = int(input("Enter The Line Number : "))
    space = 0
    x = 0
    etoile = 0
    for i in range(1, line * 2):
        if i <= line:
            space = line - x   
            etoile += 2
        else:
            space = x - line + 2  
            etoile -= 2
        for j in range(1, space):
            print(" ", end = " ")
        for k in range(1, etoile):
            print("*", end  = " ")
        x += 1
        print()
# diamante()


def diamante():
    line = int(input("Enter The Line Number : "))
    space = line - 1 
    etoile = 1
    for i in range(1, (line * 2)):
        for j in range(0, space):
            print(" ", end = " ")
        for k in range(1, 2 * etoile):
            print("*", end = " ")
        print()
        if i < line:
            space -= 1
            etoile  += 1
        else:
            space += 1
            etoile  -= 1
# diamante()


def A_pattern():
    line = int(input("Enter Line Number : "))
    colone = int(input("Enter Colone Number : "))
    for i in range(0, line):
        for j in range(0, colone):
            # if (((j == 0 or j == colone - 1) and i != 0) 
            # or (i == 0 and j != 0 and j != colone - 1) 
            # or (i == line // 2)):
            if (((j == 0 or j == colone - 1) and i != 0) or 
                ((i == 0 or i == line // 2) and (j > 0 and j < colone - 1))):  
                print("*", end = " ")
            else:
                print(" ", end = " ")
        print()
# A_pattern()


def Heart():
    line = 6
    colone = 7
    for i in range(0, line):
        for j in range(0, colone):
            if ((i == 0 and j % 3 != 0)):
                print("*", end = " ")
            elif (i == 1 and j % 3 == 0):
                print("*", end = " ") 
            elif (j == i - 2 or j == line - i + 2): # i + j == 8
                print("*", end = " ")
            else: 
                print(" ", end = " ")
        print()
# Heart()


def Number_rectangle():
    line = int(input("Enter The Line Number : "))
    colone = int(input("Enter The Colone Number : "))
    for i in range(0, line):
        for j in range(0, colone):
            print(i + 1, end = " ")
        print()
# Number_rectangle()


def TriangleNumber():
    line = int(input("Enter The Line Number : "))
    for i in range(0, line):
        for j in range(0, i + 1):
            print(i + 1, end = " ")
        print()
# TriangleNumber()


def TriangleNbr():
    line = int(input("Enter The Line Number : "))
    for i in range(0, line):
        for j in range(0, i + 1):
            print(j + 1, end = " ")
        print()
# TriangleNbr()


def TriangleZeroOne():
    line = int(input("Enter The Line Number : "))
    for i in range(0, line):
        for j in range(1, i + 2):
            n = j % 2
            print(n, end = " ")
        print()
# TriangleZeroOne()


def Triangle_Nbr():
    line = int(input("Enter A Line Number : "))
    for i in range(0, line):
        for j in range(0, line - i):
            print(" ",end = " ")
        # for k in range(-i , 1): 
        #     print(-k + 1, end = " ") 
        # for p in range(1, i + 1): 
        #     print(p + 1, end = " ")
        for k in range(i + 2, 1, -1):
            print(k - 1, end = " ")
        for p in range(2, i + 2):
            print(p, end = " ")
        # n = i + 1
        # p = 2
        # for k in range(-i , i + 1):
        #     if n >= 1:
        #         print(n ,end = " ")
        #         n -= 1
        #     else:
        #         p = n + p
        #         print(p ,end = " ")
        #         p += 1 
        print()
# Triangle_Nbr()


def Two_Triangle():
    line = int(input("Enter A Line Number : "))
    for i in range(1, line + 1):
        for j in range(1, i + 1):
            print(j, end = " ")
        for k in range(0, (line * 2) - 2 * i):
            print(" ", end = " ")
        for p in range(1, i + 1):
            # print(j, end = " ")
            # j -= 1
            print(i - p + 1, end = " ")
        print()
# Two_Triangle()


def  Triangle_Tow():
    line = int(input("Enter The Line Number : "))
    p = 0
    for i in range(1, line * 2):
        if (i <= line):
            p += 1
        else:
            p -= 1
        for j in range(0, p):
            print(j + 1, end = " ")
        print()
# Triangle_Tow()


def Hello():
    chaine = str(input("Enter A String : "))
    for i in range(0, len(chaine)):
        for j in range(0, i + 1):
            print(f"{chaine[j]}", end = " ")
        print()


def Hello():
    chaine = str(input("Enter A String : "))
    p = ""
    for i in chaine:
        p = p + i + " "
        print(p)
# Hello()


def ASCII_Triangle():
    line = int(input("Enter Line Number : "))
    Asc_Code = int(input("Enter ASCII Code : "))
    A = ""
    for i in range(0, line):
        A += chr(Asc_Code) + " "
        print(A)
# ASCII_Triangle() 


def ASCII_Triangle():
    line = int(input("Enter Line Number : "))
    n = 65
    for i in range(0, line):
        n = 65
        for j in range(0, i + 1):
            print(chr(n), end = " ")
            n += 1
        print()
# ASCII_Triangle()


def ASCII_Triangle():
    line = int(input("Enter Line Number : "))
    n = 65
    Letter = ""
    for i in range(0, line):
        Letter += chr(n + i) + " "
        print(Letter, end = " ")
        print()
# ASCII_Triangle()


def ASCII_Triangle_ABCD():
    line = int(input("Enter Line Number : "))
    n = 65
    for i in range(line):
        for j in range(i + 1):
            print(chr(n), end = " ")
            n += 1
        print()
# ASCII_Triangle_ABCD()


def ASCII_Triangle_ABCD_Inverse():
    line = int(input("Enter Line Number : "))
    n = 65
    for i in range(line):
        for k in range(1, line - i):
            print(" ", end = " ")
        for j in range(0, i + 1):
            print(chr(n), end = " ")
            n += 1
        print()
# ASCII_Triangle_ABCD_Inverse()


def Tifinagh_Triangle():
    ## Tifinagh Character
    ### Decimal : 11568 and Hex : 2D30
    ### Decimal : 11647 and Hex : 2D7F
    n = 11606
    line = int(input("Enter Line Number : "))
    for i in range(0, line):
        for j in range(1, line - i):
            print(" ",end = " ")
        for k in range(-i, i + 1): # 2 * i - 1
            print(chr(n), end = " ")
            n += 1
        print()
# Tifinagh_Triangle()



#####################
## Start Function
def Matrix():
    MatrixNote = []
    s = 0
    for i in range(0, 2):
        print(i + 1 ,"Enter Your Notes : ")
        line = []
        for j in range(0, 2):
            note = float(input(f"Enter Note Number {j + 1} : "))
            line.append(note)
        s += sum(line)
        MatrixNote.append(line)
    print(MatrixNote)
    print(f"The Sum Is : {s}")
    print(f"The Moyene Is : {s / 4}")
    
    occ = float(input("Enter The Number : "))
    c = 0
    for i in range(0, 2):
        c += MatrixNote[i].count(occ)
    print(f"Number Of {occ} Exit In This List Is {c}")


def Multiplication(n : int) -> int:
    for i in range(1, 11):
        print(f"{i} * {n} = {n * i}")
    print()
# Multiplication(8)


def cube():
    c = int(input("Enter A Number : "))
    return c ** 3
# print(cube())


def Bissextile(year : int) -> str:
    if (not year % 100 == 0 and year % 4 == 0 or year % 400 == 0):
        return f"{year} is Bissextile Year"
    else:
        return f"{year} Is Not Bissextile Year"
# for i in range(2000, 2024):
#     print(Bissextile(i))


def Premier(nbr : int) -> str:
    x = True
    for i in range(2, int(nbr / 2 + 1)):
        if nbr % i == 0:
            x = False
            break
    return f"{nbr} Is Not Premier" if x == False else f"{nbr} is A Premier"
# nbr = int(input("Enter A Number : "))
# for i in range(1, 21):
#     print(Premier(i))


def ChifferNbr():
    nbr = int(input("Enter A Number : "))
    count = 0
    while(True):
        nbr = int(nbr / 10)
        count += 1
        if nbr == 0: break
    print(f"Le Number De Chiffer Est : {count}")
# ChifferNbr()


def Operation(r : int) -> int:
    d = r * 2
    p = 2 * math.pi * r
    s = math.pi * (r ** 2)
    return "The Surface Is {:.2f} \nDiameter Is {:.2f} \nPerimeter Is {:.2f}".format(s, d, p)
# print(Operation(10))


def Trgn(line:int) -> int:
    for i in range(0, line):
        for j in range(0, line - i):
            print(" ", end = " ")
        for k in range(0, 2*i + 1): # 0, 2*i + 1
            print("*", end = " ")
        print()
# Trgn(12)


def parfait(nbr: int) -> int:
    pr = 0
    for i in range(1, nbr):
        if nbr % i == 0:
            pr += i
    return f"{nbr} Is Parfait" if nbr == pr else f"{nbr} is Not Parfait"
# print(parfait(6))


def Show_Worker(name = "Mohamed", salary = 3000) -> str:
    return f"Hello {name}, Your Salary is {salary}"
# print(Show_Worker())


def F(x = 1):
    return (4 * math.pow(x, 3) - 13 * math.pow(x, 2) + x - 60)
# print(F(10))


from math import *
def F(x):
    return 4 * math.cos(4 * x)
def F1(x):
    return -4 * math.sin(4 * x)
def F2(x):
    return -16 * math.cos(4 * x)
# print(f"The Function is {F(0)} And First Derive Is {F1(0)} And Second Is {F2(0)}")


def Forme(n, x):
    result2 = 0
    result1 = 1 / 2 + (math.sin((2 * n + 1)* x / 2)) / (2 * math.sin(x / 2))
    for i in range(0, n + 1):
        result2 += math.cos(i * x)
    return (result1, result2)
# print(Forme(10, 23523525))

import random
from random import randint
def Function_package():
    count = 0
    for i in range(0, 10):
        # x = int(random.random() * 5) + 1
        x = randint(1, 6)
        if x == 2 or x == 5:
            print("You Win!")
            count += 1
        else:
            print("Your Lose!")
    print("Time Wining :", count)
# Function_package()


def Suite_Syracuse():
    # Suite_Syracuse --> Un + 1
    ## if Un Odd --> Un / 2
    ## if Un Even --> 3Un + 1
    ### Conjecture of This Suite Is : In Moment There is An Repetitive Term [4, 2, 1]
    while (True):
        term = int(input("Enter A Number Positive And Integer : "))
        if term > 0:
            break
    while term != 1:
        if term % 2 == 0:
            term = term // 2
        else:
            term = term * 3 + 1
        print(term)
# Suite_Syracuse()


def f(a, b, c = 1):
    if a > b:
        a, b = b, a 
    if a >= c:
        return a
    elif c <= b:
        return b
    else:
        if (a - c) > (b - c): # 
            return b
        else:
            return a
# print(f(0, 0, 0)) # 0
# print(f(-4, -1)) # -4
# print(f(-1, 9, 5)) # 9
# print(f(c = -1, b = 9, a = 5)) # 5
# print(f(-2, 3, 0)) # 3
# print(f(2, 0 , 2)) # b = 2
# print(f(1, 0 , 2)) # 0
# print(f(8, 2)) # 2
# print(f(3, -1, -2)) # -1


# from algorithm.pack import somme, moyene, variance, ecartType, ceo # *
# from pack import *
import pack 
def demand() -> tuple:
    s = 0
    note1 = float(input(f"Enter Note {1} : "))
    note2 = float(input(f"Enter Note {2} : "))
    note3 = float(input(f"Enter Note {3} : "))
    note4 = float(input(f"Enter Note {4} : "))
    note5 = float(input(f"Enter Note {5} : "))
    s = pack.somme(note1, note2, note3, note4, note5)
    m = pack.moyene(s)
    v = pack.variance(m, note1, note2, note3, note4, note5)
    c = pack.ecartType(v)
    cv =pack.ceo(c, m)
    return f"After Statics Calc : {(s, m, v, c, cv)}"
# print(demand())


from pack import * 
def Vocation():
    print("--- Info ---")
    Nht_nbr = int(input("Enter The Number Of Night : "))
    DayNbr = int(input("Day Number Of Tha Car : "))
    City = str(input("Enter The Name Of City : "))
    Other = int(input("Enter Another Depones : "))
    if (Vol_Frais(City) == 0):
        return "Unknown City"
    else:
        return f"{Depones(City, DayNbr, Nht_nbr) + Other}$"
# print(Vocation())


def T(n):
    print("w ", end = " ")
    if n == 1:
        return 4
    else:
        return T(n // 2) + 1
# print(T(20)) 
# Complexity --> O(log2(n)) --. O(log(n))


import calendar
import pack ## MyT ry
def Cal():
    year = int(input("Enter The Year : "))
    month = int(input("Enter The Month : "))
    print(calendar.month(year, month))
# Cal()


def fn6():
    x = 6
    n = 1
    for i in range(1, x + 1):
        print(n)
        n*= 2
        if n > x:
            break
# fn6()
# O(log2(n) + 1) --> Logarithmic Complexity

def fn7():
    a = 0
    i = 100
    count = 0
    while i > 0:
        a += i
        i //= 2
        count += 1
    print(f"count = {count}")
# fn7()


# import pywhatkit as kit
# def send_whatsapp_message():
#     # Target phone number and message
#     phone_number = "+1234567890"  # Replace with the recipient's phone number
#     message = "Hello, this is a test message from your Python program!"

#     print(f"Sending message to {phone_number}")

#     # Send the message
#     kit.sendwhatmsg(phone_number, message)

#     print("Message sent successfully!")

# if __name__ == "__main__":
#     send_whatsapp_message()

print("Hello World")