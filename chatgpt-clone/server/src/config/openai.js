const{Configuration, OpenAI} = require("openai");

module.exports = class openai {
    static configuration() {
        const configuration = new Configuration({
            apiKey: process.env.OPEN_AI_KEY,
        });
        return new openAIApi(configuration);
    }
    static textCompletion({prompt}) {
        const openai = this.configuration();
        return openai.createCompletion({
            model: "text-davinci-003",
            prompt: `${prompt}` ,
            max_tokens: 3500,
            temperature: 0.5,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        });
    }
}

