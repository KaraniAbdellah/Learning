const express = require("express");
const app = express();
const mongoose = require('mongoose');
const Person = require("./models/Person.js");
const Passport = require("./models/Passport.js");
const bodyParser = require('body-parser')



app.use(bodyParser.json());



// Person Routes
app.get("/person", async (req, res) => {
    try {
        const persons = await Person.find();
        res.status(200).json(persons);
    } catch (error) {
        res.status(500).json({message: "Error " + error});
    }
});
app.post("/person", async (req, res) => {
    try {
        const person = await Person.create(req.body);
        res.status(201).json(person);
    } catch (error) {
        res.status(500).json({message: "Error " + error});
    }
});


// Passport Routes
app.get("/passport", async (req, res) => {
    // const id = req.params.id;
    try {
        // const passports = await Passport.findById(id).populate("PassportOwner");
        const passports = await Passport.find().populate("PassportOwner");
        res.status(200).json(passports);
    } catch (error) {
        res.status(500).json({message: "Error" + error});
    }
});
app.post("/passport", async (req, res) => {
    try {
        const passport = await Passport.create(req.body);
        res.status(201).json(passport);
    } catch (error) {
        res.status(500).json({message: "Error" + error});
    }
});



mongoose.connect("mongodb://127.0.0.1:27017/relationShips").then(() => {
    console.log("Connect Succefully To Database");
});



app.listen(5000, () => console.log("Server running on port 5000"));

