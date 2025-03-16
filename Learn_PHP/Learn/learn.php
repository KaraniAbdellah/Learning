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



    // $_GET and $_POST Varaibles
    /*
        $_GET, $_POST = special variables used to collect data from an HTML form
                        data is sent to the file in the action attribute of <form>
                        <form action='file.php' method="GET">

        $_GET = Data is appended to the url
                Not Secure
                char limit
                Bookmark is possible w/ values
                GET request can be cached
                Better for a search page

        $_POST = Data is packaged inside the body of the HTTP request
                MORE Secure
                No Data limit
                Cannot Bookmark
                GET requestes are not cached
                Better for submitting credentials 
    */

    // index.html
    /*
        <form action="index.php" method="post">
            <input name="email" type="email" placeholder="enter your email">
            <input name="password" type="password" placeholder="enter your password">
            <input type="submit" value="submit">
        </form>
    */

    // echo $_GET["email"] . "<br>";
    echo "{$_GET["email"]} <br>";
    echo "{$_GET["password"]} <br>";

    // More Secure --> The Data Does Not Show in URL
    echo "{$_POST["email"]} <br>";
    echo "{$_POST["password"]} <br>";



    // Exercice [$_GET and $_POST varaibles]
    /*
        <form action="index.php" method="get">
            <label for="quantity">Quantity: </label>
            <input type="text" name="quantity" /> <br>
            <input type="submit" name="Total" />
        </form>
    */
    $item = "Pizza";
    $price = 4.55;
    $total = null;
    $total = $quantity * $price;



    // Math Function
    $x = $_POST["x"];
    $y = $_POST["y"];
    $total = abs($x);
    $total = round($x);
    $total = floor($x);
    $total = ceil($x);
    $total = pow($x, $y);
    $total = sqrt($x);
    $total = max($x, $y, $z);
    $total = min($x, $y, $z);
    $total = pi();
    $total = rand(0, 10);
    echo $total;
    

    // If statement
    $age = 20;
    if ($age >= 18) {
        echo "You are an adult.\n";
    } else if( $age >= 0) {
        echo "You are a minor.\n";
    } else {
        echo "None";
    }


    // Switch statement
    $day = "Monday";
    switch ($day) {
        case "Monday":
            echo "Start of the week.\n";
            break;
        case "Friday":
            echo "End of the week.\n";
            break;
        default:
            echo "A normal day.\n";
    }


    // For loop
    for ($i = 1; $i <= 5; $i++) {
        echo "Iteration $i\n";
    }

    // While loop
    $count = 1; $a = 10;
    while ($count <= 3) {
        echo "Count: $count\n";
        $count++;
    }
    do {
        echo "a: $a\n";
        $a--;
    } while ($a >= 0);



    // Logical operators
    $x = true;
    $y = false;
    if ($x && $y) { echo "Both are true\n";}
    if ($x || $y) { echo "At least one is true\n";}
    if (!$y) { echo "Y is false\n";}
    if ($x xor $y) { echo "One is true, but not both\n";}
    if ($x and $y) { echo "Both are true (using and)\n";}
    if ($x or $y) { echo "At least one is true (using or)\n";}
    


    // Arrays






?>


