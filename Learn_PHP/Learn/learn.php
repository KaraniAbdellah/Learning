<?php
    // Introduction
    /*
        Inside PHP file I can write HTML, CSS, JS and Also PHP.
    */



    // Get Started
    /* 
        - Apache2 Server: It runs your PHP code on the server before sending the result to your browser.
        - Website Folder: Place your index.php file in /var/www/html/ (default on Linux).
        - Start Apache: Make sure Apache is running with:
            --> sudo systemctl start apache2
        - Open Your Site: Go to http://localhost/index.php in your browser to see the result.
    */



    // How It Works [apache2, browser]
    /*
        Browser Request:
            When you type http://localhost/index.php, the browser sends a request to Apache (your web server).
        Apache Handles the Request:
            - Apache checks if index.php exists in /var/www/html/ (or your configured folder).
                --> Apache uses a module like mod_php (or with PHP-FPM) to connect to PHP.
            - Since it's a PHP file, Apache forwards it to PHP for processing.
                --> PHP is runtime that excute code (convert it to HTML or JSOn etc, ...)
        PHP Executes the Code:
            - PHP runs the code inside index.php and generates HTML output.
            - Example: If echo "<h1>Hello</h1>"; is in index.php, PHP converts it to: <h1>Hello</h1>
        Apache Sends the Response:
            - Apache sends the generated HTML back to the browser.
        Browser Displays the Page:
            - The browser receives the HTML and shows it as a webpage.
    
        ** Apache is the middleman that connects the browser and PHP.
        ** The browser requests a page → 
            Apache asks PHP to process it → 
            PHP returns HTML → Apache sends it back to the browser.
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


