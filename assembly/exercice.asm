mov [1100h], 1   
mov [1101h], 1
MOV AX, [1100H] ; Charger N1 dans le registre AX
ADD AX, [1101H] ; Ajouter N2 au registre AX

; V�rifier le r�sultat et stocker selon la valeur
JS NEGATIVE     ; Si le r�sultat est n�gatif, aller � l'�tiquette NEGATIVE
JZ ZERO         ; Si le r�sultat est nul, aller � l'�tiquette ZERO
MOV BX, AX ; Si le r�sultat est positif, stocker � l'offset 1102H
JMP END         ; Aller � la fin

NEGATIVE:
MOV CX, AX ; Si le r�sultat est n�gatif, stocker � l'offset 1103H
JMP END       ; Aller � la fin

ZERO:
MOV DX, AX ; Si le r�sultat est nul, stocker � l'offset 1104H
JMP END

END: NOP

