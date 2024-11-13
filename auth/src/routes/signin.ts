import express, { Request, Response } from "express";
import { body } from "express-validator";
import jwt from "jsonwebtoken";

import { User } from "../models/user";
import { Password } from "../services/password";
import { BadRequestError } from "../errors/bad-request-error";
import { validateRequest } from "../middlewares/validate-request";

const router = express.Router();

const signinHandler = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const existingUser = await User.findOne({ email });

  if (!existingUser) {
    throw new BadRequestError("Invalid credentials");
  }

  const passwordMatch = await Password.compare(existingUser.password, password);
  if (!passwordMatch) {
    throw new BadRequestError("Invalid credentials");
  }

  // Generate JWT
  const userJwt = jwt.sign(
    {
      id: existingUser.id,
      email: existingUser.email,
    },
    process.env.JWT_KEY!
  );

  // Store token in session object via cookie session
  req.session = {
    jwt: userJwt,
  };

  res.status(200).send(existingUser);
};

router.post(
  "/api/users/signin",
  [
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("password")
      .notEmpty()
      .trim()
      .withMessage("Please enter a valid password"),
  ],
  validateRequest,
  signinHandler
);

export { router as signinRouter };
