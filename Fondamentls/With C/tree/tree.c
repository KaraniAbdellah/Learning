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


// Display The Elements

void display(Node *root) {
    Node *temp = root;
    
    printf("\n");
}



























