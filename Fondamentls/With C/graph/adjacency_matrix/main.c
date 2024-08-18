#include <stdio.h>
#include "myLib.h"


int main() {
    // Simple Directed Graph
    printf("Simple Directed Graph : \n\n");
    graph *directed_graphS = create_graph(5);
    add_edges_directed_S(directed_graphS, 0, 1);
    add_edges_directed_S(directed_graphS, 2, 0);
    add_edges_directed_S(directed_graphS, 1, 2);
    add_edges_directed_S(directed_graphS, 2, 3);
    add_edges_directed_S(directed_graphS, 3, 2);
    print_graph_S(directed_graphS);
    
    // Simple UnDirected Graph
    printf("Simple UnDirected Graph : \n\n");
    graph *undirected_graphS = create_graph(5);
    add_edges_undirected_S(undirected_graphS, 0, 1);
    add_edges_undirected_S(undirected_graphS, 0, 2);
    add_edges_undirected_S(undirected_graphS, 1, 2);
    add_edges_undirected_S(undirected_graphS, 2, 3);
    print_graph_S(undirected_graphS);
    
    
    // Weighted Directed Graph
    printf("Weighted Directed Graph : \n\n");
    graph *directed_graphW = create_graph(5);
    add_edges_directed_W(directed_graphW, 0, 1, 3);
    add_edges_directed_W(directed_graphW, 1, 2, 4);
    add_edges_directed_W(directed_graphW, 2, 4, 5);
    add_edges_directed_W(directed_graphW, 0, 3, 5);
    print_graph_W(directed_graphW);
    
    // Weighted UnDirected Graph
    printf("Weighted Directed Graph : \n\n");
    graph *undirected_graphW = create_graph(5);
    add_edges_undirected_W(undirected_graphW, 0, 1, 3);
    add_edges_undirected_W(undirected_graphW, 1, 2, 4);
    add_edges_undirected_W(undirected_graphW, 2, 4, 5);
    print_graph_W(undirected_graphW);
    
    // Delete Node From Simple Directed Graph
    printf("Delete a Node From a Directed Graph : \n\n");
    printf("Before Deletion : \n");
    print_graph_S(directed_graphS);
    delete_node(directed_graphS, 0);
    printf("After Deletion : \n");
    print_graph_S(directed_graphS);
    add_edges_directed_S(directed_graphS, 0, 1);
    // print_graph_S(directed_graphS);
    
    // Delete Node From Simple UnDirected Graph
    printf("Delete a Node From a UnDirected Graph : \n\n");
    printf("Before Deletion : \n");
    print_graph_S(undirected_graphS);
    delete_node(undirected_graphS, 0);
    printf("After Deletion : \n");
    print_graph_S(undirected_graphS);
    // add_edges_undirected_S(undirected_graphS, 0, 1);
    // print_graph_S(undirected_graphS);
    
    // DFS : Deapth Search First
    printf("Deapth First Search : \n\n");
    depth_search_first(directed_graphW);
    
    // BFS : Breadth Search First
    printf("Breadth First Search : \n\n");
    breadth_search_first(directed_graphW);
    
    
    // Search In Graph
    printf("Search In Graph: \n\n");
    search_in_graph(directed_graphW, 0);
    
    
    
    return 0;
}


















