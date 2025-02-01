import { Locale } from '@/interfaces';
import { ProviderLog } from '@/providers/log';
import mongoose, { Model } from 'mongoose';
import { conn, getModel } from '../db';

type CreateTranslation = {
  page: string;
  locale: Locale;
  translations: Record<string, string | object | Array<object>>;
};

type Translation = CreateTranslation & {
  updatedAt: Date;
  createdAt: Date;
};

class Repository {
  private readonly model: Model<Translation>
  private readonly logger = new ProviderLog('REPOSITORY TRANSLATES');

  constructor() {
    this.init();
    this.model = getModel({
      model: 'texts',
      schema: new mongoose.Schema({
        page: { type: String, required: true },
        locale: { type: String, required: true },
        translations: { type: Map, of: mongoose.Schema.Types.Mixed },
      }, { timestamps: true })
    });
  }

  async init() {
    await conn();
  }

  async get({ page, locale }: Pick<Translation, 'page' | 'locale'>) {
    this.logger.debug(`Fetching ${page} | ${locale}`);
    const filter = { ...(page && { page }), ...(locale && { locale }) };
    return this.model.findOne(filter).lean();
  }
}

const RepositoryTranslates = new Repository();

export { RepositoryTranslates };
