import { Router } from 'express';
import AnswerController from '../controllers/AnswerController';

const AnswerRouter = Router();

AnswerRouter.get('/get-all', (req, res, next) =>
  new AnswerController(req, res, next).getAllAnswers(),
);

export default AnswerRouter;
