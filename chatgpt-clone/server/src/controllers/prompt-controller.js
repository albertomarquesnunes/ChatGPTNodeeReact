const inputPrompt = require("../models/inputPrompt");
const openai = require("../config/openai");

module.exports = {
    async sendText(req,res){
        const openAIApi = new openai.configuration();
        const inputModel = new inputPrompt(req.body);
        try {
            
            const response = await openAIApi.createCompletion(
                openai.textCompletion(inputModel)
            );
            return res.status(200).json({
                success: true,
                data: response.data.choices[0].text,
            });
        } catch (error) {
                return res.status(400).json({
                    success: false,
                    error: error.response ? error.response.data : "Internal Server Error"
                });
        }
    }
}