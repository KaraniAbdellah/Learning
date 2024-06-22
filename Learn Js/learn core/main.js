// the chracter is 

var str = "abdellah";
// part 1
var regx = /\w/g;
var regx = /\W/g;
var regx = /\d/g;
var regx = /\D/g;
var regx = /\s/g;
var regx = /\S/g;

var regx = /\babdellah/g;
var regx = /\Babdellah\b/g;

console.log(/\Babdellah\b/g.test(str));



