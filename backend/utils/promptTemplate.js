const buildPrompt = (context, userMessage) => {
    return [
        {
            role: "system",
            content: `you are a helpful customr support assistant. Use this info:\n${context}`,
        },
        {
            role: "user",
            content: userMessage,
        },
    ];
};

module.exports = { buildPrompt };
