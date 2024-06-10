#include <stdio.h>
#include <stdlib.h>
#include "tree.h"

// Queue Node
typedef struct QueueNode {
    Node* data;
    struct QueueNode* next;
} QueueNode;

// Queue Structure
typedef struct {
    QueueNode* front;
    QueueNode* rear;
} Queue;

// Initialize Queue
Queue* createQueue() {
    Queue* q = (Queue*)malloc(sizeof(Queue));
    q->front = q->rear = NULL;
    return q;
}

// Enqueue
void enqueue(Queue* q, Node* data) {
    QueueNode* newNode = (QueueNode*)malloc(sizeof(QueueNode));
    newNode->data = data;
    newNode->next = NULL;
    if (q->rear == NULL) {
        q->front = q->rear = newNode;
        return;
    }
    q->rear->next = newNode;
    q->rear = newNode;
}

// Dequeue
Node* dequeue(Queue* q) {
    if (q->front == NULL)
        return NULL;
    QueueNode* temp = q->front;
    Node* data = temp->data;
    q->front = q->front->next;
    if (q->front == NULL)
        q->rear = NULL;
    free(temp);
    return data;
}

// Display Tree Level by Level
void displayLevelOrder(Node* root) {
    if (root == NULL) return;

    Queue* q = createQueue();
    Node* temp;

    enqueue(q, root);

    while (q->front != NULL) {
        temp = dequeue(q);
        printf("%d ", temp->data);
        if (temp->left)
            enqueue(q, temp->left);
        if (temp->right)
            enqueue(q, temp->right);
    }
    printf("\n");
}

int main() {
    Node* root = NULL;
    int nbr_ele, value;
    printf("Enter The Number Of The Element : ");
    scanf("%d", &nbr_ele);
    for (int i = 0; i < nbr_ele; i++) {
        printf("Ele %d : ", i + 1);
        scanf("%d", &value);
        insert_node(&root, value);
    }
    printf("Level Order Traversal: ");
    displayLevelOrder(root);
    return 0;
}

