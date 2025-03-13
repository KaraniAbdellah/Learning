<?php 
    /*
	echo("Hello World")
    isset($var) // is this var exit or no
    unset($var) // delete var
    var_dump($var) // list the information about variable(types, ....)
    gettype($var) // return type of var
    settype($var, "type") // casting a var type
    is_long(), is_double(), is_numeric(), is_bool(), ... // give the type of var
    
    // math function
    abs($x), pi(), max($a, $b, $c, ...)
    
    // Variables
    $bonjour = "Hello";
    $nom = "Ahmed";
    $bon = &$bonjour
    $bon = "Salut" // $bonjour updated also
    echo $bonjour // "Salut"      
    
    $first_name = "Hamido";
    $last_name = "Ahmed";
    $A = 10
    $B = 20
    echo $first_name, " ", $last_name
    echo "$A  $B" // 1020
    echo '$A $B' // $A $B
    */

    // Control flow
    /*
        if, elseif, else
        swwitch, case, default
        for, while, do...while, foreach(PHP4)
        breal, continue
    */

    // Array
    $colors = array("white", "black", "red", "yellow");
    $books = array("title"=> "OOP on C++\n", "Author"=>"Claud Delannoy\n");
    for($i = 0; $i < 4; $i++) {
        echo "$colors[$i] <br/>\n";
    }

    echo "Book Title: ", $books["title"]


    // if ($_SERVER["REQUEST_METHOD"] == "POST") {
    //     $email = $_POST["email"];
    //     $password = $_POST["password"];

    //     echo "Email: $email <br>";
    //     echo "Password: $password";
    // }

    
     
    
    
     
    
?>
