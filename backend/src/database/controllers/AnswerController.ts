import { Response, NextFunction } from 'express';
import { CustomRequest } from '../helpers/CustomRequest';
import AnswerService from '../services/AnswerService';

export default class AnswerController {
  private req: CustomRequest;
  private res: Response;
  private next: NextFunction;
  private service: AnswerService;

  constructor(req: CustomRequest, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new AnswerService();
  }

  public async getAllAnswers(): Promise<Response | void> {
    try {
      const answers = await this.service.getAllAnswers();

      return this.res.status(200).json(answers);
    } catch (err) {
      this.next(err);
    }
  }
}
