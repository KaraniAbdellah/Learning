#include <stdio.h>
#include <stdlib.h>
#include "myLib.h"




int main() {
    // directed simple graph
    printf("\nDirected Simple Graph : \n\n");
    List *adjList_dsg[n] = {0};
    
    intialize_graph(adjList_dsg);
    
    addNode_dsg(0, 1, adjList_dsg);
    addNode_dsg(0, 2, adjList_dsg);
    addNode_dsg(0, 3, adjList_dsg);
    addNode_dsg(1, 2, adjList_dsg);
    addNode_dsg(1, 4, adjList_dsg);
    addNode_dsg(1, 5, adjList_dsg);
    addNode_dsg(2, 4, adjList_dsg);
    printfList_simple_graph(adjList_dsg);
    
    // undirected simple graph
    printf("\nUndirected Simple Graph : \n\n");
    List *adjList_udsg[n] = {0};
    
    intialize_graph(adjList_udsg);
    addNode_udsg(0, 1, adjList_udsg);
    addNode_udsg(0, 2, adjList_udsg);
    addNode_udsg(0, 3, adjList_udsg);
    addNode_udsg(1, 2, adjList_udsg);
    addNode_udsg(1, 4, adjList_udsg);
    addNode_udsg(1, 5, adjList_udsg);
    addNode_udsg(2, 4, adjList_udsg);
    printfList_simple_graph(adjList_udsg);
    
    // Directed weighted graph
    printf("\nUndirected wighted Graph : \n\n");
    
    
    
    
    return 0;
}


















