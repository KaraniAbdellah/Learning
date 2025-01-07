// Traversing
/*
    Ancestors [parents, parent, parentsUntil]
    Descendants[children, find]
    Sibling[siblings, next, nextAll, prev, prev]
*/
$(function() {
    // Ancestors
    $(".span").parent().css("color", "red");
    $(".span").parents().css("color", "red");
    console.log($(".span").parents()); // body & html is also parents

    $(".span").parents("ul"); // give me just the ul parent
    console.log($(".span").parents("ul"));

    $(".span").parentsUntil("section"); // give me all parents until section
    console.log( $(".span").parentsUntil("section")); // section is not included

    // Descendants
    $(".section").children(); // get the direct ele 
    console.log($(".section").children()); // [div]

    $(".section").find("ul").css('color', "blue");
    console.log($(".section").find("ul"));

    // Sibling
    

});



