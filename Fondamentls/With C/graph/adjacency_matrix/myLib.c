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
                if (g->edges[i][j]) printf("%d --> %d;\n", i, j);
            }
        }
    }
    printf("};\n\n");
}



// add edges to the directed graph
void add_edges_directed_S(graph *g, int from, int to) {
    if (g != NULL) {
        if (g->nbr_nodes - 1 >= from && g->nbr_nodes - 1 >= to) {
            if (!g->edges[from][to]) g->edges[from][to] = 1;
        }
    }
}


// add edges to the undirected graph
void add_edges_undirected_S(graph *g, int from, int to) {
    if (g != NULL) {
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
/*
    for undirected graph delete column and row
    // Delete the column entries
    for (int i = 0; i < g->nbr_nodes; i++) {
        g->edges[i][v] = 0;
    }
*/


void delete_node_D(graph *g, int v) {
    int *temp = g->edges[v];
    g->edges[v] = NULL;
    free(temp);
    return;
}












