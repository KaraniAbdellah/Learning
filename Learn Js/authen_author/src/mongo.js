// Start MongoDb
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/Login").then(() => {
    console.log("Mongo Connected");
}).catch((err) => {
    console.log("Error + " + err);
});


const User = mongoose.Schema({
    email: {
        type: String, 
        required: true
    },
    password: {
        type: String, 
        required: true,
    },
    token: {
        type: String, 
        required: true,
    }
});

const Collection = new mongoose.model("UserLogin", User);

module.exports = User;


