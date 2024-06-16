#ifndef my_tree
#define my_tree

// For Each Node In The Tree
typedef struct Node {
    int data;
    struct Node *left;
    struct Node *right;
} Node;

// For Display The Elements In The Tree
typedef struct Queue {
    Node *data;
    struct Queue *next;
} Queue;

    // Functions Protptypes
    Node *create_node(int value);
    void insert_node(Node **root, int value);
    void display(Node *root);
    Node *create_node(int value);
    Queue *create_queue(Node *node);
    void enqueue(Queue **front, Queue **rear, Node *node);
    Node *dequeue(Queue **front, Queue **rear);
    void display_level_order(Node *root);
    void Prefixe(Node *root);
    void Infixe(Node *root);
    void Postfixe(Node *root);

#endif
