#include <stdio.h>
#include <stdlib.h>
#include "tree.h"



// Insert Node in The Tree
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
            } else temp = temp->right;
        } else {
            if (temp->left == NULL) {
                temp->left = new_node;
                break;
            } else temp = temp->left;
        }
    }
}


// Create Node
Node *create_node(int value) {
    Node *new_node = (Node *)malloc(sizeof(Node));
    new_node->left = new_node->right = NULL;
    new_node->data = value;
    return new_node;
}


// Create Ele in Queue
Queue *create_queue(Node *node) {
    Queue *new_ele = (Queue *)malloc(sizeof(Queue));
    new_ele->data = node;
    new_ele->next = NULL;
    return new_ele;
}


// Enqueue
void enqueue(Queue **front, Queue **rear, Node *node) {
    Queue *new_ele = create_queue(node);
    if (*rear == NULL) {
        *front = *rear = new_ele;
    } else {
        (*rear)->next = new_ele;
        *rear = new_ele;
    }
}


// Dequeue
Node *dequeue(Queue **front, Queue **rear) {
    if (*front == NULL) {
        return NULL;
    }
    Queue *temp = *front;
    Node *node = temp->data;
    *front = (*front)->next;
    if (*front == NULL) {
        *rear = NULL;
    }
    free(temp);
    return node;
}


// Display The Elements in Level Order
void display_level_order(Node *root) {
    if (root == NULL) {
        return;
    }
    Queue *front = NULL, *rear = NULL;
    enqueue(&front, &rear, root);
    while (front != NULL) {
        Node *toprint = front->data;
        if (toprint->left != NULL) {
            enqueue(&front, &rear, toprint->left);
        }
        if (toprint->right != NULL) {
            enqueue(&front, &rear, toprint->right);
        }
        printf("%d ", toprint->data);
        dequeue(&front, &rear);
    }
    printf("\n");
}










