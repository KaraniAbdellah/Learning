<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <?php
       
        // Comment
        /*
            Hello 
            World 
            Here 
            Comment
        */ 
        # Constante and Variables
        echo "<h3>Constante and Variables: </h3>";
        $isCreated = define("x", 10);
        echo 'this is constante ' . x . '<br/>';
        echo 'this a varaibles' . $isCreated;

        # Function [empty, isset, unset, gettype, settype, var_dump]
        echo "<h3>Function Utlis: </h3>";
        $empty_var = "Hello";
        $number = 10;
        echo "empty: " . empty($empty_var) . "</br>";
        echo "isset: " . isset($empty_var) . "</br>";
        unset($empty_var);
        echo "isset: " . isset($empty_var) . "</br>";
        echo "variable info: " . var_dump($number) . "</br>";
        echo "type of variable ($number) is: " . gettype($number) . "</br>";
        echo "casting ($number) to float" . settype($number, "float") . "</br>";
        echo "type of variable ($number) is: " . gettype($number) . "</br>" . "</br>";

        # Function Math [pow, round, max, ...]
        echo "<h3>Function Math: </h3>";
        $n1 = 10;
        $n2 = 10;
        echo "Pow of ($n1, $n2) is: " . pow($n1, $n2) . "</br>";
        echo "Max of ($n1, $n2) is: " . max($n1, $n2) . "</br>";
        echo "Random Number ($n1) is: " . rand(0, 10) * M_PI * M_E . "</br>";
        
        # String and some Function
        echo "<h3>String and some Function</h3>";
        $fname = "Hello I am Abdellah Karani";
        echo "$fname" . "</br>";
        echo '$fname' . "</br>";
        echo "lenght of ($fname) is: " . strlen($fname)  . "</br>";

        # Scope & Tables & Function
        echo "<h3>Scope</h3>";
        $a = 10;
        function test() {
            $a = 330;
            echo "Private Scope: " . $a . "</br>";
        } test();

        $x = 10; $y = 20;
        function somme() {
            global $x, $y;
            $y = $x + $y;
        } somme(); echo "Value of y is: " . $y . "</br>"; 

        $nums = array(1=>10, 2=>220, 3=>39, 4=>90, 5=>339);
        function display_array($nums) {
            foreach ($nums as $key => $value) {
                echo $key . "->" . $value . "</br>";
            }
        }
        display_array($nums);


        # Formulaire
        echo "<h3>Formulaire: </h3>";
        echo "
            <form action='' method='post'>
                <label for='number'>number1: </label>
                <input name='number1' type='text'>
                <label for='number'>number2: </label>
                <input name='number2' type='text'>
                <input type='submit'>
            </form>
        ";

        $number1 = $_POST["number1"];
        $number2 = $_POST["number2"];
        if (!empty($number1) && !empty($number2)) {
            settype($number1, "int");
            settype($number2, "int");
            echo "number submitted is: " . $number1 + $number2;
        }

        # Classes
        echo "<h3>Classes: </h3>";
        class Student {
            private $name;
            public function __construct($name) {
                $this->$name = $name;
            }
        }
        $student = new Student("Ahmed");
        
        



        


    ?>

</body>
</html>


