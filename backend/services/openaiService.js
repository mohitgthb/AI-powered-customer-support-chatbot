const { OpenAI } = require("openai");

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const getLLMResponse = async (messages) => {
    const res = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages,
    })
    return res.choices[0].message.content;
};

module.exports = { getLLMResponse };