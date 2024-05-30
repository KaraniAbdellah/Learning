/*
  Array Methods
  - Array.some(CallbackFunc(Element, Index, Array), This Argument)
        Tell You If Condition True Or No
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  Using
  - Check if Element Exists In Array Suing Fucntion
  - Check If Number In Range Using Object
*/

var nums = [1, 2, 3, 4, 5, 6, 7];
var myNumber = 5;
var check = nums.some(function(ele) {
    console.log(this); // this for owner of the fucntion
    return ele > this;
}, myNumber);
var check_nums = nums.some( ele => ele > 78);

// With Using Function
function checkNumber(arr, value) {
    return arr.some(ele => ele === value);
}
console.log(checkNumber(nums, 20)); // fals

// With Using Object
var range = {
    min: 5,
    max: 10,
}
var checkRange = nums.some(function(ele) {
    return this.min < ele && this.max > ele;
}, range);
console.log(checkRange); // true


