import { ProviderLog } from '@/providers/log';
import mongoose from 'mongoose';

let isConnected = false;
const logger = new ProviderLog('DDBB');
const IS_DEV = process.env.ENVIRONMENT === 'development';

const conn = async () => {
  logger.debug('Connecting');
  if (isConnected) return mongoose.connection;

  try {
    const url = IS_DEV ? process.env.MONGO_URI_LOCAL : process.env.MONGO_URI_PROD;
    const db = await mongoose.connect(url || '');
    isConnected = true;
    logger.debug('Successfull conected')
    return db.connection;
  } catch(err) {
    const message = `Failed connection: ${JSON.stringify(err)}`;
    logger.error(message)
    throw new Error(message);
  }
};

const getModel = <T>({ model, schema }: { model: string, schema: mongoose.Schema<T> }) => {
  if (mongoose.models[model]) return mongoose.models[model];

  return mongoose.model<T>(model, schema);
};

export { conn, getModel }
