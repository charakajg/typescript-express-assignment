import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import { HttpStatusCode, Error } from './types';

// Error handler middleware
const errorHandler: ErrorRequestHandler = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  // The status code defaults to 500 (Internal Server Error) if not set
  const statusCode = err.status || HttpStatusCode.INTERNAL_SERVER_ERROR;
  
  res.status(statusCode);
  res.send({
    error: {
      status: statusCode,
      message: err.message || 'Internal Server Error',
    },
  });
}

export default errorHandler;
