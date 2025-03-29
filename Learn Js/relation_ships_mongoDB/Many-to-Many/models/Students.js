const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }] // Many-to-Many
});

module.exports = mongoose.model("Student", StudentSchema);
