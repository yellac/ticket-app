import express, { Request, Response } from "express";

import { currentUser } from "../middlewares/current-user";

const router = express.Router();

const currentUserHandler = (req: Request, res: Response) => {
  res.send({ currentUser: req.currentUser || null });
};

router.get("/api/users/currentuser", currentUser, currentUserHandler);

export { router as currentUserRouter };
