const express = require("express");
const app = express();
const mongoose = require('mongoose');
const Students = require("./models/Students.js");
const Courses = require("./models/Courses.js");
const bodyParser = require('body-parser')



app.use(bodyParser.json());

// User Routes
app.get("/student", async (req, res) => {
    try {
        const students = await Students.find().populate("courses");
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({message: "Error" + error});
    }
});
app.post("/student", async (req, res) => {
    try {
        const student = await Students.create(req.body);
        res.status(201).json(student);
    } catch (error) {
        res.status(500).json({message: "Error" + error});
    }
});


// Post Routes
app.get("/course", async (req, res) => {
    try {
        const courses = await Courses.find().populate("students");
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({message: "Error" + error});
    }
});
app.post("/course", async (req, res) => {
    try {
        const course = await Courses.create(req.body);
        res.status(201).json(course);
    } catch (error) {
        res.status(500).json({message: "Error" + error});
    }
});




app.post("/enroll", async (req, res) => {
    try {
        const { studentId, courseId } = req.body;
        await Students.findByIdAndUpdate(studentId, { $push: { courses: courseId } });
        await Courses.findByIdAndUpdate(courseId, { $push: { students: studentId } });

        res.status(200).json({ message: "Enrollment successful!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});




mongoose.connect("mongodb://127.0.0.1:27017/relationShips").then(() => {
    console.log("Connect Succefully To Database");
});






app.listen(5000, () => console.log("Server running on port 5000"));

