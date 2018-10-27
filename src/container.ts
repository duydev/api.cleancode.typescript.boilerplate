import { Container, injectable, inject } from 'inversify';
import {
  fluentProvide,
  buildProviderModule
} from 'inversify-binding-decorators';
import getDecorators from 'inversify-inject-decorators';
import { Config } from 'src/config';
import { IConfig } from 'src/interfaces';
import { Identifier } from 'src/constants';
import 'src/loader';

const container = new Container();

container.bind<IConfig>(Identifier.Config).toConstantValue(Config);

container.load(buildProviderModule());

export { container, fluentProvide, getDecorators, injectable, inject };
