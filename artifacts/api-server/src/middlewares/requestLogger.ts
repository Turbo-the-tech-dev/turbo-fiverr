import type { NextFunction, Request, Response } from 'express';

export function requestLogger(req: Request, _res: Response, next: NextFunction) {
  const now = new Date().toISOString();
  console.debug(`[REQUEST] ${now} ${req.method} ${req.url}`);
  next();
}
