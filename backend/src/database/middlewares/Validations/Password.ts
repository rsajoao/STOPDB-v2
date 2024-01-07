import { Request, Response, NextFunction } from 'express';

export function passwordError(password: string): string | false {
  if (!password) {
    return "O campo 'password' é obrigatório";
  }

  if (!password.match(/^(?=.*[A-Za-z])(?=.*\d).{6,}$/)) {
    return 'A senha precisa ter pelo menos 6 dígitos entre números e letras';
  }

  return false;
}

const PasswordValidation = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const { password } = req.body;

  const error = passwordError(password);

  if (error) throw new Error(error);
  next();
};

export default PasswordValidation;
