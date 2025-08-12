class InputPrompt {
  constructor(prompt) {
    this.prompt = typeof prompt === "object" ? prompt.prompt : prompt;
  }
}
module.exports = InputPrompt;
