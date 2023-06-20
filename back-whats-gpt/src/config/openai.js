const { Configuration, OpenAIApi } = require("openai");

const prompt = "once upon a time";

module.exports = class openai {
  static configuration() {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });

    return new OpenAIApi(configuration);
  }

  static textCompletion({ prompt }) {
    return {
      model: "gpt-3.5-turbo-16k",
      prompt: `${prompt}`,
      temperature: 0,
      max_tokens: 15500,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    };
  }
};
