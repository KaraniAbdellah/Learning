mov ah, 3
mov al, 11110000b
mov bl, 00001111b
and al, bl ; al = al and bl -->  al = 0x00

mov al, 11110000b
mov bl, 00001111b
or bl, al ; bl = al or bl --> bl = 0xFF

mov ah, 11110000b
mov bh, 00001111b 
xor bh, ah ; bh = bh xor ah --> bh = 0xFF

not ax
not bx 

mov ah, 3
mov bh, 4
test bh, ah ; flags --> ZF = 1 because the result of [bh and ah] is zero

neg ah


