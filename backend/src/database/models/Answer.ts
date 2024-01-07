import { DataTypes, Model } from 'sequelize';
import db from './config';
import { Letter, Status } from '../interfaces/Answer';

export default class Answer extends Model {
  declare id: number;
  declare answer: string;
  declare rare: boolean;
  declare userId: number;
  declare categoryId: number;
  declare status: Status;
  declare public: boolean;
  declare letter: Letter;
  declare createdAt: Date;
  declare updatedAt: Date;
  category: any;
  byUser: any;
}

Answer.init(
  {
    answer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rare: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
      field: 'user_id',
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'category_id',
    },
    status: {
      type: DataTypes.ENUM('accepted', 'rejected', 'pending'),
      defaultValue: 'pending',
      allowNull: false,
    },
    public: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
    letter: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    underscored: true,
    sequelize: db,
  },
);
