import { Request } from 'express';
import { UserPayload } from '../interfaces/Authorization';

export interface CustomRequest extends Request {
  userData?: UserPayload;
}
