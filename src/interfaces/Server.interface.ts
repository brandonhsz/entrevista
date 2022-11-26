import express from 'express';

export interface IServer {
  app: express.Application;
  port: number | string;

  listen(): void;
  configure(): void;
  middleware(): void;
  routes(): void;
}