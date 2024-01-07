import { Response, NextFunction } from 'express';
import { CustomRequest } from '../helpers/CustomRequest';
import { verifyToken } from '../auth/Authentication';

export default function ValidateUser(
  req: CustomRequest,
  _res: Response,
  next: NextFunction,
) {
  const {
    headers: { authorization },
  } = req;

  if (!authorization) throw new Error('Token inexistente');
  if (typeof authorization === 'string') {
    const user = verifyToken(authorization);
    if ('error' in user) throw new Error('Token inválido');
    else req.userData = user;
  }
  next();
}
