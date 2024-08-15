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
    void delete_node_D(graph *g, int v);

#endif













