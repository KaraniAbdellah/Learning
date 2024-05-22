#include <stdio.h>
#include <stddef.h>
#include <stdbool.h>
#include <stdlib.h>


// Queue
/*
    isEmpty: Checks if the queue is empty by comparing the tail and head indices.
    isFull: Checks if the queue is full by comparing the tail index with the size of the queue.
    Enqueue: Inserts an element into the queue if it's not full.
    Dequeue: Removes and returns an element from the queue if it's not empty.
    display: Displays the elements of the queues.
    front: This operation returns the element at the front end without removing it.
    rear: This operation returns the element at the rear end without removing it.
*/

/*
#define MAX_SIZE 50

typedef struct {
    int head;
    int tail;
    int size;
    int elements[MAX_SIZE];
} myQueue;

bool isEmpty(myQueue q) {
    // queue is empty --> true
    // queue is not empty --> false
    return q.tail == q.head;
}

bool isFull(myQueue q) {
    // The queue is full --> true
    // The queue is not full --> false
    return q.tail == q.size;
}


void Enqueue(myQueue *q, int item) {
    if (isFull(*q)) {
        printf("\nQueue is full. Cannot enqueue.\n");
        return;
    }
    q->elements[q->tail] = item;
    q->tail++;
}

int Dequeue(myQueue *q) {
    if (isEmpty(*q)) {
        printf("Queue is empty. Cannot dequeue.\n");
        return -1;
    }
    int item = q->elements[q->head];
    q->head++;
    return item;
}

int Front(myQueue q) {
    if (isEmpty(q)) {
        printf("Queue is empty. Cannot dequeue.\n");
        return -1;
    }
    int front_item = q.elements[q.head];
    return front_item;
}

int Rear(myQueue q) {
    if (isEmpty(q)) {
        printf("Queue is empty. Cannot dequeue.\n");
        return -1;
    }
    q.tail--;
    int rear_item = q.elements[q.tail];
    return rear_item;
}

void display(myQueue *q) {
    printf("\n");
    for (int i = 0; i < q->size; i++) {
        printf("%d --> ", q->elements[i]);
    }
    printf("\n");
}

int main() {
    myQueue q;
    int item;
    printf("Enter the number of elements: ");
    scanf("%d", &q.size);
    q.head = q.tail = 0;
    while (!isFull(q)) {
        scanf("%d", &item);
        Enqueue(&q, item);
    }
    display(&q);
    int item_removed = Dequeue(&q);
    printf("\nItem Removed Is : %d\n", item_removed);
    display(&q);
    int front_item = Front(q);
    printf("\nItem At Front Is %d\n", front_item);
    display(&q);
    int rear_item = Rear(q);
    printf("\nItem At Rear Is %d\n", rear_item);
    display(&q);
    return 0;
}

*/

#define MAX_SIZE 10

typedef struct myQueue {
    int data;
    struct myQueue *next;
	struct myQueue *prev;
} myQueue;





// We Need The Test For Empty List And Full List
void Enqueue(myQueue **head, myQueue **tail, int item) {
    myQueue *new_node = (myQueue *) malloc(sizeof(myQueue));
    if (new_node == NULL) {
        printf("\nOVERFLOW\n");
        return;
    }
    new_node->data = item;
	new_node->next = new_node->prev = NULL;
    if (*tail == NULL) {
        *tail = *head = new_node;
    } else {
		new_node->prev = *tail;
        (*tail)->next = new_node;
        (*tail) = new_node;
    }
}


void Dequeue(myQueue **head, myQueue **tail) {
    if (*head == NULL) {
        printf("\nList is Empty!\n");
        return;
    }
    myQueue *temp = *head;
    *head = temp->next;
    if (*head == NULL) *tail = NULL;
	else (*head)->prev = NULL;
    free(temp);
}


void display_head(myQueue *head) {
    if (head == NULL) printf("\nThe List Is Empty\n");
    else {
        myQueue *temp = head;
        while (temp != NULL) {
            printf("%d --> ", temp->data);
            temp = temp->next;
        }
    }
    printf("\n");
}

void display_tail(myQueue *tail) {
	if (tail == NULL) printf("\nThe List is Empty\n");
	else {
		myQueue *temp = tail;
		while (temp != NULL) {
			printf("%d <-- ", temp->data);
			temp = temp->prev;		
		}
	}
}



int Front(myQueue *head) {
    if (head == NULL) {
    	printf("\nList is Empty\n");
    	return;	
    }
    int front_item = head->data;
    return front_item;
}

int Rear(muQueue *tail) {
	if (tail == NULL) {
		printf("\nList is Empty\n");
		return;
	}
	int rear_item = tail->data;
	return rear_item;
}

int main() {
    myQueue *tail = NULL;
    myQueue *head = NULL;
    int nbr_items, item;
    printf("Enter The Number Of The Element : ");
    scanf("%d", &nbr_items);
    for (int i = 0; i < nbr_items; i++) {
        scanf("%d", &item);
        Enqueue(&head, &tail, item);
    }
    display_head(head);
    Dequeue(&head, &tail);
    display_tail(tail);
	printf("\nFirst Element is %d\n", Front(head));
	printf("\nLast Element is %d\n", Rear(tail));
    return 0;
}










