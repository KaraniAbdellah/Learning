const express = require("express");
const app = express();
const mongoose = require('mongoose');
const User = require("./models/User.js");
const Post = require("./models/Post.js");
const bodyParser = require('body-parser')



app.use(bodyParser.json());

// User Routes
app.get("/user", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: "Error" + error});
    }
});
app.post("/user", async (req, res) => {
    const {name, image} = req.body;
    if (!name || !image) res.status(400).send({message: "All Input Required"});
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({message: "Error" + error});
    }
});


// Post Routes
app.get("/post", async (req, res) => {
    // const id = req.params.id;
    try {
        // const post = await Post.findById(id).populate("postOwner");
        const post = await Post.find().populate("postOwner");
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({message: "Error" + error});
    }
});
app.post("/post", async (req, res) => {
    const {title, image, postOwner} = req.body;
    if (!title || !image || !postOwner) res.status(400).send({message: "All Input Required"});
    try {
        const post = await Post.create(req.body);
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({message: "Error" + error});
    }
});



mongoose.connect("mongodb://127.0.0.1:27017/relationShips").then(() => {
    console.log("Connect Succefully To Database");
});






app.listen(5000, () => console.log("Server running on port 5000"));

