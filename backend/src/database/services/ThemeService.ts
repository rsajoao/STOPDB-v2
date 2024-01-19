import Theme from '../models/Theme';
import Category from '../models/Category';
import { ITheme } from '../interfaces/Theme';

export default class ThemeService {
  constructor(private model = Theme) {}

  public async getAllThemes(): Promise<ITheme[]> {
    const themes = await this.model.findAll({
      attributes: ['id', 'name'],
      include: [
        {
          model: Category,
          as: 'categories',
          attributes: ['id', 'name'],
        },
      ],
      order: [
        ['id', 'ASC'],
        [{ model: Category, as: 'categories' }, 'name', 'ASC'],
      ],
    });
    return themes.map((t) => t.toJSON()) as ITheme[];
  }
}
