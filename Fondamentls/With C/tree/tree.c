#include <stdio.h>
#include <stdlib.h>
#include "tree.h"



// Create Node
Node *create_node(int value) {
    Node *new_node = (Node *)malloc(sizeof(Node));
    new_node->left = new_node->right = NULL;
    new_node->data = value;
    return new_node;
}


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



// Create Ele in Queue
Queue *create_queue(Node *node) {
    Queue *new_ele = (Queue *)malloc(sizeof(Queue));
    new_ele->data = node;
    new_ele->next = new_ele->prev = NULL;
    return new_ele;
}


// Enqueue
void enqueue(Queue **front, Queue **rear, Node *node) {
    Queue *new_ele = create_queue(node);
    if (*rear == NULL) {
        *front = *rear = new_ele;
    } else {
        new_ele->prev = *rear;
        (*rear)->next = new_ele;
        *rear = new_ele;
    }
}


// Dequeue
Node *dequeue(Queue **front, Queue **rear) {
    if (*front == NULL) {
        return NULL;
    }
    Queue *temp = *rear;
    Node *node = temp->data;
    *rear = (*rear)->prev;
    if (*rear == NULL) {
        *front = NULL;
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
        Node *toprint = dequeue(&front, &rear);
        printf("%d ", toprint->data);
        if (toprint->left != NULL) {
            enqueue(&front, &rear, toprint->left);
        }
        if (toprint->right != NULL) {
            enqueue(&front, &rear, toprint->right);
        }
    }
    printf("\n");
}


// Start Prefxe -->  root-left-right
void Prefixe(Node *root) {
    if (root == NULL) return;
    printf("%d  ", root->data);
    Prefixe(root->left);
    Prefixe(root->right);
}


// Start Infixe -->  left-racine-right
void Infixe(Node *root) {
    if (root == NULL) return;
    Infixe(root->left);
    printf("%d  ", root->data);
    Infixe(root->right);
}


// Start Postfixe -->  left-right-root
void Postfixe(Node *root) {
    if (root == NULL) return;
    Postfixe(root->left);
    Postfixe(root->right);
    printf("%d  ", root->data);
}


// Search The Min Element
Node *minimum(Node *root) {
    Node *temp;
    if (root == NULL) return NULL;
    temp = root;
    while (temp->left != NULL) temp = temp->left;
    return temp;
}


// Search The Max Element
Node *maximum(Node *root) {
    Node *temp;
    if (root == NULL) return NULL;
    temp = root;
    while (temp->right != NULL) temp = temp->right;
    return temp;
}


// Search About An Element
Node *search(Node *root, int value) {
    Node *temp;
    temp = root;
    while (temp != NULL) {
        if (temp->data == value) return temp;
        else if (temp->data > value) {
            temp = temp->left;
        } else temp = temp->right;
    }
    return NULL;
}


// Search With Recursive
Node *search_recursive(Node *root, int value) {
    if (root->data == value) return root;
    else if (root->data > value) search_recursive(root->left, value);
    else search_recursive(root->right, value);
}



// Delete Node
Node *deleteNode(Node *root, int value) {
    // Built It Alone After Explication
}






















