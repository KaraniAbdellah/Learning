#include <stdio.h>
#include <stdlib.h>
#include "myLib.h"




int main() {
    // graphe simple oriented
    
    for (int i = 0; i < n; i++) {
        adjList[i] = (List *) malloc(sizeof(List));
        adjList[i]->head = NULL;
    }
    addNode(0, 1);
    addNode(0, 2);
    addNode(1, 2);
    printfList();
    return 0;
}



