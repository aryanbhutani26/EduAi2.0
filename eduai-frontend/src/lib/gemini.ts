import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function generateCheatsheet(topic: string) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `Create a short, 10-minute study cheat sheet for the topic: "${topic}".
Format it as a bullet list using markdown. Focus on key definitions, formulas, dates or tricks if applicable.`;

  const result = await model.generateContent(prompt);
  const text = await result.response.text();

  return text;
}