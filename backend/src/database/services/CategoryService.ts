import { ICategory } from '../interfaces/Category';
import Category from '../models/Category';
import Theme from '../models/Theme';

export default class CategoryService {
  constructor(private model = Category) {}

  public async getAllCategories(): Promise<ICategory[]> {
    const categories = await this.model.findAll({
      attributes: ['id', 'name', 'themeId'],
      include: [
        {
          model: Theme,
          as: 'theme',
          attributes: ['name'],
        },
      ],
    });
    // return categories;
    return categories.map((c) => {
      const { theme, ...category} = c.toJSON();
      return {
        ...category, theme: theme.name
      };
    });
  }
}
