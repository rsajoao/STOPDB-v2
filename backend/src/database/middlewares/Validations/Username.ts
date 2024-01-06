import { Request, Response, NextFunction } from 'express';

export function usernameError(username: string): string | false {
  if (!username) {
    return "O campo 'username' é obrigatório";
  }

  if (username.length < 4) {
    return 'O username deve conter pelo menos 4 caracteres';
  }

  const firstChar = username.charAt(0);
  if (!firstChar.match(/[a-zA-Z]/)) {
    return 'O username deve começar com uma letra';
  }

  if (!username.match(/^[a-zA-Z0-9]+$/)) {
    return 'O username deve conter apenas letras e números';
  }

  return false;
}

const UsernameValidation = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const { username } = req.body;

  const error = usernameError(username);

  if (error) throw new Error(error);
  next();
};

export default UsernameValidation;
