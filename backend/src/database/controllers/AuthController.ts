import { NextFunction, Request, Response } from 'express';
import AuthService from '../services/AuthService';

export default class AuthController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: AuthService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new AuthService();
  }

  public async login(): Promise<Response | void> {
    try {
      const {
        body: { username, password },
      } = this.req;

      const token = await this.service.login(username, password);
      return this.res.status(200).json(token);
    } catch (err) {
      this.next(err);
    }
  }

  public async validate(): Promise<Response | void> {
    try {
      const {
        headers: { authorization: token },
      } = this.req;
      const user = await this.service.validate(token);

      return this.res.status(200).json(user);
    } catch (err) {
      this.next(err);
    }
  }
}
