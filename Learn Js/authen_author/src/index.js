// Start Index.js
const express = require("express");
const app = express();
const path = require("path");


app.use(express.json());
// express.urlencoded
/*
    middleware in ExpressJS is used to handle form submissions
*/
app.use(express.urlencoded({extended: false}))


// Start Making The REST API Routes
app.get("/getUsers", async (req, res) => {
    console.log("Request Come From Axios for Getting Users");
    // Get The All User From Database
    try {
        const users = await User.find();
        res.status(201).json(users);
        console.log(users);
        console.log("✅ Success Get User");
    } catch (error) {
        res.status(500).send({message: "❌ Failed Getting User"});
        console.log("❌ Failed Getting User" + error);
    }
});


app.delete("/deleteUser/:id", async (req, res) => {
    console.log("Request Come From Axios for Deleting Users");
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            console.log("Unfound User");
            return res.status(200).send({message: "❌ Unfound User"});
        }
        else {
            console.log("✅ Success Delete User");
            return res.status(200).send({message: "✅ Success Delete User"});
        }
    } catch (error) {
        res.status(500).send({message: "❌ Failed Deleting User"});
        console.log("❌ Failed Deleting User" + error);
    }
});


app.post("/postUser", async (req, res) => {
    console.log("Request Come From Axios for Posting Users");
    // Start Add User To DataBase
    const user = req.body;
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
        console.log("✅ Success Adding User");
    } catch (error) {
        res.status(500).send({message: "❌ Failed Adding User"});
        console.log("❌ Failed Adding User" + error);
    }
});


app.put("/updateProduct/:id", async(req, res) => {
    console.log("🕵️‍♀️ Request From Postman [PUT Method]");
    const id = req.params.id;
    const newProduct = req.body;
    try {
        const UpdatedData = await Product.findByIdAndUpdate(id, newProduct);
        res.status(200).send({message: "✅ Data Updated Succefully"});
        console.log("✅ Data Updated Succefully");
    } catch (error) {
        console.log("❌ Failed Updating Data" + error);
        res.status(500).send({message: "❌ Failed Updating Data"});
    }
});


