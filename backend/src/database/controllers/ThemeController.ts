import { Response, NextFunction } from 'express';
import { CustomRequest } from '../helpers/CustomRequest';
import ThemeService from '../services/ThemeService';

export default class ThemeController {
  private req: CustomRequest;
  private res: Response;
  private next: NextFunction;
  private service: ThemeService;

  constructor(req: CustomRequest, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new ThemeService();
  }

  public async getAllThemes(): Promise<Response | void> {
    try {
      const themes = await this.service.getAllThemes();

      return this.res.status(200).json(themes);
    } catch (err) {
      this.next(err);
    }
  }
}
