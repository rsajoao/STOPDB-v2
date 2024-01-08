import { Response, NextFunction } from 'express';
import { CustomRequest } from '../helpers/CustomRequest';
import { verifyToken } from '../auth/Authentication';

export default function ValidateUser(
  req: CustomRequest,
  _res: Response,
  next: NextFunction,
) {
  const {
    headers: { authorization: token },
  } = req;

  if (!token) throw new Error('Token inexistente');
  if (typeof token === 'string') {
    const user = verifyToken(token);
    if ('error' in user) throw new Error('Token inválido');
    else req.userData = user;
  }
  next();
}
