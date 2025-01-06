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







