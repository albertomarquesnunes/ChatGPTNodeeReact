// server/src/config/openai.js
const OpenAI = require("openai");
require("dotenv").config();

module.exports = class openai {
  static client() {
    return new OpenAI({ apiKey: process.env.OPEN_AI_KEY });
  }

  static async textCompletion({ prompt }) {
    const client = this.client();
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "Você é um assistente útil." },
        { role: "user", content: prompt }
      ],
      temperature: 0.5,
      max_tokens: 3500,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.5
    });
    return completion.choices[0].message.content;
  }
};
