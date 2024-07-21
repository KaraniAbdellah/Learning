// simple graph oriented
#include <stdlib.h>

#define n 7 // number of nodes in graph

// Start With Simple Graph
typedef struct Node {
    int data;
    struct Node *next;
} Node;

typedef struct List {
    Node *head;
} List; 


// List *adjList_dsg[n] = {0}; // for directed simple graph
// List *adjList_udsg[n] = {0}; // for undirected simple graph


// This Function Intialize a Graph
void intialize_graph(List *adjList[n]) {
    for (int i = 0; i < n; i++) {
        adjList[i] = (List *) malloc(sizeof(List));
        adjList[i]->head = NULL;
    }
}


// This Function To Print a Graph
void printfList_simple_graph(List *adjList[n]) {
    for (int i = 0; i < n; i++) {
        Node *temp = adjList[i]->head;
        printf("Adjacency List for %d are : ", i);
        while (temp != NULL) {
            printf("(%d) -> ", temp->data);
            temp = temp->next;
        }
        printf("NULL");
        printf("\n");
    }
    printf("-------\n");
}


// directed simple graph
void addNode_dsg(int s, int d, List* adjList_dsg[n]) {
    // another implementation
    /* Node *temp, *src, *dest;
    if (adjList_dsg[s]->head == NULL) {
        Node *src = (Node *) malloc(sizeof(Node));
        src->next = NULL;
        src->data = s;
        adjList_dsg[s]->head = src;
    }
    dest = (Node *) malloc(sizeof(Node));
    dest->next = NULL;
    dest->data = d;
    temp = adjList_dsg[s]->head;
    while (temp->next != NULL) temp = temp->next;
    temp->next = dest; 
    */

    Node *dest, *temp;
    dest = (Node *) malloc(sizeof(Node));
    dest->data = d;
    if (adjList_dsg[s]->head == NULL) {
        adjList_dsg[s]->head = dest;
        return;
    }
    temp = adjList_dsg[s]->head;
    while (temp->next != NULL) temp = temp->next;
    temp->next = dest;
}



// undirected simple graph
void addNode_udsg(int s, int d, List *adjList_udsg[n]) {
    // connect edge s to d
    Node *dest, *src, *temp;
    dest = (Node *) malloc(sizeof(Node));
    dest->data = d;
    dest->next = NULL;
    if (adjList_udsg[s]->head == NULL) {
        adjList_udsg[s]->head = dest;
    } else {
        temp = adjList_udsg[s]->head;
        while (temp->next != NULL) temp = temp->next;
        temp->next = dest;
    }
    // connect edge d to s
    src = (Node *) malloc(sizeof(Node));
    src->data = s;
    src->next = NULL;
    if (adjList_udsg[d]->head == NULL) {
        adjList_udsg[d]->head = src;
    } else {
        temp = adjList_udsg[d]->head;
        while (temp->next != NULL) temp = temp->next;
        temp->next = src;
    }
}





// Start With Weighted Graph
typedef struct node_w {
    int data;
    int wight;
    struct node_w *next;
} node_w;

typedef struct List_W {
    node_w *head;
} List_W;


// Directed Weighted Graph
void addNode_wdg(List_W *adjList[n]) {
    
}


void printfList_weighted_graph(List *adjList[n]) {
    
}
































