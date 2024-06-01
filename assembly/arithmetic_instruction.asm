mov al, 5
mov ah, 3
xchg al, ah
add al, -3
mov al, 3h
inc al
dec ah ; al = 0x04 and ah = 0x04

mov bl, 5
sub bl, 2
dec bl ; bl = 0x02
mul bl  ; store the result in Ax [al = al * bl]  --> [al = 0x08]
mov bx, ax  ; bl = 0x08
div bl  ; [al = al / bl] --> al = 0x01


; example for saving the value of the ax
mov al, 2d
mov bl, 2d
mov ah, al
mov bh, bl

mul bl ; ax = bl * al --> ax = 0x0004 = 4decimal
mul al ; ax = al * al = 0x0004 * 0x0004 = 0x0010 = 16decimal
mov al, bl
mov ah, bh

mov bl, 5
sub bl, 2
dec bl       ; bl = 0x02
mov al, 3    ; Set AL to a value, for example, 3
mul bl       ; Multiply AL by BL, result stored in AX (AX = AL * BL)
mov bl, al   ; Move the result from AL to BL









