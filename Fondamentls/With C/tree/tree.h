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
    struct Queue *prev;
} Queue;


    // Functions Protptypes
    Node *create_node(int value);
    void insert_node(Node **root, int value);
    Queue *create_queue(Node *new_node);
    void enqueue(Queue **front, Queue **rear, Node *new_node);
    void display_level_order(Node *root);
    void Prefixe(Node *root);
    void Infixe(Node *root);
    void Postfixe(Node *root);
    Node *minimum(Node *root);
    Node *maximum(Node *root);
    Node *search(Node *root, int value);
    Node *search_recursive(Node *root, int value);
    Node *deleteNode(Node *root, int value);
    int is_bst(Node *root);
#endif











