import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../auth/Authentication';

export default function ValidateUser(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const {
      headers: { Authorization },
    } = req;

    if (!Authorization) throw new Error('Token inexistente');
    if (typeof Authorization === 'string') {
      const user = verifyToken(Authorization);
      if ('error' in user) throw new Error(user.error);
      else req.userPayload = user;
    } else {
      throw new Error('Token inválido');
    }

    next();
  } catch (err) {
    return res.status(401).json({
      code: 401,
      error: 'UNAUTHORIZED',
      message: (err as Error).message,
    });
  }
}
