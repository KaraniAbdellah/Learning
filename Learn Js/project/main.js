function Section_level_one() {
    var number_one = Math.floor(Math.random() * 10) + 1;
    var number_two = Math.floor(Math.random() * 10) + 1;
    var j;
    var x = 0;
    while (x < 30) {
        var number_one = Math.floor(Math.random() * 10) + 1;
        var number_two = Math.floor(Math.random() * 10) + 1;
        var results = prompt(`Enter The result Of ${number_one} + ${number_two}`);
        while (results != number_one + number_two) {
            var results = prompt(`Try Again ${number_one} + ${number_two}`);
            j++;
        }
        var x = x + 1;
    }
}
function Section_level_two() {
    var number_one = Math.floor(Math.random() * 10) + 1;
    var number_two = Math.floor(Math.random() * 10) + 1;
    var j;
    var x = 0;
    while (x < 30) {
        var number_one = Math.floor(Math.random() * 10) + 1;
        var number_two = Math.floor(Math.random() * 10) + 1;
        var results = prompt(`Enter The result Of ${number_one} - ${number_two}`);
        while (results != number_one - number_two) {
            var results = prompt(`Try Again ${number_one} - ${number_two}`);
            j++;
        }
        var x = x + 1;
    }
}
function Section_level_three() {
    var number_one = Math.floor(Math.random() * 10) + 1;
    var number_two = Math.floor(Math.random() * 10) + 1;
    var j;
    var x = 0;
    while (x < 30) {
        var number_one = Math.floor(Math.random() * 10) + 1;
        var number_two = Math.floor(Math.random() * 10) + 1;
        var results = prompt(`Enter The result Of ${number_one} * ${number_two}`);
        while (results != number_one * number_two) {
            var results = prompt(`Try Again ${number_one} * ${number_two}`);
            j++;
        }
        var x = x + 1;
    }
}
function Section_level_four() {
    var number_one = Math.floor(Math.random() * 10) + 1;
    var number_two = Math.floor(Math.random() * 10) + 1;
    var j;
    var x = 0;
    while (x < 30) {
        var number_one = Math.trunc(Math.floor(Math.random() * 10) + 1);
        var number_two = Math.trunc(Math.floor(Math.random() * 5) + 1);
        var results = prompt(`Enter The result Of ${number_one} / ${number_two}`);
        var alt_var = (number_one / number_two);
        while (results != alt_var) {
            var results = prompt(`Try Again ${number_one} / ${number_two}`);
            j++;
        }
        var x = x + 1;
    }
}


function Click() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    document.body.style.background = "rgb(" + red + ", " + green + ", " + blue + ")";
}