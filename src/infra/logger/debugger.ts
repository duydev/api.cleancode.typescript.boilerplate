import * as debug from 'debug';
import { inject, fluentProvide } from 'src/container';
import { Identifier } from 'src/constants';
import { IConfig } from 'src/interfaces';

@fluentProvide(Identifier.Debugger)
  .inSingletonScope()
  .done()
export class Debugger {
  private debugger: debug.IDebugger;

  constructor(@inject(Identifier.Config) config: IConfig) {
    this.debugger = debug(config.debug);
  }

  debug(formatter: any, ...args: any[]): void {
    this.debugger(formatter, ...args);
  }
}
