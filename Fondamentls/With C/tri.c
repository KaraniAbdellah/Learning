#include <stdio.h>

// Selection Sort
// Complexity: O(n^2) - Quadratic Complexity
void SelectionSort(int MyList[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int indexMin = i;
        for (int j = i + 1; j < n; j++) {
            if (MyList[indexMin] < MyList[j]) {
                indexMin = j;
            }
        }
        int temp = MyList[i];
        MyList[i] = MyList[indexMin];
        MyList[indexMin] = temp;
    }
}

// Insertion Sort with while loop
// Complexity: O(n^2) - Quadratic Complexity
void InsertionSort_wiltLoop(int MyList[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int tmp = MyList[i + 1];
        int j = i;
        while (j >= 0 && MyList[j] < tmp) {
            MyList[j + 1] = MyList[j];
            j--;
        }
        MyList[j + 1] = tmp;
    }
}

// Insertion Sort using for loop
// Complexity: O(n^2) - Quadratic Complexity
void InsertionSortM1(int MyList[], int n) {
    for (int i = 1; i < n; i++) {
        int tmp = MyList[i];
        int j = i - 1;
        while (j >= 0 && MyList[j] > tmp) {
            MyList[j + 1] = MyList[j];
            j--;
        }
        MyList[j + 1] = tmp;
    }
}

// Bubble Sort
// Complexity: O(n^2) - Quadratic Complexity
void BubbleSort(int myList[], int n) {
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (myList[j] < myList[j + 1]) {
                int tmp = myList[j];
                myList[j] = myList[j + 1];
                myList[j + 1] = tmp;
            }
        }
    }
}

// Heap Sort
// Complexity: O(n log n) - Quasi-linear Complexity
void Heap(int myList[], int n, int i) {
    int max = i;
    int l = 2 * i + 1;
    int r = 2 * i + 2;
    if (l < n && myList[l] > myList[max]) {
        max = l;
    }
    if (r < n && myList[r] > myList[max]) {
        max = r;
    }
    if (max != i) {
        int temp = myList[i];
        myList[i] = myList[max];
        myList[max] = temp;
        Heap(myList, n, max);
    }
}

void HeapSort(int myList[], int n) {
    int start = (n / 2) - 1;
    for (int i = start; i >= 0; i--) {
        Heap(myList, n, i);
    }
    for (int i = n - 1; i >= 0; i--) {
        int temp = myList[0];
        myList[0] = myList[i];
        myList[i] = temp;
        Heap(myList, i, 0);
    }
}

// Shell Sort
// Complexity: O(n^2) - Quadratic Complexity
void SortShell(int T[], int n) {
    int vl = n / 2;
    while (vl > 0) {
        for (int j = vl; j < n; j++) {
            int i = j - vl;
            int temp = T[j];
            while (i >= 0) {
                if (T[i] >= T[i + vl]) {
                    break;
                } else {
                    T[i + vl] = T[i];
                    T[i] = temp;
                    i -= vl;
                }
            }
        }
        vl /= 2;
    }
}

int main() {
    int MyList[] = {6, 4, 5, 2, 3, 1, 4, 0, 7, 4, 5, 1, 2, 3};
    int n = sizeof(MyList) / sizeof(MyList[0]);

    // Selection Sort
    // SelectionSort(MyList, n);

    // Insertion Sort with while loop
    // InsertionSort_wiltLoop(MyList, n);

    // Insertion Sort using for loop
    // InsertionSortM1(MyList, n);

    // Bubble Sort
    // BubbleSort(MyList, n);

    // Heap Sort
    // HeapSort(MyList, n);

    // Shell Sort
    SortShell(MyList, n);

    // Printing sorted array
    printf("Sorted array: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", MyList[i]);
    }
    printf("\n");

    return 0;
}





