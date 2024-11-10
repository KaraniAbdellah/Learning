#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>
#include <string.h>

int main(int argc, char *argv[]) {
    if (argc != 2) {
        printf("Usage: %s <commit message>\n", argv[0]);
        return 1;
    }

    // Allocate memory for the command string
    size_t cmd_size = 200 + strlen(argv[1]); // Extra space for the commit message
    char *cmd = (char *) malloc(cmd_size);
    if (cmd == NULL) {
        perror("Failed to allocate memory");
        return 1;
    }

    // Build the command string
    snprintf(cmd, cmd_size, "git add . && git commit -m \"%s\" && git push origin main", argv[1]);

    // Execute the command
    int ret = system(cmd);
    if (ret == -1) {
        perror("system() failed");
        free(cmd);
        return 1;
    }

    // Clean up
    free(cmd);
    return 0;
}




