; Declaration of The Constance [There Is No Variables] 

data segment ; Declaration of The Data Segment
    
         ;; You Can Decalre The Varibles here
 
ends ; End Of Data Segment



code segment 
start: ; Start of code segment, label "start" 
    mov ax, data ; Loads the starting address of the data segment into the AX register
    mov ds, ax ; Loads this address into the DS segment register, which points to the data segment
    
    
    mov ax, 4c00h ; Loads the hexadecimal value 4C00h into the AX register. This is the termination code for MS-DOS.
    int 21h     ; Calls the 21h interrupt function, which is an MS-DOS service function.
                ; Interrupt 21h is used to perform I/O operations, such as exiting the program.
ends ; end of code segment
end start  ; end of the programm













