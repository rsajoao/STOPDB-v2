require('dotenv/config');
import { JwtPayload, sign, verify } from 'jsonwebtoken';
import { UserError, UserPayload } from '../interfaces/Authorization';

const secret = process.env.JWT_SECRET as string;

const jwtConfig: Record<string, string> = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

export function generateToken(payload: UserPayload): string {
  const token = sign({ payload }, secret, jwtConfig);
  return token;
}

export function verifyToken(token: string): UserPayload | UserError {
  try {
    const { payload } = verify(token, secret) as JwtPayload;
    return payload as UserPayload;
  } catch (err) {
    const error = {
      error: (err as Error).message,
    };
    return error;
  }
}
