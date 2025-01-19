import { ProviderLog } from '@/providers';
import mongoose from 'mongoose';

let isConnected = false;
const logger = new ProviderLog('DDBB');

export const conn = async () => {
  logger.debug('Connecting');
  if (isConnected) return mongoose.connection;

  try {
    const db = await mongoose.connect(process.env.MONGO_URI || '');
    isConnected = true;
    logger.debug('Successfull conected')
    return db.connection;
  } catch(err) {
    const message = `Failed connection: ${JSON.stringify(err)}`;
    logger.error(message)
    throw new Error(message);
  }
};
