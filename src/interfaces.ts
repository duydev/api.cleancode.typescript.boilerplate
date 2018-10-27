import { HttpServer, Router } from 'src/types';

export interface IConfig {
  env: string;
  port: number;
}

export interface IApplication {
  start(): void;
}

export interface IServer {
  start(): HttpServer;
  stop(): void;
}

export interface IRouter {
  route(): Router;
}
