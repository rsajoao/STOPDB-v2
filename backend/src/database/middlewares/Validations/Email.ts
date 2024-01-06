import { Request, Response, NextFunction } from 'express';

export function emailError(email: string): string | false {
  if (!email) {
    return "O campo 'email' é obrigatório";
  }

  if (
    !email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    )
  ) {
    return 'O email deve ser válido';
  }

  return false;
}

const EmailValidation = (req: Request, _res: Response, next: NextFunction) => {
  const { email } = req.body;

  const error = emailError(email);

  if (error) throw new Error(error);
  next();
};

export default EmailValidation;
