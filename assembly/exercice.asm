mov [1100h], 1   
mov [1101h], 1
MOV AX, [1100H] ; Charger N1 dans le registre AX
ADD AX, [1101H] ; Ajouter N2 au registre AX

; Vérifier le résultat et stocker selon la valeur
JS NEGATIVE     ; Si le résultat est négatif, aller à l'étiquette NEGATIVE
JZ ZERO         ; Si le résultat est nul, aller à l'étiquette ZERO
MOV BX, AX ; Si le résultat est positif, stocker à l'offset 1102H
JMP END         ; Aller à la fin

NEGATIVE:
MOV CX, AX ; Si le résultat est négatif, stocker à l'offset 1103H
JMP END       ; Aller à la fin

ZERO:
MOV DX, AX ; Si le résultat est nul, stocker à l'offset 1104H
JMP END

END: NOP

