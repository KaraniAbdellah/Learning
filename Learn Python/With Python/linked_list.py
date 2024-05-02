## Linked List
'''
    - List --> The elements are next to each other in memory

    Linked List --> Value && Pointer
        First Element --> Head
        Last Element --> Tail Point of NULL

    Advantage of Linked List && Arrays
    -- Linked List
        Search --> O(n)  
        Deletion, insertion --> O(1)
        Lookup Kth element --> O(k)
    -- Array
        Deletion, insertion, Search --> O(n)  
        Lookup Kth element --> O(1)

    next --> [Pointer] that pointe in next element but default pointe in None
    We start with one element that pointe in None
    When we create second we must modifier the next pointer of first element
        to pointe in second element not to None
'''
class Node:
    def __init__(self, data = 0, next_node = None) -> None:
        self.data = data
        self.next = next_node

def search_list (L, key):
    while L and L.data != key:
        L = L.next
    return L

def insert_after(node, new_node):
    new_node.next = node.next
    node.next = new_node

def insert_head():
    pass

def insert_tail():
    pass

def delete_after(node):
    if node.next is not None:
        node.next = node.next.next

