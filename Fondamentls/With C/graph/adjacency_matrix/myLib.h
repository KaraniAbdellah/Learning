#ifndef MY_GRAPH
#define MY_GRAPH
#include <stdbool.h>


// Simple Graph
typedef struct simple_graph {
    int nbr_nodes;
    bool **edges;
} simple_graph;

// Weighted Graph
typedef struct graph {
    int nbr_nodes;
    int **edges;
} graph;

// Stack For DFS
typedef struct stack {
    int data;
    struct stack *next;
    struct stack *prev;
} stack;

// Queue For BFS
typedef struct queue {
    int data;
    struct queue *next;
} queue;


    // main functions
    graph* create_graph(int nbr_nodes);

    // start simple graph [ directed and undirected ]
    void add_edges_directed_S(graph *g, int from, int to);
    void add_edges_undirected_S(graph *g, int from, int to);
    void print_graph_S(graph *g);

    // start a weighted graph [ directed and undirected ]
    void add_edges_directed_W(graph *g, int from, int to, int weight);
    void add_edges_undirected_W(graph *g, int from, int to, int weight);
    void print_graph_W(graph *g);

    // delete a node from graph
    void delete_node(graph *g, int v);
    
    // Deapth Frist Search
    void insert_at_stack(stack **head, int data);
    int delete_from_stack(stack **head);
    void depth_search_first(graph *g);
    
    // Breath First Search
    void breadth_search_first(graph *g);
    int delete_from_queue(queue **head, queue **tail);
    void insert_at_queue(queue **head, queue **tail, int v);
    
    

#endif













