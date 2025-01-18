import mongoose from 'mongoose';

let isConnected = false;

export const conn = async () => {
  if (isConnected) return mongoose.connection;

  try {
    const db = await mongoose.connect(process.env.MONGO_URI || '');
    isConnected = true;
    return db.connection;
  } catch(err) {
    console.error(`Failed connection with mongodb: ${JSON.stringify(err)}`);
    throw new Error(`Failed connection with mongodb: ${JSON.stringify(err)}`);
  }
};
