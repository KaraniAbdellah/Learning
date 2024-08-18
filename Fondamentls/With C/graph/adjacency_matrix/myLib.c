// start implementation of the functions

#include "myLib.h"
#include <stdlib.h>
#include <stdbool.h>
#include <stdio.h>


// create a graph
graph* create_graph(int nbr_nodes) {
    graph *new_graph = (graph *) malloc(sizeof(graph));
    new_graph->nbr_nodes = nbr_nodes;
    if (new_graph == NULL) {
        return NULL;
    }
    
    // create rows in edges
    new_graph->edges = (int **) calloc(nbr_nodes, sizeof(int *));
    if (new_graph == NULL) {
        free(new_graph); return NULL;
    }
    
    // create columns in edges
    for (int i = 0; i < nbr_nodes; i++) {
        new_graph->edges[i] = (int *) calloc(nbr_nodes, sizeof(int));
        if (new_graph->edges[i] == NULL) {
            free(new_graph->edges[i]);
            // free previously allocated spaces
            for (int j = 0; j < i; j++) free(new_graph->edges[j]);
            free(new_graph->edges);
            free(new_graph);
            return NULL;
        }
    }
    return new_graph;
}


// print a graph
void print_graph_S(graph *g) {
    printf("Diagraph {\n");
    if (g != NULL) {
        for (int i = 0; i < g->nbr_nodes; i++) {
            for (int j = 0; j < g->nbr_nodes && g->edges[i] != NULL; j++) {
                if (&g->edges[i][j] != NULL) {
                    if (g->edges[i][j]) printf("%d --> %d;\n", i, j);
                }
            }
        }
    }
    printf("};\n\n");
}



// add edges to the directed graph
void add_edges_directed_S(graph *g, int from, int to) {
    if (g != NULL) {
        if (g->edges[from] == NULL) {
            g->edges[from] = (int *) calloc(g->nbr_nodes, sizeof(int));
        }
        if (g->nbr_nodes - 1 >= from && g->nbr_nodes - 1 >= to) {
            if (!g->edges[from][to]) g->edges[from][to] = 1;
        }
    }
}


// add edges to the undirected graph
void add_edges_undirected_S(graph *g, int from, int to) {
    if (g != NULL) {
        if (g->edges[from] == NULL) {
            g->edges[from] = (int *) calloc(g->nbr_nodes, sizeof(int));
        }
        if (g->edges[to] == NULL) {
            g->edges[to] = (int *) calloc(g->nbr_nodes, sizeof(int));
        }
        if (g->nbr_nodes > from && g->nbr_nodes > to) {
            if (!g->edges[from][to] && !g->edges[to][from]){
                 g->edges[from][to] = 1; g->edges[to][from] = 1;
            }
        }
    }
}



// add edges to the weighted directed graph
void add_edges_directed_W(graph *g, int from, int to, int weight) {
    if (g != NULL) {
        if (g->nbr_nodes > from && g->nbr_nodes > to) {
            if (!g->edges[from][to]) {
                g->edges[from][to] = weight;
            }
        }
    }
}


// print a weight graph
void print_graph_W(graph *g) {
    if (g != NULL) {
        printf("Diagraph {\n");
        for (int i = 0; i < g->nbr_nodes; i++) {
            for (int j = 0; j < g->nbr_nodes && g->edges[i] != NULL; j++) {
                if (g->edges[i][j] != 0) {
                    printf("%d --> %d; [ %d ]\n", i, j, g->edges[i][j]);
                }
            }
        }
    }
    printf("\n\n");
}


void add_edges_undirected_W(graph *g, int from, int to, int weight) {
    if (g != NULL) {
        if (g->nbr_nodes > from && g->nbr_nodes > to) {
            if (!g->edges[from][to]) {
                g->edges[from][to] = weight;
                g->edges[to][from] = weight;
            }
        }
    }
}



// Delete node from graph
void delete_node(graph *g, int v) {
    int *temp = g->edges[v];
    g->edges[v] = NULL;
    free(temp);
    // delete sub-spaces
    for (int i = 0; i < g->nbr_nodes; i++) {
        if (g->edges[i] != NULL) {
            if (g->edges[i][v] == 1) g->edges[i][v] = 0;
        }
    }
    return;
}



// insert node at the stack
void insert_at_stack(stack **head, int data) {
    stack *new_node = (stack *) malloc(sizeof(stack));
    new_node->next = new_node->prev = NULL;
    new_node->data = data;
    if (*head == NULL) {
        *head = new_node; return;
    }
    new_node->prev = *head;
    (*head)->next = new_node;
    *head = new_node;
}

// delete node from stack
int delete_from_stack(stack **head) {
    if (*head == NULL) {
        return -1;
    }
    stack *temp = *head;
    int value = temp->data;
    (*head)->next = NULL;
    if ((*head)->prev != NULL) (*head) = (*head)->prev;
    else *head = NULL;
    return value;
}


// DFS Deapth Search First
void depth_search_first(graph *g) {
    if (g == NULL) return;
    // visited & choise the root & insert first ele
    int visited[g->nbr_nodes];
    for (int i = 0; i < g->nbr_nodes; i++) visited[i] = -1;
    stack *head = NULL;
    int root = 0;
    while (root < g->nbr_nodes) {
        if (g->edges[root] != NULL) break;
        else root++;
    }
    insert_at_stack(&head, root);
    visited[root] = 1;
    // Start DFS
    while (head != NULL) {
        // delete
        int deleted_node = delete_from_stack(&head);
        // print
        printf("%d --> ", deleted_node);
        // insert from each row clolumn [ start with root ]
        for (int i = 0; i < g->nbr_nodes; i++) {
            if (g->edges[i] != NULL) {
                if (g->edges[deleted_node][i] != 0 && visited[i] != 1) {
                    insert_at_stack(&head, i);
                    // set visited
                    visited[i] = 1;
                }
            }
        }
    }
    printf("\n\n");
}



// insert at the queue
void insert_at_queue(queue **head, queue **tail, int v) {
    queue *new_node = (queue *) malloc(sizeof(queue));
    new_node->next = NULL;
    new_node->data = v;
    if (*head == NULL) {
        *head = new_node; 
        *tail = new_node; return;
    }
    (*tail)->next = new_node;
    *tail = new_node;
}



// delete from queue
int delete_from_queue(queue **head, queue **tail) {
    if (*head == NULL) return -1;
    queue *temp = *head;
    int value = temp->data;
    *head = (*head)->next;
    if (*head == NULL) *tail = NULL;
    free(temp);
    return value;
}

void breadth_search_first(graph *g) {
    if (g == NULL) return;
    // visited & choise the root & insert first ele
    queue *head = NULL, *tail = NULL;
    int visited[g->nbr_nodes];
    for (int i = 0; i < g->nbr_nodes; i++) visited[i] = -1;
    int root = 0;
    while (root < g->nbr_nodes) {
        if (g->edges[root] == NULL) root++;
        else break;
    }
    
    insert_at_queue(&head, &tail, root);
    visited[root] = 1;
    
    // Start Breath First Search
    while (head != NULL) {
        // delete
        int deleted_node = delete_from_queue(&head, &tail);
        // print
        printf("%d --> ", deleted_node);
        if (g->edges[deleted_node] != NULL) {
            for (int i = 0; i < g->nbr_nodes; i++) {
                // insert
                if (g->edges[deleted_node][i] != 0 && visited[i] != 1) {
                    insert_at_queue(&head, &tail, i);
                    // visited
                    visited[i] = 1;
                }
            }
        }
    }
    
    printf("\n\n");
}





// Search For An Element
void search_in_graph(graph *g, int v) {
    if (g == NULL) {
        printf("The Graph Is Emepty\n"); return;
    }
    if (g->nbr_nodes <= v) {
        printf("The Node Does Not Exit In Graph\n");
        return;
    }
    for (int i = 0; i < g->nbr_nodes; i++) {
        if ((g->edges[i] != NULL && g->edges[i][v] != 0) 
        || (g->edges[v] != NULL && g->edges[v][i] != 0)) {
            printf("The Node Exit In Graph\n"); return;
        }
    }
}




























