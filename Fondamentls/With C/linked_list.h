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

void info (Node *new_node, int ele) {
    new_node->next = new_node->prev = NULL;
    new_node->data = ele;
}

typedef struct Node *liste;

void add_at_head(liste *head, int ele) {
    Node *new_node = (Node *) malloc(sizeof(Node));
    info(new_node, ele);
    new_node->next = *head;
    if (*head != NULL) (*head)->prev = new_node;
    *head = new_node;
}

Node *add_at_queue(Node *head, int ele) {
    Node *new_node = calloc(1, sizeof(Node));
    info(new_node, ele);
    if (head != NULL) {
        Node *temp = head;
        while (temp->next != NULL) temp = temp->next;
        new_node->prev = temp;
        temp->next = new_node;
    } else head = new_node;
    return head;
}

void add_at_middle_beforeV(Node **head, int ele, int value) {
    if (*head != NULL) {
        Node *new_node = (Node *) malloc(sizeof(Node));
        info(new_node, ele);
        // Start Affectation About Element
        Node *temp = *head;
        while (temp->data != value && temp->next != NULL) temp = temp->next;
        if (temp->data == value) {
            new_node->next = temp;
            new_node->prev = temp->prev;
            if (temp->prev != NULL) temp->prev->next = new_node;
            else *head = new_node;
            temp->prev = new_node;
        } else printf("\n%d Does Not Exit\n", value);
    }

}

void add_at_middle_afterV(Node **head, int ele, int value) {
    if (*head != NULL) {
        Node *new_node = (Node *) malloc(sizeof(Node));
        info(new_node, ele);
        // Start Affectation About Element
        Node *temp = *head;
        while (temp->next != NULL && temp->data != value) temp = temp->next;
        if(temp->data == value) {
            new_node->next = temp->next;
            new_node->prev = temp;
            temp->next = new_node;
            temp->next->prev = new_node;
        }
    }
}

















