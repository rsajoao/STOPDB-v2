import { Router } from 'express';
import AuthController from '../controllers/AuthController';
import AuthValidation from '../middlewares/Validations/LoginValidation';

const AuthRouter = Router();

AuthRouter.post('/get-token', AuthValidation, (req, res, next) =>
  new AuthController(req, res, next).login(),
);

AuthRouter.post('/validate', (req, res, next) => 
  new AuthController(req, res, next).validate(),
);

export default AuthRouter;
