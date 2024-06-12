#ifndef my_tree
#define my_tree

typedef struct Node {
    int data;
    struct Node *left;
    struct Node *right;
} Node;


typedef struct Queue {
    Node *adresse;
    struct Queue* front;
    struct Queue* rear;
}


    // Start The Protptype Of The Fucntions
    Node *create_node(int value);
    void insert_node(Node **root, int value);
    void display(Node *root);

#endif
