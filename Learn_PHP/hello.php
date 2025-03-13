<?php

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $email = $_POST["email"];
        $password = $_POST["password"];

        echo "Email: $email <br>";
        echo "Password: $password";
    }

?>
