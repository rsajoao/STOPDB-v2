import { Router } from 'express';
import ThemeController from '../controllers/ThemeController';

const ThemeRouter = Router();

ThemeRouter.get('/get-all', (req, res, next) =>
  new ThemeController(req, res, next).getAllThemes(),
);

export default ThemeRouter;