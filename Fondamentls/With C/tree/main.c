#include <stdio.h>
#include <stdlib.h>
#include "tree.h"



int main() {
    Node* root = NULL;
    // Queue *front = NULL, *rear = NULL;
    int nbr_ele, value;
    printf("Enter The Number Of The Element : ");
    scanf("%d", &nbr_ele);
    for (int i = 0; i < nbr_ele; i++) {
        printf("Ele %d : ", i + 1);
        scanf("%d", &value);
        insert_node(&root, value);
    }
    // Display
    printf("Level Order Traversal: \n");
    display_level_order(root);
    // Display With Another Method
    printf("Prefixe : "); Prefixe(root); printf("\n");
    printf("Infixe : "); Infixe(root); printf("\n");
    printf("Postfixe : "); Postfixe(root); printf("\n");
    // Min and Max
    Node *max_ele = maximum(root);
    Node *min_ele = minimum(root);
    printf("min = %d\n", min_ele->data);
    printf("max = %d\n", max_ele->data);
    // Search a Element
    int value_searched1 = 10;
    Node *ele_searched1 = search(root, value_searched1);
    if (ele_searched1 == NULL) printf("%d Does Not Exit\n", value_searched1);
    else printf("%d Exit In The Tree\n", value_searched1);
    // Search a Element With Recursive Fucntion
    int value_searched2 = 10;
    Node *ele_searched2 = search(root, value_searched2);
    if (ele_searched2 == NULL) printf("%d Does Not Exit\n", value_searched2);
    else printf("%d Exit In The Tree\n", value_searched2);
    // Delete Node From Tree
    deleteNode(root, 10);
    Prefixe(root);
    printf("\n");
    // check if it binary search tree
    if (is_bst(root)) printf("This is a Binary Search Tree\n");
    else printf("This Is Not a Binary Search Tree\n");
    return 0;
}











