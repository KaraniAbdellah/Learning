#include <stdio.h>
#include <stdlib.h>
#include "tree.h"



int main() {
    Node* root = NULL;
    Queue *front = NULL, *rear = NULL;
    int nbr_ele, value;
    printf("Enter The Number Of The Element : ");
    scanf("%d", &nbr_ele);
    for (int i = 0; i < nbr_ele; i++) {
        printf("Ele %d : ", i + 1);
        scanf("%d", &value);
        insert_node(&root, value);
    }
    printf("Level Order Traversal: ");
    display_level_order(root);
    printf("Prefixe : "); Prefixe(root); printf("\n");
    printf("Infixe : "); Infixe(root); printf("\n");
    printf("Postfixe : "); Postfixe(root); printf("\n");
    return 0;
}

