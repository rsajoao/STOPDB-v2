import { UserPayload } from '../interfaces/Authorization';

declare module 'express' {
  interface Request {
    userPayload?: UserPayload;
  }
}
