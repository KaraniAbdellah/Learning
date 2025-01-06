// DOM Manipulation
$(document).ready(function() {
    let myText =  $(".sayHello").text(); // get text
    $(".sayHello").text("this new text"); // set text
    console.log(myText);

    let htmlText = $(".sayHello").html(); // get html tag 
    $(".sayHello").html("this new text"); // set html tag
    console.log(htmlText); // <a href="">sayHello</a>

    let inputValue = $("input").val();
    $("input").val("write your name");
    console.log(inputValue); // write your email

    let valId = $("div").attr("id"); // get the value of "id" attribut
    $(".card").attr("class", "product"); // set new attribut (class = "product")  [override to old classes]
    console.log(valId);

}); // do not write code outside



