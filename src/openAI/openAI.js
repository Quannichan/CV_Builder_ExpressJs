// old code openAI Azure
// const  OpenAI =  require("openai");

// const token = process.env.OPENAI_KEY;
// const endpoint = "https://models.github.ai/inference";
// const model = "openai/gpt-4.1";

// async function CallOpenAI(content){

//   const client = new OpenAI({ baseURL: endpoint, apiKey: token });

//   const response = await client.chat.completions.create({
//     messages: [
//       { role:"system", content: "You are a helpful assistant." },
//       { role:"user", content: content }
//     ],
//       temperature: 1.0,
//       top_p: 1.0,
//       model: model
//     });

//   return response.choices[0].message.content; 
// }

// module.exports = {CallOpenAI}

// new code using google gen AI
const path = require("node:path");

require("dotenv").config({
  path: path.resolve(__dirname, "../../.env"),
});

const apiKey = process.env.GEMINI_API_KEY;
const model = process.env.GEMINI_MODEL || "gemini-2.5-flash";

if (!apiKey) {
  throw new Error("Missing GEMINI_API_KEY in backend .env");
}

let aiPromise;

async function getAI() {
  if (!aiPromise) {
    aiPromise = import("@google/genai").then(({ GoogleGenAI }) => {
      return new GoogleGenAI({ apiKey });
    }).catch((error) => {
      aiPromise = undefined;
      throw error;
    });
  }

  return aiPromise;
}

async function CallOpenAI(content) {
  if (typeof content !== "string" || !content.trim()) {
    throw new Error("content must be a non-empty string.");
  }

  try {
    const ai = await getAI();

    const response = await ai.models.generateContent({
      model,
      contents: content,
      config: {
        systemInstruction: "You are a helpful assistant.",
        responseMimeType: "application/json",
        temperature: 0.7,
        thinkingConfig: {
          thinkingLevel: "MEDIUM",
        },
      },
    });

    const result = response.text;

    if (!result) {
      throw new Error("Gemini returned an empty response.");
    }

    return result;
  } catch (error) {
    console.error("Gemini API error:", {
      status: error.status,
      message: error.message,
    });

    throw error;
  }
}

module.exports = { CallOpenAI };
