#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <math.h>
#include <string.h>
#include <ctype.h>
#include <time.h>
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


struct Player {
        int number;
        char nom[20];
        char prenom[20];
};
int main() {
        struct Player p1, p2, p3;
        struct Player *j3 = &p3;
        printf("Enter Your Information : \n");
        scanf("%d %d %d", &p1.number, &p2.number, &j3->number);
        scanf("%s %s %s", &p1.nom, &p2.nom, &j3->nom);
        scanf("%s %s %s", &p1.prenom, &p2.prenom, &j3->prenom);
        // print The Information
        printf("Hello %s %s Your Number Is %d", p1.nom, p1.prenom, p1.number);
        printf("Hello %s %s Your Number Is %d", p2.nom, p2.prenom, p2.number);
        printf("Hello %s %s Your Number Is %d", (*j3).nom, j3->prenom, j3->number);
        return 0;
}













































































































