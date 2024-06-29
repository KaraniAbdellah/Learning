




//  Regular Expressions - Quantifiers Part 2

/*
    n{x}   => Number of
    n{x,y} => Range
    n{x,}  => At Least x

    x and y are numbers
*/
var serials = "S100S S3000S S50000S S950000S";

console.log(serials.match(/s\d{3}s/gi)); // S[Three Number]S
console.log(serials.match(/s\d{4,5}s/gi)); // S[Fout Or Five]S
console.log(serials.match(/\s\d{4, }s/gi)); // S[At Least Four]S








