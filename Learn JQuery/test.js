// DOM Manipulation
/*
    add & remove [append, prepend, after, before, remove]
    css [addClass, removeClass, toggleClass]
*/
$(function() {
    $("p.title").append(" Append");
    $("p.title").prepend("Prepend ");
    
    $("p.title").after("After");
    $("p.title").before("Before");

    // $("p.title").remove(); // remove tag
    
    $("p.title").addClass("main ");
    $("p.title").removeClass("main ");
    $("p.title").toggleClass("main ");
    $("p.title").css({
        fontSize: "40px",
    });
    $("p.title").css('color', 'red');
});



