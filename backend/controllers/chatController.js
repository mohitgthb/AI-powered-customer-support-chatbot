const Chat = require("../models/Chat");
const { getLLMResponse } = require("../services/openaiService");
const { getRelevantDocs } = require("../services/vectorService");
const { buildPrompt } = require("../utils/promptTemplate");

const chatHandler = async (req, res) => {
    const { userId, message } = req.body;

    try {
        let chat = await Chat.findOne({ userId });

        if(!chat) {
            chat = new Chat({ userId, messages: [] });
        }

        //RAG context
        const docs = getRelevantDocs(message);
        const context = docs.join("\n");

        const prompt = buildPrompt(context, message);

        const aiResponse = await getLLMResponse(prompt);

        chat.messages.push({ role: "user", content: message });
        chat.messages.push({ role: "assistant", content: aiResponse });

        await chat.save();
        res.json({ response: aiResponse });
    } catch (error) {
        console.error("Error in chatHandler:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = { chatHandler };
