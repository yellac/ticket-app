import express, { Request, Response } from "express";
import { body } from "express-validator";
import jwt from "jsonwebtoken";
import { BadRequestError, validateRequest } from "@hcyticketing/common";

import { User } from "../models/user";

const router = express.Router();

const signupHandler = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new BadRequestError("Email in use");
  }

  const user = User.build({ email, password });
  await user.save();

  // Generate JWT
  const userJwt = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.JWT_KEY!
  );

  // Store token in session object via cookie session
  req.session = {
    jwt: userJwt,
  };

  res.status(201).send(user);
};

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be between 4 and 20 characters")
      .isAlphanumeric()
      .withMessage("Password must be alphanumeric"),
  ],
  validateRequest,
  signupHandler
);

export { router as signupRouter };
