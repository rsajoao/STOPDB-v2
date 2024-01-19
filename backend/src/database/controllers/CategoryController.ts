import { Response, NextFunction } from 'express';
import { CustomRequest } from '../helpers/CustomRequest';
import CategoryService from '../services/CategoryService';

export default class CategoryController {
  private req: CustomRequest;
  private res: Response;
  private next: NextFunction;
  private service: CategoryService;

  constructor(req: CustomRequest, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CategoryService();
  }

  public async getAllCategories(): Promise<Response | void> {
    try {
      const categories = await this.service.getAllCategories();

      return this.res.status(200).json(categories);
    } catch (err) {
      this.next(err);
    }
  }
}