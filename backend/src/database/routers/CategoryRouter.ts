import { Router } from 'express';
import CategoryController from '../controllers/CategoryController';

const CategoryRouter = Router();

CategoryRouter.get('/get-all', (req, res, next) =>
  new CategoryController(req, res, next).getAllCategories(),
);

export default CategoryRouter;
