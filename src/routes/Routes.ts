import express from 'express';
import { ProductController, StoreController } from '../controllers';

export class IndexRouter {
  public router: express.Router;
  private products: ProductController = new ProductController();
  private store: StoreController = new StoreController();
  constructor() {
    this.router = express.Router();
    this.initRoutes();
  }

  protected initRoutes(): void {
    this.router.get('/', this.products.getProducts);
    this.router.post('/', this.products.createProduct);

    this.router.post('/store', this.store.getTotal);
  }
}