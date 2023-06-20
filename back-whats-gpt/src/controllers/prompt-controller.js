// const inputPrompt = require("../models/input-prompt");
const openai = require("../config/openai");

module.exports = {
  async sendText(req, res) {
    const openaiAPI = openai.configuration();
    // const inputModel = new inputPrompt(req.body);
    const prompt = req.body;

    try {
      const response = await openaiAPI.chatCompletion(
        openai.textCompletion(prompt)
      );

      return res.status(200).json({
        sucess: true,
        data: response.data.choices[0].text,
      });
    } catch (error) {
      return res.status(400).json({
        sucess: false,
        error: error.response
          ? error.response.data
          : "There was an inssue on the server",
      });
    }
  },
};
