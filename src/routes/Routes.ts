import express from 'express';
import { ProductController } from '../controllers';

export class IndexRouter {
  public router: express.Router
  private controller: ProductController = new ProductController()

  constructor() {
    this.router = express.Router();
    this.initRoutes()
  }

  protected initRoutes(): void {
    this.router.get('/', this.controller.getProducts)
  }
}