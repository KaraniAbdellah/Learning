import mongoose from "mongoose";

const GoalSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "userModel"
    },
    text: {
        type: String,
        required: [true, "Please add a test value"]
    },
});


// Create Collection or Model
const goalModel = mongoose.model("auth", GoalSchema);

// Export Model
export default goalModel;
