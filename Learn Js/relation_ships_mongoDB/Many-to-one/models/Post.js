const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    postOwner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});


module.exports = mongoose.model("Post", PostSchema);
