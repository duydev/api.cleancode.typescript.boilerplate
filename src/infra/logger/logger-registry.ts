import * as log4js from 'log4js';
import { ILogger } from 'src/interfaces';
import { Logger } from 'src/types';
import { fluentProvide } from 'src/container';
import { Identifier } from 'src/constants';

const config: log4js.Configuration = {
  appenders: {
    app: {
      type: 'console'
    },
    'app-error': {
      type: 'dateFile',
      pattern: '.yyyyMMdd',
      filename: './logs/app/error/app-error.log',
      alwaysIncludePattern: true,
      daysToKeep: 15
    }
  },
  categories: {
    default: {
      appenders: ['app'],
      level: 'info'
    },
    'app-error': {
      appenders: ['app-error'],
      level: 'error'
    }
  }
};

@fluentProvide(Identifier.LoggerRegistry)
  .inSingletonScope()
  .done()
export class LoggerRegistry {
  private logger: Logger;

  constructor() {
    this.logger = log4js;
    this.logger.configure(config);
  }

  register(name: string): ILogger {
    return this.logger.getLogger(name);
  }
}
