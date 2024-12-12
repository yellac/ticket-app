import express, { Request, Response } from "express";

import { currentUser } from "@hcyticketing/common";

const router = express.Router();

const currentUserHandler = (req: Request, res: Response) => {
  res.send({ currentUser: req.currentUser || null });
};

router.get("/api/users/currentuser", currentUser, currentUserHandler);

export { router as currentUserRouter };
