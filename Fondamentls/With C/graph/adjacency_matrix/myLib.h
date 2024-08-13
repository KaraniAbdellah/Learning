#ifndef MY_GRAPH
#define MY_GRAPH
#include <stdbool.h>

typedef struct simple_graph {
    int nbr_nodes;
    bool **edges;
} simple_graph;


    // main functions
    simple_graph* create_graph(int nbr_nodes);
    void print_graph(simple_graph *g);

    // start simple graph [ directed and undirected ]
    void add_edges_directed_S(simple_graph *g, int from, int to);
    void add_edges_undirected_S(simple_graph *g, int from, int to);

    // start a weighted graph [ directed and undirected ]



#endif


