// Traversing
/*
    Ancestors [parents, parent, parentsUntil]
    Descendants[children, find]
    Sibling[siblings, next, nextAll, prev, prevAll, nextUntil, prevUntill]
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
    console.log("==============================");

    // Descendants
    $(".section").children(); // get the direct ele 
    console.log($(".section").children()); // [div]

    $(".section").find("ul").css('color', "blue");
    console.log($(".section").find("ul"));
    console.log("==============================");


    // Sibling
    $(".desc").siblings();
    console.log($(".desc").siblings());
    console.log($(".desc").siblings("span")); // get the span

    console.log($(".desc").nextAll()); // div, span, ul
    console.log($(".desc").next()); // div

    console.log($(".list").prev()); // span
    console.log($(".list").prevAll()); // span, div, p.desc


    console.log($(".list").prevUntil("p.desc")); // span, div
    console.log($(".desc").nextUntil(".list")); // div, span

});



