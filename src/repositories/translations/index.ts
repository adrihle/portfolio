import { Locale } from '@/interfaces';
import { ProviderLog } from '@/providers/log';
import mongoose, { Model } from 'mongoose';
import { conn, getModel } from '../db';
import { ProviderCache } from '@/providers/cache';
import { APP_SETTINGS } from '@/settings';

type CreateTranslation = {
  page: string;
  locale: Locale;
  translations: Record<string, string | object | Array<object>>;
};

type Translation = CreateTranslation & {
  updatedAt: Date;
  createdAt: Date;
};

type SearchParams = Pick<CreateTranslation, 'locale' | 'page'>;

type Config = {
  cache?: boolean;
  memory?: boolean;
  ttl?: number;
}

const DEFAULT_CONFIG: Config = {
  cache: true,
  memory: false,
  ttl: APP_SETTINGS.CACHE.PAGES.TTL,
};

class Repository {
  private readonly model: Model<Translation>
  private readonly logger = new ProviderLog('REPOSITORY TRANSLATES');
  private readonly config: Config;

  constructor(config: Config) {
    this.config = config;
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

  private getCacheKey({ page, locale }: SearchParams) {
    return `${page}#${locale || 'home'}`;
  }

  private async getCached({ page, locale }: SearchParams) {
    this.logger.debug(`Fetching from cache ${page} | ${locale}`);
    const cached = await ProviderCache.get<Translation>({ key: this.getCacheKey({ page, locale }) });
    if (cached) return cached;
    this.logger.info(`Translate not found for ${page} | ${locale}`);
  }

  // FIXME: decide what to cache, fully document or just the translations!!
  private async cache({ page, locale, translations }: CreateTranslation) {
    await ProviderCache.set({
      key: this.getCacheKey({ page, locale }),
      value: translations,
      expire: this.config.ttl,
    })
  }

  async get({ page, locale, cache = this.config.cache }: SearchParams & Config) {
    this.logger.debug(`Fetching ${page} | ${locale}`);

    if (cache) {
      const cached = await this.getCached({ page, locale });
      if (cached) return cached;
    }

    const filter = { ...(page && { page }), ...(locale && { locale }) };
    const doc = await this.model.findOne(filter).lean();
    this.logger.debug(`Found ${page} | ${locale}`);

    if (!doc) return null;
    if (!cache) return doc;
    
    await this.cache({ page, locale, translations: doc?.translations as Translation['translations'] })
    return doc.translations;
  }

  async write({ page, locale, translations, cache = this.config.cache }: CreateTranslation & Config) {
    this.logger.debug(`Creating new document ${page} | ${locale}`);

    try {
      const doc = new this.model({ page, locale, translations });
      await doc.save();
      this.logger.debug(`Successfull created ${page} | ${locale}`);
      if (cache) await this.cache({ page, locale, translations });
      return doc;
    } catch(err) {
      this.logger.error(`Error creating document ${page} | ${locale}`, { err });
      throw err;
    }
  }
}

const RepositoryTranslates = new Repository(DEFAULT_CONFIG);

export { RepositoryTranslates };
