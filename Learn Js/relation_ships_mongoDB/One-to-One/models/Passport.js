const mongoose = require("mongoose");

const PassportSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    PassportOwner: {
        type: mongoose.Types.ObjectId,
        ref: 'Person',
        unique: true // One-to-One relationship
    }
});


module.exports = mongoose.model("Passport", PassportSchema);

