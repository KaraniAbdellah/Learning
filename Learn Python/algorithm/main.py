from algorithm.pack import *
def demand() -> tuple:
    s = 0
    note1 = float(input(f"Enter Note {1} : "))
    note2 = float(input(f"Enter Note {2} : "))
    note3 = float(input(f"Enter Note {3} : "))
    note4 = float(input(f"Enter Note {4} : "))
    note5 = float(input(f"Enter Note {5} : "))
    s = somme(note1, note2, note3, note4, note5)
    m = moyene(s)
    v = variance(m, note1, note2, note3, note4, note5)
    c = ecartType(v)
    cv = ceo(c, m)
    return (s, m, v, c, cv)


