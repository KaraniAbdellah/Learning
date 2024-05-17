#include <stdio.h>
#include <stddef.h>
#include <stdbool.h>


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
    q.head++;
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
} myQueue;


int isEmpty(myQueue *q) {
    if (q == NULL) return 1; // Empty List
    else return 0;
}

/*
int isFull(myQueue *q) {
    if (q->size == MAX_SIZE) return 1; // Full List
    else return 0;
}
*/
// We Need The Test For Empty List And Full List
void Enqueue(myQueue **head, int item) {
    myQueue *new_node = (myQueue *) malloc(sizeof(myQueue));
    if (new_node == NULL) {
        printf("\nOVERFLOW\n");
        return;
    }
    new_node->data = item;
    new_node->next = *head;
    *head = new_node;
}

void Dequeue(myQueue **head) {

}

int main() {
    myQueue *head = NULL;





    return 0;
}










