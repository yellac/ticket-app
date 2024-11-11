import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface PayLoad {
  id: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: PayLoad;
    }
  }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.session?.jwt) {
    return next();
  }

  try {
    const payload = jwt.verify(
      req.session.jwt,
      process.env.JWT_KEY!
    ) as PayLoad;
    req.currentUser = payload;
  } catch (err) {}

  next();
};
