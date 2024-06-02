/*
  Array Methods
  - Array.every(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  -- For Return True Should All Element Satisfier The Condition
*/

const locations = {
    20: "place1",
    30: "place2",
    10: "place3",
    40: "place4",
};

var mainLocation = 15;
var nbr_locations = Object.keys(locations);
console.log(nbr_locations);
nbr_locations = Array.from(nbr_locations, ele => +ele);
nbr_locations = nbr_locations.map(n => +n);
console.log(nbr_locations);
var check = nbr_locations.every(function(ele) {
    return +ele > this;
}, mainLocation);
console.log(check); // false 10 is not greater 15










