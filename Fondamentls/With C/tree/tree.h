#ifndef my_tree
#define my_tree

typedef struct Node {
    int data;
    struct Node *left;
    struct Node *right;
} Node;


    // Start The Protptype Of The Fucntions
    Node *create_node(int value);
    void insert_node(Node **root, int value);
    void display(Node *root);

#endif
