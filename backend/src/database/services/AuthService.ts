import User from '../models/User';
import { Op } from 'sequelize';
import { generateToken, verifyToken } from '../auth/Authentication';
import { compareHash } from '../helpers/PasswordEncrypt';
import { UserPayload } from '../interfaces/Authorization';

export default class AuthService {
  constructor(private model = User) {}

  public async login(username: string, password: string): Promise<{ token: string }> {
    const userData = await this.model.findOne({
      where: { [Op.or]: [{ username }, { email: username }] },
      attributes: ['id', 'email', 'role', 'username', 'password'],
    });

    if (!userData) throw new Error('Usuário não encontrado');
    if (!compareHash(password, userData.password))
      throw new Error('Senha incorreta');

    const { id, email, role } = userData;

    const token = generateToken({
      id: +id,
      username: userData.username,
      email,
      role: role as 'admin' |'user',
    });

    return { token };
  }

  public async validate(token?: string): Promise<UserPayload> {
    if (!token) throw new Error('Token inexistente');

    const user = verifyToken(token);

    if ('error' in user) throw new Error(user.error);

    return user;
  }
}


