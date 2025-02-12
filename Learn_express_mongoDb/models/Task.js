// Use Mongoose Model
const mongoose = require("./../src/node_modules/mongoose");

// Create Schema that define the data that will be store in DB
const Schema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    status: String,
    completed:  {
        type: Boolean,
        default: false
    }
});

// Create Collection or Model
const Task = new mongoose.model("Task_Data", Schema);

// Export this Schema
module.exports = Task;


