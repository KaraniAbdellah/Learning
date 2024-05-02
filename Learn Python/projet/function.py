def singe(a, b):
    if a * b > 0:
        print(f"{a} And {b} Have Same Value")
    else:
        print(f"{a} And {b} Have Not Same Value")

def min(a, b):
    if a < b:
        print(f"The Minimum Is : {a}")
    else:
        print(f"The Minimum Is : {b}")

def max(a, b):
    if a < b:
        print(f"The Maximum Is : {b}")
    else:
        print(f"The Maximum Is : {a}")

def sayHello():
    print("Hello World!")

# projet/function.py

def say_hello():
    print("Hello from the projet package!")

# projet/other_module.py

def add_numbers(a, b):
    return a + b
