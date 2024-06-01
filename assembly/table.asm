data segment
    ; table
    tab db 12d, 2h, 3, 00000001b
    tab1 db 5 DUP(1, 2)     
    tab2 dd 1783h, 1783h, 9933h, 9943h
ends

mov al, tab[0]
mov ah, tab[1]

mov bl, tab1[0]

mov ax, tab2[1]

