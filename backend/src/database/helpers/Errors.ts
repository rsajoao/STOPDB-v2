import { ErrTypes } from "../types/Error";

const Errors: ErrTypes[] = [
  {
    code: 400,
    error: 'BAD_REQUEST',
    messages: [],
  },
  {
    code: 401,
    error: 'UNAUTHORIZED',
    messages: [],
  },
  {
    code: 404,
    error: 'NOT_FOUND',
    messages: [],
  },
  {
    code: 403,
    error: 'FORBIDDEN',
    messages: [],
  },
  {
    code: 409,
    error: 'CONFLICT',
    messages: [],
  },
];

export default Errors;
