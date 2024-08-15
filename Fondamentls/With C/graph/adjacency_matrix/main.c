#include <stdio.h>
#include "myLib.h"


int main() {
    // Simple Directed Graph
    printf("Simple Directed Graph : \n\n");
    graph *directed_graphS = create_graph(5);
    add_edges_directed_S(directed_graphS, 0, 1);
    add_edges_directed_S(directed_graphS, 1, 2);
    add_edges_directed_S(directed_graphS, 2, 3);
    print_graph_S(directed_graphS);
    
    // Simple UnDirected Graph
    printf("Simple UnDirected Graph : \n\n");
    graph *undirected_graphS = create_graph(5);
    add_edges_undirected_S(undirected_graphS, 0, 1);
    add_edges_undirected_S(undirected_graphS, 1, 2);
    add_edges_undirected_S(undirected_graphS, 2, 3);
    print_graph_S(undirected_graphS);
    
    
    // Weighted Directed Graph
    printf("Weighted Directed Graph : \n\n");
    graph *directed_graphW = create_graph(5);
    add_edges_directed_W(directed_graphW, 0, 1, 3);
    add_edges_directed_W(directed_graphW, 1, 2, 4);
    add_edges_directed_W(directed_graphW, 2, 4, 5);
    print_graph_W(directed_graphW);
    
    // Weighted UnDirected Graph
    printf("Weighted Directed Graph : \n\n");
    graph *undirected_graphW = create_graph(5);
    add_edges_undirected_W(undirected_graphW, 0, 1, 3);
    add_edges_undirected_W(undirected_graphW, 1, 2, 4);
    add_edges_undirected_W(undirected_graphW, 2, 4, 5);
    print_graph_W(undirected_graphW);
    
    // Delete Node From Simple Graph
    printf("Delete a Node From a Graph : \n\n");
    delete_node_D(directed_graphS, 0);
    print_graph_S(directed_graphS);
    
    
    
    
    return 0;
}



// deletion and BFS and DFS and Search
















