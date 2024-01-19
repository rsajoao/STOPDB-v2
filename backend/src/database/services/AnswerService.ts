import { IAnswer } from '../interfaces/Answer';
import Answer from '../models/Answer';
import Category from '../models/Category';
import User from '../models/User';

export default class AnswerService {
  constructor(private model = Answer) {}

  public async getAllAnswers(): Promise<IAnswer[]> {
    const answers = await this.model.findAll({
      attributes: [
        'id',
        'answer',
        'categoryId',
        'rare',
        'userId',
        'status',
        'public',
        'letter',
        'createdAt',
        'likes',
        'views',
      ],
      where: { public: true, status: 'accepted' },
      include: [
        {
          model: User,
          as: 'byUser',
          attributes: ['username'],
        },
        {
          model: Category,
          as: 'category',
          attributes: ['name'],
        },
      ],
    });

    return answers.map((a) => {
      const { byUser, category, ...answer } = a.toJSON();
      return {
        ...answer,
        username: byUser.username,
        category: category.name,
      };
    }) as IAnswer[];
  }
}
