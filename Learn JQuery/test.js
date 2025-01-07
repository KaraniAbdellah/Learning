// Traversing
/*
    Filter[first, last, eq, filter, not]
*/
$(function() {

    $("p.desc").first();
    console.log($("p.desc").first()); // first paragph that has .desc class
    console.log($("p.desc").last()); // last paragph that has .desc class
    console.log($("p.desc").eq()); // middle paragph that has .desc class
    console.log($("p.desc").eq(2)); // paragph number 2  that has .desc class

    $(".test1").filter(2);
    console.log($("p").filter(".test1")); // get all paragraph that has class .test1
    console.log($("p").not(".test1")); // get all paragraph that has not class .test1

});



