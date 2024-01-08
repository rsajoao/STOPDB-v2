import { ErrTypes } from '../interfaces/Error';

const Errors: ErrTypes[] = [
  {
    code: 400,
    error: 'BAD_REQUEST',
    messages: [
      "O campo 'email' é obrigatório",
      'O email deve ser válido',
      "O campo 'password' é obrigatório",
      'A senha precisa ter pelo menos 6 dígitos entre números e letras',
      "O campo 'username' é obrigatório",
      'O username deve conter pelo menos 4 caracteres',
      'O username deve começar com uma letra',
      'O username deve conter apenas letras e números',
    ],
  },
  {
    code: 401,
    error: 'UNAUTHORIZED',
    messages: ['Não autorizado', 'Token inválido', 'Token inexistente'],
  },
  {
    code: 404,
    error: 'NOT_FOUND',
    messages: [
      'Usuário não encontrado',
      'Usuário não encontrado (email)',
      'Usuário não encontrado (username)',
    ],
  },
  {
    code: 403,
    error: 'FORBIDDEN',
    messages: ['Senha incorreta'],
  },
  {
    code: 409,
    error: 'CONFLICT',
    messages: ['Username já registrado', 'E-mail já registrado'],
  },
];

export default Errors;
