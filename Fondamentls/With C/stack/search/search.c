#include <stdio.h>

// Function to perform linear search
// Returns the index of the target element if found, otherwise returns -1
int linearSearch(int *myList, int size, int x) {
    for (int i = 0; i < size; i++) {
        if (myList[i] == x) {
            return i;
        }
    }
    return -1;
}

// Function to find the three maximum elements in an array
// Stores the three maximum elements in the 'result' array
void threeMaxElement(int *array, int size, int *result) {
    int m1 = array[0], m2 = array[0], m3 = array[0];
    for (int i = 0; i < size; i++) {
        if (array[i] > m1) {
            m3 = m2;
            m2 = m1;
            m1 = array[i];
        } else if (array[i] > m2) {
            m3 = m2;
            m2 = array[i];
        } else if (array[i] > m3) {
            m3 = array[i];
        }
    }
    result[0] = m1;
    result[1] = m2;
    result[2] = m3;
}

// Function to perform binary search
// Returns the index of the target element if found, otherwise returns -1
int binarySearch(int *myList, int size, int x) {
    int low = 0, high = size - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (myList[mid] == x) {
            return mid;
        } else if (myList[mid] < x) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

// Function to find the index of the first occurrence of a number in a sorted array
int firstOccurrence(int *array, int size, int nbr) {
    int result = -1;
    int low = 0, high = size - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (array[mid] >= nbr) {
            result = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return result;
}

int main() {
    // Linear Search
    int myList[] = {3, 2, 1, 5, 6, 7};
    int x = 5;
    printf("Linear Search: %d\n", linearSearch(myList, sizeof(myList) / sizeof(myList[0]), x));

    // Three Max Element
    int array[] = {0, 0, 23, 1, 2, 3, 3, 4, 2};
    int result[3];
    threeMaxElement(array, sizeof(array) / sizeof(array[0]), result);
    printf("Three Max Elements: %d, %d, %d\n", result[0], result[1], result[2]);

    // Binary Search
    int myList2[] = {1, 2, 3, 4, 5, 6, 7, 8, 9};
    int x2 = 100;
    printf("Binary Search: %d\n", binarySearch(myList2, sizeof(myList2) / sizeof(myList2[0]), x2));

    // First Occurrence
    int array2[] = {-1, -1, -1, 3, 3, 4, 4, 5, 6, 7};
    int nbr = 4;
    printf("First Occurrence: %d\n", firstOccurrence(array2, sizeof(array2) / sizeof(array2[0]), nbr));

    return 0;
}
