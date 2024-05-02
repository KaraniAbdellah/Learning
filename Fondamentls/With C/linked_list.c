#include <stdio.h>
#include <stdlib.h>
#include <stddef.h>

// Linked List [Insertion, Deletion, Search] + Complexitys

//	Insertion 
/*
	- in Memory : 
		In Tables Each Element Must Stocker In Other Element
		In Linked List We can Reserve Elements In Memory With Random Space
	- Pointers : 
		Must have A Structure A That Contain Address Of Next Element And value Of Current Element
		Each Pointer Point In Next Element [Structure] Not To Value

	- Insertion At Head :
		must create a function that add an element in head of linked list
		first we create a Node [adress_of_next, data] by pointer that pointe to element
		must new element pointe to next element By using the adress
		must head point to new node
	
	- Insertion At Queue
		must a create a function taht create an element and new_node pointer that pointe in element
		if head == NULL --> head = new_node
		else must loop Thought and found the last adress that different of NULL
			this by using a loop and pointer
			and then temp->next = new_node
		and all this cases must new_node->next = NULL
		

	- Insertion At Middle By Using Position for [user && programmer]
		int i = 1 --> for programmers --> indexing start with zero
		int i = 2 --> for users
			. found the adress of ele that exit after this position By Using [temp = head]
			. for access to next ele use temp->next
			. Then just affectation of adresses
		In This Loop We Must check if (i < pos and temp != NULL)
		The Worst Scenario Is if (temp == NULL) --> Add in Queue By Calling The Function 
		if (pos == 0) must change the content of head by create a pointer that 
		point to head pointe [**] and change the content by *head = new_node

	- Insertion At Middle By Add To Next Ele [after]
		we need the pointer "temp" to pointe to the each element
		search element : Loop Thought The Linked List and check if temp->data != ele 
			if exist --> add in linked list
			else --> add in queue
		
	- display eles:
		this function must take the adress of last elements that we add and this ele is first ele
		and then we can to next ele by using next pointer
			temp = temp->next // next contain adress of next ele ...
*/

/*

typedef struct {
	int data;
	struct Node *next;
} Node;

Node *insert_at_head(Node *head, int valeur) {
	Node *new_node; // create a new node
	new_node = (Node *) malloc(sizeof(Node));
	new_node->data = valeur;
	new_node->next = head; // head contian adress of next ele
	head = new_node; // new_node contain adress of new ele
	return head;
}
	
Node *insert_at_queue(Node *head, int valeur) {
	Node *new_node = (Node *) malloc(sizeof(Node));
	new_node->data = valeur;
	new_node->next = NULL;
	if (head == NULL) head = new_node;
	else {
		Node *temp = head;
		while (temp->next != NULL) temp = temp->next;
		temp->next = new_node;
	}
	return head;
}

void display(Node *head) {
	Node *temp = head;
	if (head == NULL) printf("Empty List\n");
	else {
		// while (temp != NULL) {
			// printf("%d --> ", temp->data);
			// temp = temp->next;
		// } 
		for (temp = head; temp != NULL; temp = temp->next) {
			printf("%d --> ", temp->data);
		}
	}
}

void insert_at_middle_nime(Node **head, int valeur, int pos) {
	int i = 1; // i = 2 --> position like a user
	if (head == NULL) printf("The List Is Empty\n");
	else {
		Node *new_node = (Node *) malloc(sizeof(Node));
		new_node->data = valeur;
		Node *temp = *head;
		if (pos == 0) {
			new_node->next = *head;
			*head = new_node;			
		} 
		else {
			while (i < pos && temp != NULL) {
				temp = temp->next;
				i++;
			}
			if (temp == NULL) printf("Error of Position\n");
			else {
				new_node->next = temp->next;
				temp->next = new_node;
			}	
		}		
	}
}

void *insert_at_middle_afterV(Node *head, int valeur, int v) {
	if (head == NULL) printf("The List is Empty\n");
	else {
		Node *new_node = (Node *) malloc(sizeof(Node));
		Node *temp = head;
		while (temp != NULL && temp->data != v) {
			temp = temp->next;
		}
		if (temp == NULL) {
			printf("%d Does Not Exit -- In The Queue\n", v);
			insert_at_queue(head, v);
		}
		else {
			new_node->data = valeur;
			new_node->next = temp->next;
			temp->next = new_node;
		}
	}
}


int main() {
	Node *head = NULL;
	int nbr_ele, ele, i;
	printf("Enter Number Of The Element : ");
	scanf("%d", &nbr_ele);
	for (i = 0; i < nbr_ele; i++) {
		scanf("%d", &ele);
		// head = insert_at_head(f_head, ele);
		head = insert_at_queue(head, ele);
	}
	insert_at_middle_nime(&head, 404, 1);
	// insert_at_middle_afterV(head, 404, 3);
	display(head);
	return 0;
}

*/



// String Case
/*

typedef struct {
	char data[50];
	struct Node *next;
} Node;

Node *ajouter_au_debut(Node *head, char valeur[50]) {
	int i;
	Node *new_node;
	new_node = (Node *) malloc(sizeof(Node));
	new_node->next = head;
	for (i = 0; valeur[i] != '\0' && i < 49; i++) {
		new_node->data[i] = valeur[i];
	}
	new_node->data[i] = '\0';
	head = new_node;
	return head;
}

Node *afficher_eles(Node *head) {
	Node *temp = head;
	if (temp == NULL) printf("Empty List");
	else {
		while (temp != NULL) {
			// puts(temp->data);
			printf("%s --> ", temp->data);
			temp = temp->next;
		}
	}
}

int main() {
	Node *first_head = NULL;
	char ele[50];
	int i, nbr_ele;
	printf("Enter Number of Element : ");
	scanf("%d", &nbr_ele);
	getchar();
	for (i = 0; i < nbr_ele; i++) {
		gets(ele);
		first_head = ajouter_au_debut(first_head, ele);
	}
	afficher_eles(first_head);
	return 0;
}

*/


////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// Deletion

/*
	- in memory
		
*/

typedef struct {
	int data;
	struct Node *next;
} Node;

Node *add_at_queue(Node *head, int valeur) {
	Node *new_node = (Node *) malloc(sizeof(Node));
	new_node->data = valeur;
	new_node->next = NULL;
	if (head == NULL) head = new_node;
	else {
		Node *temp = head;
		while (temp->next != NULL) temp = temp->next;
		temp->next = new_node;
	}
	return head;
}

void display(Node *head) {
	if (head == NULL) printf("Empty List");
	else {
		Node *temp = head;
		while (temp != NULL) {
			printf("%d --> ", temp->data);
			temp = temp->next;
		}
	}
}

void delete_at_head1(Node **head) {
	if (head == NULL) printf("Empty List");
	else {
		Node *temp = *head;
		*head = (*head)->next;
		free(temp);
	}
}

Node *delete_at_head2(Node *head) {
	if (head == NULL) printf("Empty List");
	else{
		Node *temp = head;
		head = head->next;
		free(temp);
	} return head;
}

void delete_at_middle1(Node **head, int valeur) {
	if (*head == NULL) printf("Empty List");
	else if ((*head)->data == valeur) {
		Node *p = *head;
		*head = (*head)->next;
		free(p);
	} 
	else {
		Node *temp = (*head)->next;
		Node *p = *head;
		while (temp != NULL) {
			if (temp->data == valeur) {
				p->next = temp->next;
				free(temp);
				break;
			} 
			p = p->next;
			temp = temp->next;
		}
	}
}

void delete_at_middle2(Node **head, int valeur) {
	// Do it Alone Please
}

int main() {
	Node *head = NULL;
	int n, i, valeur;
	printf("Enter Number of Element : ");
	scanf("%d", &n);
	for (i = 0;i < n; i++) {
		scanf("%d", &valeur);
		head = add_at_queue(head, valeur);
	}
	////////// Delete From Head
	printf("\nBefore Deletion \n");
	display(head);
	printf("\nAfter Deletion \n");
	delete_at_head1(&head);
	head = delete_at_head2(head);
	display(head);
	////////// Delete At Middle
	delete_at_middle1(&head, 4);
	printf("\nDelete in Any Where \n");
	display(head);
	return 0;
}





























