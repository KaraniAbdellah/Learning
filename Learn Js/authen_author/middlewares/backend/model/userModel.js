import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        required: [true, "Please add Name"],
        type: String,
    },
    email: {
        required: [true, "Please add Email"],
        type: String,
    },
    password: {
        required: [true, "Please add Password"],
        type: String,
    },
});


// Create Collection or Model
const userModel = mongoose.model("auth", UserSchema);

// Export Model
export default userModel;
