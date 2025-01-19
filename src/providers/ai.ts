import { Locale } from "@/interfaces";
import { OpenAI } from "openai";
import { ProviderLog } from "./log";

let instance: OpenAI;
const logger = new ProviderLog('PROVIDER AI');

const MODELS = {
  GPT4: 'gpt-3.5-turbo',
} as const;

const conn = () => {
  logger.debug('Connecting OpenAI instance');
  if (instance) return instance;

  instance = new OpenAI({ apiKey: process.env.OPENAI_KEY });

  return instance;
};

type TranslateTextParams<T> = {
  text: T;
  locale: Locale;
};

const translateText = async <T>({ text, locale }: TranslateTextParams<T>): Promise<T> => {
  const openai = conn();

  const instructions = `
    You are a professional translator, translate the following JSON object into locale: 
    "${locale}" while preserving the structure and key language, formatting of the object values.
    Do not add or remove any keys, Return the result as a valid JSON object, just the object
    stringified:
  `;

  logger.debug('Requesting translating to OpenAI');

  const result = await openai.chat.completions.create({
    model: MODELS.GPT4,
    messages: [
      { role: 'system', content: instructions },
      { role: 'user', content: JSON.stringify(text) },
    ],
  });

  const response = result.choices[0].message.content;
  if (!response) return text;

  logger.debug('Parsing response');
  try {
    const translate = JSON.parse(response.trim()) as T;
    logger.debug('Successfull translation parsed');
    return translate;
  } catch (err) {
    logger.error('Error parsing translation', { err });
    return text;
  }
};

const ProviderAI = {
  translateText,
};

export { ProviderAI };
