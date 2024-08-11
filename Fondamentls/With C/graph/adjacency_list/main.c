#include <stdio.h>
#include <stdlib.h>
#include "myLib.h"




int main() {
    // directed simple graph
    printf("\nDirected Simple Graph : \n\n");
    List *adjList_dsg[n] = {0};
    
    intialize_simple_graph(adjList_dsg);
    
    addNode_dsg(0, 1, adjList_dsg);
    addNode_dsg(0, 3, adjList_dsg);
    addNode_dsg(1, 3, adjList_dsg);
    addNode_dsg(1, 4, adjList_dsg);
    addNode_dsg(1, 5, adjList_dsg);
    addNode_dsg(2, 4, adjList_dsg);
    addNode_dsg(2, 0, adjList_dsg);
    addNode_dsg(2, 1, adjList_dsg);
    printfList_simple_graph(adjList_dsg);
    
    // undirected simple graph
    printf("\nUndirected Simple Graph : \n\n");
    List *adjList_udsg[n] = {0};
    
    intialize_simple_graph(adjList_udsg);
    
    addNode_udsg(0, 1, adjList_udsg);
    addNode_udsg(0, 2, adjList_udsg);
    addNode_udsg(0, 3, adjList_udsg);
    addNode_udsg(1, 2, adjList_udsg);
    addNode_udsg(1, 4, adjList_udsg);
    addNode_udsg(1, 5, adjList_udsg);
    addNode_udsg(2, 4, adjList_udsg);
    printfList_simple_graph(adjList_udsg);
    
    // Directed weighted graph
    printf("\nDirected Weighted Graph : \n\n");
    
    List_W *adjList_dwg[n] = {0};
    
    intialize_weighted_graph(adjList_dwg);
    
    addNode_wdg(0, 1, 4, adjList_dwg);
    addNode_wdg(0, 3, 3, adjList_dwg);
    addNode_wdg(0, 5, 5, adjList_dwg);
    addNode_wdg(2, 1, 7, adjList_dwg);
    addNode_wdg(3, 4, 1, adjList_dwg);
    addNode_wdg(1, 3, 1, adjList_dwg);
    printfList_weighted_graph(adjList_dwg);
    
    // Undirected weighted graph
    printf("\nUndirected Weighted Graph : \n\n");
    
    List_W *adjList_udwg[n] = {0};
    
    intialize_weighted_graph(adjList_udwg);
    
    addNode_uwdg(0, 1, 4, adjList_udwg);
    addNode_uwdg(0, 3, 3, adjList_udwg);
    addNode_uwdg(0, 5, 5, adjList_udwg);
    addNode_uwdg(2, 1, 7, adjList_udwg);
    addNode_uwdg(3, 4, 1, adjList_udwg);
    addNode_uwdg(1, 3, 1, adjList_udwg);
    printfList_weighted_graph(adjList_udwg);
    
    // BFS With Adjacency List
    printf("\nBreadth First Search : \n\n");
    breadth_first_search(adjList_dsg);
    breadth_first_search(adjList_udsg);
    
    // DFS With Adjacency List
    printf("\nDepth First Search : \n\n");
    depth_first_search(adjList_dsg);
    depth_first_search(adjList_udsg);
    
    // Delete A Node From Graph
    int node_nbr = 1;
    printf("\nDelete Node From Graph Ele --> [%d] : \n", node_nbr);
    printfList_simple_graph(adjList_dsg);
    delete_node_from_Dgraph(adjList_dsg, node_nbr);
    printfList_simple_graph(adjList_dsg);
    printf("\nDepth First Search : \n\n");
    depth_first_search(adjList_dsg);
    
    // Search About Element in Graph
    search_in_garph(adjList_dsg, 10);
    search_in_garph(adjList_dsg, 0);
    
    return 0;
}


















