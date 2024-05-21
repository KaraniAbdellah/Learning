var mySet = new Set().add(1).add(3).add(4).add(5);

console.log(mySet);
console.log(mySet.values());
console.log(mySet.keys());
mySet.forEach(ele => console.log(ele));



var myWeakSet = new WeakSet([{A: 65, B: 66}]); 
console.log(myWeakSet);
console.log(myWeakSet.values());


