; var1 DB 56d
; var2 DB ?
; var3 DW 1210h
; tab db 19, 20, 21, 22, 23
; str db 'hello world

 
; mov ax, var3
; mov bl, var1
; mov cx, SEG var1
; mov dx, OFFSET var1


; mov al, tab[0]
; mov ah, tab[1]
; mov al, str[0]


; mov ax, 12h ; mode addresage immediat
; mov bx, ax ; mode addrassage registre
; mov [243], ax ; mode addressage direct [DS:243]
; mov ax, [100] 
; mov cx, [ds: di] ; mode addressage indirect
; mov ax, [SI]
; mov bx, [DI]
; mov ax, [BX] ; addresage base
; mov bx, [BP + 3]
; mov ax, [si + 3] ; addrese indexee
; mov ax, [di + 3]
; mov ax, [si + 7]
; mov ax, [si + bx + 7] ; mode adrresage base indexee


; mov ax, 1010h
; mov bx, 1111h
; xchg ax, bx


; mov al, 3
; mov bl, al
; mul bx
; mov ax, 9
; mov bx, 3
; div bx
  

; mov al, 10000000b
; mov bl, 00000001b
; test al, bl ; regarder la result de registre flags
 

; mov al, 11111111b
; not al
; mov bl, 00000001b
; not bl
; add bl, 1
; neg bl


; mov al, 1000b
; shr al, 1
; shl al, 1


; mov ax, 1010h
; jmp
; mov bx, 1212h
; mov cx, 2020h
         
; label: mov ax, 1515h 
; mov al, 34d
; cmp al, 34d
; jz label    
      

; mov Cx, 3
; ticket: DEC CX
; add ax, 1
; CMP CX, 0
; JNE ticket




; MOV CX,5 ; CX est le compteur de boucle
; While:
; ADD AX,CX ; fait le calcul
; LOOP while ; CX=CX-1 si CX>0 fait le saut a while
  
 
; mov ax, 1212h
; push ax
; pop bx


; Mov Cx, 5
; while:
; MOV AH, 02h ; pour les chracters
; MOV DL, 'A'
; INT 21h
; Loop while ; par defaut il decremante cx


; msg db 'hello$', 0
; mov ah, 09h    ; Fonction pour afficher une chaîne de caractères
; mov dx, offset msg ; Charger l'adresse de la chaîne dans DX 
; lea dx, [msg]
; int 21h        ; Interruption DOS pour afficher la chaîne
   

; ORG 100h
; MOV AH, 40h
; MOV DX, OFFSET message
; INT 21h
; RET
; message DB "Bonjour Monde $"
 
 
; ORG 100H
; MOV AH, 40h
; Mov BX, 02h
; MOV CX, NBcaracteres
; Mov DX, offset message 
; INT 21H
; RET
; message DB "Hello$ "
; Nbcaracteres DW 3


; mov ah, 01h
; int 21h

org  100h
msg dw '[] : $'
mov ah, 09h
mov dx, offset msg
int 21h

mov cx, 5
while:
    mov ah, 01h
    int 21h
    push ax
loop while  

mov ah, 02h
mov dx, 10h
int 21h

mov cx, 5
while1:
    mov ah, 02h
    pop dx
    int 21h
loop while1
ret










    


