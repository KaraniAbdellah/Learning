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



// $(".square").animate({
//     top: "100px"
// });


