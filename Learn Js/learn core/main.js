// Map Data Types
/*
    Methods
    -- Set 
    -- get
    -- delete 
    -- clear
    -- has
    Proprioties
        -- size
    --> Map Is Sensible To The Key Letters
*/

var myMap = new Map([
    [10, "Number"],
    ["name", "String"],
    [false, "Boolean"],
]);
myMap.set("10", "Number");
console.log(myMap.get(10));
console.log(myMap.get(false));

console.log(myMap.size);
console.log(myMap.delete("10")); // true --> Succeffuly Deleted
console.log(myMap.size);
console.log(myMap.clear());
console.log(myMap.size);

if (myMap.has("Name")) console.log(`There is 10 key`);
else console.log("There Is No 10 Key");



