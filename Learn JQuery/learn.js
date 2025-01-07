// What is JQuery
/*
    is js libarary [write less, do more]
    Donwload JQuery
    Include Jquery in HTML file ==> the jquery file must be before js files 
*/




// Syntax 
/*
    we use always ==> $ == JQuery
    document is html page
    ready mean when html page ready
*/
$(document).ready(function() {
    // Every thing here
}); // do not write outside
// Another syntax
$(function() {
    // Every thing here
});
 



// Selectors
$(document).ready(function() {
    // select ele
    $("section")
    // select class
    $(".ele")
    // select id
    $("#id")
});






// Events
$(document).ready(function () {
    $(".login").click(function() {
        alert("Hello World");
        $("#demo").hide(1000); // hide the ele in 1 second 
        $("#demo").show(); // show the ele
        $(".ele").toggle(); // can be hide or show

        $(".square").fadeIn(); // display the ele with animation
        $(".square").fadeOut(2000); // hide the ele with animation
        $(".square").fadeToggle(); // display or show the ele

        $("square").slideDown(); // display the ele liek slide animation
        $("square").slideUp();
        $("square").slideToggle(); // display ele in down and top 
    });
});






// Effects
/*
    animate()
    stop()
    callback
    chaining
*/

$(document).ready(function () {
    $(".login").click(function () {
        $(".square").animate({
            top: "500px"
        }, 2000, "linear"); // animate the element
    });

    $(".stop").click(function() {
        $(".square").stop(); // stop the event
    });

    // Call back
    $(".hide").click(function() {
        $(".square").hide(1000, function() {
            console.log("Hide Element Succefully"); // after hidding ele
        });
    });

    // Chaining
    $(".square").hide(1000).show(1000).slideUp();
});





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






// DOM Manipulation [Adding & Removing]
/*
    add & remove [append, prepend, after, before, remove]
    css [addClass, removeClass, toggleClass]
*/
$(function() {
    $("p.title").append(" Append");
    $("p.title").prepend("Prepend ");
    
    $("p.title").after("After");
    $("p.title").before("Before");

    $("p.title").remove(); // remove tag
    
    $("p.title").addClass("main ");
    $("p.title").removeClass("main ");
    $("p.title").toggleClass("main ");
    $("p.title").css({
        fontSize: "40px",
    });
    $("p.title").css('color', 'red');
});




// DOM Manipulation [dimension]
$(function() {
    // if there is: box-sizing: border-box;
    console.log($(".dim").width()); //  width - padding - border = 280px
    console.log($(".dim").innerWidth()); // width + padding - border = 296px
    console.log($(".dim").outerWidth()); // width + padding + border = 300px

    // if there is: box-sizing: border-box;
    console.log($(".dim").height()); //  height - padding - border = 280px
    console.log($(".dim").innerHeight()); // height + padding - border = 296px
    console.log($(".dim").outerHeight()); // width + padding + border = 300px
});



