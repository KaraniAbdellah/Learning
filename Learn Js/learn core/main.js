// Parse and Stringify
/*
    JSON
    - JSON.parse => Convert JSON To JS Object
    - JSON.stringify => Convert JS Object To JSON
*/
// Get The Data From Server
const myJsonObject_FromSever = '{"Username": "Abdellah", "Age": 40}';
console.log(typeof myJsonObject_FromSever); // string
console.log(myJsonObject_FromSever); // {"Username": "Abdellah", "Age": 40}

// Convert Json Object To JS Object
const myJsObject = JSON.parse(myJsonObject_FromSever);
console.log(typeof myJsObject); // object
console.log(myJsObject); // {Username: 'Abdellah', Age: 40}
myJsObject["Username"] = "Ahmed";
myJsObject["Age"] = 10;

// Convert Js Object To JSON Object
const myJsonObject_ToServer = JSON.stringify(myJsObject);
console.log(typeof myJsonObject_ToServer); // string
console.log(myJsonObject_ToServer); // {"Username":"Ahmed","Age":10}


