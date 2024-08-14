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
    new_graph->edges = (bool **) calloc(nbr_nodes, sizeof(bool *));
    if (new_graph == NULL) {
        free(new_graph); return NULL;
    }
    
    // create columns in edges
    for (int i = 0; i < nbr_nodes; i++) {
        new_graph->edges[i] = (bool *) calloc(nbr_nodes, sizeof(bool));
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
            for (int j = 0; j < g->nbr_nodes; j++) {
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
    printf("Weighted is %d\n", weight);
    if (g != NULL) {
        if (g->nbr_nodes > from && g->nbr_nodes > to) {
            if (!g->edges[from][to]) {
                printf("Weighted = %d at g->edges[%d][%d]\n", g->edges[from][to], from, to);
                g->edges[from][to] = weight;
                printf("Weighted = %d at g->edges[%d][%d]\n", g->edges[from][to], from, to);
            }
        }
    }
}


// print a weight graph
void print_graph_W(graph *g) {
    if (g != NULL) {
        printf("Diagraph {\n");
        for (int i = 0; i < g->nbr_nodes; i++) {
            for (int j = 0; j < g->nbr_nodes; j++) {
                if (g->edges[i][j] != 0) {
                    printf("%d --> %d; [ %d ]\n", i, j, g->edges[i][j]);
                }
            }
        }
    }
    printf("\n\n");
}

















