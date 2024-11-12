#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <math.h>
#include <string.h>
#include <time.h>
#include <ctype.h>
//////////// Start Array With 2D Dimension

/*
int main()
{
    int array[3][6];
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 6; j++) {
            array[i][j] = 0;
            printf("%d ", array[i][j]);
        }
        printf("\n");
    }
    return 0;
}
*/
/*
int main() {
    float array[4][6] = {
        {2, 3, 5, 7, 8, 1},
        {0, 9, 3, 7, 1, 6},
        {7, 1, 3, 4, 0, 1},
        {9, 8, 2, 2, 4, 5},
    };
    float newArr[4][6];
    printf("The Matrix Is : \n");
    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 6; j++) {
            printf("%.0f  ", array[i][j]);
        }
        printf("\n");
    }
    // Get The Matrix Transpose
    printf("Matrix Transpose Is : \n");
    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 6; j++) {
            newArr[j][i] = array[i][j];
        }
    }
    // Print The New Matrix
    for (int i = 0; i < 6; i++) {
        for (int j = 0; j < 4; j++) {
            printf("%.0f  ", newArr[i][j]);
        }
        printf("\n");
    }
    return 0;
    getchar();
}
*/
/*
int main() {
    int arr1[4][5] = {
        {1, 1, 1, 1, 1},
        {1, 1, 1, 1, 1},
        {1, 1, 1, 1, 1},
        {1, 1, 1, 1, 1}
    };
    int arr2[4][5] = {
        {1, 1, 1, 1, 1},
        {1, 1, 1, 1, 1},
        {1, 1, 1, 1, 1},
        {1, 1, 1, 1, 1}
    };
    // Sum The Matrix
    int arr[4][5];
    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 5; j++) {
            arr[i][j] = arr1[i][j] + arr2[i][j];
        }
    }
    // Print The Sum Matrix
    printf("The Matrix Sum Is : \n");
    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 5; j++) {
            printf("%d  ", arr[i][j]);
        }
        printf("\n");
    }
}
*/

/*
int main() {
    // Multiplication Of Two Matrix
    float A[3][4], B[4][2], C[3][2];
    printf("Enter Matrix A : \n");
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 4; j++) {
            printf("A[%d][%d] : ", i + 1, j + 1);
            scanf("%f", &A[i][j]);
        }
    }
    printf("Enter Matrix B : \n");
    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 2; j++) {
            printf("B[%d][%d] : ", i + 1, j + 1);
            scanf("%f", &B[i][j]);
        }
    }
    // Get The Multiplication Of Two Matrix
    float sum = 0;
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 2; j++) {
            for (int k = 0; k < 4; k++) {
                sum += A[i][k] * B[k][j];
            }
            C[i][j] = sum;
            printf("%.0f  ", C[i][j]);
            sum = 0;
        }
        printf("\n");
    }
    // A[0][0] * B[0][0] + A[0][1] * B[1][0] + A[0][2] * B[2][0] + A[0][3] * B[3][0] = [0][0]
    // A[0][0] * B[0][1] + A[0][1] * B[1][1] + A[0][2] * B[2][1] + A[0][3] * B[3][1] = [0][1]

    // A[1][0] * B[0][1] + A[1][1] * B[1][1] + A[1][2] * B[2][1] + A[1][3] * B[3][1] = [1][0]
    // A[1][0] * B[0][1] + A[1][1] * B[1][1] + A[1][2] * B[2][1] + A[1][3] * B[3][1] = [1][1]
}
*/

/*
int main() {
    // Get The Diagonal
    float array[5][5];
    float sum = 0;
    for (int i = 0; i < 5; i++) {
        for (int j = 0; j < 5; j++) {
            printf("T[%d][%d] = ", i + 1, j + 1);
            scanf("%f", &array[i][j]);
            if (i == j) {
                sum +=  array[i][j];
            }
        }
    }
    printf("The Diagonal Of This Matrix Is : %.0f", sum);
}
*/

/*
int main() {
    // Inverse The Triangle
    float T[5][5] = {
        {2, 3, 5, 7, 9},
        {0, 3, 4, 1, 2},
        {1, 5, 3, 8, 1},
        {2, 6, 7, 2, 1},
        {-1, 4, -1, 3, 4},
    };
    float tmp;
    // Printf The Original Matrix
    for (int i = 0; i < 5; i++) {
        for (int j = 0; j < 5; j++) {
            printf("%.0f   ", T[i][j]);
        }
        printf("\n");
    }
    // Inverse The Triangle
    for (int i = 0; i < 4; i++) {
        for (int j = i + 1; j < 5; j++) {
            if (i != j) {
                tmp = T[i][j];
                T[i][j] = T[j][i];
                T[j][i] = tmp;
            }
        }
    }
    // Printf The Inverse Matrix
    printf("The Inverse Is : \n");
    for (int i = 0; i < 5; i++) {
        for (int j = 0; j < 5; j++) {
            printf("%.0f   ", T[i][j]);
        }
        printf("\n");
    }
    return 0;
    getchar();
}
*/
/*
int main() {
    // min And max For Each Line And Colone
    float T[4][5] = {
        {2, 3, 5, 7, 9},
        {0, 3, 4, 1, 2},
        {1, 5, 3, 8, 1},
        {2, 6, 7, 2, 1}
    };
    float minL, maxL, tmp, minC, maxC, Arr[5][4];
    // For Lines
    for (int i = 0; i < 4; i++) {
        minL = T[i][0];
        maxL = T[i][0];
        for (int j = 1; j < 5; j++) {
            if (minL > T[i][j]) {
                minL = T[i][j];
            }
            if (maxL < T[i][j]) {
                maxL = T[i][j];
            }
        }
        printf("The Min Of Line %d Is : %.0f\n", i + 1, minL);
        printf("The Max Of Line %d Is : %.0f\n", i + 1, maxL);
    }
    // For Colones
    /// Inverse The Matrix
    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 5; j++) {
            tmp = T[i][j];
            T[i][j] = Arr[j][i];
            Arr[j][i] = tmp;
        }
    }
    for (int i = 0; i < 5; i++) {
        for (int j = 0; j < 4; j++) {
            printf("%.0f  ", Arr[i][j]);
        }
        printf("\n");
    }
    /// Get The Min ANd Max
    for (int i = 0; i < 5; i++) {
        minC = Arr[i][0];
        maxC = Arr[i][0];
        for (int j = 0; j < 4; j++) {
            if (minC > Arr[i][j]) {
                minC = Arr[i][j];
            }
            if (maxC < Arr[i][j]) {
                maxC = Arr[i][j];
            }
        }
        printf("The Min Of Colone %d Is : %.0f\n", i + 1, minC);
        printf("The Max Of Colone %d Is : %.0f\n", i + 1, maxC);
    }
}
*/

/*
int main() {
    // With Another Method
    // min And max For Each Line And Colone
    float T[4][5] = {
        {2, 3, 5, 7, 9},
        {0, 3, 4, 1, 2},
        {1, 5, 3, 8, 1},
        {2, 6, 7, 2, 1}
    };
    // Print The 2D Array
    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 5; j++) {
            printf("%.0f   ", T[i][j]);
        }
        printf("\n");
    }
    float minL, maxL, minC, maxC;
    // For Lines & // For Colones
    for (int i = 0; i < 4; i++) {
        minL = T[i][0];
        maxL = T[i][0];
        for (int j = 1; j < 5; j++) {
            if (minL > T[i][j]) {
                minL = T[i][j];
            }
            if (maxL < T[i][j]) {
                maxL = T[i][j];
            }
        }
        printf("The Min Of Line %d Is : %.0f\n", i + 1, minL);
        printf("The Max Of Line %d Is : %.0f\n", i + 1, maxL);
    }
    // For Colone
    for (int i = 0; i < 5; i++) {
        minC = T[0][i];
        maxC = T[0][i];
        for (int j = 0; j < 4; j++) {
            if (minC > T[j][i]) {
                minC = T[j][i];
            }
            if (maxC < T[j][i]) {
                maxC = T[j][i];
            }
        }
        printf("The Min Of Colone %d Is : %.0f\n", i + 1, minC);
        printf("The Max Of Colone %d Is : %.0f\n", i + 1, maxC);
    }
    return 0;
    getchar();
}
// For Lines O(n * n) => Quadrate Complexity
// For Colones O(n * n) => Quadrate Complexity
*/

/*
int main() {
    float T[4][5] = {
        {2, 3, 5, 7, 9},
        {0, 3, 4, 1, 2},
        {1, 5, 3, 8, 1},
        {2, 6, 7, 2, 1}
    };
    float nbr;
    short int count = 0;
    printf("Enter A Number : ");
    scanf("%f", &nbr);
    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 5; j++) {
            if (nbr == T[i][j]) {
                count += 1;
            }
        }
    }
    count != 0 ?
    printf("%.2f Exist, Occurrence = %ho", nbr, count) :
    printf("%.2f Does Not Exist", nbr);
    return 0;
    getchar();
}
// Complexity O(n ^ 2) => Quadrate Complexity
*/

/*
int main() {
    float T[2][2];
    float det;
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            printf("T[%d][%d] = ", i + 1, j + 1);
            scanf("%f", &T[i][j]);
        }
    }
    // Printf The Matrix
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            printf("%.0f  ", T[i][j]);
        }
        printf("\n");
    }
    det = T[0][0] * T[1][1] - T[1][0] * T[0][1];
    printf("Det(T) = %.f", det);
    return 0;
    getchar();
}
// O(1)
*/

/*
int main() {
    // Pascal Triangle
    int n;
    printf("Enter N : ");
    scanf("%d", &n);
    int T[n + 1][n + 1];
    for (int i = 0; i < n + 1; i++) {
        T[i][0] = 1;
        T[i][i] = 1;
        for (int j = 1; j < i; j++) {
            T[i][j] = T[i - 1][j - 1] + T[i - 1][j];
        }
    }
    // Print The Matrix
    for (int i = 0; i < n + 1; i++) {
        for (int j = 0; j <= i; j++) {
            printf("%d  ", T[i][j]);
        }
        printf("\n");
    }
    return 0;
    getchar();
}
// O(n + 1) * O(n + 1) => O(n ^ 2)
*/
//////////////////// Chaine De Caractere

/*
int main() {
        char name[100];
        printf("Enter Your name Please : ");
        // Method 1
        for (int i = 0; i < 10; i++) {
              scanf(" %C", &name[i]);
        }
        for (int j = 0; j < 10; j++) {
                printf("%C", name[j]);
        }
        // Method 2
        scanf("%s", name);
        printf("Hello %s", name);
        // Method 3
        gets(name);
        puts("Hello");
        puts(name);
        return 0;
        getchar();
}
*/

/*
int main () {
        // Hamming Distance Between Two Word Have The same length
        char FirstWord[100];
        char SecondWord[100];
        int hamming;
        printf("--- Two Words Must Have Same Length --- \n");
        // Get The First Word
        do {
        printf("Enter The First Word : ");
        gets(FirstWord);
        // Get The Second Word
        printf("Enter The Second Word : ");
        gets(SecondWord);
        } while(strlen(FirstWord) != strlen(SecondWord));
        // Detecte Distance Of Hamming
        int n = strlen(FirstWord);
        for (int i = 0; i < n; i++) {
                if (toupper(FirstWord[i]) != toupper(SecondWord[i])) {
                        hamming++;
                }
        }
        printf("The Destance Of Hamming Is : %d", hamming);
}
*/

/*
int main() {
        char str[100];
        char length[100];
        puts("Enter String : ");
        gets(str);
        int i = 0;
        int count = 0;
        while(str[i] != length[i]) {
                length[i] += str[i];
                i++;
        }
        printf("The Length Of This String : %d", i);
        for (int i = 0; i < 100; i++) {
                if (str[i] == '\0') {
                        break;
                }
                count++;
        }
        for (int i = 0; str[i] != '\0'; i++) {
                count++;
        }
        printf("The Length Of This String Is : %d", count);
        return 0;
        getchar();
}
*/

/*
int main() {
        char str[100];
        int count = 0;
        char letter;
        puts("Enter The String Please : ");
        gets(str);
        printf("Enter The Letter : ");
        scanf("%C", &letter);
        // Get The Repetition For This letters
        for (int i = 0; i < 100; i++) {
                if (str[i] == letter) {
                      count++;
                }
        }
        printf("Number Of Occurence Of This Character Is : %d", count);
        return 0;
        getchar();
}
*/

/*
int main() {
        char str[100]; // Algerie
        int count = 0, max, indexMax;
        int Frq [100];
        puts("Enter The Character : ");
        gets(str);
        // Find The Reapted Number for Each Character
        for (int i = 0; i < strlen(str); i++) {
                count = 0;
                for (int j = i; j < strlen(str); j++) {
                        if (str[i] == str[j]) {
                              count++;
                        }
                }
        Frq[i] = count;
        }
        // Get The Max Of The Table
        max = Frq[0];
        for (int i = 1; str[i] != '\0'; i++) {
                printf("%d ", Frq[i]);
                if (max < Frq[i]) {
                        max = Frq[i];
                        indexMax = i;
                }
        }
        printf("\nThe Character That Repeated : '%C' = %d", str[indexMax], max);
        return 0;
        getchar();

}
*/

/*
int main() {
        char str[100];
        char tmp;
        int x =  1;
        puts("Enter The String Please : ");
        gets(str);
        for (int i = 0; i < strlen(str) / 2; i++) {
                tmp = str[i];
                str[i] = str[strlen(str) - x];
                str[strlen(str) - x] = tmp;
                x++;
        }
        printf("The Word In Inverse Order is : %s", str);
        return 0;
        getchar();
}
*/

/*
int main() {
        char str[100];
        char tmpstr[100];
        char tmp;
        bool check = true;
        int x =  1;
        puts("Enter The String Please : ");
        gets(str);
        // Convert String To Another Chaine
        for (int i = 0; i < strlen(str); i++) {
            tmpstr[i] = str[i];
        }
        printf("This Is Converting : %s \n", tmpstr);
        // Reverse The String
        for (int i = 0; i < strlen(str) / 2; i++) {
                tmp = str[i];
                str[i] = str[strlen(str) - x];
                str[strlen(str) - x] = tmp;
                x++;
        }
        printf("The Word In Inverse Order is : %s\n", str);
        // Check If The String Palindrome
        for (int i = 0; i < str[i] != '\0'; i++) {
                if (str[i] != tmpstr[i]) {
                        check = false;
                }
        }
        // Printf The Result
        if (check == true) {
            printf("%s Is Palindrome Character", tmpstr);
        } else {
                printf("%s Is Not A Palindrome Character", tmpstr);
        }
        return 0;
        getchar();
}
*/

/*
// Passage Par Address
void maximum(int *x, int *y, int *m) {
    if (*x < *y) {
        *m = *y;
    } else {
        *m = *x;
    }
}
int main() {
    int a ,b, max;
    printf("Enter A : ");
    scanf("%d", &a);
    printf("Enter B : ");
    scanf("%d", &b);
    maximum(&a, &b, &max);
    printf("The Max Is : %d\n", max);
    printf("Address Of A Is : %p\n", &a);
    printf("Address Of B Is : %p\n", &b);
    printf("Address Of Max Is : %p", &max);
    return 0;
    getchar();
}
*/

/*
int main() {
    int T[6] = {3, 6, 14, 8, 9};
    printf("%d\n", T[0]);
    printf("%p\n", T);
    printf("%p\n", &T[0]);
    printf("%p\n", T[1]);
    printf("%d", *T);
}
*/

/*
int main() {
        // Is This String Palindrome
        // With Built Function
        char str[100];
        char strtmp[100];
        puts("Enter The String : ");
        gets(str);
        strcpy(strtmp, str);
        strrev(strtmp);
        float checker = strcmp(str, strtmp);
        if (checker == 0) {
                printf("%s Is Plindrome", str);
        } else {
                printf("%s Is Not A Plindrome", str);
        }
        return 0;
        getchar();
}
*/
/*
int main() {
        char A[100];
        char B[100];
        char C[200];
        char *PA = A;
        char *PB = B;
        puts("Enter The First String : ");
        gets(A);
        puts("Enter The Second String : ");
        gets(B);
        for (int i = 0; A[i] != '\0'; i++) {
                C[i] = A[i];
        }
        C[strlen(A)] = ' ';
        int count = strlen(A) + 1;
        for (int i = 0; B[i] != '\0'; i++) {
                C[count] = B[i];
                count++;
        }
        printf("The Concatination Will Be Like : %s", C);
        return 0;
        getchar();
}
*/

/*
int main() {
        char A[100];
        char B[100];
        char *PA = A;
        char *PB = B;
        puts("Enter The First String : ");
        gets(A);
        puts("Enter The Second String : ");
        gets(B);
        PA = PA + strlen(A);
        *PA = ' ';
        PA = PA + 1;
        while (*PB != '\0') {
                *PA = *PB;
                PA++;
                PB++;
        }
        *PA = '\0';
        printf("The Concatenation Will Be Like : %s", A);
        return 0;
        getchar();
}
*/

/*
int main() {
    // Delete The Occurrence In The String
    char str[100];
    char character;
    int taille;
    puts("Enter A String : ");
    gets(str);
    printf("Enter The Character : ");
    scanf("%c", &character);
    taille = strlen(str);
    // Found The Occurrence By Looping Thought The A Chaine
    for (int i = 0; i < taille; i++) {
        if (str[i] == character) {
                for (int j = i; j < taille; j++) {
                        str[j] = str[j + 1];
                }
                i--;
                taille--;
        }
    }
    printf("After Delete '%C' String Will Be Like This : %s", character, str);
    return 0;
    getchar();
}
*/
/*
int main() {
        char T[] = "Informatique";
        printf("%s\n", strstr(T, "m"));
        printf("%s", (T + 5));
        return 0;
        getchar();
}
*/

/*
int main() {
        char *X = "Quiz";
        char Y[10] = "Quiz";
        printf("%d\n", sizeof(X));
        printf("%d", sizeof(Y));
        return 0;
        getchar();
}
*/

/*
int main() {
        // DNA (ADN) Molecule = 6 bills Nucleotides
        // Type Of Nucleotides [A, T, C, G]
        char ADN_ali[100];
        char ADN_anass[100];
        char ADN_mehdi[100];
        char ADN_sara[100];
        char ADN_cupable[5];
        int count = 0, x = 0;
        int checker = 0;
        puts("Enter The DNA Os Ali : ");
        gets(ADN_ali);
        puts("Enter The DNA Os Anass : ");
        gets(ADN_anass);
        puts("Enter The DNA Os Mehdi : ");
        gets(ADN_mehdi);
        puts("Enter The DNA Os Sara : ");
        gets(ADN_sara);
        puts("Enter The ADN Of Cupable : ");
        gets(ADN_cupable);
        // For Ali DNA
        for (int i = 0; ADN_ali[i] != '\0'; i++) {
                if (ADN_cupable[x] == ADN_ali[i]) {
                        x++;
                        count++;
                }
                if (count == strlen(ADN_cupable)) {
                        checker = 1;
                        break;
                }
        }
        // For Anass DNA
        count = 0;
        for (int i = 0; ADN_anass[i] != '\0'; i++) {
                if (ADN_cupable[x] == ADN_anass[i]) {
                        x++;
                        count++;
                }
                if (count == strlen(ADN_cupable)) {
                        checker = 2;
                        break;
                }
                if (ADN_cupable[i] == '\0') break;
        }
        // For Mehdi DNA
        count = 0;
        for (int i = 0; ADN_mehdi[i] != '\0'; i++) {
                if (ADN_cupable[x] == ADN_mehdi[i]) {
                        x++;
                        count++;
                }
                if (count == strlen(ADN_cupable)) {
                        checker = 3;
                        break;
                };
        }
        // For Sara DNA
        count = 0;
        for (int i = 0; ADN_sara[i] != '\0'; i++) {
                if (ADN_cupable[x] == ADN_sara[i]) {
                        x++;
                        count++;
                }
                if (count == strlen(ADN_cupable)) {
                        checker = 4;
                        break;
                }
        }
        switch (checker) {
        case 1: printf("The Killer Is Ali");
        break;
        case 2: printf("The Killer Is Anass");
        break;
        case 3: printf("The Killer Is Mehdi");
        break;
        case 4: printf("The Killer Is Sara");
        break;
        default: printf("No Killer");
        }
        return 0;
        getchar();
}
*/

/*
int main() {
        // DNA (ADN) Molecule = 6 bills Nucleotides
        // Type Of Nucleotides [A, T, C, G]
        char ADN_ali[] = {"ATGCTAGCTAGCATGACCTTATGACTGAACATG"};
        char ADN_anass[] = {"ATGCTAGCTAGTCTACGCTGAACATG"};
        char ADN_mehdi[] = {"TGCAACTGCATGCATGCATGCA"};
        char ADN_sara[] = {"TAGCATGACATGACACGTACGATCATGAC"};
        char ADN_cupable[] = {"CTTA"};
        if (strstr(ADN_ali, ADN_cupable) != '\0') {
                printf("The Killer Is Ali");
        } else if (strstr(ADN_anass, ADN_cupable) != '\0') {
                printf("The Killer Is Anass");
        }
        else if (strstr(ADN_sara, ADN_cupable) != '\0') {
                printf("The Killer Is Sara");
        } else {
                printf("The Killer Is Mehdi");
        }
        return 0;
        getchar();
}
*/
/*
#include <math.h>
// Delete The Null value
int main() {
    int n;
    int count = 0, tmp;
    // Taille Of The Table
    printf("Enter The Taille Of The Table : ");
    scanf("%d", &n);
    // Remplissage Du Tableau
    int T[n];
    int *p = T;
    printf("\nEnter Tableau T : \n");
    for (int i = 0; i < n; i++) {
        printf("T[%d] = ", i);
        scanf("%d", p + i);
    }
    // Supprimer Les Valeurs Null
    int taille = n;
    for (int i = 0; i < taille; i++) {
        if (*(p + i) == 0) {
            for (int j = i; j < n - 1; j++) {
                tmp = *(p + j);
                *(p + j) = *(p + j + 1);
                *(p + j + 1) = tmp;
            }
        }
        if (*(p + i) == 0) {
            count++;
        }
    }
    // Afficher Les Tableau Sans Les Valeurs Null
    for (int i = 0; i < taille; i++) {
        printf("%d ", *(p + i));
    }
    return 0;
}
*/

/*
int main() {
    int T[11];
    int x = 0, v, tmp1, tmp2;
    // Remplire Le Tableau
    T[-1] = 0;
    for (int i = 0; i < 10; i++) {
        printf("T[%d] = ", i);
        scanf("%d", &T[i]);
        while(T[i] <= T[i - 1]) {
            printf("T[%d] = ", i);
            scanf("%d", &T[i]);
        }
    }
    // Afficher Le Tableau Avant Insertion
    for (int i = 0; i < 10; i++) {
        printf("%d ", T[i]);
    }
    // Enter V
    printf("\nEnter V : ");
    scanf("%d", &v);
    // Insere Element V
    for (int i = 0; i < 10; i++) {
        if (v <= T[i + 1] && v >= T[i]) {
            for (int j = 10; j >= i + 2; j--) {
                T[j] = T[j - 1];
            }
            T[i + 1] = v;
            break;
        }
    }
    // Afficher Le Tableau Apres Insertion
    for (int i = 0; i < 11; i++) {
        printf("%d ", T[i]);
    }
    return 0;
}
*/

/*
int main() {
    int T[4][4];
    int histo[4][4];
    int count = 0;
    bool x = false;
    // Remplire Le Tableau
    for (int i = 0; i < 4; i++) {
        for(int j = 0; j < 4; j++) {
            printf("T[%d][%d] = ",i ,j);
            scanf("%d", &T[i][j]);
        }
    }
    // Vérifier Si Un Element Repete Ou Nom
    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 4; j++) {
            // Verifier If Element Exit In Histo Table Or Not
            for (int p = 0; p < 4; p++) {
                for (int k = 0; k < 4; k++) {
                    if (T[i][j] == histo[p][k]) {
                        x = true;
                    }
                }
            }
            histo[i][j] = T[i][j];
            if (x == false) {
            // Another Loop For Compare T[i][j] With All Element
            for (int m = 0; m < 4; m++) {
                for (int n = 0; n < 4; n++) {
                    if (T[i][j] == T[m][n]) {
                        count++;
                    }
                }
            }
            printf("%d : ", T[i][j]);
            for (int i = 0; i < count; i++) {
                printf("* ");
            }
            printf("\n");
            count = 0;
            }
        }
    }
}
*/
/*
int main() {
    int T[4][4];
    int histo[16];
    int count = 0;
    bool x;
    // Remplire Le Tableau
    for (int i = 0; i < 4; i++) {
        for(int j = 0; j < 4; j++) {
            printf("T[%d][%d] = ",i ,j);
            scanf("%d", &T[i][j]);
        }
    }
    // Verifier Si Un Element Exit Ou Non
    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 4; j++) {
            // Utiliser un autre tableau pour convert T[i][j] de ca tableau
            x = false;
            for (int m = 0; m < 16; m++) {
                if (T[i][j] == histo[m]) {
                    x = true;
                }
                histo[m] = T[i][j];
            }
            if (x == false) {
                for (int a = 0; a < 4; a++) {
                    for (int b = 0; b < 4; b++) {
                        if (T[i][j] == T[a][b]) {
                            count++;
                        }
                    }
                }
                // Affiche Les Etoiles
                printf("\n%d : ", T[i][j]);
                for (int h = 0; h < count; h++) {
                    printf("* ");
                }
                count = 0;
            }
        }
    }
}
*/

/*
int main() {
    int T[5];
    int max1, max2, i;
    for (i = 0; i < 5; i++) {
        printf("T[%d] = ", i);
        scanf("%d", &T[i]);
    }
    max1 = T[0];
    max2 = T[0];
    for (i = 1; i < 5; i++) {
        if (T[i] >  max1) {
            max1 = T[i];
            max2 = max1;
        }
        if (T[i] > max2 && T[i] < max1) {
            max2 = T[i];
        }
    }
    printf("Max1 = %d And Max2 = %d", max1, max2);
    return 0;
    getchar();
}
*/

/*
int main () {
    int n, i, index, ele, j;
    printf("Enter Taille Of The Table : ");
    scanf("%d", &n);
    int T[n + 1];
    // Fill The Table
    for (i = 0; i < n; i++) {
        printf("T[%d] = ", i);
        scanf("%d", &T[i]);
    }
    // Element And Index
    printf("Enter The Index : ");
    scanf("%d", &index);
    printf("Enter The Element : ");
    scanf("%d", &ele);
    //  Inseretion Of Element
    if (index < 0 || index > n) {
        printf("Error Of index");
    } else {
        for (i = 0; i < n; i++) {
            if (index == i + 1) {
                for (j = n; j >= index; j--) {
                    T[j] = T[j - 1];
                }
                T[i] = ele;
                break;
            }
        }
        // Print The Table
        for (i = 0; i < n + 1; i++) {
            printf("%d  ", T[i]);
        }
    }
    return 0;
    getchar();
}
*/
/*
int main () {
    int n, i, ele, j;
    printf("Enter Taille Of The Table : ");
    scanf("%d", &n);
    int T[n + 1];
    // Fill The Table
    for (i = 0; i < n; i++) {
        printf("T[%d] = ", i);
        scanf("%d", &T[i]);
    }
    // Position of Element
    printf("Enter The Position Of The Element : ");
    scanf("%d", &ele);
    // Delete The Element For Table
    for (i = 0; i < n; i++) {
        if (i == ele - 1) {
            for (j = ele - 1; j < n; j++) {
                T[j] = T[j + 1];
            }
            n--;
            break;
        }
    }
    // Printf The Table
    for (i = 0; i < n; i++) {
        printf("%d  ", T[i]);
    }
    return 0;
    getchar();
}
*/
/*
int main () {
    int n, i, j, count = 0;
    printf("Enter Taille Of The Table : ");
    scanf("%d", &n);
    int T[n];
    int Alt[n];
    // Fill The Table And Alt Table
    for (i = 0; i < n; i++) {
        printf("T[%d] = ", i);
        scanf("%d", &T[i]);
    }
    // Find The Repetitive Element
    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            if (T[i] == T[j]) {
                count++;
            }
        }
        if (count < 2) {
            printf("%d ", T[i]);
        }
        count = 0;
    }
    // O(n^2) => Qudrate Complexity
    return 0;
    getchar();
}
*/

/*
int main () {
    int n, i, j, count = 1;
    printf("Enter Taille Of The Table : ");
    scanf("%d", &n);
    int T[n];
    int Alt[n];
    // Fill The Table And Alt Table
    for (i = 0; i < n; i++) {
        printf("T[%d] = ", i);
        scanf("%d", &T[i]);
    }
    for (i = 0; i < n; i++) {
        Alt[i] = -1;
    }
    // Find The Repetitive Element
    for (i = 0; i < n; i++) {
        for (j = i + 1; j < n; j++) {
            if (T[i] == T[j]) {
                count++;
                Alt[j] = 0;
            }
        }
        if (Alt[i] != 0) {
            Alt[i] = count;
        }
        count = 1;
    }
    // print The No repititive Element
    for (i = 0; i < n; i++) {
        if (Alt[i] == 1) {
            printf("%d  ", T[i]);
        }
    }
    // O(n^2) => Qudrate Complexity
    return 0;
    getchar();
}
*/
/*
int main () {
    int n, i, j, count = 0;
    printf("Enter Taille Of The Table : ");
    scanf("%d", &n);
    int T[n];
    int Alt[n];
    // Fill The Table And Alt Table
    for (i = 0; i < n; i++) {
        printf("T[%d] = ", i);
        scanf("%d", &T[i]);
    }
    for (i = 0; i < n; i++) {
        Alt[i] = -1;
    }
    // Find The Repetitive Element
    for (i = 0; i < n; i++) {
        count = 0;
        for (j = 0; j < n; j++) {
            if (T[i] == T[j]) {
                count++;
            }
        }
        if (count == 1) {
            Alt[i] = 1;
        }

    }
    // print The No repititive Element
    for (i = 0; i < n; i++) {
        if (Alt[i] != -1) {
            printf("%d  ", Alt[i]);
        }
    }
    // O(n^2) => Qudrate Complexity
    return 0;
    getchar();
}
*/

/*
int main () {
    int n, i, j, count = 1;
    printf("Enter Taille Of The Table : ");
    scanf("%d", &n);
    int T[n];
    int Alt[n];
    // Fill The Table And Alt Table
    for (i = 0; i < n; i++) {
        printf("T[%d] = ", i);
        scanf("%d", &T[i]);
    }
    for (i = 0; i < n; i++) {
        Alt[i] = -1;
    }
    // Find The Repetitive Element
    for (i = 0; i < n; i++) {
        count = 1;
        for (j = i + 1; j < n; j++) {
            if (T[i] == T[j]) {
                count++;
                Alt[j] = 0;
            }
        }
        if (Alt[i] != 0) {
            Alt[i] = count;
        }

    }
    // print The No repititive Element
    printf("The No Repitetive Element Is : ");
    for (i = 0; i < n; i++) {
        if (Alt[i] == 1) {
            printf("%d  ", T[i]);
        }
    }
    printf("\nThe Repitetive Element Is : ");
    for (i = 0; i < n; i++) {
        if (Alt[i] >= 2) {
            printf("%d  ", T[i]);
        }
    }
    // O(n^2) => Qudrate Complexity
    return 0;
    getchar();
}
*/
/*
int main() {
    int n, i, j = 0, k = 0 ;
    printf("Enter Taille Of The Table : ");
    scanf("%d", &n);
    int T[n];
    int P[n], I[n];
    // Fill The Table And Alt Table
    for (i = 0; i < n; i++) {
        printf("T[%d] = ", i);
        scanf("%d", &T[i]);
        if (T[i] != 0) {
            if (T[i] % 2 == 0) {
                P[j] = T[i];
                j++;
            } else {
                I[k] = T[i];
                k++;
            }
        }
    }
    // Print The Even And Odd Element
    printf("The Even Element Is : ");
    for (i = 0; i < j; i++) {
        printf("%d ", P[i]);
    }
    printf("\nThe Odd Element Is : ");
    for (i = 0; i < k; i++) {
        printf("%d ", I[i]);
    }
    return 0;
    getchar();
}
*/

/*
int main() {
    int n, i, j = 0, indexmin, tmp;
    printf("Enter Taille Of The Table : ");
    scanf("%d", &n);
    int T[n];
    int P[n], I[n];
    // Fill The Table And Alt Table
    for (i = 0; i < n; i++) {
        printf("T[%d] = ", i);
        scanf("%d", &T[i]);
    }
    // Sort The Table
    for (i = 0; i < n; i++) {
        indexmin = i; // indexmin = T[i];
        for (j = i + 1; j < n; j++) {
            if (T[indexmin] < T[j]) {  // indexmin < T[j]
                indexmin = j; // indexmin = T[j]
            }
        }
        tmp = T[i];  // Change T[i] With Indexmin
        T[i]= T[indexmin];
        T[indexmin]= tmp;
    }
    // Print The Table
    printf("The Sorted Table Is : ");
    for (i = 0; i < n; i++) {
        printf("%d ", T[i]);
    }
    return 0;
    getchar();
}
*/

/*
int main() {
    char T[100];
    char T[] = "Hello";
    int i = 0;
    // Method 0
    /*
    printf("Enter Your Name : ");

    for (i = 0; i < 10; i++) {
        scanf("%c", &T[i]);
    }
    for (i = 0; i < 10; i++) {
        printf("%c", T[i]);
    }
    */
// Method 1
/*
printf("Enter Your Name : ");
scanf("%s", T);
printf("%s", T);
// Method 2
puts("Enter Your Name : ");
gets(T);
puts(T);
}
*/

/*
int main() {
    char T[100];
    char P[100];
    int i = 0, count = 0;
    puts("Enter The First String : ");
    gets(T);
    puts("Enter The Second String : ");
    gets(P);
    if (strlen(T) == strlen(P)) {
        for (i = 0; T[i] != '\0'; i++) {
            if (T[i] == P[i]) {
                count++;
            }
        }
        printf("Hamming Distance Is : %d", count);
    }
    else {
        printf("The Element Has Not The Same Taille");
    }
    return 0;
    getchar();
}
*/

/*
int main() {
    char T[100];
    int i = 0, len = 0;
    puts("Enter A String : ");
    gets(T);
    while(T[i] != '\0') {
        len++;
        i++;
    }
    printf("The Lenght Of The %s Is : %d", T, len);
}
*/
/*
int main() {
    char T[100];
    int P[100], i = 0, j = 0, count = 1;
    puts("Enter A String : ");
    gets(T);
    for (i = 0; i < 100; i++) {
        P[i] = -1;
    }
    // fill The Table
    for (i = 0; T[i] != '\0'; i++) {
        count = 1;
        for (j = i + 1; T[j] != '\0'; j++) {
            if (T[i] == T[j]) {
                P[j] = 0;
                    count++;
            }
        }
        if (P[i] != 0) {
            P[i] = count;
        }
    }
    // Print The Element
    printf("The Repitetive Element Is : ");
    for (i = 0; T[i] != '\0'; i++) {
        if (P[i] >= 2) {
            printf("%c ", T[i]);
        }
    }
}
*/
/*
int main() {
    char T[100];
    int tmp, taille, i;
    puts("Enter A String : ");
    gets(T);
    taille = strlen(T) - 1;
    printf("The Rersed String Is : %s\n", strrev(T));
    for (i = 0; i <= taille / 2; i++) {
        tmp = T[i];
        T[i] = T[taille - i];
        T[taille - i] = tmp;
    }
    printf("The Rersed String Is : %s\n", strrev(T));
    printf("The String Will Be LIke This : %s", T);
    return 0;
    getchar();
}
*/

/*
int main() {
    char T[100];
    char P[100];
    int tmp, taille, i,count = 0;
    puts("Enter A String : ");
    gets(T);
    // Copy The Table
    for (i = 0; i <= strlen(T); i++) {
        P[i] = T[i];
    }
    taille = strlen(T) - 1;
    for (i = 0; i <= taille / 2; i++) {
        tmp = T[i];
        T[i] = T[taille - i];
        T[taille - i] = tmp;
    }
    printf("The Origine String Is : %s\n", T);
    printf("The Reversed String Is :  %s\n", P);
    // Check If The Element Palindrome Or Not
    for (i = 0; T[i] != '\0'; i++) {
        if (T[i] == P[i]) {
            count++;
        }
    }
    // getting The result
    if (count == 0) {
        printf("The String Is Palindrome");
    } else {
        printf("The String Is Not Palindrome");
    }
    return 0;
    getchar();
}
*/

/*
int main() {
    int a = 3, i = 0;
    int T[5] = {1, 2, 3, 4, 5};
    int *p = &T[1];
    int *q = T;
    printf("%d\n", p == q);
    printf("%d", p >= q);
    return 0;
    getchar();
}
*/

/*
int main() {
    int A[] = {12, 23, 34, 45, 56, 67, 78, 89, 90};
    int *p = A, i = 0;
    for (i = 0; i < 9; i++) {
        printf("%p\n", A + i);
    }
    printf("----------------------\n");
    ++p;
    printf("%p\n", p);
    printf("%d\n", *(p + 3));
    printf("%d\n", p - &A[4]);
    --p; // p = p - 1
    printf("%p\n", p);
    printf("%d\n", *(A + 6));
    printf("%d\n", *(p + *(p + 8 - A[7])));
    printf("%d\n", p == &A[4]);
    printf("%d\n", p >= A);
}
*/
/*
int main() {
    int A[10], sum = 0;
    int *p = A; // p = &T[0]
    printf("Enter The Element Of The Table : \n");
    for (p = A; p < A + 10; p++) {
        printf("A[%d] = ", p - A);
        scanf("%d", p);
        sum += *(p);
    }
    printf("The Sum Is : %d", sum);
    return 0;
    getchar();
}
*/

/*
int main() {
    int A[10], min;
    int *p = A;
    min = *p;
    printf("Enter The Element Of The Table : \n");
    for (p = A; p < A + 10; p++) {
        printf("A[%d] = ", p - A);
        scanf("%d", p);
    }
    for (p = A + 1; p < A + 10; p++) {
        if (*p < min) {
            min = *p;
        }
    }
    printf("The Min Is : %d", min);
    return 0;
    getchar();
}
*/

/*
int main() {
    char T[100], P[100];
    int i = 0, tmp, taille, count = 0;
    puts("Enter A String : ");
    gets(T);
    //  Copy The String In Another Chaine
    for (i = 0; i <= strlen(T); i++) {
        P[i] = T[i];
    }
    printf("The Copy Is : %s\n", P);
    // Reverse The String
    taille = strlen(T) - 1;
    for (i = 0; i <= taille / 2; i++) {
        tmp = T[i];
        T[i] = T[taille - i];
        T[taille - i] = tmp;
    }
    printf("The String Will Be : %s \n", T);
    // Check If The T & P Palindrome Or not
    for (i = 0; i < strlen(T); i++) {
        if (T[i] == P[i]) {
            count++;
        }
    }
    if (count == strlen(T)) {
        puts("The String Is Palidrome");
    } else {
        printf("The String Is Not Palindrome");
    }
    return 0;
    getchar();
}
*/
/*
int main() {
    char T[100], P[100];
    puts("Enter A String : ");
    gets(T);
    strcpy(P, T); // Copy Chaine In Another Chaine P
    strrev(P); // Reverse The Chaine
    // Convert To Lower Cases
    strlwr(T);
    strlwr(P);
    if (strcmp(T, P) == 0) {
        printf("%s Is Palindrome", T);
    } else {
        printf("%s Is Not Palindrome", T);
    }
}
*/

/*
int main() {
    char a[100];
    char b[100];
    int i = 0;
    char *pa;
    char *pb;
    puts("Enter First Chaine : ");
    gets(a);
    puts("Enter The Second Chaine : ");
    gets(b);
    pb = b;
    pa = a + strlen(a) + 1;
    a[strlen(a)] = ' ';
    // Add Second Chaine To The Fisrt Chaine
    for (i = 0; i <= strlen(b); i++) {
        *(pa + i) = *(pb + i);
    }
    puts(a);
    return 0;
    getchar();
}
*/
/*
int main() {
    char T[100];
    int i = 0, j = 0, k = 0, taille;
    puts("Enter A String : ");
    gets(T);
    printf("The Lenght Of This String Is : %d\n", strlen(T));
    taille = strlen(T);
    for (i = 0; i < strlen(T); i++) {
        for (j = i + 1; j < strlen(T); j++) {
            if (T[i] == T[j]) {
                for (k = j; k < taille; k++) {
                    T[k] = T[k + 1];
                }
                j--;
                taille--;
            }
        }
    }
    printf("After Processing : %s", T);
    return 0;
    getchar();
}
*/

/*
int main() {
    char T[100];
    char occ;
    int i = 0, j = 0, taille;
    char *P = T;
    puts("Enter A String : ");
    gets(T);
    printf("Enter The Occurrence : ");
    scanf("%c", &occ);
    printf("The Lenght Of This String Is : %d\n", strlen(T));
    taille = strlen(T);
    for (i = 0; i < taille; i++) {
        if (*(P + i) == occ) {
            for (j = i; j < strlen(T); j++) {
                *(P + j) = *(P + j + 1);
            }
            i--;
            taille--; // taille will be change
        }
    }
    printf("After Proccessing : %s", T);
    return 0;
    getchar();
}
*/
/*
const char* delete (char *T, const occ) {
    int i = 0, j = 0, taille;
    char *P = T;
    taille = strlen(T);
    for (i = 0; i < taille; i++) {
        if (*(P + i) == occ) {
            for (j = i; j < strlen(T); j++) {
                *(P + j) = *(P + j + 1);
            }
            i--;
            taille--; // taille will be change
        }
    }
    return T;
}

int main() {
    char T[100];
    char occ;
    puts("Enter A String : ");
    gets(T);
    printf("Enter The Occurrence : ");
    scanf("%c", &occ);
    printf("The Lenght Of This String Is : %d\n", strlen(T));
    const char *resulats = delete(T, occ);
    printf("After The Proccessing : %s", resulats);
    return 0;
    getchar();
}
*/

/*
int main() {
    float a, b;
    printf("Enter A Number : ");
    scanf("%f", &a);
    printf("Enter A Number : ");
    scanf("%f", &b);
    printf("The Sum Is : %.3f", a + b);
    return 0;
    getchar();
}
*/
/*
int main() {
    float a;
    int c;
    printf("Enter A Number : ");
    scanf("%f", &a);
    c = a;
    printf("The Part Fractionnel Is : %f", a - c);
    return 0;
    getchar();
}
*/
/*
int main() {
    char a;
    printf("Enter A Character : ");
    scanf("%c", &a);
    printf("In ASCII :  %c = %d\n", a, a);
    printf("In HEX : %c = %x", a, a);
    return 0;
    getch();
}
*/

// "%c" pour avoir le caract�re
// "%d" pour un nombre entier sign� affich� en base d�cimale
// "%u" pour un nombre entier non sign� affich� en base d�cimale
// "%x" pour un nombre entier affich� en hexad�cimal.

/*
int main() {
    float a, b, c, max;
    printf("Enter Number : ");
    scanf("%f", &a);
    printf("Enter Number : ");
    scanf("%f", &b);
    printf("Enter Number : ");
    scanf("%f", &c);
    if (a >= b && a >= c) {
        max = a;
    } else if (b >= a && b >= c) {
        max = b;
    } else {
        max = c;
    }
    printf("Ths Max Is : %f", max);
}
*/

/*
int main() {
    int nbr;
    printf("Enter Number Of day : ");
    scanf("%d", &nbr);
    switch (nbr) {
        case 1: printf("Monday"); break;
        case 2: printf("Thursday"); break;
        case 3: printf("Wednesday"); break;
        case 4: printf("Thusday"); break;
        case 5: printf("Friday"); break;
        case 6: printf("Saturday"); break;
        case 7: printf("Sunday"); break;
        default : printf("Unknown Number");
    }
    return 0;
    getch();
}
*/

/*
int main() {
    int first, last, nbr, rest = 0;
    printf("Enter A Number : ");
    scanf("%d", &nbr);
    last = nbr % 10;
    while(nbr != rest) {
        nbr = nbr / 10; // 0 / 10
        rest = nbr % 10; // 12 % 10
    }
    first = rest;
    printf("The Last Chiffre is %d \nAnd First Chifrre Is %d", last, first);
    return 0;
    getch();
}
*/

/*
int main() {
    char T[] = "Informatique";
    printf("%s\n", strchr(T, 'm'));
    printf("%s\n", T + 5);
    ////////////
    char *P = "Quiz";
    char X[10] = "Quiz";
    printf("%d\n", sizeof(P)); // Work In Pointeur Taille => 8 octets
    printf("%d", sizeof(X)); // 10
    return 0;
    getch();
}
*/

/*
int main() {
    int n, i = 0;
    printf("Enter The Taille Table : ");
    scanf("%d", &n);
    char T[n];
    for (i = 0; i < n; i++) {
        T[i] = 0;
        printf("%d ", T[i]);
    }
    printf("\nBefore : %d", sizeof(T));
    n = n - 5;
    for(i = 0; i < n; i++) {
        T[i] = 1;
        n--;
    }
    printf("\nAfter : %d", sizeof(T));
    return 0;
    getch();
}
*/

/*
int main() {
    char Ali[] = "ATCGGCTAG";
    char Aya[] = "AAACTGCAT";
    char Manal[] = "WTREGHVX";
    char ADN[] = "HVX";
    int i = 0, j = 0;
    bool x;
    for (i = 0; Manal[i] != '\0'; i++) {
        if (Manal[i] == ADN[j]) {
            for (j = 0; j < strlen(ADN); j++) {
                if (ADN[j] == Manal[i]) {
                    x = true;
                    i++;
                } else {
                    x = false;
                    break;
                }
            }
            if (x == true) {
                printf("The Killer Is Manal");
                break;
            }
        }
    }
    return 0;
    getchr();
}
*/

/*
int main() {
    char Ali[] = "ATCGGCTAG";
    char Aya[] = "AAACTGCAT";
    char Manal[] = "WTREGHVX";
    char ADN[] = "HVX";
    if (strstr(Ali, ADN) != '\0') {
        printf("The Killer Is Ali");
    }
    if (strstr(Aya, ADN) != '\0') {
        printf("The Killer Is Aya");
    }
    if (strstr(Manal, ADN) != '\0') {
        printf("The Killer Is Manal");
    }
    return 0;
}
*/

/*
int main() {
    // Exercice 3 --> Tp3
    char FName[100];
    char LName[100];
    short int age;
    puts("Enter Your First Name : ");
    gets(LName);
    puts("Enter Your Last Name : ");
    gets(FName);
    printf("Enter Your Age : ");
    scanf("%hd", &age);
    printf("Hello %s %s Your Age Is %hd", FName, LName, age);
    return 0;
}
*/

/*
int main() {
    // Exercice 2 --> Tp3
    char str[100], tmp;
    int length = 0, i = 0;
    puts("Enter A String : ");
    gets(str);
    while (str[i] != '\0') {
        length++;
        i++;
    }
    // for (i = 0; str[i] != '\0'; i++) {
        // length++;
    // length = strlen(str);
    printf("The Lenght Of The String Is : %d", length);

    // Inverse String
    int n = length - 1;
    for (i = 0; i < length / 2; i++) {
        tmp = str[i];
        str[i] = str[n - i];
        str[n - i] = tmp;
    }
    // printf("\nThe Reverse Is : %s", strrev(str);
    printf("\nThe Reverse Is : %s", str);

    // Concatination
    int lengthB = 0;
    int x = 0;
    char A[100];
    char B[100];
    i = 0;
    // puts("\nEnter String A : ");
    // gets(A);
    printf("\n");
    puts("Enter String B : ");
    gets(B);
    puts("Enter String A");
    gets(A);
    while(B[i] != '\0') {
        lengthB++;
        i++;
    }
    printf("The Lenght Of String B : %d", lengthB);
    B[lengthB] = ' ';
    for (i = lengthB + 1; A[x] != '\0'; i++) {
        B[i] = A[x];
        x++;
    }
    B[i] = '\0';
    printf("\nAfter Concatination We Found : %s \n", B);

    // palindrome
    bool check = true;
    for (i = 0; i < lengthB; i++) {
        if (B[i] != B[lengthB - 1 - i]) {
            check = false;
            break;
        }
    }
    check == true ? printf("\nThe String B Is Palindrom\n") : printf("\nThe String B Is Not Palindrom\n");
    // Test If String A There is Chaine B
    int j = 0, count = 0, c_rep = 0;
    char P[] = "Not";
    for (i = 0; B[i] != '\0'; i++) {
        check = false;
        j = 0;
        if (P[j] == B[i]) {
            for (count = i; P[j] != '\0'; count++) {
                if (P[j] == B[count]) {
                    check = true;
                    j++;
                } else {
                    check = false;
                    break;
                }
            }
        }
        if (check == true && (B[count + 1] == ' ' || B[count + 1] == '\0')) {
            c_rep = 1;
            break;
        }
        i = i + count;
    }
    (check == true && c_rep == 1)
        ? printf("\nString P Exit In String B\n")
        : printf("\nString P Is Not In String B\n");
    return 0;
}
*/

/*
int main() {
    // Exercice 3 --> Td3
    int i = 0, j = 0, count = 0;
    float A[4][5] = {
    {2, 3, 4, 5, 6},
    {7, 8, 9, 0, -1},
    {3, 3, 7, 8, 4},
    {12, 1, 4, 1, -4}
    };
    // Get The Min And Max For Each Line
    float minL, maxL;
    printf("The Col Point For Line : ");
    for (i = 0; i < 4; i++) {
        minL = A[i][0];
        maxL = A[i][0];
        for (j = 1; j < 5; j++) {
            if (A[i][j] <= minL) {
                minL = A[i][j];
            }
            if (A[i][j] >= maxL) {
                maxL = A[i][j];
            }
        }
        printf("\nFor Line i = %d | minL = %.f | maxL = %.f\n", i + 1, minL, maxL);
        count++;
    }
    printf("-----------------------");
    // Get The Min And Max For Each Colone
    float minC, maxC;
    for (i = 0; i < 5; i++) {
        minC = A[0][i];
        maxC = A[0][i];
        for (j = 1; j < 4; j++) {
            if (A[j][i] < minC) {
                minC = A[j][i];
            }
            if (A[j][i] > maxC) {
                maxC = A[j][i];
            }
        }
        printf("\nFor Colone j = %d | minC = %.f | maxC = %.f\n", i + 1, minC, maxC);
        count++;
    }
    printf("\nNumber Of Col Point Is : %d\n", count * 2);
}

*/

/*
int main() {
    // Exercice 1 in TD 5
    char str[100];
    int count = 0, i = 0;
    puts("Enter A String : ");
    gets(str);
    for (i = 0; str[i] != '\0'; i++) {
        if (str[i] != ' ') count++;
    }
    printf("The Number Of Character In String Witouth Space Is : %d", count);
}
 */

/*
int main() {
   // Exercice 2 --> Td5
   char str[100];
   int i, j = 0;
   int index[10];
   puts("Enter A String :");
   gets(str);
   // Get The Space Indexs
   for (i = 0; str[i] != '\0'; i++) {
       if (str[i] == ' ') {
           index[j] = i;
           printf("%d ", index[j]);
           j++;
        }
   }
   index[j] = i;
   str[-1] = ' ';
   printf("%d \n", index[j]);
   // Start The Loop
   int n;
   n = i;
   // printf("lenght = %d", n);
   char R[100];
   int k;
   j = n, k = 0;
   while (j > 0) {
       i = index[k];
       // printf("\n%d\n", i);
       for (i = index[k] - 1; str[i] != ' '; i--) {
           R[j] = str[i];
           // printf("%c j = %d | i = %d | ", R[j], j, i);
           j--;
       }
       // printf("\n** i = %d |  j = %d\n", i, j);
       R[j] = str[i];
       j--;
       k++;
   }
   // printf("\n");
   for (i = 0; i <= n; i++) {
       printf("%c", R[i]);
   }
   printf("\n%s", R);
   return 0;
   getch();
}
*/

/*
int main () {
   // EX 3 --> TP5
   char TXT[200];
   int count = 0, i, NbrE = 0;
   char tmp;
   // La Longueur de La Chaine
   puts("Enter A String : ");
   gets(TXT);
   for (i = 0; TXT[i] != '\0'; i++) {
       count++;
   }
   printf("La Longeur De Cette Chaine C'est : %d\n", count);
   // Le Nomber De E Contenue
   for (i = 0; i < count; i++) {
       if (TXT[i] == 'e') {
           NbrE++;
       }
   }
   printf("Le Nomber De E C'est : %d\n", NbrE);
   // Toute Phrase Sans Changer Le Contenu De TXT
   printf("%s\n", TXT);
   // puts(TXT);
   // Toute Pharse Apres Inverse
   for (i = 0; i <= count / 2; i++) {
       tmp = TXT[i];
       TXT[i] = TXT[count - 1 - i];
       TXT[count - 1 - i] = tmp;
   }
   printf("%s", TXT);
   return 0;
}
*/

/*
int main() {
    // Ex4 --> Tp5
    char CH[] = "Voici Une Petite Phrase !";
    int count = 0;
    char *p = CH;
    // Avec Les Pointeur
    for (p; *p != '\0'; p++) {
        count++;
    }
    printf("La Longeur De La Chaine C'est : %d", count);
}
*/
/*
int main() {
    char str[100] = "voici une petites pharse !";
    char M1[20];
    char M2[20];
    char M3[20];
    char M4[20];
    char M5[20];
    int i = 0, x = 0;
    // printf("%d", sizeof(M1));
    for (i = 0; str[i] != ' '; i++) {
        M1[x] = str[i];
        x++;
    }
    x = 0;
    M1[i] = '\0';
    for (i = i + 1; str[i] != ' '; i++) {
        M2[x] = str[i];
        x++;
    }
    x = 0;
    M2[i] = '\0';
    for (i = i + 1; str[i] != ' '; i++) {
        M3[x] = str[i];
        x++;
    }
    x = 0;
    M3[i] = '\0';
    for (i = i + 1; str[i] != ' '; i++) {
        M4[x] = str[i];
        x++;
    }
    x = 0;
    M4[i] = '\0';
    for (i = i + 1; str[i] != '\0'; i++) {
        M5[x] = str[i];
        x++;
    }
    printf("%s ", M5);
    printf("%s ", M4);
    printf("%s ", M3);
    printf("%s ", M2);
    printf("%s", M1);
    getchar();
    return 0;
}
*/

/*
#include <stdio.h>
int main() {
    printf("Hello, ");
    fflush(stdout);  // Flush the standard output stream
    // ... some other code ...
    printf("world!\n");

    return 0;
}
*/

/*
int main() {
   int A, B, n;
   printf("Enter A Number : ");
   scanf("%d", &A);
   printf("Enter B Number : ");
   scanf("%d", &B);
   printf("---- Menu ----");
   printf("1 --> Addition\n2 --> Substraction\n3 --> Multiplication\n4 --> Division\n");
   printf("Enter The Process That You Want : ");
   scanf("%d", &n);
   int *x = &A, *y = &B;
   switch (n) {
       case 1: printf("%d + %d = %d", *x, *y, *x + *y); break;
       case 2: printf("%d - %d = %d", *x, *y, *x - *y); break;
       case 3:
           if (*y == 0) {
               printf("Imposible Division");
           } else {
               printf("%d / %d = %d", *x, *y, *x / *y); break;
           }
           break;
       case 4: printf("%d * %d = %d", *x, *y, *x * *y); break;
       default: printf("Unknown Process");
   }
   // Check Isf A Even
   printf("\n");
   if (*x % 2 == 0) {
       printf("%d Even", *x);
   } else {
       printf("%d Odd", *y);
   }
   // Get The Diviseur Of A
   printf("\n");
   int i = 0;
   for (i = 1; i <= *x; i++) {
       if (*x % i == 0) {
           printf("%d ", i);
       }
   }
   printf("\n");
   return 0;
}
*/

/*
int main () {
   int A;
   printf("Enter A Number : ");
   scanf("%d", &A);
   // Get The Divisor Of Number
   int *x = &A;
   int i = 1;
   while (i <= *x || i >= *x) {
       if (*x > 0) {
           if (*x % i == 0) {
               printf("%d ", i);
           }
           i++;
       } else {
           if (*x % i == 0) {
               printf("-%d ", i);
           }
           i--;
       }
   }
}
*/

/*
int main () {
   float A, B, n, C;
   printf("Enter A Number : ");
   scanf("%f", &A);
   printf("Enter B Number : ");
   scanf("%f", &B);
   float *x = &A, *y = &B;
   if (*x * *y > 0) {
       C = A;
       *x = B;
       *y = C;
       printf("A = %.f And B = %.f",*x, *y);
   } else {
       C = *x;
       *x = *x + *y;
       *y = C * *y;
       printf("A = %.f And B = %.f", *x, *y);
   }
   return 0;
}
*/

/*
int main()  {
    // Partie 1
    int a = 10;
    int b = 5;
    int tab[3] = {1, 2, 3};
    int *p;
    printf("Adress a = %p\n", &a); // Adress
    printf("Adress b = %p\n", &b); // Adress + Size Of a --> 4 octets
    printf("%d\n", *tab); // 1 --> tab is pointer That Pointe In First Element
    // Get The Address Of tab Element
    printf("Adress tab[0] = %p\n", &tab[0]);
    printf("Adress tab[1] = %p\n", &tab[1]);
    printf("Adress tab[2] = %p\n", &tab[2]);
    // Partie 2
    tab[0] = a;
    *(tab + 1) = b;
    p = tab + 2;
    printf("content tab[0] = %d\n", tab[0]);
    printf("Adress Of : tab[0] = %p And a = %p\n", &tab[0], &a);
    printf("Adress tab[0] = %p\n", &tab[0]);
    printf("tab[1] = %d\n", tab[1]);
    printf("Adress tab[1] = %p\n", &tab[1]);
    printf("Content p = %d\n", *p); // p = 3 --> p Pointe On tab[2]
    printf("Adress p = %p\n", &p); // 000000000062FDF8
    printf("%p\n", &a);
    // Partie 3
    *p = *(p - 1); //  Content Of p Is Content Of T[1]
    printf("Content p = %d\n", *p); // 10
    --p;
    printf("Content p = %d And tab[1]  = %d\n", *p, tab[1]); // p = 5 And tab[1] = 5
    *p = *(p - 1);
    printf("p = %d\n", *p);
    --p;
    *p = *(p + 2);
    printf("p = %d And tab[0] = %d\n", *p, tab[0]); // p = 5 And tab[1] = 5
    printf("Adress p = %p\n", &p); // Does Not Change
    return 0;
}
*/

/*
int main() {
    int tab[3] = {1, 2, 3};
    int *p = tab; // p pointe on tab[0]
    printf("tab[0] = %d\n", tab[0]);
    printf("tab[1] = %d\n", tab[1]);
    printf("tab[2] = %d\n", tab[2]);
    printf("p = %d\n", *p);
    *p = *(p + 1);
    printf("p = %d\n", *p); // Content Of p Change To Content tab[1] And tab[0] = tab[1]
    p = p + 2;
    printf("p = %d\n", *p); // p pointe on tab[2]
    printf("tab[0] = %d\n", tab[0]);
    printf("tab[1] = %d\n", tab[1]);
    printf("tab[2] = %d\n", tab[2]);
    return 0;
}
*/
/*
int main() {
   int a = 10;
   int b = 5;
   int tab[3] = {1, 2, 3};
   int *p;
   printf("Adress Of a = %p\n", &a);
   printf("Adress Of tab[0] = %p\n", &tab[0]);
   printf("Adress Of tab[1] = %p\n", &tab[1]);
   printf("Adress Of tab[2] = %p\n", &tab[2]);
   printf("Adress Of p = %p\n", &p);
   printf("------------------\n");
   tab[0] = a;
   *(tab + 1) = b;
   p = tab + 2;
   printf("tab[0] == %p And a = %p\n", &tab[0], &a);
   printf("tab[0] = %d\n", tab[0]);
   printf("tab[1] = %d\n", tab[1]);
   // *p = 100;
   // tab[2] = 101;
   // printf("tab[2] = %d\n", tab[2]); --> 100
   // printf("p = %d\n", *p); --> 101
   printf("p = %d\n", *p);
   printf("------------------\n");
   *p = *(p - 1);
   printf("tab[1] = %d And p = %d And tab[2] = %d\n", tab[1], *p, tab[2]);
   // Tab[2] Will Tab[2] == 5
   --p;
   printf("tab[1] = %d And p = %d\n", tab[1], *p);
   *p = *(p - 1);
   printf("tab[0] = %d And p = %d And tab[1] = %d\n", tab[0], *p, tab[1]);
   --p;
   printf("tab[0] = %d And p = %d\n", tab[0], *p);
   *p = *(p + 1);
   printf("p = %d\n", *p);
   return 0;
}
*/

/*
int main() {
    // Affiche The Element And Count There
    int n;
    printf("Enter The Taille Of The Table : ");
    scanf("%d", &n);
    int tab[n];
    int *p = tab;
    int count = tab - p;
    // Fill The Table
    for (*p; count < n - 1; p++) {
        count = p - tab;
        printf("tab[%d] = ", count);
        scanf("%d",  &tab[count]);
    }
    printf("\n");
    // Display The Elment To User
    p = tab;
    for (*p; *p != tab[n]; p++) {
        printf("%d  ", *p);
    }
    return 0;
}
 */

/*
int main() {
    // Display The Element With Another Method
    int n;
    printf("Enter The Taille Of The Table : ");
    scanf("%d", &n);
    int  tab[n];
    int *p = tab;
    for (tab; p != tab + n; p++) { // p < n + tab
        printf("tab[%d]  = ", p - tab);
        scanf("%d", p);
    }
    // Show The Element Of The Table
    printf("\n");
    //for (p = tab; *p != tab[n] ;p++) {
        // printf("%d  ", *p);
    // }
    for (p = tab; p != tab + n; p++) {
        printf("%d  ", *p);
    }
}
*/

/*
int main() {
    int x, n;
    printf("Enterez L'element Que Vous Souhaitez Supprimer : ");
    scanf("%d", &x);
    printf("Saisir La Taille Du Tableau : ");
    scanf("%d", &n);
    int tab[n], tmp;
    int *p = tab;
    int *m = tab;
    // Remplisage Du Tableau
    for (p = tab; p < tab + n; p++) {
        printf("tab[%d] = ", p - tab);
        scanf("%d", p);
    }
    // Suppremer L'element x Du Tableau
    for (p = tab; p < tab + n; p++) {
        if (*p == x) {
            for (m = p; m < tab + n - 1; m++) {
                tmp = *m;
                *m = *(m + 1);
                *(m + 1) = tmp;
            }
            n--;
            p--;
        }
    }
    // Afficheur Les Elements Sans L'element x
    for (p = tab; p < tab + n; p++) {
        printf("%d  ", *p);
    }
    return 0;
}
*/

/*
int main() {
    // Anoter Method Better Then My Method
    int x, n;
    printf("Enterez L'element Que Vous Souhaitez Supprimer : ");
    scanf("%d", &x);
    printf("Saisir La Taille Du Tableau : ");
    scanf("%d", &n);
    int tab[n], tmp;
    int *p = tab;
    int *m = tab;
    // Remplisage Du Tableau
    for (p = tab; p < tab + n; p++) {
        printf("tab[%d] = ", p - tab);
        scanf("%d", p);
    }
    // Supprimer L'element du Tableau
    for (p = tab; p < tab + n; p++) {
        *m = *p;
        if (*m != x) {
            m++;
        }
    }
    n = m - tab;
    // Afficheur Les Elements Sans L'element x
    for (p = tab; p < tab + n; p++) {
        printf("%d  ", *p);
    }
    return 0;
    // Complexity is O(n)
}
*/

/*
int main() {
    int x, n;
    printf("Saisir La Taille Du Tableau : ");
    scanf("%d", &n);
    int tab[n], tmp;
    int *p;
    int *m;
    // Remplisage Du Tableau
    for (p = tab; p < tab + n; p++) {
        printf("tab[%d] = ", p - tab);
        scanf("%d", p);
    }
    // Range Le Tableau
    /*
    m = tab + n - 1;
    for (p = tab; p < n / 2 + tab; p++) { // *p != tab[n/ 2]
        tmp = *p;
        *p = *m;
        *m = tmp;
        m--;
    }
    */
// With Another Method
/*
for (p = tab, m = tab + n - 1; *p != tab[n / 2] || p < n / 2 + tab; p++, m--) {
    tmp = *p;
    *p = *m;
    *m = tmp;
}

for (p = tab, m = tab + n - 1; p < m; p++, m--) { // p != m if n % 2 != 0
    tmp = *p;
    *p = *m;
    *m = tmp;
}
// Afficheur Les Elements Sans L'element x
for (p = tab; p < tab + n; p++) {
    printf("%d  ", *p);
}
return 0;
}
*/

/*
int main() {
    int x, n;
    printf("Saisir La Taille Du Tableau A : ");
    scanf("%d", &n);
    printf("Saisir La Taille Du Tableau B : ");
    scanf("%d", &x);
    int A[100];
    int B[100];
    int *p;
    int *m;
    // Remplisage Du Tableau
    printf("\nEnter Element Of The Table A : \n");
    for (p = A; p < A + n; p++) {
        printf("A[%d] = ", p - A);
        scanf("%d", p);
    }
    printf("Enter Element Of The Table B : \n");
    for (m = B; m < B + x; m++) {
        printf("B[%d] = ", m - B);
        scanf("%d", m);
    }
    p = A + n;
    for (m = B; m < B + x; m++) {
        *p = *m;
        p++;
    }
    // Afficher Les Elements Du Tableau
    printf("Apres La Concatination de A et B on Trouve : ");
    for (p = A; p < n + A + x; p++) {
        printf("%d  ", *p);
    }
    return 0;
}
*/

/*
int main() {
    int n;
    printf("Saisir La Taille Du Tableau A : ");
    scanf("%d", &n);
    int A[100];
    int *p = A;
    for (p = A; p < A + n; p++) {
        printf("A[%d] = ", p - A);
        scanf("%d", p);
    }
    int indexmin, *m, tmp;
    for (p = A; p < A + n; p++) {
        m = p;
        for (m; m < A + n; m++) {
            if (*p < *m) {
                tmp = *p;
                *p = *m;
                *m = tmp;
            }
        }
    }
    // Afficher les elements trie par order croissante
    for (p = A; p < A + n; p++) {
        printf("%d ", *p);
    }
    return 0;
}
*/

////////////////////////// Functions

// Without Argument and Without return
/*
void sayHello() {
    printf("Warning : Make Tea Not Love") ;
}
int main() {
    sayHello();
}
*/

// With Argument and Without return
/*
void sayHello(int a) {
    printf("a = %d", a);
}
int main() {
    int a = 10;
    sayHello(a);
}
*/

// With Argument and With return
/*
int function(int a, int b) {
    return a * b;
}
int main() {
    int a = 10;
    int b = 10;
    printf("a * b = %d", function(a, b));
    return 0;
}
*/

// Without Argument and With return
/*
char function() {
    char Warning[] = "Make Tea Not Love";
    return puts(Warning);
}
int main() {
    printf("Warning : ");
    function();
    return 0;
}
*/

/*
int a, b;
void singe(int a, int b) {
    if (a * b >= 0) {
        printf("De Meme Singe");
    } else {
        printf("Pas De Meme Singe");
    }
}
int min(int a, int b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
int max(int a, int b) {
    if (a < b) {
        return b;
    } else {
        return a;
    }
}
void print(int *a, int *b) { // print()
    printf("Enterez La Valeur de A : ");
    scanf("%d", a);
    printf("Entrez La Valeur de B : ");
    scanf("%d", b);
    // printf("c = %d\n", *c);
    // printf("d = %d\n", *d);
}
int main() {
    print(&a, &b); // print(a, b)
    // printf("a = %d\n", a);
    // printf("b = %d\n", b);
    singe(a, b);
    printf("\nLe Min C'est : %d", min(a, b));
    printf("\nLe Max C'est : %d", max(a, b));
    return 0;
}
*/

/*
Here, a and b are pointers that hold addresses. When you use &a and &b as
arguments in the scanf calls, you are providing the addresses of the pointers
themselves, not the addresses they point to. This can lead to undefined behavior
and unexpected results.
*/
/*
If you use a and b without the & (address-of) operator, you are correctly
providing the addresses they point to, allowing scanf to update the values
at those addresses.
*/

/*
int Multiplication(int nbr) {
    int i = 0;
    for (i = 0; i <= 10; i++) {
        printf("%d * %d = %d\n", i, nbr, i * nbr);
    }
}

int main() {
    int nbr;
    printf("Enter A Number : ");
    scanf("%d", &nbr);
    Multiplication(nbr);
    return 0;
}
*/

/*
int isBissextile(int year) {
    if (year % 100 != 0 && year % 4 == 0) return 0; // or year % 400 == 0
    else return 1;
}
int main() {
    int year;
    printf("Enter The Year : ");
    scanf("%d", &year);
    if (isBissextile(year) == 0) {
        printf("%d is Bissextile", year);
    } else {
        printf("%d Is Not Bissextile", year);
    }
    // if Your Don't Write &year just %d it take number but it leaves 2 chiffre
    // 1232 --> 12 --> leaves 32
    // 12 --> 0
    return 0;
}
*/

/*
void isPremier(int number) {
    int i;
    bool check = true;
    for (i = 2; i <= number / 2; i++) {
        if (number % i == 0) {
            check = false;
            break;
        }
    }
    check == true ? printf("%d is Premier", number) : printf("%d Is Not a Premier", number);
}
int main () {
    int number;
    do {
        printf("Enter An Integer Number : ");
        scanf("%d", &number);
    } while (number < 0);
    isPremier(number);
    return 0;
}
*/

/*
int length(number) {
    // int rest, count = -1;
    // while (number != rest) {
        // rest = number % 10;
        // number = number / 10;
        // count += 1;
    // }
    int count = 0;
    do {
        number = number / 10;
        count++;
    } while (number != 0);
    return count;
}
int main () {
    long number;
    printf("Enter a Number : ");
    scanf("%ld", &number);
    printf("Lenght Is : %d", length(number));
}
*/
/*
// Start Exman 1
int main () {
    // Exercise 1
    int q, n = 5, p = 9;
    float x;
    // q = n < p;
    // q = q == n;
    // q = p % n + p < n;
    // printf("%d\n", q);
    x = p / n;
    printf("%f\n", x);
    x = (float) p / n;
    x = (int) (p + 0.5) / n;
    printf("%.4f\n", x);
    q = n * (p < n ? n : p);
    printf("%d\n", q);
    q = (n > p ? n : p) + (n <= p ? n : n);
    printf("%d\n", q);
    return 0;
}
*/

/*
int main() {
    int i, j, *adt, t[3];
    for (i = 0, j = 0; i < 3; i++) {
        t[i] = j++ + i;
    }
    for (i = 0; i < 3; i++) {
        printf("%d ", t[i]);
    }
    printf("\n");
    for (i = 0; i < 3; i++) {
        printf("%d ", *(t + i));
    }
    printf("\n");
    for (adt = t; adt < t + 3; adt++) {
        printf("%d ", *(adt));
    }
    printf("\n");
    for (adt = t + 2; adt >= t; adt--) {
        printf("%d ", *(adt));
    }
    printf("\n");
    return 0;
}
*/

/*
int main () {
    float nbrs[3], med;
    int max, min;
    int i;
    for (i = 0; i < 3; i++) {
        printf("Enterz un valeur : ");
        scanf("%f", &nbrs[i]);
    }
    // get max and min
    max = nbrs[0];
    min = nbrs[0];
    for (i = 0; i < 3; i++) {
        if (nbrs[i] < min) min = nbrs[i];
        if (nbrs[i] > max) max = nbrs[i];
    }
    printf("min = %d, max = %d\n", min, max);
    // Get The Mediante Number
    med = min;
    for (i = 0; i < 3; i++) {
        if (nbrs[i] < max && nbrs[i] > min) med = nbrs[i];
    }
    printf("La Valeur Mediane c'est : %.2f", med);
    return 0;
}
*/

/*
int main () {
    float nbr1, nbr2, nbr3, med;
    printf("Enterz Les Trois Valeurs : ");
    scanf("%f%f%f", &nbr1, &nbr2, &nbr3);
    med = nbr1;
    if (nbr1 < nbr2 && nbr1 > nbr3 || nbr1 < nbr3 && nbr1 > nbr1) med = nbr1;
    if (nbr2 > nbr1 && nbr2 < nbr3 || nbr2 < nbr1 && nbr2 > nbr3) med = nbr2;
    if (nbr3 > nbr1 && nbr3 < nbr2 || nbr3 < nbr1 && nbr3 > nbr2) med = nbr3;
    printf("La Valeur Mediante C'est : %f", med);
    return 0;
}
 */
/*

int main() {
    int n;
    printf("Enter A Number : ");
    scanf("%d", &n);
    int table[n]; // Note: This is allowed in C99 and later, but not in C89
    int i, j, x = 0;

    for (i = 2; i <= n; i++) {
        table[x] = i;
        x++;
    }
    // Detect The Odd Number In This Number
    for (i = 0; i <= n - 2; i++) {
        if (table[i] != 0) {
            for (j = i + 1; j <= n - 2; j++) {
                if (table[j] % table[i] == 0) {
                    table[j] = 0;
                }
            }
        }
    }

    printf("\n");

    // Print The Prime Numbers
    for (i = 0; i <= x - 2; i++) {
        if (table[i] != 0) {
            printf("%d ", table[i]);
        }
    }

    return 0;
}
*/

/*
int main () {
    int n = 0;
    do {
        if (n % 2 == 0 ) {
            printf("%d est pair\n", n);
            n += 3;
            continue;
        }
        if (n % 3 == 0) {
            printf("%d est multiple de 3\n", n);
            n += 5;
        }
        if (n % 5 == 0) {
            printf("%d est multiple de 5\n", n);
            break;
        }
        n += 1;
    } while (1);
    return 0;
}
*/

/*
int main()
{
    float a, b;
    char symbol;
    printf("Enterz loperation effectue : ");
    scanf("%c", &symbol);
    printf("Enterz le premier nombre : ");
    scanf("%f", &a);
    printf("Enterz le dexieume nombre : ");
    scanf("%f", &b);
    float result;
    switch (symbol)
    {
    case '+':
        result = a + b;
        break;
    case '-':
        result = a - b;
        break;
    case '*':
        result = a * b;
        break;
    case '/':
        if (b == 0)
            printf("Error");
        else
            result = a / b;
        break;
    case '%':
        if (b == 0)
            printf("Error");
        else
        {
            result = (int)a % (int)b;
        }
        break;
    default:
        printf("%c n'exist pas", symbol);
        break;
    }
    printf("%f %c %f = %f", a, symbol, b, result);
    return 0;
}
*/

/*
int main()
{
    float a = 10.34;
    a = (int)a;
    printf("a = %f\n", a); // 10.0000
    a = (bool)a;
    printf("a = %f", a); // beacuse 10.34 is a true value

    char symbol;
    printf("Enter Le caracter");
    scanf(" %c", &symbol);

    printf("%d %% %d = %d", a, b, a % b);

    float a = 0;
    a = (int)a;
    printf("a = %f\n", a);
    a = (bool)a;
    printf("a = %f", a); // 0 because 0 is false value
}
*/

// Start Revesing Pointer
/*
void echange(int *p, int *q) {
    int tmp;
    if (*p * *q  >= 0) {
        tmp = *p;
        *p = *q;
        *q = tmp;
    } else {
        tmp = *p;
        *p = *p + *q;
        *q = *q * tmp;
    }
}
int main () {
    int a, b;
    printf("Enter A Number : ");
    scanf("%d", &a);
    printf("Enter A Number : ");
    scanf("%d", &b);
    echange(&a, &b);
    printf("a = %d and b = %d", a, b);
    return 0;
}
*/

/*
int main () {
    int n = 4, i, j;
    for (i = 0, j = 1; i < 7; i++, j+= 2) {
        n += i + j;
    }
    printf("n = %d", n);
    return 0;
}
*/

/*
#include <math.h>
float Second_Degree_Equation(int a, int b, int c) {
    if (a == 0) {
        if (b == 0) {
            if (c == 0) printf("Infity Of Solution");
            else printf("No Solution");
        } else {
            float solution = -c / b;
            printf("The Solution Is %.2f", solution);
        }
    } else {
        float delta = power(b, 4) - 4 * a * c;
        if (delta < 0 ) printf("No Floating Solution");
        else if (delta == 0)  {
            float solution = -b / (2 * a);
            printf("The Solution is %.2f", solution);
        } else {
            float solution1 = -b - sqrt(delta) / (2 * a);
            float solution2 = -b + sqrt(delta) / (2 * a);
            printf("The Solution is %.2f and %.2f", solution1, solution2);
        }
    }
}

int main() {
    int a, b, c;
    printf("a = ");
    scanf("%d", &a);
    printf("a = ");
    scanf("%d", &b);
    printf("a = ");
    scanf("%d", &c);
    Second_Degree_Equation(a, b, c);

}
*/

/*
// isSorted or Not
int main () {
    int i, count = 0;
    bool check = true;
    int table[10] = {1, 2, 12, 4, 4, 5};
    int ele = 12;
    int *p = table;
    // clac occurence element
    for (p; p < table; p++) {
        if (*p == ele) count++;
    }
    printf("%d exist in this table %d time\n", ele, count);
    // min and moyenne
    int moyenne = table[0], min = table[0];
    for (i = 1; i < 6; i++) {
        if (min > table[i]) min = table[i];
        moyenne += table[i];
    }
    printf("The Moyenne Is %d and min is %d\n", moyenne, min);
    // isSorted or not
    if (table[0] < table[1]) {
        for (i = 0; i < 5; i++) {
            if (table[i] > table[i + 1]) {
                check = false;
                break;
            }
        }
    } else {
        for (i = 0; i < 5; i++) {
            if (table[i] < table[i + 1]) {
                check = false;
                break;
            }
        }
    }
    if (check == true) printf("Sorted\n");
    else printf("Not Sorted\n");
    // calc vecteur
    int v1[3] = {1, 2, 3};
    int v2[3] = {4, 5, 6};
    int somme = 0;
    int *q;
    for (p = v1, q = v2; q < table || p < table; p++, q++) {
        somme = *p * *q;
    }
    printf("The Somme Os Vecteur is %d\n", somme);
    return 0;
}
*/

/*
int main () {
    int i, j, k, line1, colone1, line2, colone2;
    printf("Enter A Line Number : ");
    scanf("%d", &line1);
    printf("Enter A Colone Number : ");
    scanf("%d", &colone1);
    printf("Enter A Line Number : ");
    scanf("%d", &line2);
    printf("Enter A Colone Number : ");
    scanf("%d", &colone2);
    int A[line1][colone1];
    int B[line2][colone2];
    // fill the matrix A
    for (i = 0; i < line1; i++) {
        for (j = 0; j < colone1; j++) {
            printf("A[%d][%d] = ", i, j);
            scanf("%d", &A[i][j]);
        }
    }
    // fill the matrix B
    for (i = 0; i < line2; i++) {
        for (j = 0; j < colone2; j++) {
            printf("B[%d][%d] = ", i, j);
            scanf("%d", &B[i][j]);
        }
    }
    // Do The matplication With Matrix A * B
    int somme = 0;
    int C[line1][line1];
    for (i = 0; i < line1; i++) {
        for (j = 0; j < colone2; j++) {
            C[i][j] = 0;
            for (k = 0; k < colone1; k++) {
                printf("---------------\n");
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }
    // Printf The matrix
    for (i = 0; i < line1; i++) {
        for (j = 0; j < colone2; j++) {
            printf("%d  ", C[i][j]);
        }
        printf("\n");
    }
    return 0;
}
*/
#include <string.h>
/*
int main() {
    int T[100] = {1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0};
    int index[10];
    int count[10];
    bool check = true;
    int i, c, k = 0, p = 0, lenght = 0;
    for (i = 0; i <= 15; i++) {
        c = 0;
        while (T[i] == 0) {
            if (T[i] == 0 && i < 15) {
                c++;
            }
            if (check == true) {
                index[k] = i;
                check = false;
                k++;
            }
            i++;
        }
        if (check == false) {
            count[p] = c;
            p++;
            lenght++;
        }
        check = true;
    }
    // Print The Index and Count table
    for (i = 0; i < lenght; i++) {
        printf("index[%d] = %d\n", i, index[i]);
        printf("count[%d] = %d\n", i, count[i]);
    }
    // Get The Max Of index Table
    int MaxSuiteConsective = count[0], result;
    for (i = 1; i < lenght; i++) {
        if (count[i] > MaxSuiteConsective) {
            MaxSuiteConsective = count[i];
            result = index[i];
        }
    }
    printf("The Max Suite Consective of zero was %d and Index Of First Element is : %d",
    MaxSuiteConsective, result);
    return 0;
}
*/

/*
int main() {
    int T[100] = {1, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0};
    int index[10];
    int count[10];
    bool check;
    int i, c, lenght = 0;
    for (i = 0; i < 11; i++) {
        c = 0; check = true;
        while (T[i] == 0) {
            if (T[i] == 0 && i < 11) {
                c++;
            }
            if (check == true) {
                index[lenght] = i;
                check = false;
            }
            i++;
        }
        if (check == false) {
            count[lenght] = c;
            lenght++;
        }
    }
    // Print The Index and Count table
    for (i = 0; i < lenght; i++) {
        printf("index[%d] = %d\n", i, index[i]);
        printf("count[%d] = %d\n", i, count[i]);
    }
    // Get The Max Of index Table
    int MaxSuiteConsective = count[0], result = index[0];
    for (i = 1; i < lenght; i++) {
        if (count[i] > MaxSuiteConsective) {
            MaxSuiteConsective = count[i];
            result = index[i];
        }
    }
    printf("The Max Suite Consective of zero was %d and Index Of First Element is : %d", MaxSuiteConsective, result);
    return 0;
}
*/

/*
int main() {
    int T[100] = {1, 1, 1, 1, 1, 1, 1, 1, 1, 0};
    bool check;
    int i, c1, c2 = 0, index, result = -1, n = 10;
    for (i = 0; i < n; i++) {
        c1 = 0, check = true;
        while (T[i] == 0 && i < n) {
            if (T[i] == 0) {
                c1++;
            }
            if (check == true) {
                index = i;
                check = false;
            }
            i++;
        }
        if (c1 > c2) {
            result = index;
            c2 = c1;
        }
    }
    if (result == -1) printf("There is no Consective  Suite zero");
    else printf("Index Os Suite is %d and Lenght Of Site Is %d", result, c2);
    return 0;
}
*/

/*
int main() {
    int n = 10;
    int T[10] = {1, 2, 5, 1, 1, 1, 7, 9, 1, 0};
    int max = T[0], min = T[0], i;
    for (i = 0; i < n; i++) {
        if (max < T[i]) {
            max = T[i];
        }
        if (min > T[i]) {
            min = T[i];
        }
    }
    printf("The Max Ecart Is : %d", max - min);
    return 0;
}
*/

/*
int main() {
    int i, j, line1, colone1, result;
    printf("Enter A Line Number : ");
    scanf("%d", &line1);
    printf("Enter A Colone Number : ");
    scanf("%d", &colone1);
    int A[line1][colone1];
    int B[colone1][line1];
    // fill the matrix A
    for (i = 0; i < line1; i++) {
        for (j = 0; j < colone1; j++) {
            printf("A[%d][%d] = ", i, j);
            scanf("%d", &A[i][j]);
        }
    }
    // Get The Transpose
    for (i = 0; i < line1; i++) {
        for (j = 0; j < colone1; j++) {
            B[j][i] = A[i][j];
        }
    }
    // Print The Matrix A and B
    printf("\n");
    for (i = 0; i < line1; i++) {
        for (j = 0; j < colone1; j++) {
            printf("%d ", A[i][j]);
        }
        printf("\n");
    }
    printf("------------\n");
    for (i = 0; i < colone1; i++) {
        for (j = 0; j < line1; j++) {
            printf("%d ", B[i][j]);
        }
        printf("\n");
    }
    // Check If matrix A Anti-symetrie
    result = 0;
    if (line1 != colone1) result = -1;
    else {
        for (i = 0; i < line1; i++) {
            for (j = 0; j < colone1; j++) {
                if (A[i][j] != B[i][j]) {
                    result = -1;
                    break;
                }
            }
        }
    }
    if (result == -1) printf("Two Matrix Is Not Symetrie");
    else printf("Two Matrix A and B Is Symetrie");
    return 0;
}
*/

/*
int main() {
    char *ptr;
    int i, L = 0;
    char chaine[50];
    ptr = chaine;
    printf("Enter La Chaine De Caractere : ");
    for (ptr; ptr < chaine + 50; ptr++) {
        char c = getchar();
        if (c == '\n') {
            *ptr = '\0';
            break;
        }
        *ptr = c;
    }
    printf("\n");
    for (ptr = chaine; *ptr != '\0'; ptr++) {
        printf("%c", *ptr);
    }
    printf("\n");
    printf("%s", chaine);
    // Lenght Of Chaine
    for (ptr = chaine; *ptr != '\0'; ptr++) {
        L++;
    }
    printf("\nThe Lenght Of This Chaine is : %d", L);
    printf("\nLa Chaine De Sens Inverse C'est : ");
    for (ptr = chaine + L; ptr >= chaine; ptr--) {
        printf("%c", *ptr);
    }
    printf("\nConvertir La Chaine En Minuscule : ");
    strlwr(chaine);
    printf("%s", chaine);
    printf("\nSupprimer Les Espaces dans cette chaine : ");
    char *m;
    for (ptr = chaine; *ptr != '\0'; ptr++) {
        if (*ptr == ' ') {
            m = ptr;
            while (*m != '\0') {
                *m = *(m + 1);
                m++;
            }
            ptr--;
        }
    }
    printf("%s", chaine);
    return 0;
}
*/

/*
int main() {
    char ligne[10];
    printf("Entrez une ligne de texte (max 40 caractres) : ");
    scanf(" %10[^\n]", ligne);
    printf("Ligne valide : %s\n", ligne);
    return 0;
}
*/
/*
int main()
{
    int nbr = 212;
    int tmp = nbr;
    int inverse = 0;
    int result = 0;
    printf("The Number Is %d", nbr);
    while (nbr != 0)
    {
        inverse += (int)(nbr % 10);
        nbr = (int)nbr / 10;
        if (nbr != 0)
            inverse *= 10;
    }
    printf("\nThe Inverse Is %d", inverse);

    if (tmp == inverse)
    {
        printf("\n%d Is Parfait", tmp);
    }
    else
    {
        printf("\n%d Is Not Parfait", tmp);
    }

    while (inverse != 0)
    {
        result += pow(inverse % 10, 3);
        inverse = inverse / 10;
    }
    printf("\nThe Pow Of Inverse is %d", result);
    if (tmp == result)
    {
        printf("\n%d Is ArmStrong", tmp);
    }
    else
    {
        printf("\n%d Is Not ArmStrong", tmp);
    }
    return 0;
}
*/

/*
int main() {
    int i, L = 0;
    char chaine[50];
    char *ptr = chaine;
    printf("Enter The Chaine Of Caracter : ");
    for (ptr = chaine; ptr < chaine + 50; ptr++) {
        char c = getchar();
        if (c == '\n') break;
        *ptr = c;
    }
    chaine[50] = '\0';
    printf("%s\n", chaine);
    strlwr(chaine);
    // Get The Lenght
    for (ptr = chaine; *ptr != '\0'; ptr++) {
        L++;
    }
    printf("%s\n", chaine);
    for (ptr = chaine + L; ptr >= chaine; ptr--) {
        printf("%c", *ptr);
    }
    printf("\nDeLete The Space\n");
    char *m;
    i = 0;
    for (ptr = chaine; *ptr != '\0'; ptr++) {
        if (*ptr == ' ') {
            m = ptr;
            for (; m < chaine + L - i; m++) {
                *(m) = *(m + 1);
            }
            ptr--;
            i++;
        }
    }
    printf("%s", chaine);
    return 0;
}
*/

/*
int main() {
    int nbr = 6;
    printf("%d\n", nbr % 10);
    printf("%d\n", nbr / 100);
    int tmp = nbr;
    int inv = 0;
    while (tmp != 0) {
        inv += tmp % 10;
        tmp = tmp / 10;
        if (tmp != 0) inv *= 10;
    }
    printf("inv = %d\n", inv);
    // Parfait Number
    int i, s = 0;
    for (i = 1; i <= nbr / 2; i++) {
        if (nbr % i == 0) s+= i;
    }
    if (nbr == s) printf("%d Is Parfait\n", nbr);
    else printf("%d Is Not parfait\n", nbr);
    // ArmStrong
    int tmp1 = nbr;
    int strong = 0;
    while (tmp1 != 0) {
        strong += pow(tmp1 % 10, 3);
        tmp1 = tmp1 / 10;
    }
    if (nbr == strong) {
        printf("%d Is ArmStrong\n", nbr);
    } else {
        printf("%d Is Not ArmStrong\n", nbr);
    }
    return 0;
}
*/

/*
int main () {
    float ele = 10.0; // Floating Number
    float T[10] = {1, 10, 3, 4, 10, 6, 7, 8, 9, 10};
    int i, count = 0;
    for (i = 0; i < 10; i++) {
        if (ele == T[i]) count++; // Add Count
    }
    printf("The Occurence Of %f Is %d", ele, count); // Should Be Return 3
    return 0;
}
*/

/*
int main()
{
    int n, i, j;
    printf("Enter The taille Of The table : ");
    scanf("%d", &n);
    int P[n + 1][n + 1];
    for (i = 0; i < n; i++)
    { // 0 -> 4 ||
        P[i][0] = 1;
        P[i][i] = 1;
        for (j = 1; j < i; j++)
        {                                            // We Can Start With 0
            P[i][j] = P[i - 1][j - 1] + P[i - 1][j]; // Add A Condition Of (j != 0)
        }
    }
    // Print The Pascal Matrix
    for (i = 0; i < n; i++)
    {
        for (j = 0; j <= i; j++)
        {
            printf("%d  ", P[i][j]);
        }
        printf("\n");
    }
    return 0;
}
*/

/*
void Multiplicatione_tabe(int a) {
    int i;
    for (i = 0; i < 11; i++) {
        printf("%d * %d = %d\n", i, a, i * a);
    }
}


int main() {
    int a;
    printf("Enter A Number : ");
    scanf("%d", &a);
    Multiplicatione_tabe(a);
    return 0;
}
*/

/*
#include <math.h>
float Cube(float a) {
    return pow(a, 3);
}
int main() {
    float a;
    printf("Enter A Number : ");
    scanf("%f", &a);
    printf("La Cube de %.2f Is %.2f", a, Cube(a));
    return 0;
}
*/

/*
int bissextille(int year) {
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        return 1;
    } else {
        return 0;
    }
}

int main() {
    int year;
    printf("Enter The Year : ");
    scanf("%d", &year);
    if (bissextille(year) == 0) {
        printf("%d Is Not Bissextille", year);
    } else {
        printf("%d Is Bissextille", year);
    }
    return 0;
}
*/

/*
int isPremier(int nbr) {
        int check = 0, i;
        for (i = 2; i <= nbr / 2; i++) {
                if (nbr % i == 0) {check = 1; break;}
        }
        return check;
}

int main() {
    int nbr;
    printf("Enter The Number : ");
    scanf("%d", &nbr);
    if (isPremier(nbr) == 1) {
        printf("%d Is Not Premier", nbr);
    } else {
        printf("%d Is Premier", nbr);
    }
    return 0;
}
*/
/*
int NumberLenght(int nbr) {
        int count = 0;
        if (nbr == 0) return 1;
        while (nbr != 0) {
                nbr = nbr / 10;
                count++;
        }
        return count;
}

int main() {
    int nbr;
    printf("Enter The Number : ");
    scanf("%d", &nbr);
    printf("The Lenght of %d is : %d", nbr, NumberLenght(nbr));
    return 0;
}
*/

/*
float  surface(int rayon) {
        return rayon * rayon * 3.14;
}
float diameter(int rayon) {
        return rayon * 2;
}
float permieter(int rayon) {
        return rayon *2 * 3.14;
}
int main() {
        int rayon;
        printf("Enter The Rayon : ");
        scanf("%d", &rayon);
        printf("The Diamter Is %.2f\n", diameter(rayon));
        printf("The Surface Is %.2f\n", surface(rayon));
        printf("The Diamter Is %.2f\n", permieter(rayon));
        return 0;
}
*/

/*
int main() {
        // Must Be %f Not %d
        printf("%f\n", sqrt(4));
        printf("%f\n", pow(4, 4));
        return 0;
}
*/

/*
int main() {
        // int a = 10 || 5; it is a condition --> 1
        int a = 10 | 5;
        printf("a = %d\n", a);
        printf("%d\n", ~5);
        int b = 5 >> 1;
        printf("b = %d\n", b);
        return 0;
        // 0000 0101
        //
}
*/

/*
int main () {
        int T[3] = {1, 2, 3};
        int *q = (T + 2);
        printf("%d", *q);
        q = q - 2;
        printf("%d", *q);
        *q = (*q)++;
        printf("\n%d", *q);
        *q = *q - 1;
        int x = *q * 10; // *q = 1
        printf("\n%d", x);
        return 0;
}
*/
/*
int i;
int somme(int T[], int n) {
        int s = 0;
        for (i = 0; i < n; i++) {
                s += T[i];
        }
        return s;
}
int produit(int T[], int n) {
        int p = 1;
        for (i = 0; i < n; i++) {
                p *= T[i];
        }
        return p;
}
int moyenne(int T[], int n) {
        int s = 0;
        for (i = 0; i < n; i++) {
                s += T[i];
        }
        return s / n;
}
void min(int T[], int n) {
        int min = T[0];
        for (i = 0; i < n; i++) {
                if (T[i] < min) min = T[i];
        }
        printf("min = %d\n", min);
}
void max(int T[], int n) {
        int max = T[0];
        for (i = 0; i < n; i++) {
                if (T[i] > max) max = T[i];
        }
        printf("max = %d\n", max);
}
void inverse(int T[], int n) {
        int inv[n];
        for (i = 0; i < n; i++) {
                inv[i] = T[n - i - 1];
        }
        for (i = 0; i < n; i++) {
                printf("%d ", inv[i]);
        }
}
void fill(int T[],int n) {
        for (i = 0; i < n; i++) {
                printf("T[%d] = ", i);
                scanf("%d", &T[i]);
        }
}
void selectionSortDCroi(int T[], int n) {
        int indexmin, j, tmp;
        for (i = 0; i < n; i++) {
                indexmin = i;
                for (j = i + 1; j < n; j++) {
                        if (T[indexmin] < T[j]) indexmin = j;
                }
                tmp = T[indexmin];
                T[indexmin] = T[i];
                T[i] = tmp;
        }
        // print The table
        printf("Decoissant --> Made By Selection Sort :  ");
        show(T, n);
        printf("\n");
}
void selectionSortCroi(int T[], int n) {
        int indexmin, j, tmp;
        for (i = 0; i < n; i++) {
                indexmin = i;
                for (j = i + 1; j < n; j++) {
                        if (T[indexmin] > T[j]) indexmin = j;
                }
                tmp = T[indexmin];
                T[indexmin] = T[i];
                T[i] = tmp;
        }
        // print The table
        printf("croissant --> Made By Selection Sort :  ");
        show(T, n);
}
int show(int T[], int n) {
        for (i = 0; i < n; i++) {
                printf("%d  ", T[i]);
        }
}
int main () {
        int n;
        printf("Enter The Size Of The Table : ");
        scanf("%d", &n);
        int T[n];
        fill(T, n);
        selectionSortDCroi(&T, n);
        selectionSortCroi(&T, n);
        printf("\nThe Sum Of The Table Is : %d\n", somme(T, n));
        printf("The Produit Of The Table Is : %d\n", produit(T, n));
        printf("The Moyenne Of The Table Is : %d\n", moyenne(T, n));
        min(T, n);
        max(T, n);
        inverse(T, n);
        return 0;
}
*/
/*
int main() {
        double R;
        scanf("%lf", &R);
        double A = pow(R, 2) * 3.14159;
        printf("A=%.4lf\n", A);
        return 0;
}
*/

/*
int main () {
        int A, B;
        float C;
        scanf("%d", &A);
        scanf("%d", &B);
        scanf("%f", &C);
        float SALARY = (C * B);
        printf("NUMBER = %d\n", A);
        printf("SALARY = %.2f\n", SALARY);
        return 0;
}
*/

/*
int main() {
        char name[100];
        double salary, selles;
        gets(name);
        scanf("%lf", &salary);
        scanf("%lf", &selles);
        double TOTAL = salary + ((selles * 15) / 100);
        printf("TOTAL = R$ %.2lf\n", TOTAL);
        return 0;
}
*/

/*
int main() {
        int a = 10;
        int *p;
        p = malloc(sizeof(int));
        return 0;
}
*/
/*
int main()  {
        int T[2];
        T[0] = 10;
        T[1] = 20;
        for (int i = 0; i < 2; i++) {
                printf("%d  ", T[i]);
        }
        return 0;
}
*/
/*
int main() {
        int *p = malloc(2 * sizeof(int));
        *(p + 0) = 10;
        *(p + 1) = 20;
        for (i = 0; i < 2; i++) {
                printf("%d ", *(p + i));
        }
        return 0;
}
*/

/*
int main() {
    char input[100];  // Assuming a maximum length of 100 characters

    printf("Enter a string: ");
    scanf("%[^\n]s", input);

    printf("You entered: %s\n", input);

    return 0;
}
*/

/*
int main () {
        int code1, nbrProduct1, code2, nbrProduct2;
        float price1, price2;
        scanf("%d %d %f", &code1, &nbrProduct1, &price1);
        scanf("%d %d %f", &code2, &nbrProduct2, &price2);
        float result = (nbrProduct1 * price1) + (nbrProduct2 * price2);
        printf("VALOR A PAGAR: R$ %.2f", result);
        return 0;
}
*/

/*
int main() {
    int R;
    scanf("%d", &R);
    double result = (4.0/3) * 3.14159 * pow(R,3);
    printf("VOLUME = %.3lf\n", result);
    return 0;
}
*/

/*
int main () {
        double A, B, C;
        scanf("%lf %lf %lf", &A, &B, &C);
        printf("TRIANGULO = %.3lf\n", (0.5 * A * C));
        printf("CIRCULO = %.3lf\n", (3.14159 * C * C));
        printf("TRAPEZIO = %.3lf\n", (0.5 * (A + B) * C));
        printf("QUADRADO = %.3lf\n", (pow(B,2)));
        printf("RETANGULO = %.3lf\n", (A * B));

    return 0;
}
*/

/*
int main () {
        int A, B, C;
        scanf("%d %d %d", &A, &B, &C);
        printf("%d eh o maior\n", ((A + C + abs(A - C)) / 2));

    return 0;
}
*/
#include <stdlib.h>
/*
int main () {
        int *p1, *p2, *p3;
        p1 = malloc(100);
        printf("Allocation of 100 octets in %p\n", p1);
        p2 = malloc(50);
        printf("Allocation of 50 octetc in %p\n", p2);
        free(p1);
        printf("Libree the space of 100 octetc in %p\n", p1);
        p3 = malloc(30);
        printf("allocation of 30 octetc in %p", p3);
        return 0;
}
*/

/*
int main () {
        int *p1, *p2;
        p1 = malloc(4 * sizeof(int));
        for (i = 0; i < 4; i++) {
                printf("%d  ", *(p1 + i));
        }
        printf("\n");
        p2 = calloc(4, sizeof(int));
        for ( i = 0; i < 4; i++) {
                printf("%d  ", *(p2 + i));
        }
        return 0;
}
*/

/*
int main() {
    float x1, x2, y1, y2;
    scanf("%f %f", &x1, &y1);
    scanf("%f %f", &x2, &y2);
    printf("%.4f\n", (sqrt(pow((x2 - x1), 2) + pow((y2 - y1), 2))));
    return 0;
}
*/

/*
int main() {
    int hours, distance;
    scanf("%d", &hours);
    scanf("%d", &distance);
    printf("%.3f\n", ((hours * distance) / 12.0));
    return 0;
}
*/

/*
int main () {
        int N; // 4 octes
        do {
            scanf("%d", &N);
        } while(N < 0 || N >= 1000000);
        int count100 = 0, count50 = 0,
        count10 = 0, count20 = 0, count5 = 0,
        count2 = 0, count1 = 0; // 7 * 4 = 28 octets
        printf("%d\n", N);
        for (i = 1; i < N + 1; i++) {
                if (i % 100 == 0) count100++;
        }
        printf("%d nota(s) de R$ 100,00\n", count100);
        N = N - count100 * 100;
        for (i = 1; i < N + 1; i++) {
                if (i % 50 == 0) count50++;
        }
        printf("%d nota(s) de R$ 50,00\n", count50);
        N = N - count50 * 50;
        for (i = 1; i < N + 1; i++) {
                if (i % 20 == 0) count20++;
        }
        printf("%d nota(s) de R$ 20,00\n", count20);
        N = N - count20 * 20;
        for (i = 1; i < N + 1; i++) {
                if (i % 10 == 0) count10++;
        }
        printf("%d nota(s) de R$ 10,00\n", count10);
        N = N - count10 * 10;
        for (i = 1; i < N + 1; i++) {
                if (i % 5 == 0) count5++;
        }
        printf("%d nota(s) de R$ 5,00\n", count5);
        N = N - count5 * 5;
        for (i = 1; i < N + 1; i++) {
                if (i % 2 == 0) count2++;
        }
        printf("%d nota(s) de R$ 2,00\n", count2);
        N = N - count2 * 2;
        for (i = 1; i < N + 1; i++) {
                if (i % 1 == 0) count1++;
        }
        printf("%d nota(s) de R$ 1,00\n", count1);
        return 0;
}
*/
// Linear Complexity
// 28 octets + 4 octets = 32 octets

/*
int main () {
        int N;
        scanf("%d", &N);
        int seconds, minutes, hours;
        hours = N / 3600;
        minutes = (N % 3600) / 60;
        seconds = (N % 36001) % 60;// N - ((hours * 3600) + (minutes * 60))
        printf("%d:%d:%d\n", hours, minutes, seconds);
}
*/

/*
int main() {
        int *y = malloc(3 * 2);
        if (y == NULL) {
                printf("Pas d'espace");
                exit(0);
        } else {
                printf("Treatement ...");
                free(y);
        }
        return 0;
}
*/

/*
int main() {
        int n;
        printf("Enter The Taille Of The Table : ");
        scanf("%d", &n);
        int *p = malloc(sizeof(int) * n);
        if (p == NULL) {
                printf("pas D'espace Reserve");
                exit(0);
        } else {
                int s = 0;
                for (i = 0; i < n; i++) {
                        printf("T[%d] = ", i);
                        scanf("%d", (p + i));
                }
                for (i = 0; i < n; i++) s += *(p + i);
                printf("The Moyeene Is %d", (s / n));
                free(p);
                exit(0);
        }
        return 0;
}
*/
/*
int main(){
        int months, days, years, n;
        scanf("%d", &n);
        years = n / 365;
        months = (n % 365) / 30;
        days = (n % 365) % 30;
        printf("%d ano(s)\n", years);
        printf("%d mes(es)\n", months);
        printf("%d dia(s)\n", days);
        return 0;
}
*/

/*
int main () {
        int integer;
        double N, rest;
        int count100, count50, count20, count10, count5, count2;
        scanf("%lf", &N);
        integer = N;
        rest = N - integer;
        count100 = integer / 100;
        integer = integer % 100;
        count50 = integer / 50;
        integer = integer % 50;
        count20 = integer / 20;
        integer = integer % 20;
        count10  = integer / 10;
        integer = integer % 10;
        count5 = integer / 5;
        integer = integer % 5;
        count2 = integer / 2;
        printf("NOTAS:\n");
        printf("%d nota(s) de R$ 100.00\n", count100);
        printf("%d nota(s) de R$ 50.00\n", count50);
        printf("%d nota(s) de R$ 20.00\n", count20);
        printf("%d nota(s) de R$ 10.00\n", count10);
        printf("%d nota(s) de R$ 5.00\n", count5);
        printf("%d nota(s) de R$ 2.00\n", count2);
        ////////////////////////////
        // start Coins
        int coins1, coins050, coins025, coins010, coins005, coins001;
        coins1 = integer % 2;
        coins050 = rest / 0.50;
        rest = rest - coins050 * 0.50;
        coins025 = rest / 0.25;
        rest = rest - coins025 * 0.25;
        coins010 = rest / 0.10;
        rest = rest - coins010 * 0.10;
        coins005 = rest / 0.05;
        rest = rest - coins005 * 0.05;
        coins001 = rest / 0.01;
        printf("MOEDAS:\n");
        printf("%d moeda(s) de R$ 1.00\n", coins1);
        printf("%d moeda(s) de R$ 0.50\n", coins050);
        printf("%d moeda(s) de R$ 0.25\n", coins025);
        printf("%d moeda(s) de R$ 0.10\n", coins010);
        printf("%d moeda(s) de R$ 0.05\n", coins005);
        printf("%d moeda(s) de R$ 0.01\n", coins001);
        return 0;
}
*/

/*
int main() {
        int N, N1, N2, D1, D2, count = 0, i, j;
        char operation, backslach1, backslach2;
        scanf("%d", &N);
        int *p = calloc(N * 2, sizeof(int));
        for (i = 0; i < N; i++) {
                scanf("%d %c %d %c %d %c %d", &N1, &backslach1, &D1,
                &operation, &N2, &backslach2, &D2);
                if (operation == '+') {
                        *(p + count) = (N1*D2 + N2*D1);
                        count = count + 1;
                        *(p + count) = (D1*D2);
                } else if (operation == '-') {
                        *(p + count) = (N1*D2 - N2*D1);
                        count = count + 1;
                        *(p + count) = (D1*D2);
                } else if (operation == '*')  {
                        *(p + count) = (N1*N2);
                        count = count + 1;
                        *(p + count) = (D1*D2);
                } else {
                        *(p + count) = (N1*D2);
                        count = count + 1;
                        *(p + count) = (N2*D1);
                }
                count = count + 1;
        }
        count = 0;
        for (i = 0; i < N; i++) {
                int min;
                bool check1 = true, check2 = true;
                printf("%d/%d = ", *(p + count), *(p + count + 1));
                if (*(p + count) < 0) {
                        *(p + count) *= -1;
                        check1 = false;
                }
                if (*(p + count + 1) < 0) {
                        *(p + count + 1) *= -1;
                        check2 = false;
                }
                if (*(p + count) < *(p + count + 1)) min = *(p + count);
                else min = *(p + count + 1);
                for (j = 1; j <= min; j++) {
                        if ((*(p + count) % j == 0) && (*(p + count + 1) % j == 0)) {
                                *(p + count) = *(p + count) / j;
                                *(p + count + 1) = *(p + count + 1) / j;
                                j = 1;
                        }
                }
                if (!check1) {
                        *(p + count) *= -1;
                }
                if (!check2) {
                        *(p + count + 1) *= -1;
                }
                printf("%d/%d\n", *(p + count), *(p + count + 1));
                count += 2;
        }
        free(p);
        return 0;
}
*/

/*
int main () {
        float *ProdctPrice = calloc(1, sizeof(float));
        float *sellesPrice = malloc(sizeof(float));
        printf("How Much The Product : ");
        scanf("%f", ProdctPrice);
        printf("How Much Do You Bought This Product : ");
        scanf("%f", sellesPrice);
        if (*sellesPrice - *ProdctPrice < 0) {
                printf("Perd = %.2f", *sellesPrice - *ProdctPrice);
        } else if (*sellesPrice - *ProdctPrice > 0) {
                printf("Profit = %.2f", *sellesPrice - *ProdctPrice);
        } else {
                printf("No Profit No Perdu");
        }
        free(ProdctPrice);
        free(sellesPrice);
        return 0;
}
*/

/*
int main () {
        int *n = malloc(4);
        int *s = calloc(1, 4);
        printf("ENter A N : ");
        scanf("%d", &n);
        for (i = 1; i <= n; i+=2) {
                *s += i;
        }
        printf("The Sum Of Odd Number : %d", *s);

}
*/

/*
int getMin(int X, int Y) {
        int min;
        if (X < Y) min = X;
        else min = Y;
}
int main() {
        int X, Y;
        scanf("%d %d", &X, &Y);
        printf("%d/%d", X, Y);
        // bool check = true;
        for (int i = 1; i <= getMin(X, Y); i++) { // i = 2
                if (X % i == 0 && Y % i == 0) {
                        X = X / i;
                        Y = Y / i;
                        i = 1; // But When I Finich The Instaruction If Variable [i] increment
                        printf(" = %d/%d", X, Y);
                        // check = false;
                } // else check = true;
        }
        return 0;
}
*/
/*
int change(int X, int Y) {
        int tmp;
        tmp = X;
        X = Y;
        Y = tmp;
}
*/

/*
int main() {
        int total_consuption = 0, total_people = 0;
        float total_towns;
        int N, X, Y, i, j, indexMin, tmp;
        scanf("%d", &N);
        int *p = calloc(N, 4);
        int *q = calloc(N, 4);
        for (i = 0; i < N; i++) {
                scanf("%d %d", &X, &Y);
                total_consuption += Y;
                total_people += X;
                *(p + i) = X;
                *(q + i) = Y / X;
        }
        total_towns = (float) total_consuption / total_people;
        // Sorting The table With Selection Sort
        printf("Cidade# 1:\n");
        for (i = 0; i < N; i++) {
                indexMin = i;
                for (j = i + 1; j < N; j++) {
                        if (*(q + j) < *(q + indexMin)) indexMin = j;
                }
                if (*(q + i) != *(q + indexMin)) {
                        tmp = *(q + i);
                        *(q + i) = *(q + indexMin);
                        *(q + indexMin) = tmp;
                        tmp = *(p + i);
                        *(p + i) = *(p + indexMin);
                        *(p + indexMin) = tmp;
                }
        }
        for (i = 0; i < N - 1; i++) {
                if (*(q + i) == *(q + i + 1)) {
                        if (*(p + i) > *(p + i + 1)) {
                             tmp = *(p + i);
                             *(p + i) = *(p + i + 1);
                             *(p + i + 1) = tmp;
                        }
                }
        }
        // Print The Result
        for (i = 0; i < N; i++) {
                printf("%d-%d ", *(p + i), *(q + i));
        }
        printf("\nConsumo medio: %.2f m3.", total_towns);
        return 0;
}
*/

/*
void get_moyenne(int *p, int *n, int *add, float *s) {
        int i;
        for (i = 0; i < *add; i++) {
                printf("T[%d] = ", (*n - *add + i));
                scanf("%d", (p + (*n - *add + i)));
                *s += *(p + (*n - *add + i));
        }
        printf("The Moyenne Is %.2f\n", (float)(*s / *n));
}

int main () {
        int *n = calloc(1, sizeof(int));
        int *p, *add = (void *) calloc(1, sizeof(int));
        char *operation = calloc(1, sizeof(char));
        bool *check = calloc(1, sizeof(bool));
        printf("Enter The Taille Of The Table : ");
        scanf("%d", n);
        p = calloc(*n, sizeof(int));
        *check = true;
        *add = *n;
        float *s = calloc(1, sizeof(float));
        *s = 0;
        get_moyenne(p, n, add, s);
        while (*check == true) {
                printf("Are You Want To Enter Another Element [Y/N]: ");
                scanf(" %c", operation);
                if (*operation == 'N') {
                        *check = false;
                } else {
                        printf("Enter Number Of Element For Decreasing or Increasing : ");
                        scanf("%d", add);
                        for (i = 0; i < *n; i++) {
                                printf("T[%d] = %d\n", i, *(p + i));
                        }
                        *n = *n + *add;
                        p = realloc(p, *n * sizeof(int));
                        get_moyenne(p, n, add, s);
                }
        }
        free(p);
        free(n);
        free(check);
        free(operation);
        free(add);
        return 0;
}
*/

/*
void *TD(int *p, int N) {
        int *indexMin = calloc(1, sizeof(int));
        int i, *tmp = (int *) calloc(1, sizeof(int)), j;
        // Sorting With Bubble Sort
        for (int i = 0; i < N; i++) {
                for (j = 0; j < N - i; j++) {
                        if (*(p + j + 1) > *(p + j)) {
                                tmp = *(p + j + 1);
                                *(p + j + 1) = *(p + j);
                                *(p + j) = tmp;
                        }
                }
        }
}
void *TC(int *p, int N) {
        int *indexMin = calloc(1, sizeof(int));
        int i, *tmp = (int *) calloc(1, sizeof(int)), j;
        // Sorting With Bubble Sort
        for (i = 0; i < N; i++) {
                for (j = 0; j < N - i - 1; j++) {
                        if (*(p + j + 1) < *(p + j)) {
                                tmp = *(p + j + 1);
                                *(p + j + 1) = *(p + j);
                                *(p + j) = tmp;
                        }
                }
        }
}
int main() {
        int i, N;
        printf("Enter Taille Of The Table : ");
        scanf("%d", &N);
        int *p = calloc(N, sizeof(int));
        for (i = 0; i < N; i++) {
                printf("T[%d] = ", i);
                scanf("%d", (p + i));
        }
        for (i = 0; i < N; i++) {
                printf("%d ", *(p + i));
        }
        printf("\n");
        TD(p, N);
        for (i = 0; i < N; i++) {
                printf("%d ", *(p + i));
        }
        printf("\n");
        TC(p, N);
        for (i = 0; i < N; i++) {
                printf("%d ", *(p + i));
        }
        return 0;
}
*/

/*
int main() {
        int T[] = {1, 2, 3, 4};
        printf("Taille Of This Table Is %d", (sizeof(T) / sizeof(T[0])));
        printf("\nSizeof Of table Is %d", sizeof(T));
        printf("\nSizeof Of First Element In The Table Is %d", sizeof(T[0]));
        return 0;
}
*/

/*
int main() {
        // Get The Moyenne
        // int T[3][5][2];
        int *p = calloc(30, sizeof(int)), *s = calloc(1, sizeof(int)), count = 0;
        for (int i = 0; i < 1; i++) {
                printf("-- Classroom Number %d --\n", i + 1);
                *s = 0;
                for (int j = 0; j < 5; j++) {
                        printf("---- Student Number %d : \n", j + 1);
                        for (int k = 0; k < 2; k++) {
                                printf("Examen Number %d : \n", k + 1);
                                // scanf("%d", &T[i][j][k]);
                                // With Pointers And Memory Allocation
                                printf("T[%d][%d][%d] = ", i, j, k);
                                scanf("%d", (p + count));
                                *s += *(p + count);
                                count++;
                        }
                }
                printf("Moyenne Of Classroom : %d\n", *s / 10);
        }
        // Get The max Notes For Each Classroom
        printf("\n\n");
        int *max = malloc(sizeof(int)), moyenne, NumStud;
        count = 0;
        for (int i = 0; i < 1; i++) {
                *max = *(p + count);
                for (int j = 0; j < 5; j++) {
                        moyenne = 0;
                        for (int k = 0; k < 2; k++) {
                                moyenne += *(p + count);
                                count++;
                        }
                        moyenne /= 2;
                        if (*max < moyenne) {
                                *max = moyenne;
                                NumStud = j + 1;
                        }
                }
                printf("Max In Classroom %d Is %d\n And Number Os Student Is %d", i + 1, *(max), NumStud);
        }
        return 0;
}
*/

/*
int main() {
        int Matrix[4][5] = {
                {1, 6, 10, 4, 7},
                {11, 4, 2, 1, 9},
                {3, 12, 7, 3, 5}
        };
        int *p = calloc(15, sizeof(int)), count = 0, length, tmp;
        printf("The Original Matrix Is : \n");
        for (int i = 0; i < 3; i++) {
                for (int j = 0; j < 5; j++) {
                        *(p + count) = Matrix[i][j];
                        printf("%d     ", *(p + count));
                        count++;
                }
                printf("\n");
        }
        length = count - 1;
        count = 0;
        printf("\nAfter Inversing : \n");
        for (int i = 0; i < 1; i++) {
                for (int j = 0; j < 5; j++) {
                        tmp = *(p + count); // count = 6
                        *(p + count) = *(p + length - count);
                        *(p + length - count) = tmp;
                        count++;
                }
        }
        count = 0;
        for (int i = 0; i < 3; i++) {
                for (int j = 0; j < 5; j++) {
                        printf("%d     ", *(p + count));
                        count++;
                }
                printf("\n");
        }
        return 0;
}
*/

/*
void Heap(int T[], int n, int i) {
        int max, g, d, tmp;
        max = i;
        g = 2 * i + 1;
        d = 2 * i + 2;
        if (g < n && T[g] > T[max]) max = g;
        if (d < n && T[d] > T[max]) max = d;
        if (max != i) {
                tmp = T[max];
                T[max] = T[i];
                T[i] = tmp;
                Heap(T, n, max);
        }
}
int main() {
        int T[10] = {11, 3, 5, 3, 3, 3, 5, 5, 5, 11};
        int n = 10, tmp;
        for (int i = (n / 2) - 1; i >= 0; i--) {
                Heap(T, n, i);
        }
        for (int i = n - 1; i >= 0; i--) {
                tmp = T[0];
                T[0] = T[i];
                T[i] = tmp;
                Heap(T, i, 0);
        }
        // Find The Dublicates
        bool check;
        int a = 0, s = 0;
        for (int i = 1; i < 11; i++) {
                if (T[i] == T[a]) {
                        s += T[i];
                        T[i] = -1;

                } else {
                        T[a] = s + T[a];
                        s = 0;
                        a = i;

                }
        }

}
*/

/*

/*
void *Heap(int *p, int *q, int n, int i) {
        int max, g, d, tmp;
        max = i;
        g = 2 * i + 1;
        d = 2 * i + 2;
        if (g < n && *(q + g) > *(q + max)) max = g;
        if (d < n && *(q + d) > *(q + max)) max = d;
        if (max != i) {
                tmp = *(q + i);
                *(q + i) = *(q + max);
                *(q + max) = tmp;
                Heap(p, q, n, max);
        }
}
void *Heapsort(int *p, int *q, int start, int end) {
        int j, tmp;
        j = (end / 2) - 1;
        for (int i = j; i >= start; i--) {
                Heap(p, q, end, i); // i
        }
        for (int i = end - 1; i >= start; i--) {
                tmp = *(q + start);
                *(q + start) = *(q + i);
                *(q + i) = tmp;
                Heap(p, q, i, start);
        }
}

int main() {
        int T[5] = {1, -2, 3, 45, 3};
        int *p = calloc(5, sizeof(int));
        int *q = calloc(5, sizeof(int));
        for (int i = 0; i < 5;i++) {
                *(p + i) = T[i];
                *(q + i) = T[i];
        }
        Heapsort(p, q, 0, 5);
        for (int i = 0; i < 5; i++) printf("%d ", *(q + i));
}
*/

/*
int main() {
        int *p = calloc(15, sizeof(int));
        int Number_of_zero = 0, Number_of_ele = 0;
        for (int i= 0; i < 5; i++) {
                for (int j = 0; j < 3; j++) {
                        printf("T[%d][%d] = ", i, j);
                        scanf("%d", (p + i + j));
                        if (*(p + i + j) == 0) Number_of_zero += 1;
                        else Number_of_ele += 1;
                }
        }
        if (Number_of_ele < Number_of_zero) printf("This Is Creause Matrix");
        else printf("This Is Not Creause matrix");
        return 0;
}
*/

/*
// Find The Dupilcates
int main () {
        int taille = 10;
        int T[10] = {1, 2, 3, 4, 4, 5, 6, 7, 7, 8};
        int a = 0, s = 0;
        for (int i = 1; i < taille; i++) {
                if (T[i] == T[a]) {
                        s += T[i];
                        T[i] = -1;
                } else {
                        T[a] += s;
                        a = i;
                        s = 0;
                }
        }
        for (int i = 0; i < taille; i++) printf("%d  ", T[i]);
}
*/

/* Drought Problem --> 8 Days
void *Heap(int *C, int *T, int taille, int i) {
        int maxIdx, g, d, tmp;
        maxIdx = i;
        g = 2 * i + 1;
        d = 2 * i + 2;
        if (g < taille && *(T + g) > *(T + maxIdx)) maxIdx = g;
        if (d < taille && *(T + d) > *(T + maxIdx)) maxIdx = d;
        if (maxIdx != i) {
                tmp = *(T + maxIdx);
                *(T + maxIdx) = *(T + i);
                *(T + i) = tmp;
                tmp = *(C + maxIdx);
                *(C + maxIdx) = *(C + i);
                *(C + i) = tmp;
                Heap(C, T, taille, maxIdx);
        }
}


void *HeapSort(int *C, int *T, int taille) {
        int tmp, a = 0, s = 0;
        for (int i = (taille / 2) - 1; i >= 0; i--) {
                Heap(C, T, taille, i);
        }
        for (int i = taille - 1; i > 0; i--) {
                tmp = *(T + 0);
                *(T + 0) = *(T + i);
                *(T + i) = tmp;
                tmp = *(C + 0);
                *(C + 0) = *(C + i);
                *(C + i) = tmp;
                Heap(C, T, i, 0);
        }
        // Find The Duplicates
        for (int i = 1; i < taille; i++) {
                check = false;
                if (*(T + a) == *(T + i)) {
                        s += *(C + i);
                        *(C + i) = -1;
                        *(T + i) = -1;
                        check = true;
                } else {
                        *(C + a) += s;
                        a = i;
                        s = 0;
                }
                if (i == taille - 1) *(C + a) += s;
        }
}

int main() {
        int N, X, Y, j;
        int count = 0; // Number Of Test Cases
        int length = 0; // For Length Of The Table
        float *total_consumption = calloc(1, sizeof(float)), people_consumption,  Number_of_people;
        int *index = calloc(1, sizeof(int));
        int *p = calloc(1, sizeof(int)); // For The Number Of The People
        int *q = calloc(1, sizeof(int)); // For The Consumption
        while (1) {
                scanf("%d", &N);
                if (N == 0) break;
                else {
                        // For The Consumprion Total And Display
                        total_consumption = realloc(total_consumption, (count + 1) * sizeof(float));
                        index = realloc(index, (count + 1) * sizeof(int));
                        Number_of_people = 0;
                        people_consumption = 0;
                        // Begin To Fill The Data
                        p = realloc(p, sizeof(int) * (N + length));
                        q = realloc(q, sizeof(int) * (N + length));
                        for (int i = 0; i < N; i++) {
                                scanf("%d %d", &X, &Y);
                                *(p + length) = X;
                                *(q + length) = Y / X;
                                length++;
                                Number_of_people += X;
                                people_consumption += Y;
                        }
                        // start is length - N // end is length --> For Each Test Case
                        int *T = calloc(N, sizeof(int));
                        int *C = calloc(N, sizeof(int));
                        j = 0;
                        // Convert To Table
                        for (int i = length - N; i < length; i++) {
                                *(T + j) = *(q + i);
                                *(C + j) = *(p + i);
                                j++;
                        }
                        HeapSort(C, T, j); // j in lenght of the table
                        j = 0;
                        // Convert To Pointers After Sorting
                        for (int i = length - N; i < length; i++) {
                                *(q + i) = *(T + j);
                                *(p + i) = *(C + j);
                                j++;
                        }
                        printf("\n");
                        *(index + count) = length;
                        *(total_consumption + count) = floor((people_consumption / Number_of_people) * 100) / 100;
                        count++;
                        free(T);
                        free(C);
                }
        }
        j = 0;
        int x = 0; // Just For Check If Last Line Print For First Line Print
        for (int i = 0; i < length; i++) {
                if (x == 0) {
                        printf("Cidade# %d:\n", j + 1);
                        x = 0;
                }
                if (*(p + i) != -1 && *(q + i) != -1) {
                        if (i + 1 != *(index + j)) printf("%d-%d ", *(p + i), *(q + i));
                        else printf("%d-%d", *(p + i), *(q + i));
                        x++;
                }
                if (*(index + j) == i + 1) {
                        x = 0;
                        printf("\nConsumo medio: %.2f m3.", *(total_consumption + j));
                        if (i != length - 1) printf("\n\n");
                        j++;
                }

        }
        return 0;
}
*/

/*

int main() {
        int c = 0;
        for (int i = 0; i < 10; i++) scanf("%c", (text1 + i));
        for (int i = 0; i < 10; i++) {
                c = getchar();
                *(text1 + i) = c;
        }
        gets(text1);
        char *text1 = calloc(1, sizeof(char));
        for (int i = 0; i < 10; i++) printf("%c", *(text1 + i));
        text1[11] = '\0'; // Null-terminate the string
        *(text1 + 11) = '\0';
        int c;
        printf("\n");
        while ((c = getchar()) != '\n' && c != EOF) { printf("1"); };
        puts(text1);
}

// To address this, it's essential to clear the input buffer after using scanf
// to prevent newline characters from affecting subsequent input/output operations.
// Here's an explanation of the modified code:

*/

/*
int main() {
        char c;
        char *text1 = calloc(1, sizeof(char));
        scanf(" %s", text1);
        // gets(text1);
        c = getchar();
        printf("%s", text1);
        // puts(text1);
        putchar(c);
}
*/

/* Problem
int main() {
        char text[1];
        gets(text);
        puts(text);
}
*/

/*
int main() {
        char *text[4];
        char phrase[100];
        for (int i = 0; i < 4; i++) {
                gets(phrase);
                text[i] = malloc(strlen(phrase));
                strcpy(text[i], phrase);
        }
        // Print The Result
        printf("---------\n");
        for (int i = 3; i >= 0; i--) {
                printf("%s\n", text[i]);
                // puts(text[i]);
        }
        // Problem
        //char *text1[4];
        //scanf("%s", text1[1]);
        //printf("%s", (text1[1]));
        return 0;

}
*/

// Start Fill The Data
// Each Line Call The Three Functiuon

// Take Three Function
// --> First For Three Right Position
// --> Second For Reverse The String
// --> Thirth For One Left Posotion

/* Encrayption
void *RightPosition(char phrase[], int n) {
        // n : is lenght of The Table
        int max, inf, middle, ele;
        for (int i = 0; i < n; i++) {
                inf = 65;
                max = 126;
                ele = (int) phrase[i];
                while (inf <= max) {
                        middle = (max + inf) / 2;
                        if (middle == ele) {phrase[i] = (char) middle + 3; break;}
                        else if (middle < ele) inf = middle + 1;
                        else max = middle - 1;
                }
        }
}


void *Reverse(char phrase[], int n) {
        char tmp;
        for (int i = 0; i < n / 2; i++) {
               tmp = phrase[i];
               phrase[i] = phrase[n - i - 1];
               phrase[n - i - 1] = tmp;
        }
}


void *LeftPosition(char phrase[], int n) {
        int max, inf, middle, ele;
        for (int i = n - 1; i >= n / 2; i--) {
                max = 126;
                inf = 1;
                ele = (int) phrase[i];
                while (inf <= max) {
                        middle = (max + inf) / 2;
                        if (middle == ele) {phrase[i] = (char) middle - 1; break;}
                        else if (middle < ele) inf = middle + 1;
                        else max = middle - 1;
                }
        }
}


int main() {
        int N, i, j = 0, k;
        char c, phrase[1002];
        c = 'a';
        scanf("%d", &N); // Will Be Return "\n"
        getchar();
        char *lines[N];
        for (i = 0; i < N; i++) {
                // Start Filling The Data
                // gets(phrase);
                for (k = 0; k < j; k++) phrase[k] = '\0';
                for (j = 0; c != '\n' || j == 0; j++) {
                        c = getchar();
                        if (c != '\n') phrase[j] = c;
                }
                j = j - 1;
                lines[i] = calloc(j + 3, 1);
                // Start A Right Position
                RightPosition(phrase, j);
                // Start Reverse Each String
                Reverse(phrase, j);
                // Start A Left Position
                LeftPosition(phrase, j);
                for (k = 0; k < j; k++) {
                        *(lines[i] + k) = phrase[k];
                }
        }
        // Print The Result
        for (int i = 0; i < N; i++) {
                printf("%s\n", lines[i]);
        }
}
*/

/*
int main() {
        char *names[4], nom[100];
        float N1[4], N2[4], M[4];
        printf("Enter The Names : \n");
        for (int i = 0; i < 4; i++) {
                gets(nom);
                names[i] = malloc(strlen(nom));
                strcpy(names[i], nom);
        }
        for (int i = 0; i < 4; i++) {
                printf("Enter The First Note Of %s : \n", names[i]);
                scanf("%f", &N1[i]);
                printf("Enter The Second Note Of %s : \n", names[i]);
                scanf("%f", &N2[i]);
                M[i] = (N1[i] + N2[i]) / 2;
                printf("The Moyenne Of %s Is %.2f\n", names[i], M[i]);
        }
        return 0;
}
*/

/*
int Fibonacci(int n) {
        if (n == 0) return 0;
        else if (n == 1) return 1;
        else return Fibonacci(n - 2) + Fibonacci(n - 1);
}
int main() {
        int n;
        printf("Enter A Number : ");
        scanf("%d", &n);
        printf("The terms Is n = %d\n", n);
        for (int i = 0; i < n; i++) {
                printf("%d ", Fibonacci(i));
        }

        return 0;
}
*/

/*
int x = 7; // Global Variable
int f(int); // Declaring A Function Named f Take A Integer and Return A Integer
int g(int);
int main( ) {
        printf("x = %d\t", x); {
        int x = 6; // Local Variable
        printf("x = %d\t", x);
        }
        printf("x = %d\n", x);
        // Start With Functions
        printf("%d, %d", x, f(x));
}

int f(int a) {
        int x = 10;
        return a + x;
}
*/

/*
int somme(int n) {
        if (n == 0) return 0;
        else return somme(n - 1) + n;
}
int main() {
        int n;
        scanf("%d", &n);
        somme(n);
        printf("The Sum In %d Is %d", n, somme(n));
        return 0;
}
*/
/*
int p(int x, int n) {
        if (n == 1) return x;
        else {
                n = n - 1;
                return p(x, n) * x
        }
}
*/

/*
int p(int x, int n) {
        if (n == 0) return 1;
        else return p(x, n - 1) * x;
}

int main() {
        int X, N;
        printf("Puissance Will Be Like  X^N\n");
        printf("Enter X : ");
        scanf("%d", &X);
        printf("Enter N : ");
        scanf("%d", &N);
        printf("%d", p(X, N));
        return 0;
}
*/

/*
int combinasion(int n, int p) {
        if (n == p) return 1;
        else if (p == 1) return n;
        else return combinasion(n - 1, p - 1) + combinasion(n - 1, p);
}
int main() {
        int n, p;
        printf("enter n : ");
        scanf("%d", &n);
        printf("enter p : ");
        scanf("%d", &p);
        if (n < p) printf("Error");
        else printf("The Result Is : %d", combinasion(n, p));
        return 0;
}
*/

/*
int pgcd(int a, int b) {
        if (b == 0) return a;
        else return pgcd(b, a % b);
}
int main() {
        int a, b;
        printf("enter a : ");
        scanf("%d", &a);
        printf("enter b : ");
        scanf("%d", &b);
        printf("The Result Is : %d", pgcd(a, b));
        return 0;
}
*/

/*
int decrease(int n) {
      if (n == 0);
      else {
        printf("%d  ", n);
        decrease(n - 1);
      }
}

int increase(int n) {
        if (n == 0);
        else {
                increase(n - 1);
                printf("%d  ", n);
        }
}

int main() {
        int n;
        printf("enter n : ");
        scanf("%d", &n);
        if (n <= 0) printf("Error");
        else {
                printf("The Decrease Number Will Be : ");
                decrease(n);
                printf("\nThe Increase Number Will Be : ");
                increase(n);
        }
        return 0;
}

*/

/*
int convert_to_Binary(int n) {
        if (n == 0);
        else {
                convert_to_Binary(n / 2);
                printf("%d", n % 2);
        }
}
int main() {
        int n;
        printf("enter n : ");
        scanf("%d", &n);
        if (n < 0) n *= -1;
        convert_to_Binary(n);
        return 0;
}
*/

/*
int Show_Table(int T[5], int n) {
        if (n == 0);
        else {
                Show_Table(T, n - 1);
                printf("%d  ", T[n - 1]);
        }
}
#define n 5
int main() {
        int T[5] = {1, 2, 3, 4, 5};
        Show_Table(T, n);
        return 0;
}
*/

/*
int SumArray(int T[5], int n) {
        if (n == 0);
        else return SumArray(T, n - 1) + T[n -1];
}

int main() {
        int n = 6;
        int T[n] = {1, 2, 3, 4, 5, 100};
        printf("The Sum Is %d", SumArray(T, n));
        return 0;
}
*/

/*
int fun(int X, int Y) {
        if (X == 0) return Y;
        else return fun(X - 1, Y + X);
}

int main() {
     printf("%d", fun(4, 3));
     return 0;
}
*/

/*
int x = 0;
int func(int N) {
        x++;
        if (N >= 1) {
                func(N - 1);
                func(N - 3);
        }
}
int main() {
        int N = 5;
        printf("Func(%d) ==> %d", N, func(N));
        return 0;
        // T(N) = T(N - 1) + T(N - 3)
}
*/

/*
int Heap(int *mar_nbr, int N, int i) {
        // Make A Max Heap [Tas Max]
        int max, g, d, tmp;
        max = i;
        g = 2 * i + 1;
        d = 2 * i + 2;
        if (g < N && *(mar_nbr + g) > *(mar_nbr + max)) max = g;
        if (d < N && *(mar_nbr + d) > *(mar_nbr + max)) max = d;
        if (max != i) {
                tmp = *(mar_nbr + max);
                *(mar_nbr + max) = *(mar_nbr + i);
                *(mar_nbr + i) = tmp;
                Heap(mar_nbr, N, max);
        }
}


int findMarbles(int *mar_nbr, int ele, int N) {
        // With Binary Search
        int max, inf, middle;
        bool check = true;
        inf = 0;
        max = N;
        while (inf <= max) {
                if (check == true) middle = (max + inf) / 2;
                if (*(mar_nbr + middle) == ele) {
                        if ((*(mar_nbr + middle - 1) == ele) && middle > 0) {
                                middle = middle - 1;
                                check = false;
                        }
                        else
                                return middle + 1;
                }
                else if (*(mar_nbr + middle) < ele) inf = middle + 1;
                else max = middle - 1;
        }
        return -1;
}


int main() {
        int N, Q, i, j, E = 0, tmp, ele;
        int *mar_nbr = calloc(10, 4), *ele_nbr = calloc(10, 4), *ele_pos = calloc(10, 4);
        while (1) { // -> 69 test cases
                scanf("%d %d", &N, &Q); getchar();
                if (N == 0 && Q == 0) break;
                *(ele_pos + E) = -1;
                *(ele_nbr + E) = -1;
                E += Q + 1;
                mar_nbr = calloc(N + 2, sizeof(int));
                ele_nbr = realloc(ele_nbr, (E + 10) * sizeof(int));
                ele_pos = realloc(ele_pos, (E + 10) * sizeof(int));
                // Start The Marbles Number --> O(N)
                for (i = 0; i < N; i++) {
                        scanf("%d", (mar_nbr + i));
                }
                getchar();
                // Sort The Table By Using Heap Sort --> O(N * log(N))
                for (i = (N / 2) - 1; i >= 0; i--) {
                        Heap(mar_nbr, N, i);
                }
                for (i = N - 1; i >= 0; i--) {
                        tmp = *(mar_nbr + 0);
                        *(mar_nbr + 0) = *(mar_nbr + i);
                        *(mar_nbr + i) = tmp;
                        Heap(mar_nbr, i, 0);
                }
                // Input of The Finds Elements --> O(E * log(N))
                for (i = E - Q; i < E; i++) {
                        scanf("%d", (ele_nbr + i));
                        ele = *(ele_nbr + i);
                        *(ele_pos + i) = findMarbles(mar_nbr, ele, N);
                }
        }
        int x = 1;
        for (i = 0; i < E; i++) {
                if (*(ele_nbr + i) != -1) {
                        if (*(ele_pos + i) == -1) printf("%d not found\n", *(ele_nbr + i));
                        else printf("%d found at %d\n", *(ele_nbr + i), *(ele_pos + i));
                } else {
                        printf("CASE# %d:\n", x);
                        x++;
                }
        }
        return 0;
}

// O(69 * [ O(N * Log(N)) + O(N) + O(Q * log(N))) ] + O(E) // E = Q * 69
// O(N * Log(N)) + O(Q * log(N)) Complexity Depend N and Q
*/

/*
#include <time.h>
int main() {
        for (int i = 0; i < 2000; i++);
        int time = clock();
        printf("%fs", (float) time / CLOCKS_PER_SEC); // In Second
}
*/

/*
int main() {
        int nbr_1, nbr_2, c, d;
        int result = scanf("%c %d %d %d", &nbr_1, &nbr_2, &c, &d);
        printf("%d\n", result);
        if (result != EOF) printf("Sucefully Reading");
        else printf("Error");
        printf("\n%c", nbr_1);
        return 0;
}
*/

/*
#include <time.h>
// To Carry or not to Carry
int main() {
        // Scanf return A Number Of Succefully Reading depending Format Specified
        unsigned int nbr1, nbr2;
        int count, i, x = 0, nbr_r;
        unsigned int *result = calloc(1, sizeof(int));
        int N1[32], N2[32];
        while (scanf("%u %u", &nbr1, &nbr2) != EOF) {
                // Convert To Binary
                count = 0;
                nbr_r = 0;
                result = realloc(result, sizeof(int) * (x + 1));
                if (nbr1 < 0) nbr1 *= -1;
                if (nbr2 < 0) nbr2 *= -1;
                while (count < 32) {
                        N1[31 - count] = nbr1 % 2;
                        N2[31 - count] = nbr2 % 2;
                        if (count == 31 && nbr1 % 2 == 1) N1[0] = 1;
                        if (count == 31 && nbr2 % 2 == 1) N2[0] = 1;
                        nbr1 = nbr1 / 2;
                        nbr2 = nbr2 / 2;
                        count++;
                }
                // Convert To Number
                for (i = 0; i < 32; i++) {
                        if ((N1[i] == 0 && N2[i] == 0) || (N1[i] == 1 && N2[i] == 1)) {
                                nbr_r += 0 * pow(2, 31 - i);
                        } else {
                                nbr_r += 1 * pow(2, 31 - i);
                        }
                }
                *(result + x) = nbr_r;
                x++;
        }
        for (i = 0; i < x; i++) {
                if (i != x - 1) printf("%u\n", *(result + i));
                else printf("%u", *(result + i));
        }
        return 0;
}
// Time And Space Complexity Is Linear --> O(x) --> x is number of test cases

*/

/*
struct Etudient {
        int code;
        char f_name[50];
        char l_name[50];
        int age;

};
struct Person {
        int age;
        int code;
        bool isManager;
} p1, p2, p3;

typedef struct Manager {
        int age;
        char nationality[50];
        bool isManager;
} Manager;

int main() {
        // First Method
        struct Etudient e1 = {1, "abdellah", "karani", 20};
        printf("%d\n", e1.age);
        // Second Methond
        struct Person p4 = {20, 233344, false};
        p1.age = 12;
        printf("%d\n", p1.age);
        // Method 3
        Manager m1 = {40, "Marrocan", true};
        printf("%s\n", m1.nationality);
        Manager *p = &m1;
        printf("%s\n", p->nationality);
        printf("%s\n", (*p).nationality);
        return 0;
}
*/

/*
// Improve The Fibonacci function With Recursion And Table
// if (n == 0) return 0;
// else if (n == 1) return 1;
// else return Fib(n - 1) + Fib(n - 2);

int Fib(int n, int *p, int *q) {
        if (*(p + n) == n) return *(q + n);
        *(p + n) = n;
        *(q + n) = Fib(n - 1, p, q) + Fib(n - 2, p, q);
        return *(q + n);
}

int main() {
        unsigned int n = 200;
        unsigned int *p = calloc(n + 1, 4);
        unsigned int *q = calloc(n + 1, 4);
        *(p + 0) = 0; *(p + 1) = 1; *(q + 0) = 0; *(q + 1) = 1;
        for (int i = 0; i < n; i++)  printf("%u ", Fib(i, p, q));
        int time = clock();
        printf("\nThe Time is %ds", time / CLOCKS_PER_SEC);
        return 0;
}
*/

/*
struct Student {
        int code;
        char Core[200];
        bool isSuccess;
};

struct Person {
        int codeIsbm;
        int f_name[120];
} p1, p2, p3;

typedef struct Etudient {
        int code;
        char f_name[50];
        char l_name[50];
} Etudient;
int main() {
        struct Student s1 = {231493, "Os, Networking, Js, C and ...", false};
        printf("%s\n", s1.Core);
        p3.codeIsbm = 2344;
        printf("%d\n", p3.codeIsbm);
        Etudient e1 = {12545, "Abdellah", "Karani"};
        printf("%s\n", e1.l_name);
        // Create A Pointer That Pointe Of All Space In Struct
        Etudient *p = &e1;
        p -> code = 100000000; // (*p).code
        printf("Name: %s  L_name:  %s  Code :   %d", p->f_name, p->l_name, p->code);
        return 0;
}
*/

/*
typedef struct Player {
        int nbr;
        char name[100];
        char poste[100];
} Player;


int main() {
        Player p1, p2, p3; // instance or variable in type Player Struct
        Player *j3 = &p3;
        scanf("%d %d %d", &p1.nbr, &p2.nbr, &j3->nbr);
        scanf("%s %s %s", &p1.name, &p2.name, &j3->name); // If There One Scanf() --> %[\n]s
        scanf("%s %s %s", &p1.poste, &p2.poste, &j3->poste);
        printf("You Are %.3s Play in %s With Number %d\n", p1.name, p1.poste, p1.nbr);
        printf("You Are %s Play in %s With Number %d\n", p2.name, p2.poste, p2.nbr);
        printf("You Are %s Play in %s With Number %d\n", (*j3).name, j3->poste, j3->nbr);
        printf("Time = %ds", clock() / CLOCKS_PER_SEC);
        return 0;
}
*/

/*
char sayHello(void); // Declaraing the function
char sayHello(void) {
        printf("Hello World");
}
int main() {
        sayHello();
        return 0;
}
*/

/*
void insert(int T[10], int index, int value) {
        int i;
        for (i = 9; i >= index; i--) {
                T[i] = T[i - 1];
        }
        T[index - 1] = value;
}

int main() {
        int T[] = {1, 2, 3, 5, 6, 7, 8, 9, 10};
        for (int i = 0; i < 9; i++) printf("%d  ", T[i]);
        printf("\n");
        insert(T, 4, 4);
        for (int i = 0; i < 10; i++) printf("%d  ", T[i]);
        return 0;
}
*/

/*
#include <stddef.h>
int main() {
        int a = 10;
        int *p = NULL;
        printf("The Addresse is %x %p", p, &a);
}
*/

/*
int main() {
        float *p1, *p2;
        float z =1.5; p1=&z;
        printf("Adresse p1 = %x \n",p1);
        p1++;
        p2=p1+1;
        printf("Adresse p1 = %x \n ",p1);
        printf("Adresse p2 = %x\n",p2);
        printf("p2-p1 = %d \n",p2-p1);
        return 0;
}
*/

/*
#define N 4
#define M 4
int i, j;
int main() {
        int T[N][M];
        for (i = 0; i < N; i++) {
                for (j = 0; j < M; j++) T[i][j] = i + j;
        }
        printf("With  i : \n");
        for (i = 0; i < N; i++) {
                for (j = 0; j < M; j++) printf("%d  ", T[i][j]);
                printf("\n");
        }
        int *p = T;
        printf("\nWith Pointers : \n");
        int x = 0;
        for (i = 0; i < N; i++) {
                for (j = 0; j < M; j++) {
                        printf("%d  ", *(p + x));
                        x++;
                }
                printf("\n");
        }
}
*/

/*
float *adress(int n) {
        float *p = calloc(n, sizeof(float)); // Create An Address
        if (p == NULL) {
                printf("Pas Despace");
        } else {
                for (int i = 0; i < n; i++) {
                        printf("T[%d] = ", i);
                        scanf("%f", (p + i));
                }
                return p;
        }
}
int main() {
        int n = 2;
        printf("Addresse Du tableau Est : %p", adress(n));
        return 0;
}
*/

/*
int main() {
        int n = 10;
        int *p = (int *) calloc(n, sizeof(int));
        for (int i = 0; i < n; i++) {
                printf("%d ", *(p + i));
        }

}
*/

/*
struct Heure {
        int s;
        int m;
        int h;
};
*ConvertH(struct Heure *heure) {
        int result;
        result = (*heure).h * 3600 + (*heure).m * 60 + (*heure).s;
        return result;

}

void ConvertS(int second, struct Heure *heure) {
        int h, m, s;
        h = second / 3600;
        m = (second % 3600) / 60;
        s = (second % 3600) % 60;
        // heure->h = h;
        // heure->m = m;
        // heure->s = s;
        (*heure).h = h;
        (*heure).m = m;
        (*heure).s = s;
}

void *AddHeure(struct Heure h1, struct Heure h2) {
        printf("\n%d/%d/%d", h1.h + h2.h, h1.m + h2.m, h2.s + h2.s);

}

int main() {
        int second = 3665;
        struct Heure heure = {20, 23, 12};
        heure.s = ConvertH(&heure);
        printf("S  = %d", heure.s);
        ConvertS(second, &heure);
        printf("\nH : %d, M : %d, S : %d", heure.h, heure.m, heure.s);
        struct Heure h1 = {1, 2, 3};
        struct Heure h2 = {1, 2, 3};
        AddHeure(h1, h2);
        printf("\n%d/%d/%d", h1.h + h2.h, h1.m + h2.m, h2.s + h2.s);
        return 0;
}
*/

/*
#define N 3
#define M 4

int main() {
        int T[N][M];
        for (int i = 0; i < N; i++) {
                for (int j = 0; j < M; j++) {
                        T[i][j] = i + j;
                }
        }
        for (int i = 0; i < N; i++) {
                for (int j = 0; j < M; j++) {
                        printf("%d  ", T[i][j]);
                }
                printf("\n");
        }
        printf("\n");
        for (int i = 0; i < N; i++) {
                for (int j = 0; j < M; j++) {
                        printf("%d  ", T[0][j]);
                }
                printf("\n");
        }
}
*/

/*
int main() {
        int num = 10;
        int *p1 = &num;
        int **p2 = &p1;
        printf("%d", **p2);
        return 0;
}
*/

/*
int main(int argc, int argv[]) {
        int N, *x_coordinates, *y_coordinates;
        while (scanf("%d", &N) != EOF) {
                // Reserve N Esapce Dans La Memoire [Partie Stack]
                x_coordinates = (int *) calloc(N + 1, sizeof(int));
                y_coordinates = (int *) calloc(N + 1, sizeof(int));
                // Remplissage Des Donnes Sur Les Points
                for (int i = 0; i < N; i++) {
                        scanf("%d %d", (x_coordinates + i), (y_coordinates + i));
                }
                getchar();
                // Trouve Des Points Critique

        }
        return 0;
}
*/

/*
typedef struct {
    char nom[20];
    int stade;
    char pays[20];
} Team;

typedef struct {
    char nom[20];
    char prenom[20];
    int code;
    Team team;
} Player;

int trouve_capitan(Player p) {
    if (p.code == 10) return 1;
    else return 0;
}

int main() {
    int i, n;
    printf("------ Hint : nom prenom code Team_name stade pays ------\n");
    printf("Enter The Number Of The Player : ");
    scanf("%d", &n);
    Player players[n];
    for (i = 0; i < n; i++) {
        printf("Player %d: ", i + 1);
        scanf("%s %s %d %s %d %s", &players[i].nom, &players[i].prenom, &players[i].code, &players[i].team.nom,
        &players[i].team.stade, &players[i].team.pays);

    }
    for (i = 0; i < n; i++) {
        printf("%s %s %d %s %d %s\n", players[i].nom, players[i].prenom, players[i].code, players[i].team.nom,
        players[i].team.stade, players[i].team.pays);
    }
    // Trouve Le Capitan
    for (i = 0; i < n; i++) {
        if (trouve_capitan(players[i]) == 1) {
            printf("Le Capitan de team %s C'est %s", players[i].team.nom, players[i].nom);
            break;
        }
    }
    return 0;
}
*/

/*
#include <string.h>
typedef struct {
    char f_name[50];
    char l_name[50];
    int code;
} Student;

void *showData(Student student) {
    printf("Hello %d || %s %s\n", student.code, student.f_name, student.l_name);
}
Student fillData() {
    Student student = {"Ahmed", "Saad", 335639};
    return student;
}
void modifierData(Student *student) {
    (*student).code = 10;
    strcpy(student->f_name, "Abdelkader");
    strcpy(student->l_name, "Bouaad");
}
int main() {
    Student student_1 = {"Abdellah", "karani", 238973};
    Student student_2;
    student_2 = fillData();
    showData(student_1);
    printf("\nHello %d || %s %s\n", student_2.code, student_2.f_name, student_2.l_name);
    modifierData(&student_2);
    printf("\nHello %d || %s %s\n", student_2.code, student_2.f_name, student_2.l_name);
    return 0;
}
*/

/*
typedef struct {
    char team_name[50];
    char pay[50];
    int code;
} Team;
typedef struct {
    int number;
    char status[50];
    char name[50];
    Team team;
} Player;

void *displayTeamName(Player player) {
    printf("\t%s : %s\n", player.name ,player.team.team_name);
}
void *IsPlay_inAttaque(Player player) {
    if (strcmp(player.status, "attaque") == 0) printf("\t %s\n", player.name);
}
void *change_teamName(Player *player) {
    if (strcmp(player->name, "messi") == 0) {
        strcpy(player->team.team_name, "Iti7ad_imaratie");
        player->number = 11;
    }
}
int main () {
    int n, i;
    printf("Enter The Number of The Players : ");
    scanf("%d", &n);
    Player players[n];
    printf("Hint : number status name team_name pay code : \n");
    for (i = 0; i < n; i++) {
        scanf("%d %s %s %s %s %d", &players[i].number, &players[i].status, &players[i].name,
        &players[i].team.team_name, &players[i].team.pay, &players[i].team.code);
    }
    getchar();
    // team Name For Each Player
    printf("\nThe Players Are : \n\n");
    for (i = 0; i < n; i++) {
        displayTeamName(players[i]);
    }
    // The Players That Play in Attaque
    printf("\nThe Player That Play in Attaque Are : \n\n");
    for (i = 0; i < n; i++) {
        IsPlay_inAttaque(players[i]);
    }
    // Change The Team Name And Number
    printf("\nAfter Changing The Team Name : \n");
    for (i = 0; i < n; i++) {
        change_teamName(&players[i];
    }
    printf("\n");
    for (i = 0; i < n; i++) {
        displayTeamName(players[i]);
    }
    return 0;
}
*/

/*
void *heap(int *cordinate_x, int *cordinate_y, int i, int taille) {
    int max, d, g, tmp;
    max = i;
    d = 2 * i + 2;
    g = 2 * i + 1;
    if (d < taille && *(cordinate_x + d) >= *(cordinate_x + max)) max = d;
    if (g < taille && *(cordinate_x + g) >= *(cordinate_x + max)) max = g;
    if (max != i) {
        tmp = *(cordinate_y + i);
        *(cordinate_y + i) = *(cordinate_y + max);
        *(cordinate_y + max) = tmp;
        tmp = *(cordinate_x + i);
        *(cordinate_x + i) = *(cordinate_x + max);
        *(cordinate_x + max) = tmp;
        heap(cordinate_x, cordinate_y, max, taille);
    }
}
        for (i = N / 2; i >= 0; i--) {
            heap(cordinate_x, cordinate_y, i, N);
        }
        for (i = N - 1; i > 0; i--) {
            tmp = *(cordinate_y + 0);
            *(cordinate_y + 0) = *(cordinate_y + i);
            *(cordinate_y + i) = tmp;
            tmp = *(cordinate_x + 0);
            *(cordinate_x + 0) = *(cordinate_x + i);
            *(cordinate_x + i) = tmp;
            heap(cordinate_x, cordinate_y, 0, i);
        }
*/

/*
void B() {
    printf("Hello World\n");
}
void A(char non[]) {
    int age;
    printf("%s\n", non);
    printf("enter votre age : ");
    scanf("%d", &age);
    B(age);
    printf("Merci de Votre Age\n");
}

int main() {
    char non[50];
    printf("Enter Votre non : ");
    scanf(" %[^\n]s", &non);
    A(non);
    printf("Merci De Votre Attention\n");
    return 0;
}
*/

/*
int main() {
    int i, count = 1, N, number_critical, operation, tmp, x, vl, j;
    int *result = calloc(1, sizeof(int));
    while (1) {
        // Remplisage Des Donnes
        x = scanf("%d", &N);
        if (N == 0 || x == -1) break;
        result = realloc(result, count * sizeof(int));
        int *cordinate_x = calloc(N + 2, sizeof(int));
        int *cordinate_y = calloc(N + 2, sizeof(int));
        for (i = 0; i < N; i++) {
            scanf("%d %d", cordinate_x + i, cordinate_y + i);
        }
        getchar();
        // Trier Les Deux Coordonnes
        for (vl = N / 2; vl > 0; vl = vl / 2) {
            for (j = vl; j < N; j++) {
                for (i = j - vl; i >= 0; i = i - vl) {
                    if (*(cordinate_x + i + vl) > *(cordinate_x + i)) break;
                    else if (*(cordinate_x + i + vl) == *(cordinate_x + i)) {
                        if (*(cordinate_y + i + vl) < *(cordinate_y + i)) {
                            tmp = *(cordinate_x + i + vl);
                            *(cordinate_x + i + vl) = *(cordinate_x + i);
                            *(cordinate_x + i) = tmp;
                            tmp = *(cordinate_y + i + vl);
                            *(cordinate_y + i + vl) = *(cordinate_y + i);
                            *(cordinate_y + i) = tmp;
                        }
                    }
                    else {
                        tmp = *(cordinate_x + i + vl);
                        *(cordinate_x + i + vl) = *(cordinate_x + i);
                        *(cordinate_x + i) = tmp;
                        tmp = *(cordinate_y + i + vl);
                        *(cordinate_y + i + vl) = *(cordinate_y + i);
                        *(cordinate_y + i) = tmp;
                    }
                }
            }
        }
        // Analyse Les Donnes
        number_critical = 0;
        for (i = 0; i < N - 1; i++) {
            operation = *(cordinate_y + i) - *(cordinate_y + i + 1);
            if (operation == 2){
                number_critical++;
            }
        }
        *(result + count - 1) = number_critical;
        // Librer La Memoire
        free(cordinate_x);
        free(cordinate_y);
        count++;
    }
    // Afficher la Result
    for (i = 0; i < count - 1; i++) {
        printf("%d\n", *(result + i));
    }
    return 0;
}
*/

/*
int main() {
    int N, i, count, y, j, vl, tmp, is, for_result = 0;
    bool check;
    int result[222];
    while (scanf("%d", &N) != -1) {
        // Start A Global Variables
        count = 0;
        is = 0;
        // Fill The Data
        int *p = calloc(N + 2, sizeof(int));
        int *q = calloc(N + 2, sizeof(int));
        int *isX_reapeted = calloc(N + 2, sizeof(int));
        for (i = 0; i < N; i++) {
            scanf("%d %d", (p + i), (q + i));
        }
        getchar();
        // Trier Les Deux Coordonnes
        for (vl = N / 2; vl > 0; vl = vl / 2) {
            for (j = vl; j < N; j++) {
                for (i = j - vl; i >= 0; i = i - vl) {
                    if (*(p + i + vl) > *(p + i)) break;
                    else if (*(p + i + vl) == *(p + i)) {
                        if (*(q + i + vl) < *(q + i)) {
                            tmp = *(p + i + vl);
                            *(p + i + vl) = *(p + i);
                            *(p + i) = tmp;
                            tmp = *(q + i + vl);
                            *(q + i + vl) = *(q + i);
                            *(q + i) = tmp;
                        }
                    }
                    else {
                        tmp = *(p + i + vl);
                        *(p + i + vl) = *(p + i);
                        *(p + i) = tmp;
                        tmp = *(q + i + vl);
                        *(q + i + vl) = *(q + i);
                        *(q + i) = tmp;
                    }
                }
            }
        }
        // Analyse Les Donnes
        for (j = -20; j < 20; j++) {
            for (i = 0; i < N - 1; i++) {
                if ((*(q + i) == j - 1 || *(q + i) == j + 1) && (*(q + i) - *(q + i + 1)) == 2) {
                     count++;
                }
            }
        }
        result[for_result] = count;
        for_result++;
    }
    for (i = 0; i < for_result; i++) printf("%d\n", result[i] / 2);
    return 0;
}
*/

/*
struct adress {
    int numero;
    char rue[50];
    char ville[50];
};
struct Person {
    char nom[50];
    int age;
    struct adress adrs;
};

int main() {
    struct Person p = {"Abdellah Karani", 20, {32456, "Rue 20 Aout", "Ouled M'barek"}};
    printf("Le Nom : %s\n", p.nom);
    printf("age : %d\n", p.age);
    printf("numero  : %d\n", p.adrs.numero);
    printf("rue : %s\n", p.adrs.rue);
    printf("ville : %s\n", p.adrs.ville);
    return 0;
}
*/

/* Gere Un Bioblitique Des Livres
struct Auteur{
    char nom[50];
    char nationalite[50];
    int annee;
};

typedef struct {
    char titre[50];
    struct Auteur auth;
} Livre;

void *remplire(Livre *lv) {
    printf("Titre : ");
    scanf(" %[^\n]s", &lv->titre);
    printf("Auteur : ");
    scanf(" %[^\n]s", &lv->auth.nom);
    printf("nationalite : ");
    scanf(" %[^\n]s", &lv->auth.nationalite);
    printf("annee de publication : ");
    scanf("%d", &lv->auth.annee);
    getchar();
}

void *afficher_infos_des_livre(Livre *lv, int nbr_lv) {
    int i;
    printf("\nLes Livres Sont : \n\n");
    for (i = 0; i < nbr_lv; i++) {
        printf("|| \t%s || \t%s || \t%s || \t%d\n\n", lv[i].titre, lv[i].auth.nom, lv[i].auth.nationalite, lv[i].auth.annee);
    }
}

int main() {
    int i, nbr_lv;
    printf("Enterz Les Nombres Des Livres : ");
    scanf("%d", &nbr_lv);
    Livre *lv = (Livre *) malloc(sizeof(Livre));
    Livre les_livres[nbr_lv];
    for (i = 0; i < nbr_lv; i++) {
        printf("Enterz Les Informations De Livre Numero %d : \n", i + 1);
        remplire(&les_livres[i]);
    }
    afficher_infos_des_livre(les_livres, nbr_lv);
}
*/

/*
int fact(int n) {
    int p = 1, j;
    for (j = 1; j <= n; j++) {
        p *= j;
    }
    return p;
}
int somme(int n) {
    int i, Un = 0;
    for (i = 1; i <= n; i++) {
        Un += fact(i) / i;
    }
    return Un;
}
int main() {
    printf("U(%d) = %d\n", 4, somme(4));
    printf("U(%d) = %d\n", 7, somme(7));
    printf("U(%d) = %d\n", 100, somme(100));
    return 0;
}
*/
/*
int fact(int n) {
    int p = 1, j;
    for (j = 1; j <= n; j++) {
        p *= j;
    }
    return p;
}
int funcA(int m) {
    return fact(m + 3) / fact(m + 1);
}
int funcB(int m) {
    int s = 0, i;
    for (i = 0; i <= m; i++) {
        s += pow(i, 2);
    }
    return s;
}
int main() {
    printf("funcA(%d) = %d\n", 0, funcA(0));
    printf("funcB(%d) = %d\n", 0, funcB(0));
    return 0;
}
*/

/*
void *afficher_heure(int minutes, int heure, int second) {
    printf("Il est %d heure minutes %d second %d\n", heure, minutes, second);
}
void *saisir_heure(int *im, int *is, int *ih) {
    *im = 10;
    *is = 10;
    *ih = 10;
}
int main() {
    int minutes = 14, heure = 3, second = 34;
    afficher_heure(minutes, heure, second);
    saisir_heure(&minutes, &heure, &second);
    afficher_heure(minutes, heure, second);
    return 0;
}
*/

/*
int chiffre_number(int n) {
    if (n == 0) return 1;
    else return chiffre_number(n / 10) + 1;
}
int main() {
    int n = -12;
    printf("Le Nombre De Chiffre de %d C'est %d", n, chiffre_number(n) - 1);
    return 0;
}
*/

/*
#define N 1010
struct Point {
    int x;
    int y;
};

int findMaxCriticalPoints(struct Point T[], int n) {
    int maxCriticalPoints = 0;
    for (i = 0; i < n; ++i) {
        int x = T[i].x;
        int y = T[i].y;
        // Check if y is of the form a-1 or a+1
        if (y == x + 1 || y == x - 1) {
            maxCriticalPoints++;
        }
    }
    return maxCriticalPoints;
}

int main() {
    struct Point T[N];
    int n;
    while (scanf("%d", &n) == 1) {
        for (i = 0; i < n; ++i) {
            scanf("%d %d", &T[i].x, &T[i].y);
        }
        // Sort the points based on x-coordinate (Selection Sort)
        for (i = 0; i < n; ++i) {
            int indexMin = i;
            for (j = i + 1; j < n; ++j) {
                if (T[j].x < T[indexMin].x) {
                    indexMin = j;
                }
            }
            // Swap x and y coordinates
            int temp_x = T[i].x;
            T[i].x = T[indexMin].x;
            T[indexMin].x = temp_x;
            int temp_y = T[i].y;
            T[i].y = T[indexMin].y;
            T[indexMin].y = temp_y;
        }
        // Find and print the maximum number of critical points
        printf("%d\n", findMaxCriticalPoints(T, n));
    }

    return 0;
}
*/

/*
int main() {
    bool check;
    int T[] = {1, 7, 4, 3, 2, 6, 0};
    int max = 7;
    for (i = 0; i <= max; i++) {
        check = false;
        for (j = 0; j < max; j++) {
            if (i == T[j]) {check = true; break;}
        }
        if (check == false) {
            printf("L'element manquant c'est %d", i);
            break;
        }
    }
    return 0;
}
*/

/*
int main() {
    int n = 7;
    int T[] = {1, 7, 4, 3, 5, 6, 2};
    int P[] = {-1, -1, -1, -1, -1, -1, -1, -1};
    for (i = 0; i < n + 1; i++) {
        P[T[i]] = T[i];
    }
    for (i = 0; i < n + 1; i++) {
        if (P[i] == -1) {
            printf("L'element Manquant C'est %d", i);
        }
    }
    return 0;
}
*/

/*
int pgcd(int a, int b) {
    if (b == 0) return a;
    else return pgcd(b, a % b);
}
int main() {
    int n, count = 0, f1, f2, i;
    int *result = calloc(1, sizeof(int));
    while (scanf("%d", &n) == 1) {
        result = realloc(result, (n + 3) * sizeof(int));
        for (i = 0; i < n; i++) {
            scanf("%d %d", &f1, &f2);
            result[count] = pgcd(f1, f2);
            count++;
        }
        getchar();
    }
    for (i = 0; i < count; i++) printf("%d\n", result[i]);
    return 0;
}
*/

/*
// Fibonacci calls
int fibonacci_2(int *p, int *q, int n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    if (p[n] == n) return q[n];
    p[n] = n;
    q[n] = fibonacci_2(p, q, n - 1) + fibonacci_2(p, q, n - 2);
    return q[n];
}

int main() {
    long N, i;
    for (i = 0; i < 4000; i++) {
        long *p = calloc(i + 2, sizeof(long));
        long *q = calloc(i + 2, sizeof(long));
        printf("%ld  ", fibonacci_2(p, q, i));
    }
    return 0;
}
*/

// Finacci calls
/*
#define size 40

typedef struct {
    int num_calls;
    int result;
    int fib_nbr;
} Fib;

int fibonacci(int n, int count, Fib T[]) {
    T[count].num_calls += 1;
    if (n == 0) return 0;
    if (n == 1) return 1;
    else {
        return fibonacci(n - 1, count, T) + fibonacci(n - 2, count, T);
    }
}

int main() {
    int n, i, nbr, count = 0;
    Fib T[size];
    while (scanf("%d", &n) == 1) {
        for (i = 0; i < n; i++) {
            scanf("%d", &nbr);
            T[count].fib_nbr = nbr;
            T[count].num_calls = -1;
            T[count].result = fibonacci(nbr, count, T);
            count++;
        }
    }
    for (i = 0; i < count; i++) {
        printf("fib(%d) = %d calls = %d\n", T[i].fib_nbr, T[i].num_calls, T[i].result);
    }
}
*/

/*
// Element manquant
int main() {
    int n = 10, i, sum = 0, sum_T = 0;
    int T[] = {7, 1, 3, 4, 0, 2, 6, 8, 9};
    for (i = 0; i < n - 1; i++) { // 0 --> 9
        sum_T += T[i];
        sum += i; // 0 --> 8
    }
    sum += n - 1;
    printf("Element manquant c'est %d", sum - sum_T);
    return 0;
}
*/

/*
// les elements Pics d'un tableau
int main() {
    int n = 7, i, count = 0;
    int T[] = {1, 9, 5, 6, 8, 4, 7};
    printf("Les Pics Sont : ");
    if (T[0] > T[1]) printf("%d ", T[i]);
    if (T[n - 1] > T[n - 2]) printf("%d  ", T[n - 1]);
    for (i = 1; i < n - 1; i++) {
        if (T[i] > T[i - 1] && T[i] > T[i + 1]) printf("%d  ", T[i]);
    }
    return 0;
}
*/

/*
int search_occ(int T[], int occ, int n) {
    int plus, i, count = 0;
    bool check = false;
    int inf = 0, max = n - 1, middle;
    while (inf <= max) {
        if (check == false) middle = (inf + max) / 2;
        if (T[middle] == occ) {
            middle++; check = true;
            if (T[middle] != occ) { plus = middle - 1; break; }
        }
        else if (T[middle] < occ) inf = middle + 1;
        else max = middle - 1;
    }
    for (i = plus; T[i] == occ; i--) count++;
    return count;
}

int main() {
    bool check = false;
    int n = 10, occ = 3;
    int T[] = {1, 3, 3, 3, 3, 3, 4, 5, 6, 6};
    printf("Le nombre d'occurence de l'element %d c'est %d", occ, search_occ(T, occ, n));
    return 0;
}
*/

/* Number Of Occ In table
int occ_search(int T[], int n, int occ) {
    bool check = true;
    int count = 0, plus, minus, inf, max, mid;
    max = n;
    while (inf <= max) {
        if (check == true) mid = (max + inf) / 2;
        if (T[mid] == occ) {
            if (check == true) { // When found the element but we must check
                check = false;
                minus = mid - 1;
                plus = mid + 1;
                count++;
            }
            if (T[plus] == occ) count++;
            if (T[minus] == occ) count++;
            if (T[minus] != occ && T[plus] != occ)  break;
            minus--;
            plus++;
        }
        else if (T[mid] < occ) inf = mid + 1;
        else max = mid - 1;
    }
    return count;
}
int main() {
    int n = 7, occ = 1;
    int T[] = {1, 3, 3, 3, 3, 3, 3, 3};
    printf("Le Nombre Occ De %d C'est %d\n", occ, occ_search(T, n, occ));
    printf("Excution Time : %fs", (float) clock() / CLOCKS_PER_SEC);
    return 0;
}
*/

/*
// Number Of Occ --> We Suppose Of Occ Exit In The Table
int occ_search(int T[], int n, int indct, int occ) {
    int max = n - 1, inf = 0, mid, result = -1;
    while (inf <= max) {
        mid = (max + inf) / 2;
        if (T[mid] == occ) {
            result = mid;
            if (indct == 0) max = mid - 1;
            else inf = mid + 1;
        }
        else if (occ > T[mid]) inf = mid + 1;
        else max = mid - 1;
    }
    return result;
}
int main() {
    int n = 8, occ = 3;
    int T[] = {1, 2, 2, 2, 2, 3, 3, 3};
    // indc == 0 --> first occ else last occ
    int first_occ = occ_search(T, n, 0, occ);
    int last_occ = occ_search(T, n, 1, occ);
    printf("First Occ : %d\n", first_occ);
    printf("Last Occ : %d\n", last_occ);
    printf("Le Nombre Occ De %d C'est %d\n", occ, last_occ - first_occ + 1);
    printf("Excution Time : %.2fs", (float) clock() / CLOCKS_PER_SEC);
    return 0;
}
*/

// Found The Small Missing Element in Table --> With Binary Search && Linear Search
// With Linear Search --> The Table is Not Sorted
/*
int main() {
    int n = 8, i, sumT = 0, sumX = n - 1;
    int T[] = {3, 1, 2, 4, 7, 6, 0};
    for (i = 0; i < n - 1; i++) {
        sumT += T[i];
        sumX += i;
    }
    printf("The Missing ELement is %d", sumX - sumT);
    return 0;
}
*/

/*
int binary_search_occ1(int T[], int n) { // if etape = 1
    int inf = 1, max = n - 2, count = 0, result;
    if (T[0] != 0) result =  0;
    if (T[n - 2] != n - 1) result =  n;
    while (inf <= max) {
        count++;
        if (T[inf] != T[inf + 1] - 1) { result = T[inf] + 1; break; }
        else inf++;
        if (T[max] != T[max - 1] + 1) { result = T[max] - 1; break; }
        else max--;
    }
    printf("Count1 = %d\n", count);
    return result;
}
*/

/*
int binary_search_occ2(int T[], int n) {
    int inf = 0, max = n - 1, mil, count = 0;
    while (inf <= max) {
        mil = (inf + max) / 2;
        if (T[mil] == mil) inf = mil + 1;
        else max = mil - 1;
        count++;
    }
    printf("Count2 = %d\n", count);
    return inf;
}


int main() {
    int n = 15;
    int T[] = {0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15}; // 3 is the missing element
    printf("The Missing Element is %d\n", binary_search_occ2(T, n));
    return 0;
}
*/

/*
typedef struct {
    char marque[40];
    char modele[40];
    int annee_model;
    int prix;
} Voiture, v1, v2;

int main() {
    int i;
    char c;
    Voiture v1, v2;
    printf("Voiture %d : \n", 1);
    printf("Marque : ");
    scanf("%[^\n]s", &v1.marque);
    printf("Modele : ");
    getchar();
    for (i = 0; c != '\n'; i++) {
        c = getchar();
        if (c != '\n') v1.modele[i] = c;
    }
    v1.modele[i] = '\0';
    printf("Annee Model : ");
    scanf("%d", &v1.annee_model);
    printf("Prix : ");
    scanf("%d", &v1.prix);
    puts(v1.marque);
    puts(v1.modele);
    printf("%d %d", v1.annee_model, v1.prix);
    return 0;
}
*/

/*
typedef struct {
    char marque[40];
    char modele[40];
    int annee_model;
    int prix;
} Voiture;

void *Remplissage(Voiture *v) {
    int i; char c;
    printf("Voiture %d : \n", 1);
    printf("Marque : ");
    scanf("%[^\n]s", &v->marque);
    printf("Modele : ");
    getchar();
    for (i = 0; (c = getchar()) != '\n'; i++) {
        v->modele[i] = c;
    }
    v->modele[i] = '\0';
    printf("Annee Model : ");
    scanf("%d", &v->annee_model);
    printf("Prix : ");
    scanf("%d", &v->prix);
}

void *affichage(Voiture *v) {
    puts(v->marque);
    puts(v->modele);
    printf("%d %d", v->annee_model, v->prix);
}

int main() {
    Voiture v1;
    Remplissage(&v1);
    affichage(&v1);
    return 0;
}
*/

/*
int i; char c;
printf("MARQUE : ");
for (i = 0; (c = getchar()) != '\n'; i++) {
    v->marque[i] = c;
}
v->marque[i] = '\0';
printf("MODELLE : ");
for (i = 0; (c = getchar()) != '\n'; i++) {
    v->modele[i] = c;
}
v->modele[i] = '\0';
*/

/*
typedef struct {
    char marque[40];
    char modele[40];
    int annee_model;
    int prix;
} Voiture;

void *Remplissage(Voiture *v) {
    // printf("MARQUE : "); gets(v->marque);
    printf("MARQUE : "); scanf("%[^\n]", v->marque); getchar();
    // printf("MODELE : "); gets(v->modele);
     printf("MARQUE : "); scanf(" %[^\n]", &v->modele); getchar();
    printf("ANNEE MODELLE : "); scanf("%d", &v->annee_model);
    printf("PRIX : $"); scanf("%d", &v->prix);
    getchar();

}

void *affichage(Voiture *v) {
    printf("MARQUE : "); puts(v->marque);
    printf("MODELE : "); puts(v->modele);
    printf("ANNEE MODELLE : "); printf("%d\n", v->annee_model);
    printf("PRIX : "); printf("$%d\n", v->prix);
}

int main() {
    Voiture v1, v2;
    printf("\nVoiture 1 : \n");
    Remplissage(&v1);
    printf("\nVoiture 2 : \n");
    Remplissage(&v2);
    printf("---------------\n");
    affichage(&v1);
    printf("---------------\n");
    affichage(&v2);
    return 0;
}
*/

/*
typedef struct {
    int number;
    char string[50];
} Type;

int main() {
    Type t1;
    Type *t = &t1;
    printf("Enter a Number : ");
    scanf("%d", &t->number); getchar();
    printf("Enter a String : ");
    scanf("%[^\n]s", &t->string); // Delete Adress Of string
    printf("Number : %d || String : %s ", t->number, t1.string);
    return 0;
}
*/

/* Insertion With Linear Search In Sorted Table
void *linear_insertion_ele1(int T[], int n, int ele) {
    int i, j;
    bool check = true;
    for (i = 0; i < n - 2; i++) {
        if (T[i] <= ele && T[i + 1] >= ele || T[0] >= ele) {
            for (j = n - 1; j > i; j--) {
                T[j] = T[j - 1];
            }
            if (T[0] < ele) T[i + 1] = ele;
            else T[0] = ele;
            check = false;
            break;
        }
    }
    if (check == true) {
        T[n - 1] = ele;
    }
    printf("\n");
}


void *linear_insertion_ele2(int T[], int n, int ele) {
    int i;
    bool check = true;
    for (i = n - 2; i >= 0; i--) {
        if (T[i] > ele) T[i + 1] = T[i];
        else { T[i + 1] = ele; check = false; break; }
    }
    if (check == true) T[0] = ele;
    printf("\n");
}


void *linear_insertion_ele3(int T[], int n, int ele) {
    int pos = n - 1, i;
    for (i = n - 2; i >= 0; i--) {
        if (T[i] > ele) pos = i;
        else break;
    }
    for (i = n - 1; i > pos; i--) {
        T[i] = T[i - 1];
    }
    T[pos] = ele;
    printf("\n");
}


int main() {
    long n = 10, ele = 1233666330LL, i;
    int T[] = {1, 2, 2, 3, 4, 6, 7, 9, 10};
    for (i = 0; i < n - 1; i++) printf("%ld  ", T[i]);
    linear_insertion_ele1(&T, n, ele);
    for (i = 0; i < n; i++) printf("%ld  ", T[i]);
    linear_insertion_ele2(&T, n, ele);
    for (i = 0; i < n; i++) printf("%ld  ", T[i]);
    linear_insertion_ele3(&T, n, ele);
    for (i = 0; i < n; i++) printf("%ld  ", T[i]);
    return 0;
}
*/

/*
// insertion With Binary Search In Sorted Table
void *binary_insertion_ele(int T[], int n, int ele) {
    int mil, sup = n - 2, inf = 0, i, pos;
    while (inf <= sup) {
        mil = (inf + sup) / 2;
        if (T[mil] == ele) {
            pos = mil;
            break;
        }
        else if (T[mil] < ele) {
            inf = mil + 1;
            pos = inf;
        }
        else {
            sup = mil - 1;
            pos = mil;
        }
    }
    printf("Position = %d", pos); // or inf = sup + 1
    for (i = n - 1; i > pos; i--) {
        T[i] = T[i - 1];
    }
    T[pos] = ele;
}

int main() {
    int n = 11, ele = 10, i;
    int T[] = {1, 1, 2, 4, 5, 6, 7, 7, 9, 10};
    for (i = 0; i < n - 1; i++) printf("%d  ", T[i]);
    binary_insertion_ele(T, n, ele);
    printf("\n"); for (i = 0; i < n; i++) printf("%d  ", T[i]);
    return 0;
}
*/

/* Structure Etudiant + Moyenne De Notes
static float x = 10;
typedef struct {
    int notes[5];
} Etudiant;

typedef struct {
    int INE;
    char nom[40];
    char prenom[40];
    Etudiant etd;

} ETDS;

ETDS remplissage(ETDS etudiant) {
    int i;
    printf("Entres Votre Information : \n");
    printf("INE : ");
    scanf("%d", &etudiant.INE); getchar();
    printf("Votre Nom : ");
    scanf("%39[^\n]", &etudiant.nom); getchar();
    etudiant.nom[39] = '\0';
    printf("Votre Prenom : ");
    scanf("%39[^\n]s", &etudiant.prenom); getchar();
    etudiant.prenom[39] = '\0';
    printf("Enterz Votre Notes : \n");
    for (i = 0; i < 5; i++) {
        printf("Note %d : ", i + 1);
        scanf("%d", &etudiant.etd.notes[i]);
    }
    return etudiant;
}

void *affichage(ETDS *etudiant) {
    int i, somme = 0;
    for (i = 0; i < 5; i++) {
        somme += etudiant->etd.notes[i];
    }
    int moyenne = somme / 5;
    printf("\n ------------------ \n");
    printf("IND : %d\n", etudiant->INE);
    printf("Nom : %s\n", etudiant->nom);
    printf("Prenom : %s\n", etudiant->prenom);
    printf("Votre Moyenne C'est : %d\n", moyenne);
}

int main() {
    ETDS etudiant_1, etudiant_2;
    etudiant_1 = remplissage(etudiant_1);
    etudiant_2 = remplissage(etudiant_2);
    affichage(&etudiant_1);
    affichage(&etudiant_2);
    return 0;
}
*/

/* Complex Number Structure
typedef struct {
    int a;
    int b;
} Complex_Number;

void *remplissage(Complex_Number *z) {
    printf("Enter Le Nombre Complex : \n");
    printf("Enter a : ");
    scanf("%d", &z->a);
    printf("Enter b : ");
    scanf("%d", &z->b);
}

void *affichage(Complex_Number *z) {
    printf("\nLe Nombre Complex Sont : \n");
    printf("%di + %d  ", z->a, z->b);
}
void *somme(Complex_Number *z1, Complex_Number *z2) {
    printf("\nLa Somme de Z1 = %di + %d et Z2 = %di + %d :  \n", z1->a, z1->b, z2->a, z2->b);
    printf("Z1 + Z2 = %di + %d", z1->a + z2->a, z1->b + z2->b);
}
void *multiplication(Complex_Number z1, Complex_Number z2) {
    printf("\nLa Multiplication de Z1 = %di + %d et Z2 = %di + %d :  \n", z1.a, z1.b, z2.a, z2.b);
    printf("Z1 x Z2 = %di + %d", (z1.a * z2.a) - (z1.b + z2.b), (z1.a * z2.b) + (z1.b * z1.a));
}
void *conjugue(Complex_Number *z1) {
    printf("\nLa Conjugeson de Z = %di + %d c'est : Z/ = %di - %d\n", z1->a, z1->b, z1->a, z1->b);
}
void *module(Complex_Number *z) {
    printf("\nLe Module de Z = %di + %d C'est |Z| = %.2f \n", z->a, z->b, sqrt(pow(z->a, 2) + pow(z->b, 2)));
}
void *argument(Complex_Number z) {
    printf("\nArgumen de Z = %di + %d C'est Teta = %.2lf\n", z.a, z.b, atan2(z.b, z.a) * (180.0 / M_PI));
}
int main() {
    Complex_Number z1, z2;
    remplissage(&z1);
    remplissage(&z2);
    affichage(&z1);
    affichage(&z2);
    somme(&z1, &z2);
    multiplication(z1, z2);
    conjugue(&z1);
    conjugue(&z2);
    module(&z1);
    module(&z2);
    argument(z1);
    argument(z2);
    return 0;
}
*/

/* Manipulation d'un livre with array
typedef struct {
    char titre[50];
    char autor[50];
    int nubr_page;
    int prix;
} Livre;

Livre remplissage(Livre lvr) {
    printf("Le Titre : ");
    gets(lvr.titre);
    printf("L'autor : ");
    gets(lvr.autor);
    printf("Nombre de page : ");
    scanf("%d", &lvr.nubr_page);
    printf("prix : ");
    scanf("%d", &lvr.prix); getchar();
    return lvr;
}

void affichage(Livre *lvr) {
    printf("\n-------------------\n");
    printf("Titre : %s\n", lvr->titre);
    printf("Autor : %s\n", lvr->autor);
    printf("Nombre De Page %d\n", lvr->nubr_page);
    printf("Prix : %d\n", lvr->prix);
}

int main() {
    Livre livres[3];
    for (i = 0; i < 2; i++) {
        printf("Enter Les Infos De Livre %d : \n", i + 1);
        livres[i] = remplissage(livres[i]);
    }
    for (i = 0; i < 2; i++) {
        printf("\nLe Infos De Livre %d : \n", i + 1);
        affichage(&livres[i]);
    }
    return 0;
}
*/

// Manipulation d'un livre with Allocation Dynamique
/*
typedef struct {
    char titre[50];
    char autor[50];
    int nubr_page;
    int prix;
} Livre;
void* remplissage(Livre *lvr) {
    printf("Le Titre : ");
    gets(lvr->titre);
    printf("L'autor : ");
    gets(lvr->autor);
    printf("Nombre de page : ");
    scanf("%d", &lvr->nubr_page);
    printf("prix : ");
    scanf("%d", &lvr->prix); getchar();
}

void affichage(Livre *lvr) {
    printf("\n-------------------\n");
    printf("Titre : %s\n", lvr->titre);
    printf("Autor : %s\n", lvr->autor);
    printf("Nombre De Page %d\n", lvr->nubr_page);
    printf("Prix : %d\n", lvr->prix);
}

int main() {
    int i, n;
    printf("Entrez Le Nombre des Livres : ");
    scanf("%d", &n); getchar();
    Livre *livres = (Livre *) calloc(n, sizeof(Livre));
    // Livre *T[3];
    for (i = 0; i < n; i++) {
        printf("Enter Les Infos De Livre %d : \n", i + 1);
        // T[i] = (Livre *) malloc(sizeof(Livre));
        // remplissage(&T[i]);
        remplissage((livres + i));
    }
    for (i = 0; i < n; i++) {
        printf("\nLe Infos De Livre %d : \n", i + 1);
        // affichage(&T[i]);
        affichage(&livres[i]);
    }
    return 0;
}
*/

// calcule et r�partit les d�penses des achats d'articles
/*
typedef struct {
    char designation[50];
    float prix;
    int quantite;
    float montant;
} Artical;

int get_articales(Artical articales[50]) {
    int i, check = 1;
    while (check == 1) {
        printf("\n-- Articale %d -- \n", i + 1);
        printf("Enterez Le Desgnation de Articale : ");
        gets(articales[i].designation);
        printf("Enterez Le Prix De Articale : ");
        scanf("%f", &articales[i].prix);
        printf("Enterez La Quntite : ");
        scanf("%d", &articales[i].quantite); getchar();
        articales[i].montant = articales[i].quantite * articales[i].prix;
        printf("Are You Have Another Articlaes [1 : YES, 0: NO] : ");
        scanf("%d", &check); getchar();
        i++;
    }
    return i;
}

void Affichage(Artical articales[50], int n) {
    float somme = 0;
    int i, amis;
    printf("Details D'achat : \n");
    for (i = 0; i < n; i++) {
        printf("%s \t %.2f \t %d \t %.2f\n", articales[i].designation,
        articales[i].prix, articales[i].quantite, articales[i].montant);
        somme += articales[i].montant;
    }
    printf("#### Total la payer : %.2f ERO\n", somme);
    printf("Enter Le Nombre Des Amis : ");
    scanf("%d", &amis);
    printf("Chaque Devra Payer %.2f", somme / amis);
}

int main() {
    Artical articales[50];
    int n, i;
    n = get_articales(&articales);
    Affichage(&articales, n);
    return 0;
}
*/

/*
// Structures Point et Rectangle et Calculs Geometriques
typedef struct {
    int x;
    int y;
} Point;

typedef struct {
    Point point_sup_gauche;
    Point point_inf_droit;
} Rectangle;

float surface(float hauteur, float largeur) {
    return hauteur * largeur;
}
float premietre(float hauteur, float largeur) {
    return 2 * (largeur + hauteur);
}
float diametre(float hauteur, float largeur) {
    return sqrt(pow(largeur, 2) + pow(hauteur, 2));
}
int main() {
    Point A = {1, 12};
    Point B = {5, 1};
    Rectangle rec1 = {A, B};
    float hauteur = rec1.point_sup_gauche.y - rec1.point_inf_droit.y;
    float largeur = rec1.point_inf_droit.x - rec1.point_sup_gauche.x;
    printf("La Surface %.2f\n", surface(hauteur, largeur));
    printf("La Premietre %.2f\n", premietre(hauteur, largeur));
    printf("La Diametre %.2f\n", diametre(hauteur, largeur));
/*
    Rectangle rec1;
    printf("Point A : Enter Le Coordonnes de point a gauche Sup : ");
    scanf("%d %d", &rec1.point_sup_gauche.x, &rec1.point_sup_gauche.y);
    printf("Point B : Enter Le Coordonnes de point a droite inf : ");
    scanf("%d %d", &rec1.point_inf_droit.x, &rec1.point_inf_droit.y);
    float hauteur = rec1.point_sup_gauche.y - rec1.point_inf_droit.y;
    float largeur = rec1.point_inf_droit.x - rec1.point_sup_gauche.x;
    printf("La Surface %.2f\n", surface(hauteur, largeur));
    printf("La Premietre %.2f\n", premietre(hauteur, largeur));
    printf("La Diametre %.2f\n", diametre(hauteur, largeur));

}
*/

/*
typedef struct {
    int donne;
    struct List *suivant;
} List;

List *ajout_au_debut(List *aincienL, int valeur) {
    List *neveauL  = (List *) malloc(sizeof(List));
    neveauL->donne = valeur;
    neveauL->suivant = aincienL;
    return neveauL;
}

void *display(List *aincienL) {
    if (aincienL == NULL) printf("La Liste Est Vide");
    else {
        List *temp = aincienL;
        while (temp != NULL) {
            printf("%d --> ", temp->donne);
            temp = temp->suivant;
        }
    }
}

int somme(List *ancienL) {
    int s = 0;
    List *temp = ancienL;
    while (temp != NULL) {
        s += temp->donne;
        temp = temp->suivant;
    }
    return s;
}

List *renvoie_autreL(List *tete) {
    List *temp, *autreL;
    autreL = NULL;
    temp = tete;
    while (temp != NULL) {
        autreL = ajout_au_debut(autreL, temp->donne);
        temp = temp->suivant;
    }
    free(temp);
    return autreL;
}

int main() {
    List *head = NULL;
    head = ajout_au_debut(head, 2);
    head = ajout_au_debut(head, 4);
    head = ajout_au_debut(head, 10);
    display(head);
    printf("\nLa Somme Est %d\n", somme(head));
    List *neveauL = renvoie_autreL(head);
    display(neveauL);
}
*/

/*
// Delete An Element from Sorted Table
void *Linear_Deletion_ele(int T[], int n, int ele) {
    int i;
    bool check = false;
    for (i = 0; i < n - 1; i++) {
        if (T[i] == ele || check == true) {
            T[i] = T[i + 1];
            check = true;
        }
    }
    if (check == true) n--;
    for (i = 0; i < n; i++) printf("%d   ", T[i]);
}

int main() {
    int i, n = 10, ele = 90;
    int T[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    for (i = 0; i < n; i++) printf("%d   ", T[i]);
    printf("\n");
    Linear_Deletion_ele(T, n, ele);
    return 0;
}
*/

/*
// Deletion An Element Using Binary Search
void *Binary_Deletion_ele(int T[], int n, int ele) {
    int max = n - 1, inf = 0, mil, pos = -1, i;
    while (inf <= max) {
        mil = (inf + max) / 2;
        if (T[mil] == ele) {
            pos = mil; break;
        }
        else if (T[mil] < ele) inf = mil + 1;
        else max = mil - 1;
    }
    if (pos != -1) {
        for (i = pos; i < n; i++) T[i] = T[i + 1];
        for (i = 0; i < n - 1; i++) printf("%d   ", T[i]);
    } else printf("%d Does not much any result", ele);
}

int main() {
    int i, n = 10, ele = 1010;
    int T[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    for (i = 0; i < n; i++) printf("%d   ", T[i]);
    printf("\n");
    Binary_Deletion_ele(T, n, ele);
    return 0;
}
*/

/* Exercice 1
int main() {
    int a, b;
    int *p = &a, *q = &b;
    printf("Entrez Premier Nombre : ");
    scanf("%d", p);
    printf("Entrez Deuxieme Nombre : ");
    scanf("%d", q);
    printf("LA Somme C'est %d", *p + *q);
    return 0;
}
*/

/* Exercice 2
int produitScalaire(int *p, int *q, int n) {
    int i;
    int k = 0;
    for (i = 0; i < n; i++) {
        k += *(p + i) * *(q + i);
    }
    printf("%d  ", k);
    printf("\n");
    return k;
}


int main() {
    int n = 10, i;
    int T1[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    int T2[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    int *p = produitScalaire(T1, T2, n);
    for (i = 0; i < n; i++) printf("%d  ", *(p + i));
    return 0;
}
*/

/*
int sommeChiffres(int nombre) {
    if (nombre < 10) {
        return nombre;
    } else {
        return (nombre % 10) + sommeChiffres(nombre / 10);
    }
}

int main() {
    int nombre;
    printf("Entrez un nombre : ");
    scanf("%d", &nombre);
    printf("La somme des chiffres de %d est : %d\n", nombre, sommeChiffres(nombre));
    return 0;
}
*/

/*
// Exercice 3
#define n 5
int main() {
    int T[n], i, somme = 0;
    int *p;
    for (p = T; p < T + n; p++) {
        printf("T[%d] = ", p - T);
        scanf("%d", p);
        somme += *p;
    }
    printf("La Somme Est %d", somme);
    return 0;
}
*/

/* Inverse Du Tableau
void inverseTableaux(int T[], int n) {
    int *p1 = T + n - 1;
    int *p2 = T;
    int AIDE;
    for (; p1 > p2; p1--, p2++) {
        AIDE = *p1;
        *p2 = *p1;
        *p1 = AIDE;
    }
}

int main() {
    int n = 6, i;
    int T[] = {1, 2, 3, 4, 5, 6};
    inverseTableaux(&T, n);
    for (i = 0; i < n; i++) printf("%d  ", T[i]);
}
*/

/* Exercice 5
int resoudre1(int a, int b, float *x) {
    if (a == 0) return 0;
    else if (a == 0 && b == 0) return -1;
    else {
        *x = b / a;
        return 1;
    }
}

int main() {
    int a = 10, b = 23;
    float result;
    int p = resoudre1(a, b, &result);
    if (p == 1) printf("La result C'est %.2f", result);
    else if (p == 0) printf("Pas De Solution");
    else printf("tout valeur x c'est est solution");
    return 0;
}
*/

/*
int main() {
    int x = 1, n = 10;
    int T[n];
    int *p1 = T, *p2 = T;
    for (; p1 < T + n; p1++) {
        printf("T[%d] = ", p1 - T + 1);
        scanf("%d", p1);
    }
    for (p1 = T; p1 < T + n; p1++) {
        if (*p1 == x) {
            for (p2 = p1; p2 < T + n - 1; p2++) {
                *p2 = *(p2 + 1);
            }
            n--;
            p1--;
        }
    }
    for (p1 = T; p1 < T + n; p1++) printf("%d  ", *p1);
    return 0;
}
*/

/*
int linear_search(int T[], int n, int ele) {
    int i;
    for (i = 0; i < n; i++) if (T[i] == ele) return i;
    return -1;
}

int main() {
    int n1 = 8, n2 = 5, n3 = 3, i;
    int T1[] = {3, 9, 7, 8, 8, 10, 0, 11};
    int T2[] = {2, 8, 0, 10, 3};
    int T3[] = {10, 3, 0};
    printf("Les Elements Commun Sont : \n");
    for (i = 0; i < n3; i++) {
        int x = linear_search(T1, n1, T1[i]);
        int y = linear_search(T2, n2, T2[i]);
        if (x != -1 && y != -1) printf("%d  ", T3[i]);
    }
    return 0;
}
// Complexity is O(n^2) n : the big table size
*/

/* Improvment From O(n^2) To O(n)
int main() {
    int T1[] = {3, 9, 7, 8, 8, 10, 0, 11};
    int T2[] = {2, 8, 0, 10, 3};
    int T3[] = {10, 3, 0};
    int n1 = sizeof(T1) /sizeof(T1[0]);
    int n2 = sizeof(T2) /sizeof(T2[0]);
    int n3 = sizeof(T3) /sizeof(T3[0]);
    int i;
    // Declare another table for frequency
    int F1[20] = {0};
    int F2[20] = {0};
    int F3[20] = {0};
    // Increase The Frequency
    for (i = 0; i < n1; i++) {
        F1[T1[i]] += 1;
        if (i < n2) F2[T2[i]] += 1;
        if (i < n3) F3[T3[i]] += 1;
    }
    for (i = 0; i < n1; i++) printf("%d  ", F1[i]); printf("\n");
    for (i = 0; i < n2; i++) printf("%d  ", F2[i]); printf("\n");
    for (i = 0; i < n3; i++) printf("%d  ", F3[i]); printf("\n");
    // check each case if has same frequency and in the same index
    printf("The Dublicates elements in this three tables is : ");
    for (i = 0; i < 20; i++) {
        if (F1[i] > 0 && F2[i] > 0 && F3[i] > 0) printf("%d ", i);
    }
    return 0;
}
*/

/*
// The Dublicates elements Between Three Tables
void find_dublicates_eles(int T1[], int T2[], int T3[], int n1, int n2, int n3) {
    int i = 0, j = 0, k = 0;
    while (i < n1 && j < n2 && k < n3) {
        if (T1[i] == T2[j] && T2[j] == T3[k]) {
            printf("%d  ", T1[i]);
            i++; j++; k++;
        }
        else if (T1[i] < T2[j]) i++;
        else if (T2[j] < T3[k]) j++;
        else k++;
    }
}

int main() {
    int T1[] = {1, 2, 3, 4, 5, 6, 7, 8, 9};
    int T2[] = {0, 1, 2, 3, 90, 99};
    int T3[] = {1, 2, 3, 82};
    int n1 = sizeof(T1) / sizeof(T1[0]);
    int n2 = sizeof(T2) / sizeof(T2[0]);
    int n3 = sizeof(T3) / sizeof(T3[0]);
    find_dublicates_eles(T1, T2, T3, n1, n2, n3);
}
*/

/*
// Linear Search With Recursion
int linear_recursion1(int T[], int n, int ele, int *x) {
    if (n < 0) {
        *x = -1; return -1;
    } else if (T[n] == ele) {
        *x = n; return 0;
    } else return linear_recursion1(T, n - 1, ele, x);
}

int linear_recursion2(int T[], int n, int ele, int i) {
    if (i > n) return -1;
    else if (T[i] == ele) return i;
    else {
        return linear_recursion2(T, n, ele, i + 1);
    }
}

int main() {
    int ele = 4, result, i = 0;
    int T[] = {1, 2, 0, -1, 23, 4, 56};
    int n = sizeof(T) / sizeof(T[0]);
    linear_recursion1(T, n - 1, ele, &result);
    if (result == -1) printf("%d Does Not Exit", ele);
    else printf("%d ele Exit In %d", ele, result);
    printf("\n");
    result = linear_recursion2(T, n, ele, i);
    if (result == -1) printf("%d Does Not Exit", ele);
    else printf("%d ele Exit In %d", ele, result);
    return 0;
}
*/

/*
// Binary Search With Recursion
int binary_recursion1(int T[], int ele, int inf, int sup, int p) {
    if (inf > sup) return -1;
    if (T[p] < ele) inf = p + 1;
    if (T[p] > ele) sup = p - 1;
    if (T[p] == ele) return p;
    else return binary_recursion1(T, ele, inf, sup, (sup + inf) / 2);
}

int binary_recursion2(int T[], int ele, int sup, int inf) {
    int mil = (sup + inf) / 2;
    if (inf > sup) return -1;
    if (T[mil] == ele) return mil;
    else if (T[mil] > ele) return binary_recursion2(T, ele ,mil - 1 , inf);
    else return binary_recursion2(T, ele, sup, mil + 1);
}

int main() {
    int ele = 9, result;
    int T[] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
    int n = sizeof(T) / sizeof(T[0]);
    int inf = 0, sup = n - 1, p = (sup + inf) / 2;
    result = binary_recursion1(T, ele, inf, sup, p);
    if (result == -1) printf("%d Does Not Exit", ele);
    else printf("%d ele Exit In %d", ele, result);
    printf("\n");
    result = binary_recursion2(T, ele, n - 1, 0);
    if (result == -1) printf("%d Does Not Exit", ele);
    else printf("%d ele Exit In %d", ele, result);
    return 0;
}
*/

/*
// Debut de projets de gestion des emploi
typedef struct {
    int annee;
    int mois;
    int jour;
} Date;

typedef struct {
    int nbr_rue;
    char nom_rue[50];
    int code_postal;
    char ville[50];
} Adresse;

typedef struct {
    char nom[50];
    char prenom[50];
    Adresse rsd;
    Date d_nai;
} Employe;

// void remplissage(Employe *emply1)
Employe remplissage() {
    Employe emp;
    Employe *emply1 = &emp;
    printf("Enter Votre annee : ");
    scanf("%d", &emply1->d_nai.annee);
    printf("Enter Votre Mois : ");
    scanf("%d", &emply1->d_nai.mois);
    printf("Enter Votre Jour : ");
    scanf("%d", &emply1->d_nai.jour);
    printf("Enter Le Numero De Rue : ");
    scanf("%d", &emply1->rsd.nbr_rue);
    getchar();
    printf("Enter Le Nom De Rue : ");
    scanf("%49[^\n]s", &emply1->rsd.nom_rue); emply1->rsd.nom_rue[49] = '\0';
    printf("Enter Votre Code Postal : ");
    scanf("%d", &emply1->rsd.code_postal); getchar();
    printf("Enter Le Nom De Ville : ");
    scanf("%49[^\n]s", &emply1->rsd.ville); getchar(); emply1->rsd.ville[49] = '\0';
    printf("Enter Votre Nom : ");
    scanf("%49[^\n]s", &emply1->nom); getchar(); emply1->nom[49] = '\0';
    printf("Enter Votre Prenom : ");
    scanf("%49[^\n]s", &emply1->prenom); emply1->prenom[49] = '\0';
    return emp;
}

int Verfier_ville(char ville[50], Employe *emply1) {
    if (strcmp(ville, emply1->rsd.ville) == 0) return 0;
    else return -1;
}

int Verfier_annee(int annee, Employe *emply1) {
    if (annee >= emply1->d_nai.annee) return 0;
    else return -1;
}

void affichage(Employe *emply) {
    printf("\n-------------\n");
    printf("\t Nom & Prenom : __ %s %s __\n", emply->nom, emply->prenom);
    printf("\t Adreesse : %s %d %s %d\n", emply->rsd.ville, emply->rsd.code_postal, emply->rsd.nom_rue, emply->rsd.nbr_rue);
    printf("\t Date : %d %d %d\n", emply->d_nai.annee, emply->d_nai.mois, emply->d_nai.jour);
}


int main() {
    int i, n;
    printf("Enter Le Nombre d'emplois : ");
    scanf("%d", &n);
    Employe emplys[n];
    for (i = 0; i < n; i++) {
        // remplissage(&emplys[i]);
        printf("\n----------------------\n");
        printf("Employe num %d", i + 1);
        printf("\n----------------------\n");
        emplys[i] = remplissage();
    }
    // Verifier La Ville et L'annee
    getchar();
    char ville[50];
    printf("\n--- Saisir Le Nom de Ville : ");
    scanf("%49[^\n]s", ville); getchar(); ville[50] = '\0';
    int annee;
    printf("\n--- Enter L'annee : ");
    scanf("%d", &annee);
    printf("\nLe Employes Qui Verifier Les Condition Suivant C'est : \n");
    for (i = 0; i < n; i++) {
        int result_ville = Verfier_ville(ville, &emplys[i]);
        int result_annee = Verfier_annee(annee, &emplys[i]);
        if (result_ville == result_annee) {
            affichage(&emplys[i]);
        }
    }
    return 0;
}
*/

/*
// Josephus's problem
# define size 32
typedef struct {
    int n; // mans number
    int k; // step
} Josephus;

int find_serviving(int T[], int n, int k) {
    int result = -1, i = 0, p = 0, count = 0;
    while (count < n - 1) {
        if (T[i] != -1 && p == k - 1) {
            T[i] = -1; p = 0; count++;
        }
        if (T[i] != -1) p++;
        i++;
        if (i >= n) i = 0;
    }
    for (i = 0; i < n; i++) {
        if (T[i] != -1) {
            result = T[i];
        }
    }
    return result;
}

int main() {
    int i = 0, n_test, count = 0, j = 0;
    Josephus J[size];
    int result[size];
    scanf("%d", &n_test);
    for (i = 0; i < n_test; i++) {
        scanf("%d %d", &J[i].n, &J[i].k);
        int T[J[i].n + 3];
        for (j = 1; j <= J[i].n; j++) T[j - 1] = j;
        // printf("Case %d: %d\n", i + 1, find_serviving(T, J[i].n, J[i].k));
        result[i] = find_serviving(T, J[i].n, J[i].k);
    }
    for (i = 0; i < n_test; i++) printf("Case %d: %d\n", i + 1, result[i]);
    return 0;
}
*/

/*
int main(){
    int i;
    printf("ASCII Characters : \n");
    for (i = 0; i < 256; i++) {
    if ((i % 32) == 0) printf("\n");
    printf("%c ", (char) i);
    }
    printf("\n");
    if ('m' > 'M') {
        printf("Hello World");
    }
    return 0;
}
*/

/*
int main() {
    char ch1[] = "chien";
    char ch2[] = "chat";
    int result = strcmp(ch1, ch2);
    if (result == -1) {
        printf("%s est inf�rieur a %s dans l'ordre alphabetique.\n", ch1, ch2);
    } else if (result == 0) {
        printf("%s est egal a %s dans l'ordre alphabetique.\n", ch1, ch2);
    } else {
        printf("%s est sup�rieur a %s dans l'ordre alphabetique.\n", ch1, ch2);
    }
    return 0;
}
*/

/*
int main() {
    char ch[] = "12333";
    int valeur = atoi(ch);

    printf("La valeur num�rique de la cha�ne \"%s\" est : %d\n", ch, valeur);

    return 0;
}
*/

/*
int main() {
    char ch[] = "3.14";
    double valeur = atof(ch);
    printf("La valeur num�rique de la cha�ne \"%s\" est : %f\n", ch, valeur);
    return 0;
}
*/

/*
int main() {
    int nombre = 255;
    char chaine[20];
    // Convertir l'entier 255 en cha�ne de caract�res en base 16
    itoa(nombre, chaine, 8);
    printf("La cha�ne de caract�res repr�sentant %d en base 16 est : %s\n", nombre, chaine);
    return 0;
}
*/

/*
int main() {
    char chaine[] = "Bonjour";
    char caractere = 'j';
    // Recherche de la premi�re occurrence de 'j' dans la cha�ne 'Bonjour'
    char *ptr = strchr(chaine, caractere);
    if (ptr != NULL) {
        printf("Premi�re occurrence de '%c' trouv�e � l'index %ld dans la cha�ne : %s\n", caractere, ptr - chaine, chaine);
    } else {
        printf("Le caract�re '%c' n'a pas �t� trouv� dans la cha�ne : %s\n", caractere, chaine);
    }
    return 0;
}
*/

/*#include <string.h>

int main() {
    char source[] = "Hello, world!";
    char destination[20];
    strncpy(destination, source, 5);
    destination[5] = '\0';
    printf("La cha�ne copi�e est : %s\n", destination);
    return 0;
}
*/
/*
int main() {
    char t[] = "Hello, World";
    char s[] = "Good";
    strncat(s, t, 5);
    printf("%s", s);
}
*/

/*
int fact(int n) {
    int p = 1;
    for (int i = 1; i <= n; i++) {
        p *= i;
    }
    return p;
}
int somme(int n) {
    int Un = 0;
    for (int i = 1; i <= n; i++) {
        Un += fact(i) / i;
    }
    return Un;
}
int main() {
    printf("U(4) = %d\n", somme(4));
    printf("U(7) = %d\n", somme(7));
    printf("U(100) = %d", somme(100));
}
*/

/*
int fact(int n) {
    int p = 1, j;
    for (j = 1; j <= n; j++) {
        p *= j;
    }
    return p;
}
int funcA(int m) {
    return fact(m + 3) / fact(m + 1);
}
int funcB(int m) {
    int s = 0, i;
    for (i = 0; i <= m; i++) {
        s += i;
    }
    return s;
}
int funcC(int m) {
    int s = 0, i;
    for (i = 0; i <= m; i++) {
        s += pow(i, 2);
    }
    return s;
}
int funcD(int m) {
    int s = 0, i;
    for (i = 0; i <= m; i++) {
        s += pow(i, 3);
    }
    return s;
}
void funcS(int m) {
    // FuncA
    int Am = (m + 3) * (m + 2);
    // FuncB
    int Bm = m * ((m + 1) / 2);
    // FuncC
    int Cm = (m * (m + 1) * (2 * m + 1)) / 6;
    // FuncD
    int Dm = ((m * (m + 1)) / 2) * ((m * (m + 1) / 2));
    printf("A(%d) = %d\n", 0, Am);
    printf("B(%d) = %d\n", 0, Bm);
    printf("C(%d) = %d\n", 0, Cm);
    printf("D(%d) = %d\n", 0, Dm);

int main() {
    printf("A(%d) = %d\n", 0, funcA(20));
    printf("B(%d) = %d\n", 0, funcB(40));
    printf("C(%d) = %d\n", 0, funcC(60));
    printf("D(%d) = %d\n", 0, funcD(80));
    printf("\n");
    funcS(60);
    return 0;
}
*/

/*
int minutes = 14, heure = 3, second = 34;
void *afficher_heure(int minutes, int heure, int second) {
    printf("Il est %d heure minutes %d second %d\n", heure, minutes, second);
}
void *saisir_heure(int *im, int *is, int *ih) {
    *im = 10;
    *is = 10;
    *ih = 10;
}
void tick(int *im, int *is, int *ih) {
    if (*is < 59) {
        *is += 1;
    } else {
        *is += 0;
        if (*im < 59) *im += 1;
        else {
            *im = 0;
            *ih += 1;
        }
    }
}
int main() {
    afficher_heure(minutes, heure, second);
    saisir_heure(&minutes, &heure, &second);
    afficher_heure(minutes, heure, second);
    tick(&minutes, &heure, &second);
    afficher_heure(minutes, heure, second);
    return 0;
}
*/

/*
int sommeChffres(int n) {
    if (n < 10) return n;
    else return sommeChffres(n / 10) + n % 10;
}

int main() {
    int n = 4545;
    printf("La Somme Des Chiffres de nombre %d c'est %d", n, sommeChffres(n));
}
*/

/*
#define n 5
int main() {
    int T[n];
    int *p;
    int s = 0;
    for (p = T; p < T + n; p++)  {
        scanf("%d", p);
        s += *p;
    }
    printf("La Somme Des Elements C'est : %d", s);
    return 0;
}
*/

/*
#define n 5
void ReverseT(int T[n]) {
    int *p1 = T, *p2 = T + n - 1, AIDE;
    for (; p1 < p2; p1++, p2--) {
        AIDE = *p1;
        *p1 = *p2;
        *p2 = AIDE;
    }
}

int main() {
    int T[n] = {1, 2, 3, 4, 5};
    ReverseT(T);
    for (int i = 0; i < n; i++) printf("%d  ", T[i]);
    return 0;
}
*/

/*
int Resoudre1(int a, int b, int *x) {
    if (a == 0 && b == 0) {
        return -1;
    }
    else if (a == 0) return 0;
    else {
        *x = -b / a;
        return 1;
    }
}

int main() {
    int result;
    int p = Resoudre1(10, 0, &result);
    if (p == 0) printf(" Pas De Solution");
    else if (p == 1) printf(" La Solution C'est %d", result);
    else printf("Tout Valuer de x ets un solution");
    return 0;
}
*/

/*
void sup_occ(int ele, int T[], int *n) {
    int *p1, *p2;
    for (p1 = T; p1 < T + *n; p1++) {
        if (*p1 == ele) {
            for (p2 = p1; p2 < T + *n - 1; p2++) {
                *p2 = *(p2 + 1);
            }
            p1--;
            *n = *n - 1;
        }
    }
}
int main() {
    int n = 13;
    int ele = 2;
    int T[] = {1, 2, 3, 2, 2, 2, 4, 5, 5, 2, 3, 23, 4};
    sup_occ(ele, T, &n);
    for (int *p1 = T; p1 < T + n; p1++) printf("%d  ", *p1);
    return 0;
}
*/

/*
typedef struct {
	int data;
	struct Node *next;
} Node;

Node *add_at_head(Node *head, int n) {
	Node *new_node = (Node *) malloc(sizeof(Node));
	new_node->next = head;
	new_node->data = n;
	head = new_node;
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

Node *Make_LinkedList(Node *head) {
	Node *anotherL;
	if (head == NULL) printf("Error List Empty");
	else {
		Node *temp = head;
		while (temp != NULL) {
			anotherL = add_at_head(anotherL, temp->data);
			temp = temp->next;
		}
	}
	return anotherL;
}

int main() {
    Node *head = NULL;
    int nbr_ele, i, n;
    printf("Enter NUmber Of Element : ");
    scanf("%d", &nbr_ele);
    for (i = 0; i < nbr_ele; i++) {
    	scanf("%d", &n);
    	head = add_at_head(head, n);
	}
	display(head);
	Node *head2 = Make_LinkedList(head);
	printf("\nLinked List 2 : \n");
	display(head2);
    return 0;
}
*/


/*
typedef struct {
    int donne;
    struct List* suivant;
} List;

List *ajout_au_debut(List *aincienL, int valeur) {
    List *neveauL  = (List *) malloc(sizeof(List));
    neveauL->donne = valeur;
    neveauL->suivant = aincienL;
    return neveauL;
}

void display(List *aincienL) {
    if (aincienL == NULL) printf("La Liste Est Vide");
    else {
        List *temp = aincienL;
        while (temp != NULL) {
            printf("%d --> ", temp->donne);
            temp = temp->suivant;
        }
    }
}

int somme(List *ancienL) {
    int s = 0;
    List *temp = ancienL;
    while (temp != NULL) {
        s += temp->donne;
        temp = temp->suivant;
    }
    return s;
}

List *renvoie_autreL(List *tete) {
    List *temp = tete, *autreL = NULL;
    while (temp != NULL) {
        autreL = ajout_au_debut(autreL, temp->donne);
        temp = temp->suivant;
    }
    return autreL;
}

int main() {
    List *head = NULL;
    head = ajout_au_debut(head, 2);
    head = ajout_au_debut(head, 4);
    head = ajout_au_debut(head, 10);
    display(head);
    printf("\nLa Somme Est %d\n", somme(head));
    List *neveauL = renvoie_autreL(head);
    display(neveauL);
}
*/



/*  Get The Max Salary Of An Employe
typedef struct {
	char nom[50];
	char prenom[50];
	char departement[50];
	int salaire;
} Employe;

Employe remplissage() {
	Employe empl;
	printf("Enter Votre Nom : ");
	gets(empl.nom);
	printf("Enter Votre Prenom : ");
	gets(empl.prenom);
	printf("Enter Votre Departement : ");
	gets(empl.departement);
	printf("Enter Votre Salaire : ");
	scanf("%d", &empl.salaire);
	getchar();
	return empl;
}

void Affichage(Employe empl) {
	printf("Nom : %s\n", empl.nom);
	printf("Prenom : %s\n", empl.prenom);
	printf("Departement : %s\n", empl.departement);
	printf("Salaire : %d$\n", empl.salaire);
	printf("\n---------------------\n");
}

void getMax(Employe empls[], int n) {
	int max = empls[0].salaire, i;
	for (i = 1; i < n; i++) {
		if (empls[i].salaire > max) {
			max = empls[i].salaire;
		}
	}
	printf("Le Salaire Plus Eleve C'est : %d\n", max);
	for (i = 0; i < n; i++) {
		if (max == empls[i].salaire) Affichage(empls[i]);
	}
}

int main() {
	int i, n, max;
	printf("Enterz Le Nombre Des Employe : ");
	scanf("%d", &n); getchar();
	Employe empls[n];
	for (i = 0; i < n; i++) {
		printf("\n------------------------\n");
		printf("Employe %d : \n", i + 1);
		empls[i] = remplissage();
		printf("\n------------------------\n");
	}
	printf("Les Employes Sont : \n-------------------\n");
	for (i = 0; i < n; i++) {
		Affichage(empls[i]);
	}

	getMax(empls, n);
	return 0;
}
*/


/*
// Gestion d'un Bibliotheque
typedef struct {
	char titre[50];
	char auteur[50];
	int nbr_page;
	int prix;
} Livre;

void ajouter_details(Livre *lvr) {
	getchar();
	printf("Enterz Le Titre : ");
	gets(lvr->titre);
	printf("Enterz Le Nom De L'auteur : ");
	gets(lvr->auteur);
	printf("Enterz Le Nombre Des Pages : ");
	scanf("%d", &lvr->nbr_page);
	printf("Enterz Le Prix : ");
	scanf("%d", &lvr->prix);
}

void afficher_details(Livre lvr) {
	printf("Titre : %s\n", lvr.titre);
	printf("Auteur : %s\n", lvr.auteur);
	printf("nombre de page : %d\n", lvr.nbr_page);
	printf("Prix : %d\n", lvr.prix);
}

int main() {
	// Menu
	while (1) {
		int choix, i, n;
		Livre livres[100];
		printf("\n------------------------------------------\n");
		printf("\n\t\t\t * MENU * \n\n");
		printf("\t1- Ajouter Les Details Des Livres \n\n");
		printf("\t2-  Afficher Les Details Des Livres \n\n");
		printf("\t3-  Afficher D'un Auteur donne \n\n");
		printf("\t4-  Compte Le Nombres Des Livres \n\n");
		printf("\t5-  Sortir : \n\n");
		printf("\n------------------------------------------\n");
		printf("\tSaisir Votre Choix : ");
		scanf("%d", &choix);
		// Start A Programme
		if (choix == 1) {
			printf("Enterz Le Nombres Des Livres : ");
			scanf("%d", &n);
			// Remplissage
			for (i = 0; i < n; i++) {
				printf("\n--------------------\n");
				printf("Livre %d : ", i + 1);
				printf("\n--------------------\n");
				ajouter_details(&livres[i]);
			}
		}
		else if (choix == 2) {
			// Affichage
			if (!n == 0) {
				printf("\n------------------------------------------------------\n");
				printf("\n-----------------\n");
				for (i = 0; i < n; i++) {
					printf("Livre %d\n------------\n", i + 1);
					afficher_details(livres[i]);
				}
				printf("\n-----------------\n");
			} else {
				printf("\n-----------------\n");
				printf("\nAucun Livres Exit\n");
				printf("\n-----------------\n");
			}

		}
		else if (choix == 3) {
			// Affichage des livres d'un auteur donnee
			if (n != 0) {
				char auteur_donne[50];
				printf("\n-----------------\n");
				printf("Enterz Le Nom De Auteur : "); getchar();
				gets(auteur_donne);
				printf("Le Livres De %s C'est : \n", auteur_donne);
				for (i = 0; i < n; i++) {
					if (strcmp(auteur_donne, livres[i].auteur) == 0) {
						printf("\t %s  \t  %d$\n", livres[i].titre, livres[i].prix);
					}
				}
				printf("\n-----------------\n");
			} else {
				printf("\n-----------------\n");
				printf("Aucun LIvres Exit");
				printf("\n-----------------\n");
			}

		}
		else if (choix == 4) {
			printf("\n-----------------\n");
			printf("Le Nombres Des Livres C'est : %d", n);
			printf("\n-----------------\n");

		} else break;
	}
	return 0;
}
*/

/*
// Power Crisis 1031
int is_That_m(int T[], int N, int m) {
	int i = 0, count = 0, p = 0;
	for (i = 1; i <= N; i++) {
		T[i - 1] = i;
	}
	while (count < N - 1) {
		if ((p == m - 1 && T[i] != -1) || (count == 0 && i == 0)) {
			T[i] = -1;
			count++;
			p = 0;
		}
		if (T[i] != -1) p++;
		i++;
		if (i > N - 1) i = 0;
	}
	for (i = 0; i < N; i++) {
		if (T[i] == 13) return 0;
	}
	return -1;
}

int main() {
	int N = 7;
	int m, i, x, T[N];
	// Fill The Table
	for (i = 1; i <= N; i++) {
		T[i - 1] = i;
	}
	// Start Search Of M
	for (i = 1; i <= N; i++) {
		m = i;
		int x = is_That_m(T, N, m);
		if (x == 0) {
			printf("m = %d", m); break;
		} else {
			printf("x = %d\n", x);
		}
	}
	return 0;
}
*/


/*
// Power Crisis 1031
int is_That_m(int N, int m) {
	int i, count = 0, p = 0, T[N];
	for (i = 1; i <= N; i++) {
		T[i - 1] = i;
	}
	while (count < N - 1) {
		if ((p == m - 1 && T[i] != -1) || (count == 0 && i == 0)) {
			T[i] = -1;
			count++;
			p = 0;
		}
		if (T[i] != -1) p++;
		i++;
		if (i > N - 1) i = 0;
	}
	for (i = 0; i < N; i++) {
		if (T[i] == 13) {
			return 0;
		}
	}
	return -1;
}

int main() {
	int N, m, i, count = 0;
	int *result = (int *) malloc(104 * 4);
	while ((scanf("%d", &N)) && N != 0) {
		if (N == 13) {
			*(result + count) = 1; count++;
			continue;
		}
		// Start Search Of M
		else {
			for (i = 2; i <= N; i++) {
				m = i;
				int x = is_That_m(N, m);
				if (x == 0) {
					*(result + count) = m;
					count++;
					break;
				}
			}
		}
	}
	// print the result
	for (i = 0; i < count; i++) printf("%d\n", *(result + i));
	return 0;
}
*/

/*
#define n 3050 // Think Out Of The Box

bool isPrime(int i) {
	int j;
	if (i == 2 || i == 3) return true;
	else {
		for (j = 2; j <= i / 2; j++) {
			if (i % j == 0) return false;
		}
	}
	return true;
}

void generate_primes(int *p) {
	int i, count = 0;
	for (i = 2; i < 30000; i++) {
		bool check = isPrime(i);
		if (check == true) {
			p[count] = i;
			count++;
		}
	}
}


int is_serve(int *T, int N, int *S) {
    int pos = 0, count = 0, i = 0, m = T[i], x = -1;
    while (i != N - 1) {
        if (S[pos] != -1 && count == m) {
            S[pos] = -1; i++; m = T[i]; count = 0;
            for (int k = 0; k < N; k++) printf("%d ", S[k]);
            printf("\n");
        }
        if (S[pos] != -1) count++;
        pos++;
        if (pos == N) pos = 0;
    }
    printf("%d\n", search_serve(S, N));
}


int search_serve(int *S, int N) {
    for (int j = 0, i = N - 1; j <= i; j++, i--) {
        if (S[j] != -1) return j + 1;
        if (S[i] != -1) return i + 1;
    }
}

int main() {
	int N, m, i, count = 0, T[n], S[n];
	for (int j = 0; j < n; j++) S[j] = j + 1;
	generate_primes(T);
	while ((scanf("%d", &N)) && N != 0) {
        // start search for serve person
        for (int j = 0; j < N; j++) S[j] = j + 1;
        is_serve(T, N, S);
	}
	return 0;
}
*/

/*
int is_serve2(int N, int step) {
    int start = 1;
    for (int i = 1; i <= N; i++) {
        start = (start + step - 1) % i + 1;
        printf("\nStart = %d\n", start);
    }
    return start;
}
#define n 10000
int main() {
    int N, step, nbr, T[n], count = 0;
    scanf("%d", &nbr);
    for (int i = 0; i < nbr; i++) {
        while ((scanf("%d %d", &N, &step)) != -1) {
           T[count] = is_serve2(N, step);
           count++;
        }
    }
    for (int i = 0; i < nbr; i++) {
        printf("Case %d: %d\n", i + 1, T[i]);
    }
}
*/

/* File Exercice For All Function
int main() {
    char file1[10], file2[10];
    printf("Enter File Number One : "); gets(file1);
    printf("Enter File Number Two : "); gets(file2);
    // Opening The Filies
    FILE *f1 = fopen(file1, "rb");
    FILE *f2 = fopen(file2, "ab+");
    char file1_content[100];
    if (f1 != NULL) {
        printf("We Are Open The Files\n");
        /* Method Number One [printf(), scanf()]
         while (feof(f1) != true) {
            fscanf(f1, "%s", file1_content);
            fprintf(f2, "%s", file1_content);
        }
        */
        /* Method Number Two
        int c;
        while ((c = fgetc(f1)) != EOF) { // getc return character
            fputc(c, f2);
        }
        */
        /* Method Number Three
        while (fgets(file1_content, 99, f1) != NULL) {
            fputs(file1_content, f2);
        }
        */
        /*  Method For Binary File
        int x;
        do {
            x = fread(&file1_content, sizeof(file1_content), 1, f1);
            printf("%s", file1_content);
            fwrite(&file1_content, sizeof(file1_content), 1, f2);
        } while (x > 1);
        *//* Using While And feof(file);
        while (feof(f1) != true) {
            fread(&file1_content, sizeof(file1_content), 1, f1);
            printf("%s", file1_content);
            fwrite(&file1_content, sizeof(file1_content), 1, f2);
        }
        fclose(f1);
        fclose(f2);
    } else {
        printf("\n%s Does Not Exit\n", file1);
    }
    return 0;
}
*/

// ftell exercice

/*
int main() {
    FILE *p_file = fopen("file.txt", "r");
    int pos = ftell(p_file);
    printf("The Position Is %d\n",  pos); // 0
    char file_content[20];
    while(feof(p_file) != true) {
        fgets(file_content, 19, p_file);
        printf("%s\n", file_content); // HELLO
    }
    pos = ftell(p_file);
    printf("The Position Is %d\n",  pos); // 6
    return 0;
}
*/

/*
int main() {
    FILE *f1 = fopen("file.txt", "r+");
    if (f1 == NULL) printf("Can Not THis File");
    else {
        printf("We Are OPen The File Succefully");
        fputs("HELLO", f1);
        fseek(f1, 2, SEEK_SET);
        fputs("XX", f1);
        char content[20];
        fseek(f1, 0, SEEK_SET);
        fgets(content, 19, f1);
        printf("%s", content);
    }
    return 0;
}
*/

/*
int main() {
    FILE *p_file = fopen("file.txt", "w");
    if (p_file == NULL) printf("Can Not Open This File");
    else {
        int position;
        printf("\nWe Are Open The File Succefully\n");
        fputs("Hello", p_file);
        position = ftell(p_file);
        printf("\nThe Position is %d\n", position);
        fseek(p_file, -2, SEEK_END);
        rewind(p_file);
        fputs("XX", p_file);
    }
    return 0;
}
*/

/*
int main() {
    char file1[20];
    printf("Enter The Name Of The File : ");
    scanf("%[^\n]s", file1);
    FILE *p_file = fopen(file1, "r");
    if (p_file == NULL) printf("Can Not Open This File");
    else {
        char file_content[50];
        printf("\nWe Are Open The File Succefully\n");
        // fputs("HELLO WORLD", p_file);
        /*
        fseek(p_file, 0, SEEK_END);
        int pos = ftell(p_file);
        printf("\nposition = %d\n", pos);
        int c, pos1 = 1;
        while (pos1 <= pos) {
            fseek(p_file, -pos1, SEEK_END);
            c = fgetc(p_file); pos1++;
            printf("%c", (char) c);
        }
        */
        /*
        fseek(p_file, 0, SEEK_END);
        int c, pos = ftell(p_file);
        for (int i = 1; i <= pos; i++) {
            fseek(p_file, -i, SEEK_END);
            c = getc(p_file);
            printf("%c", c);
        }
    }
    fclose(p_file);
    rename("file1.txt", "file.txt");
    // remove("file1.txt");
    return 0;
}
*/

/*
int main() {
    union note {
        int mark; char score;
    };
    union note result;
    printf("Enter The NOtes : ");
    scanf("%c", &result.score); getchar();
    // printf("Enter The Mark : ");
    // scanf("%c", &result.score);
    result.mark = 66;
    printf("%d %c", result.mark, result.score);
    return 0;
}
*/

/*
// Exercice 3
int * alloue_Vecteur(int t, int val) {
    int *vect = (int *) malloc(sizeof(int) * t);
    if (vect == NULL) printf("Erreur Pour L'allocation");
    else {
        printf("\nAllocation Cree \n");
        for (int i = 0; i < t; i++) vect[0] = val;
    }
    return vect;
}

void libere_Vecteur(int * vect) {
    printf("\nLibration de Esapce Du Vecteur\n");
    free(vect);
}

int main() {
    int t = 10, val = 2;
    int *vect = alloue_Vecteur(t, val);
    libere_Vecteur(vect);
    return 0;
}
*/

/*

void longueur_chaine_tableau(char chaine[]) {
    int longueur = 0;
    while (chaine[longueur] != '\0') {
        longueur++;
    }
    printf("La Longueur De Chaine C'est : %d\n", longueur);
}

void longueur_chaine_pointer(char *p) {
    int longueur = 0;
    for (; *p != '\0'; p++)  longueur++;
    printf("La Longueur De Chaine C'est : %d\n", longueur);
}

int main() {
    // Avec Tableau
    char chaine[] = "Hello World";
    longueur_chaine_tableau(chaine);
    longueur_chaine_pointer(&chaine);
    return 0;
}

*/

/*
    while ((c = getchar()) && c != '\n') {
        chaine[i] = c; i++;
    }
    chaine[i] = '\0';
*/

/*
int compare_chaines(char *s1, char *s2) {
    while (*s1 != '\0' && *s2 != '\0') {
        if (*s1 < *s2) return -1;
        else if (*s1 > *s2) return 1;
        s1++;
        s2++;
    }
    if (*s1 == '\0' && *s2 == '\0') return 0;
    else if (*s1 == '\0') return -1;
    else return 1;
}


int main() {
    char s1[] = "Alpha";
    char s2[] = "Beta";
    if (compare_chaines(s1, s2) == 0) printf("les deux chaînes sont équivalentes\n");
    else if (compare_chaines(s1, s2) == -1) printf("%s est avant %s\n", s1, s2);
    else printf("%s est avant %s\n", s2, s1);
    return 0;
}
*/

/*
void echangeValeurs(int* a, int* b, int* c, int* d) {
    int temp = *a;
    *a = *b;
    *b = *c;
    *c = *d;
    *d = temp;
}
int main() {
    int a = 10, b = 20, c = 30, d = 40;
    printf("Avant l'echange : a = %d, b = %d, c = %d, d = %d\n", a, b, c, d);
    echangeValeurs(&a, &b, &c, &d);
    printf("Apres l'echange : a = %d, b = %d, c = %d, d = %d\n", a, b, c, d);

    return 0;
}
*/

/*

int resoudreEquation(float a, float b, float *x) {
    if (a == 0) {
        if (b == 0) {
            return -1;
        } else {
            return 0;
        }
    } else {
        *x = -b / a;
        return 1;
    }
}

int main() {
    float a, b, x;
    printf("Entrez la valeur de a : ");
    scanf("%f", &a);
    printf("Entrez la valeur de b : ");
    scanf("%f", &b);
    int nbSolutions = resoudreEquation(a, b, &x);
    switch (nbSolutions) {
        case 0:
            printf("L'equation n'a pas de solution.\n");
            break;
        case 1:
            printf("L'equation a une solution unique : x = %.4f\n", x);
            break;
        case -1:
            printf("L'equation a une infinite des solutions.\n");
            break;
        default:
            printf("Erreur\n");
    }

    return 0;
}

*/


/*

void lireVecteur(float *V, int taille) {
    printf("Saisissez les elements du vecteur :\n");
    for (int i = 0; i < taille; i++) {
        printf("Element %d : ", i + 1);
        scanf("%f", &V[i]);
    }
}

void afficherVecteur(float *V, int taille) {
    printf("Vecteur : [ ");
    for (int i = 0; i < taille; i++) {
        printf("%.2f ", V[i]);
    }
    printf("]\n");
}

void sommeVecteurs(float *A, float *B, float *resultat, int taille) {
    for (int i = 0; i < taille; i++) {
        resultat[i] = A[i] + B[i];
    }
}

void produitScalaire(float *V, float scalaire, float *resultat, int taille) {
    for (int i = 0; i < taille; i++) {
        resultat[i] = V[i] * scalaire;
    }
}

float produitVecteurs(float *A, float *B, int taille) {
    float produit = 0;
    for (int i = 0; i < taille; i++) {
        produit += A[i] * B[i];
    }
    return produit;
}

int main() {
    int taille;
    printf("Entrez la taille : ");
    scanf("%d", &taille);
    float vecteurA[taille], vecteurB[taille], resultat[taille];
    float scalaire;
    printf("Enterz les elements du vecteur A :\n");
    lireVecteur(vecteurA, taille);
    printf("Enterz les elements du vecteur B :\n");
    lireVecteur(vecteurB, taille);
    int choix;
    printf("\nMenu :\n");
    printf("[1] Somme de vecteurs\n");
    printf("[2] Produit d'un vecteur par un scalaire\n");
    printf("[3] Produit scalaire de deux vecteurs\n");
    printf("Votre choix : ");
    scanf("%d", &choix);
    switch (choix) {
        case 1:
            sommeVecteurs(vecteurA, vecteurB, resultat, taille);
            printf("La somme des vecteurs est : ");
            afficherVecteur(resultat, taille);
            break;
        case 2:
            printf("Entrez le scalaire : ");
            scanf("%f", &scalaire);
            produitScalaire(vecteurA, scalaire, resultat, taille);
            printf("Le produit de vecteurA par le scalaire est : ");
            afficherVecteur(resultat, taille);
            break;
        case 3:
            printf("Le produit scalaire des vecteurs A et B : %.2f\n", produitVecteurs(vecteurA, vecteurB, taille));
            break;
        default:
            printf("Choix invalide\n");
    }
    return 0;
}

*/

/*
void additionnerMatrices(int **M1, int **M2, int **R, int l, int c) {
    for (int i = 0; i < l; i++) {
        for (int j = 0; j < c; j++) {
            // R[i][j] = M1[i][j] + M2[i][j];
            *(*(R + i) + j) = *(*(M1 + i) + j) + *(*(M2 + i) + j);
        }
    }
}

int main() {
    int l = 2, c = 2;
    int **M1 = (int **) malloc(sizeof(int *) * l);
    int **M2 = (int **) malloc(sizeof(int *) * l);
    int **R = (int **) malloc(sizeof(int *) * l);
    for (int i = 0; i < l; i++) {
        *(M1 + i) = (int *) malloc(c * sizeof(int));
        *(M2 + i) = (int *) malloc(c * sizeof(int));
        *(R + i) = (int *) malloc(c * sizeof(int));
    }
    // Fill The Matrix
    for (int i = 0; i < l; i++) {
        for (int j = 0; j < c; j++) {
            M1[i][j] = i + j;
            M2[i][j] = i + j;
        }
    }
    additionnerMatrices(M1, M2, R, l, c);
    // Printf The R Matrix
    for (int i = 0; i < l; i++) {
        for (int j = 0; j < c; j++) {
            printf("%d ", (*(*(R + i) + j)));
        }
        printf("\n");
    }
    // Free The Spaces
    /*
    for (int i = 0; i < l; i++) {
        free(M1[i]);
        free(M2[i]);
        free(R[i]);
    }
    free(M1);
    free(M2);
    free(R);
    */
/*
    for (int i = 0; i < l; i++) {
            free(*(M1 + i));
            free(*(M2 + i));
            free(*(R + i));
    } free(M1); free(M2); free(R);
/*
    for (int i = 0; i < l; i++) {
        free(*(M1 + i));
        free(*(M2 + i));
        free(*(R + i));
    }
    free(M1);
    free(M2);
    free(R);
*//*
    return 0;
}
*/

/*
///////// Start TD/TP 3

typedef struct cell {
    char *donne;
    struct cell *next;
    struct cell *prev;
} Element;

typedef struct {
    char first;
    char last;
    int size;
} Info;

void intialiser(Info *in) {
    in->first = 10; in->last = 20; in->size = 5;
}

int ajouter_ele(Element *ele) {

}


int main() {
    // 1
    Element *head = NULL;
    // 2
    Info in;
    intialiser(&in);
    return 0;
}
*/

/*
int main() {
    int n = 9, count = 0, b, c = 0, a, d = 0;
    for (int i = 0; i < 2 * n - 1; i++) {
        b = 1;
        a = 1;
        for (int j = 0; j < (2 * n) - 1; j++) {
            if (i < n) {
                if (j < n) {
                    if (i <= j) printf("%d ",n - i);
                    else printf("%d ",n - j); // @
                } else {
                    if (j < (2 * n) - i - 1) printf("%d ",n - i);
                    else {
                        printf("%d ", n + b - i); // /
                        b++;
                    }
                }
            } else {
                if (j < n) {
                    if (j < n - 1 - c) printf("%d ", n - j); // *
                    else printf("%d ", i - n + 2);
                } else {
                    if (j < n + d)printf("%d ", i - n + 2);
                    else { printf("%d ", i - n + 2 + a); a++;}
                }

            }
        }

        printf("\n");
        if (i < n - 1) count++;
        else {
            count--; c++; d++;
        }
    }
    return 0;
}
*/


// 1033 beecrowd

/*
long long int fib1(int n, long long int *calls) {
    *calls += 1;
    if (n == 0) return 0;
    else if (n == 1) return 1;
    else return fib1(n - 1, calls) + fib1(n - 2, calls);
}
*/

#define MAX_SIZE 20

long long int fib(int F[], int N[], int *C, int n) {
    if (n == 0 || n == 1) {
        C[n] += 1;
        F[n] = n; N[n] = n;
        return F[n];
    }
    else if (N[n] == n) {
        C[n] += 2;
        return F[n];
    }
    else {
        C[n] += 1;
        N[n] = n;
        F[n] = fib(F, N, C, n - 1) + fib(F, N, C, n - 2);
    }
}


int main() {
    int n, base, rem, index, count = 1;
    while ((scanf("%d %d", &n, &base)) && (n != 0 || base != 0)) {
        // In Each Iteration
        long long int calls = 0, last_digit;
        int C[MAX_SIZE] = {0}, F[MAX_SIZE] = {0}, N[MAX_SIZE] = {-1};
        for (int i = 0; i < MAX_SIZE; i++) {
            C[i] = 0; F[i] = 0; N[i] = -1;
        }
        int result[n];
        rem = 0; index = 0;
        // Calculate The Number Of Calls
        fib(F, N, C, n);
        for (int i = 0; i < n; i++) {
            calls += C[i];
            printf("%d  ", C[i]);
        }
        printf("\ncalls = %lld\n", calls);
        // Translate To The Base
        last_digit = calls % base;
        // Print The Result
        printf("\nCase %d: %d %d %d\n", count, n, base, result[0]);
        count++;
    }

    return 0;
}


























