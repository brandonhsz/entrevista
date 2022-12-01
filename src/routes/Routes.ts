import express from 'express';
import { ProductController, StoreController, UserController } from '../controllers';
import passport from 'passport';
export class IndexRouter {
  public router: express.Router;
  private products: ProductController = new ProductController();
  private store: StoreController = new StoreController();
  private user: UserController = new UserController();
  constructor() {
    this.router = express.Router();
    this.initRoutes();
  }

  protected initRoutes(): void {
    this.router.get('/', this.products.getProducts);
    this.router.post('/', passport.authenticate('jwt', { session: false }), this.products.createProduct);

    this.router.post('/store', this.store.getTotal);

    this.router.post('/signup', this.user.signUp);
    this.router.post('/signin', this.user.signIn);

  }
}