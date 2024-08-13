// start implementation of the functions

#include "myLib.h"
#include <stdlib.h>
#include <stdbool.h>


simple_graph* create_graph(int nbr_nodes) {
    simple_graph *new_graph = (simple_graph *) malloc(sizeof(simple_graph));
    new_graph->nbr_nodes = nbr_nodes;
    if (new_graph == NULL) {
        free(new_graph); return NULL;
    }
    
    // create rows in edges
    new_graph->edges = (bool **) calloc(nbr_nodes, sizeof(bool *));
    if (new_graph == NULL) {
        free(new_graph->edges); free(new_graph); return NULL;
    }
    
    // create columns in edges
    for (int i = 0; i < nbr_nodes; i++) {
        new_graph->edges[i] = (bool *) calloc(nbr_nodes, sizeof(bool));
        if (new_graph->edges[i] == NULL) {
            free(new_graph->edges[i]);
            // free previous spaces
            for (int j = 0; j < i; j++) free(new_graph->edges[j]);
            free(new_graph);
            return NULL;
        }
    }
    return new_graph;
}



















