const { Configuration, OpenAIApi } = require("openai");

module.exports = class openai {
  static configuration() {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });

    return new OpenAIApi(configuration);
  }

  static textCompletion({ prompt }) {
    return {
      model: "gpt-3.5-turbo-16k-0613",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: `${prompt}` },
      ],

      temperature: 0,
      max_tokens: 15500,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    };
  }
};
