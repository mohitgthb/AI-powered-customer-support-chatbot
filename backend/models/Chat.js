const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    userId: String,
    messages: [
        {
            role: String,
            content: String,
        },
    ],
});

module.exports = mongoose.model("Chat", chatSchema);
