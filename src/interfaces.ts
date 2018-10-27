import { HttpServer, Router } from 'src/types';

export interface IConfig {
  env: string;
  port: number;
  debug: string;
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

export interface ILogger {
  info(message: any, ...args: any[]): void;
  warn(message: any, ...args: any[]): void;
  debug(message: any, ...args: any[]): void;
  error(message: any, ...args: any[]): void;
}
