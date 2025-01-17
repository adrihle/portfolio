import mongoose from 'mongoose';
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_APIKEY,
});

console.log('testlog>', process.env.OPENAI_APIKEY);

function generateTranslationPrompt(text: any, locale: any) {
  return `
    Translate the following JSON object into ${locale} while preserving the structure and key language, formatting of the object values. Do not add or remove any keys. Return the result as a valid JSON object, jus thte object stringified.
    ${JSON.stringify(text, null, 2)}
  `;
}

const iaTranslation = async <T>(text: T, locale: string) => {
  const prompt = generateTranslationPrompt(text, locale);
  const result = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
        { role: "system", content: "You are a professional translator." },
        { role: "user", content: prompt },
      ]
  });

  const response = result.choices[0].message.content;

  const parsed = response && JSON.parse(response.trim());

  return parsed;
};

const MONGO_URI = 'mongodb://localhost:27017/translations'

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI).then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  locale: { type: String, required: true },
  translations: { type: Map, of: mongoose.Schema.Types.Mixed },
}, { timestamps: true });

const model = mongoose.models.translations || mongoose.model('translations', schema);

export const translate = async <T>(text: T, locale: string = 'es-ES', page: string = 'home') => {
  await dbConnect();
  const translations = await model.findOne({ name: page, locale });

  if (translations) return translations.translations;

  const result = await iaTranslation(text, locale);

  const doc = new model({ name: page, locale, translations: result });
  await doc.save();

  return result;
};
