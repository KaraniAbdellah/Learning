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


typedef struct myStack {
	int data;
	struct myStack *next;
	struct myStack *prev;
} myStack;


void push(myStack **head, myStack **summit, int item) {
	myStack *new_node = (myStack *) malloc(sizeof(myStack));
	new_node->prev = new_node->next = NULL;
	new_node->data = item;
	if (*head == NULL) *head = *summit = new_node;
	else {
		(*summit)->next = new_node;
		new_node->prev = *summit; 
		*summit = new_node;
	}
}

void pop(myStack **head, myStack **summit) {
	if (*summit == NULL) printf("\nList is Empty\n");
	else {
		myStack *temp = *summit;
		*summit = temp->prev;
		if (*summit == NULL) *head = NULL;
		else (*summit)->next = NULL;
		free(temp);	
	}
}


void display(myStack *head) {
	if (head == NULL) printf("\nStack Empty\n");
	else {
		myStack *temp = head;
		while (temp != NULL) {
			printf("%d --> ", temp->data);
			temp = temp->next;
		}	
	}
	printf("\n");
}


void free_stack(myStack **head, myStack **summit) {
	myStack *temp;
	myStack *current = temp;
	while (current != NULL) {
		temp = current;
		*summit = temp->prev;
		current = current->prev;
		free(temp);
	}
}


int main() {
	myStack *summit = NULL;
	myStack *head = NULL;
	int nbr_ele, item;
	printf("Enter The Number Of Element : ");
	scanf("%d", &nbr_ele);
	for (int i = 0; i < nbr_ele; i++) {
		scanf("%d", &item);
		push(&head, &summit, item);
	}
	display(head);
	pop(&head, &summit);
	display(head);
	free_stack(&head, &summit);
	display(head);
}























