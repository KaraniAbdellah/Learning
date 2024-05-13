#include <stdio.h>
#include <stdlib.h>
#include <stddef.h>
#include <stdbool.h>

/*
typedef struct {
    int head;
    int size;
    int data[50];
} myStack;

int is_empty(myStack stack) {
    if(stack.head == 0) return 1;
    else return 0;
}

int is_plien(myStack stack) {
    if (stack.head == stack.size) return 1;
    else return 0;
}

void pile(myStack *stack, int value) {
    stack->data[stack->head] = value;
    stack->head++;
}

int depile(myStack *stack) {
    stack->head = stack->head - 1;
    return stack->data[stack->head];
}

void display(myStack *stack, int nbr_ele) {
    for (int i = 0; i < nbr_ele; i++) {
        printf("%d  ", stack->data[i]);
    }
    printf("\n");
}

int main() {
    myStack stack1;
    int nbr_ele, ele;
    printf("Enter Number Of Element : ");
    scanf("%d", &nbr_ele);
    stack1.size = nbr_ele;
    stack1.head = 0;
    for (int i = 0; i < nbr_ele; i++) {
        scanf("%d", &ele);
        pile(&stack1, ele);
    }
    // Test
    display(&stack1, nbr_ele);
    int delete_ele = depile(&stack1);
    display(&stack1, nbr_ele);
    printf("The Deleted Value Is %d", delete_ele);
    return 0;
}

*/

///////////////////////////////////////
///////////////////////////////////////
// With Linked List
typedef struct {
    int head;
    int size;
    struct Node *pile;
} myStack;

typedef struct Node {
    int data;
    struct Node *next;
} Node;

// Add At Queue And Remove At Head

int is_empty(myStack stack) {
    if(stack.head == 0) return 1;
    else return 0;
}

int is_plien(myStack stack) {
    if (stack.head == stack.size) return 1;
    else return 0;
}

void pile(Node **head, int value, myStack *stack) {
    // Like Add An Element in Linked List
    Node *new_node = (Node *) malloc(sizeof(Node));
    new_node->data = value;
    new_node->next = NULL;
    new_node->next = *head;
    *head = new_node;
    stack->head++;
}


void depile(Node **head, myStack *stack) {
    Node *temp = *head;
    *head = (*head)->next;
    free(temp);
    stack->head--;
}


void display(Node *head) {
    Node *temp = head;
    while (temp != NULL) {
        printf("%d ", temp->data);
        temp = temp->next;
    }
    printf("\n");
}

int main() {
    myStack stack1;
    Node *head = NULL;
    int nbr_ele, ele;
    printf("Enter Number Of Element : ");
    scanf("%d", &nbr_ele);
    stack1.size = nbr_ele;
    stack1.head = 0;
    for (int i = 0; i < nbr_ele; i++) {
        scanf("%d", &ele);
        pile(&head, ele, &stack1);
    }
    display(head);
    depile(&head, &stack1);
    display(head);
    // Test
    return 0;
}


























