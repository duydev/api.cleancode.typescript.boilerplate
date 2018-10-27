import { IConfig, IServer, IRouter, ILogger } from 'src/interfaces';
import { HttpServer } from 'src/types';
import { fluentProvide, inject } from 'src/container';
import { Identifier } from 'src/constants';
import { LoggerRegistry } from 'src/infra/logger';

import * as http from 'http';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as cors from 'cors';
import * as morgan from 'morgan';
import * as helmet from 'helmet';

@fluentProvide(Identifier.Server)
  .inSingletonScope()
  .done()
export class Server implements IServer {
  private server: HttpServer;
  private port: number;
  private router: IRouter;
  private logger: ILogger;

  constructor(
    @inject(Identifier.Config) config: IConfig,
    @inject(Identifier.MainRouter) router,
    @inject(Identifier.LoggerRegistry) loggerRegistry: LoggerRegistry
  ) {
    this.port = config.port;
    this.router = router;
    this.logger = loggerRegistry.register('app');
  }

  start(): HttpServer {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(compression());
    app.use(cors());
    app.use(helmet());
    app.use(morgan('dev'));

    app.use(this.router.route());

    app.disable('x-powered-by');

    this.server = http.createServer(app).listen(this.port, () => {
      this.logger.info(`[PID ${process.pid}] Listening at port ${this.port}`);
    });

    return this.server;
  }

  stop(): void {
    this.server.close();
  }
}
