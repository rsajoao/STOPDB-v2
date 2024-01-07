import { Response, NextFunction } from 'express';
import { CustomRequest } from '../helpers/CustomRequest';
import UserService from '../services/UserService';
import { UserPayload } from '../interfaces/Authorization';

export default class UserController {
  private req: CustomRequest;
  private res: Response;
  private next: NextFunction;
  private service: UserService;

  constructor(req: CustomRequest, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new UserService();
  }

  public async getUser(): Promise<Response | void> {
    try {
      const { id, email, username, role } = this.req.userData as UserPayload;
      const user = await this.service.getUser(+id, email, username, role);

      return this.res.status(200).json(user);
    } catch (err) {
      this.next(err);
    }
  }

  public async createUser(): Promise<Response | void> {
    try {
      const {
        body: { username, email, password },
      } = this.req;
      const newUser = await this.service.createUser(username, email, password);

      return this.res.status(200).json(newUser);
    } catch (err) {
      this.next(err);
    }
  }
}
