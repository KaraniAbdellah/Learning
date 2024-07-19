// simple graph oriented
#include <stdlib.h>

#define n 3
typedef struct Node {
    int data;
    struct Node *next;
} Node;

typedef struct List {
    Node *head;
} List; 

List *adjList[n] = {0};

void addNode(int s, int d) {
    Node *dest, *src, *temp;
    if (adjList[s]->head == NULL) {
        src = (Node *) malloc(sizeof(Node));
        src->data = s;
        src->next = NULL;
        adjList[s]->head = src;
    }
    dest = (Node *) malloc(sizeof(Node));
    dest->data = d;
    temp = adjList[s]->head;
    while (temp->next != NULL) temp = temp->next;
    dest->next = temp;
}


void printfList() {
    for (int i = 0; i < n; i++) {
        Node *temp = adjList[i]->head;
        printf("Adjacency List for %d are : ", i);
        while (temp != NULL) {
            printf("%d  ", temp->data);
            temp = temp->next;
        }
        printf("\n");
    }
}



















