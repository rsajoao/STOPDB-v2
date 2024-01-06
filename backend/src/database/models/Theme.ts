import { DataTypes, Model } from 'sequelize';
import db from './config';

export default class Theme extends Model {
  declare id: number;
  declare name: string;
  declare createdAt: Date;
  declare updatedAt: Date;
}

Theme.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    underscored: true,
    sequelize: db,
  },
);
