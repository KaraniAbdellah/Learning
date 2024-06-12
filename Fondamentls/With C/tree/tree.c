#include <stdio.h>
#include <stdlib.h>
#include "tree.h"

// Start Learning Trees

/*
    - There Are Lot Of Types of Trees But We Are Going To Focus In Binary Search Tree (BTS)
    - We Are Going To See Implementation of [Insertion, Delelation, Search, browse or Add Elements]
*/



// Create Node
Node *create_node(int value) {
    Node *new_node = (Node *) malloc(sizeof(Node));
    new_node->left = new_node->right = NULL;
    new_node->data = value;
    return new_node;
}

// Insert Node
void insert_node(Node **root, int value) {
    Node *temp, *new_node;
    new_node = create_node(value);
    if (*root == NULL) {
        *root = new_node;
        return;
    }
    temp = *root;
    while (1) {
        if (temp->data < new_node->data) {
            if (temp->right == NULL) {
                temp->right = new_node;
                break;
            } else temp  = temp->right;
        } else {
            if (temp->left == NULL) {
                temp->left = new_node;
                break;
            } else temp = temp->left;
        }
    }
}


typedef struct Queue {
    Node *data;
    Queue *next;
} Queue;


// create Queue Element
Queue *create_queue() {
    Queue *new_ele = (Queue *) malloc(sizeof(Queue));
    new_ele->front = new_ele->rear = NULL;
    return new_ele;
}

// Enqueue
void enqueue(Queue **front, Queue **rear, Node *node) {
    Queue *new_ele = create_queue();
    new_ele->data = node;
    if (*front == NULL) {
        front = rear = new_ele;
    } else {
        rear->next = = new_ele;
        new_ele->next = NULL;
    }
}

Queue *dequeue(Queue *rear) {
    return rear;
}


// Display The Elements
void display(Queue *front, Queue *rear, Node *root) {
    Node *temp = root;
    enqueue(&front, &rear, temp);
    while (rear != NULL) {
        enqueue(&front, &rear, temp->right);
        enqueue(&front, &rear, temp->left);
    }
    printf("\n");
}



























