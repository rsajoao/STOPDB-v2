import { Request, Response, NextFunction } from 'express';
import { passwordError } from './Password';

const AuthValidation = (req: Request, _res: Response, next: NextFunction) => {
  const { username, password } = req.body;

  if (!username) throw new Error("O campo 'username' é obrigatório");
  if (username.length < 4)
    throw new Error('O username deve conter pelo menos 4 caracteres');
  if (passwordError(password))
    throw new Error(
      'A senha precisa ter pelo menos 6 dígitos entre números e letras',
    );

  next();
};

export default AuthValidation;
