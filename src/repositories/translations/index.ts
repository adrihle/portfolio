import mongoose, { Model } from 'mongoose';
import { conn } from '../db';
import { Locale } from '@/interfaces';
import { ProviderLog } from '@/providers/log';

const logger = new ProviderLog('REPOSITORY TRANSLATION')

type CreateTranslation = {
  page: string;
  locale: Locale;
  translations: Record<string, mongoose.Schema.Types.Mixed >;
};

type Translation = CreateTranslation & {
  updatedAt: Date;
  createdAt: Date;
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

  return model.findOne<Translation>({ page, locale }).lean();
};

const create = async ({ page, locale, translations }: CreateTranslation) => {
  logger.debug(`Creating new ${page} document for ${locale}`);
  await conn();

  try {
    const doc = new model({ page, locale, translations });
    await doc.save();
    logger.debug(`Successfull created ${page} for ${locale}`);
  } catch (err) {
    logger.error(`Error creating ${page} for ${locale}`, { err });
  }
};

const update = async ({ id: _id, payload }: { id: mongoose.Types.ObjectId, payload: Partial<CreateTranslation> }) => {
  logger.debug(`Updating id: ${_id}`);
  try {
    await model.updateOne({ _id }, { $set: payload });
    logger.debug(`Succesfully updated id: ${_id}`);
  } catch (err) {
    logger.error(`Error updating id: ${_id}`, { err });
  }
};

const RepositoryTranslation = {
  get,
  create,
  update,
};

export { RepositoryTranslation };

