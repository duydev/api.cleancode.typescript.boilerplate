import 'reflect-metadata';
import { Identifier } from 'src/constants';
import { IApplication } from 'src/interfaces';
import { container } from 'src/container';

const app = container.get<IApplication>(Identifier.Application);

app.start();
