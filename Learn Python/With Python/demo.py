## Linked List class
'''
    Node Class: Represent Each Element in Linked List
        data : This Stores the actual value of the node
        next : This ia a reference to the next node
    Linked_list Class: represent The head Of The List
'''

class Node:
    def __init__(self, data=0, next_node=None) -> None:
        self.data = data
        self.next = next_node
    def insert_after(self, new_node):
        ''' insert new node after the self node ''' # self is node
        new_node.next = self.next
        self.next = new_node
    def delete_after(self):
        ''' delete the node past this one '''
        if self.next is not None:
            self.next = self.next.next
    def __str__(self) -> str:
        return str(self.data)


class Linked_list:
    def __init__(self, head=None) -> None:
        self.head = head # type is Node or None
    def from_list(X):
        ''' create a Linked List From List '''
        if not(X):
            # The List Is Empty
            return Linked_list()
        LL = Linked_list(Node(X[0]))
        last = LL.head
        for i in range(1, len(X)):
            last.next = Node(X[i])
            last = last.next
        return LL
    def get(self, k):
        ''' get the kth element '''
        L = self.head
        i = 0
        while i < k and L:
            L = L.next
            i += 1
        return L
    



