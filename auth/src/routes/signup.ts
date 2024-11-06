import express, { Request, Response, RequestHandler } from "express";
import { body, validationResult } from "express-validator";

const router = express.Router();

const signupHandler: RequestHandler = (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log("Validation errors: ", errors.array());
    const extractedErrors = errors.array().map((err) => ({ message: err.msg }));
    res.status(400).json({ errors: extractedErrors });
    return;
  }

  const { email, password } = req.body;
  console.log("Creating a user..", { email, password });
  res.status(201).send({});
  console.log("Response sent");
};

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Please enter a valid email"),
    body(
      "password",
      "Password must be between 4 and 20 characters and alphanumeric"
    )
      .isLength({ min: 4, max: 20 })
      .isAlphanumeric()
      .trim(),
  ],
  signupHandler
);

export { router as signupRouter };
