import { IApplication, IServer } from 'src/interfaces';
import { inject, fluentProvide } from 'src/container';
import { Identifier } from 'src/constants';

@fluentProvide(Identifier.Application)
  .inSingletonScope()
  .done()
export class Application implements IApplication {
  private server: IServer;

  constructor(@inject(Identifier.Server) server: IServer) {
    this.server = server;
  }

  start(): void {
    this.server.start();
  }
}
