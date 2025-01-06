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

