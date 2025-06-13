<?php

    define("x", 10);
    $a = 10;
    
    echo "<h1>x = $x</h1>"; // the constant 
    echo "<h1>a = $a</h1>";

    if (empty($x)) echo "This is empty variable" . "<br/>";
    if (isset($x)) echo "This variable does not exit" . "<br/>";
    
    $number = rand(1, 10);
    echo $number . "<br/>";

    $name = "abdellah";
    echo "Lengh is: " . strlen($name). "<br/>";

    function helloWorld() {
        echo "Hello World" . "<br/>";
    }
    helloWorld();

    $infos = ["name"=>"abdellah", "age"=>20];
    foreach($infos as $key=>$value) {
        echo "$key = $value" . "<br/>";
    }

    $arr_lenght = sizeof($infos);
    function displayArray($arr) {
        global $arr_lenght;
        $arr_lenght = 100;
        foreach($arr as $key=>$value) {
            echo "$key = $value" . "<br/>";
        }
    } displayArray($infos);

    echo "lenght of array is: " . $arr_lenght . "<br/>";

    ////////////////////////// POO in PHP
    class Student {
        private $student_name;
        private $student_email;
        public function __construct($student_email, $student_name) {
            $this->student_email = $student_email;
            $this->student_name = $student_name;
        }
        public function getStudent() {
            return $this->student_name;
        }
    }

    $student_one = new Student("a@gmail.com", "Ahmed");
    echo "Student name: " . $student_one->getStudent() . "<br/>";

    ////////////////////////// SESSION
    $nums = [1, 2, 3, 4, 5];
    session_start();
    // session_register("nums");
    $_SESSION["nums"] = $nums;
    echo "The Value of nums: ";
    for ($i = 0; $i < sizeof($_SESSION["nums"]); $i++) {
        echo $nums[$i] . "-->";
    } echo "<br/>";
    session_unset();
    session_destroy();


    ////////////////////////// Connect To Database
    $user_name = "abdellah";
    $password = "............";
    $dsn = "mysql:host=127.0.0.1;dbname=learn_php";

    try {
        $con = new PDO($dsn, $user_name, $password);
        echo "Connection Is GOOD!!" . "<br/>";
    } catch(PDOException $err) {
        echo $err->getMessage();
    }

    // Let's Start Getting The Data [Statment]
    $select_query = "SELECT * from users";
    $insert_query = "INSERT into users(user_name) values('Abdellah')";
    $st_select = $con->query($select_query);
    $result_select = $st_select->fetchAll();
    // print_r($result_select);

    $st_insert = $con->query($insert_query);
    $result_insert = $st_insert->execute();
    // echo $result_insert;

    // Let's Start Getting The Data [PreparedStatment]
    $p_select_query = "SELECT * from users";
    $p_st_select = $con->prepare($p_select_query);
    $p_st_select->execute();
    $p_result_select = $p_st_select->fetch();
    print_r($p_result_select); echo "<br/>";
    
    
    $p_insert_query = "INSERT into users(user_name) values(?)";
    $p_st_insert = $con->prepare($p_insert_query); $username = "XXXXXXXXXXx";
    $p_st_insert->bindParam(1, $username);
    $p_result_insert = $p_st_insert->execute();
    print_r($p_result_insert); echo "<br/>";

    


?>



