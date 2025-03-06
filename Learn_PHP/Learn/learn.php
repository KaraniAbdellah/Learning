<?php
    // Introduction
    /*
        Inside PHP file I can wire HTML, CSS, JS and Also PHP.
    */


    
    // Variables
    /*
        String, Integer, Float and Boolean
    */
    $name = "Abdellah";
    $food = "Pizza";
    $email = "fake@gmail.com";
    $age = 21;
    $price = 9.89;
    $online=true;

    echo"Hello {$name}<br>";
    echo"You Like {$food}<br>";
    echo"Your Email is {$email}<br>";
    echo"You Are {$age} Year Old<br>";
    echo"100USD=\${$price}Dh<br>";
    echo"Online Status: {$online}";


    // Operators
    /*
        Arithmetic Operator [+ - * / ** %]
        Incremente/decrement operators [++, --]
        Operator Precedence [(), **, *, /, %, + -]
    */
    $x = 10;
    $y = 2;
    $z = null;
    $z = $x / $y; // + - * / 
    $z++; $z--;
    echo $z;
?>


