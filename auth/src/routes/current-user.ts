import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

const currentUserHandler = (req: Request, res: Response): void => {
  if (!req.session?.jwt) {
    res.send({ currentUser: null });
    return;
  }

  try {
    const payload = jwt.verify(req.session?.jwt, process.env.JWT_KEY!);
    res.send({ currentUser: payload });
  } catch (err) {
    res.send({ currentUser: null });
  }
};

router.get("/api/users/currentuser", currentUserHandler);

export { router as currentUserRouter };
