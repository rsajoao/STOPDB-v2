import { NextFunction, Request, Response } from 'express';
import Errors from '../helpers/Errors';
import { Err, ErrObject, ErrTypes } from '../interfaces/Error';

const errorResponse = (message: string): ErrObject => {
  const err: ErrTypes = Errors.find((Error) =>
    Error.messages?.includes(message),
  ) as ErrTypes;

  if (err)
    return {
      code: err.code,
      error: err.error,
      message,
    };

  return {
    code: 500,
    error: 'INTERNAL_SERVER_ERROR',
    message,
  };
};

export default class {
  public static handler(
    error: Error,
    _req: Request,
    res: Response,
    _next: NextFunction,
  ) {
    const err = errorResponse(error.message);

    res
      .status(err.code)
      .json({ code: err.code, error: err.error, message: err.message });
  }
}
