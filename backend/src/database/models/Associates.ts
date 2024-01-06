import User from './User';
import Theme from './Theme';
import Category from './Category';
import Answer from './Answer';

export default function associateModels(): void {
  User.hasMany(Answer, { foreignKey: 'userId', as: 'answers' });
  Theme.hasMany(Category, { foreignKey: 'themeId', as: 'categories' });
  Answer.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' });
  Answer.belongsTo(User, { foreignKey: 'userId', as: 'byUser' });
  Category.hasMany(Answer, { foreignKey: 'categoryId', as: 'answers' });
  Category.belongsTo(Theme, { foreignKey: 'themeId', as: 'theme' });
}
