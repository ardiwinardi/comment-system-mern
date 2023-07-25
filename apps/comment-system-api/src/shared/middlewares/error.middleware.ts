import { NextFunction, Request, Response } from 'express';
import { ValidationException } from '../exceptions/validation.exception';

function errorMiddleware(
  error: ValidationException,
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const status = error.status || 500;
    const message = error.message || 'Something went wrong';
    const errors = error.errors;
    res.status(status).send({ message, errors });
  } catch (error) {
    next(error);
  }
}

export default errorMiddleware;
