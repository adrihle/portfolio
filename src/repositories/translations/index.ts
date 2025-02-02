import { APP_SETTINGS } from '@/settings';
import { ProviderLog } from '@/providers/log';
import { conn, getModel, Model, Mixed } from '../db';
import { CreateTranslation, SearchParams, Translation } from './interfaces';
import { translateCache } from './cache';
import { translateMemory } from './memory';

type Config = {
  cache?: boolean;
  memory?: boolean;
  ttl?: number;
}

const DEFAULT_CONFIG: Config = {
  cache: true,
  memory: true,
  ttl: APP_SETTINGS.CACHE.PAGES.TTL,
};

class Repository {
  private readonly model: Model<Translation>
  private readonly logger = new ProviderLog('REPOSITORY TRANSLATES');
  private readonly config: Config;

  constructor(config: Config) {
    this.config = config;
    this.init();
    this.model = getModel<Translation>({
      model: 'texts',
      schema: {
        page: { type: String, required: true },
        locale: { type: String, required: true },
        translations: { type: Map, of: Mixed },
      },
    });
  }

  async init() {
    await conn();
  }

  async get({ page, locale, cache = this.config.cache, memory = this.config.memory }: SearchParams & Config) {
    console.log('testlog>',)
    this.logger.debug(`Fetching ${page} | ${locale}`);

    if (memory) {
      const memoized = translateMemory.get({ page, locale });
      if (memoized) return memoized;
    }

    if (cache) {
      const cached = await translateCache.get({ page, locale });
      if (cached) {
        if (memory) translateMemory.set({ page, locale, translations: cached });
        return cached
      }
    }

    const filter = { ...(page && { page }), ...(locale && { locale }) };
    const doc = await this.model.findOne(filter).lean();
    this.logger.debug(`Found ${page} | ${locale}`);

    const translations = doc?.translations as Translation['translations'];

    if (cache) {
      // FIX: number fallback -.- check anothr workarround
      await translateCache.set({ page, locale, translations, ttl: this.config.ttl || 1 });
    };

    if (memory) {
      translateMemory.set({ page, locale, translations });
    }

    return doc?.translations;
  }

  async write({ page, locale, translations, cache = this.config.cache, memory = this.config.memory }: CreateTranslation & Config) {
    this.logger.debug(`Creating new document ${page} | ${locale}`);

    try {
      const doc = new this.model({ page, locale, translations });
      await doc.save();
      this.logger.debug(`Successfull created ${page} | ${locale}`);
      if (cache || this.config.cache) await translateCache.set({ page, locale, translations, ttl: this.config.ttl || 1 });
      if (memory || this.config.memory) translateMemory.set({ page, locale, translations });
      return doc.translations;
    } catch (err) {
      this.logger.error(`Error creating document ${page} | ${locale}`, { err });
      throw err;
    }
  }
}

const RepositoryTranslates = new Repository(DEFAULT_CONFIG);

export { RepositoryTranslates };
