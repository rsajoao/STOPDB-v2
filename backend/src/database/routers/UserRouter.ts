import { Router } from 'express';
import UserController from '../controllers/UserController';
import ValidateUser from '../middlewares/Authorization';
import EmailValidation from '../middlewares/Validations/Email';
import PasswordValidation from '../middlewares/Validations/Password';
import UsernameValidation from '../middlewares/Validations/Username';

const UserRouter = Router();

UserRouter.get('/get-user', ValidateUser, (req, res, next) =>
  new UserController(req, res, next).getUser(),
);

UserRouter.post(
  '/create-user',
  EmailValidation,
  PasswordValidation,
  UsernameValidation,
  (req, res, next) => new UserController(req, res, next).createUser(),
)

export default UserRouter;
