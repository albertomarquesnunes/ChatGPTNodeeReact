// server/src/controllers/prompt-controller.js
const inputPrompt = require("../models/inputPrompt");
const OpenAIService = require("../config/openai"); // sua classe do config/openai atualizada p/ v4

module.exports = {
  async sendText(req, res) {
    try {
      const inputModel = new inputPrompt(req.body.prompt); // passa só a string

      const prompt = inputModel?.prompt ?? req.body?.prompt ?? "";

      if (!prompt) {
        return res.status(400).json({ success: false, error: "Campo 'prompt' é obrigatório." });
      }

      const text = await OpenAIService.textCompletion({ prompt: inputModel.prompt });


      return res.status(200).json({
        success: true,
        data: text,
      });
    } catch (error) {
      console.error("OpenAI error:", error);
      const msg = error?.response?.data ?? error?.message ?? "Internal Server Error";
      return res.status(400).json({ success: false, error: msg });
    }
  }
};
