const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }] // Many-to-Many
});

module.exports = mongoose.model("Course", CourseSchema);
