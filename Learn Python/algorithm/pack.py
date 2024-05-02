import math
def somme(note1, note2, note3, note4, note5):
    s = note1 + note2 + note3 + note4 + note5
    return s
def moyene(s):
    m = s // 5
    return m
def variance(m, note1, note2, note3, note4, note5):
    v = (note1 - m) ** 2 + (note2 - m) ** 2 + (note3 - m) ** 2 + (note4 - m) ** 2 + (note5 - m) ** 2 
    v = v / 4
    return v
def ecartType(v):
    c = math.sqrt(v)
    return c
def ceo(c, m):
    cv = (c / m) * 100
    return cv

#####################
def hotel_frais(Nht_nbr):
    return 90 * Nht_nbr
def Frais_locationCar(DayNbr):
    if DayNbr >= 7:
        return DayNbr * 35 - 50
    elif DayNbr >= 3:
        return DayNbr * 35 - 20
    else:
        return DayNbr * 35
def Vol_Frais(City):
    if City == "Marrakech":
        return 35
    elif City == "Paris":
        return 200
    elif City == "Oran":
        return 78
    elif City == "Carthage":
        return 182
    elif City == "Dakar":
        return 25
    else:
        return 0
def Depones(City, DayNbr, Nht_nbr):
    return hotel_frais(Nht_nbr) + Frais_locationCar(DayNbr) + Vol_Frais(City)


def month(month, year):

    MyDict = {
        "January": 1,
        "February": 2,
        "March": 3,
        "April": 4,
        "May": 5,
        "June": 6,
        "July": 7,
        "August": 8,
        "September": 9,
        "October": 10,
        "November": 11,
        "December": 12,
    }
    for i, j in MyDict.items():
        if j == month:
            print(f"   {i} {year}    ")
            break
    print("Mo Tu We Th Fr Sa Su")
    count = 0
    if month == 1 or month == 3 or month == 5 or month == 7 or month == 8 or month == 10 or month == 12:
        end = 32
    elif month == 2:
        end = 29
    else:
        end = 31
    for i in range(1, end):
        if count == 7:
            print()
            count = 0
        if i >= 10:
            print(f"{i}", end = " ")
        else:
            print(f"{i} ", end = " ")
        count += 1
