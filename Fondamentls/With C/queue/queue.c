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
*/


#define MAX_SIZE 50

typedef struct {
    int head;
    int tail;
    int size;
    int elements[MAX_SIZE];
} myQueue;

bool isEmpty(myQueue Q) {
    // queue is empty --> true
    // queue is not empty --> false
    return Q.tail == Q.head;
}

bool isFull(myQueue Q) {
    // The queue is full --> true
    // The queue is not full --> false
    return Q.tail == Q.size;
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
    return 0;
}












