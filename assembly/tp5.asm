data segment
    tableau db 10 dup(?)
    MAX db ?
    MIN db ?
    moyenne db ?
    moyenne_olympique db ?
    message_max db ' || MAX = $', 0dh, 0ah, '$'
    message_min db ' || MIN = $', 0dh, 0ah, '$'
    message_moyenne db ' || Moyenne = $', 0dh, 0ah, '$'
    message_moyenne_olympique db ' || Moyenne olympique = $', 0dh, 0ah, '$'
data ends

code segment
    assume ds:data, es:data

start:
    mov ax, data
    mov ds, ax
    mov es, ax

    ; 1. Remplir un tableau de 10 éléments saisis au clavier
    mov cx, 10
    mov si, offset tableau
saisie_loop:
    mov ah, 01h
    int 21h
    sub al, '0'
    mov [si], al
    inc si
    loop saisie_loop

    ; 2. Calculer MAX et MIN du tableau
    mov si, offset tableau
    mov al, [si]
    mov bl, [si]
    mov cx, 9
    inc si
calcul_loop:
    cmp al, [si]
    jg maj
    mov al, [si]
maj:
    cmp bl, [si]
    jl min_calc
    mov bl, [si]
min_calc:
    inc si
    loop calcul_loop
    mov MAX, al
    mov MIN, bl

    ; 3. Calculer moyenne et moyenne olympique
    mov si, offset tableau
    mov ax, 0
    mov cx, 10
moyenne_loop:
    add al, [si]
    inc si
    loop moyenne_loop
    sub al, MAX
    sub al, MIN
    mov moyenne_olympique, al

    ; Affichage des résultats
    mov dx, offset message_max
    mov ah, 09h
    int 21h

    mov dl, MAX
    add dl, '0'
    mov ah, 02h
    int 21h

    mov dx, offset message_min
    mov ah, 09h
    int 21h

    mov dl, MIN
    add dl, '0'
    mov ah, 02h
    int 21h

    mov dx, offset message_moyenne
    mov ah, 09h
    int 21h

    mov dl, moyenne
    add dl, '0'
    mov ah, 02h
    int 21h

    mov dx, offset message_moyenne_olympique
    mov ah, 09h
    int 21h

    mov dl, moyenne_olympique
    add dl, '0'
    mov ah, 02h
    int 21h

    ; Terminer le programme
    mov ah, 4ch
    int 21h

code ends
end start
