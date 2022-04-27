import dotenv from 'dotenv';
import dbConfig from './db.config';
import { IConfig } from './types';

dotenv.config();

const config: IConfig = {
  app: {
    port: process.env.PORT ?? '',
    env: process.env.NODE_ENV ?? ''
  },
  db: {
    ...dbConfig()
  }
};

export default config;
