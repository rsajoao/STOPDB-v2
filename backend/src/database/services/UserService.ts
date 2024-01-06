import { Op } from 'sequelize';
import { compareObjects } from '../helpers/ObjectFunctions';
import { UserPayload } from '../interfaces/Authorization';
import User from '../models/User';
import { generateHash } from '../helpers/PasswordEncrypt';
import { NewUser } from '../interfaces/User';

export default class UserService {
  constructor(private model = User) {}

  public async getUser(
    id: number,
    email: string,
    username: string,
    role: 'admin' | 'user',
  ): Promise<UserPayload> {
    const user = await this.model.findOne({
      where: { id },
      attributes: ['id', 'email', 'username', 'role'],
    });

    if (!user) throw new Error('Não autorizado');
    if (
      !compareObjects(
        {
          id,
          email,
          username,
          role,
        },
        user.dataValues,
      )
    )
      throw new Error('Não autorizado');
    return user.dataValues;
  }

  public async createUser(
    username: string,
    email: string,
    password: string,
  ): Promise<NewUser> {
    console.log('estou aqui');
    const existingUser = await User.findOne({
      where: {
        [Op.or]: [{ username }, { email }],
      },
    });

    if (existingUser) {
      if (existingUser.username === username)
        throw new Error('Username já registrado');
      else throw new Error('E-mail já registrado');
    }

    const { id } = await User.create({
      username,
      email,
      password: generateHash(password),
    });

    return {
      id,
      username,
      email,
    };
  }
}
