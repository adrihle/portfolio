import { ProviderLog } from '@/providers/log';
import mongoose, { SchemaDefinition } from 'mongoose';

let isConnected = false;
const logger = new ProviderLog('DDBB');

const conn = async () => {
  logger.debug('Connecting');
  if (isConnected) return mongoose.connection;

  try {
    const url = process.env.MONGO_URI;
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

const getModel = <T>({ model, schema }: { model: string, schema: SchemaDefinition<T>}) => {
  if (mongoose.models[model]) return mongoose.models[model];

  const s = new mongoose.Schema(schema, { timestamps: true });

  return mongoose.model<T>(model, s);
};

class Mixed extends mongoose.Schema.Types.Mixed {}

type Model<T> = mongoose.Model<T>;

export { conn, getModel, Mixed };
export type { Model };
