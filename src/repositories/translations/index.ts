import mongoose, { Model } from 'mongoose';
import { conn } from '../db';
import { Locale } from '@/interfaces';

type Translation = {
  page: string;
  locale: Locale;
  translations: Record<string, mongoose.Schema.Types.Mixed>;
};

const schema = new mongoose.Schema({
  page: { type: String, required: true },
  locale: { type: String, required: true },
  translations: { type: Map, of: mongoose.Schema.Types.Mixed },
}, { timestamps: true });

const model = mongoose.models.texts as Model<Translation> || mongoose.model<Translation>('texts', schema);

type GetTranslation = {
  page: string;
  locale: Locale;
};

const get = async ({ page, locale }: GetTranslation) => {
  await conn();

  const texts = await model.findOne<Translation>({ page, locale }, { translations: 1 }).lean();
  return texts ? texts.translations : null;
};

const create = async ({ page, locale, translations }: Translation) => {
  await conn();

  const doc = new model({ page, locale, translations });
  await doc.save();
};

const RepositoryTranslation = {
  get,
  create,
};

export { RepositoryTranslation };

