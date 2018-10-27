import './env';
import { IConfig } from 'src/interfaces';

export const Config: IConfig = {
  env: process.env.NODE_ENV,
  port: Number(process.env.PORT),
  debug: process.env.DEBUG
};
