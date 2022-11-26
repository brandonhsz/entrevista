import { Router } from 'express';
import { ProductController } from '../controllers';

export const router = Router();

router.get('/', ProductController.getProducts);
