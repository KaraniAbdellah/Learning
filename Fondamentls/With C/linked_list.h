typedef struct Node {
    int data;
    struct Node *next;
    struct Node *prev;
} Node;

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

typedef struct Node *liste;

void add_at_head(liste *head, int ele) {
    Node *new_node = (Node *) malloc(sizeof(Node));
    new_node->prev = new_node->next = NULL;
    new_node->data = ele;
    new_node->next = *head;
    if (*head != NULL) (*head)->prev = new_node;
    *head = new_node;
}























