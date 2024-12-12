import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";
import { errorHandler, NotFoundError } from "@hcyticketing/common";

import { currentUserRouter } from "./routes/current-user";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";

const app = express();
app.set("trust proxy", true); // For Express app that are behind a proxy: load balancer, ingress nginx, GCP
app.use(json());
app.use(
  cookieSession({
    signed: false, // Don't hash the cookie content (JWT is already signed)
    secure: process.env.NODE_ENV !== "test", // Send cookie only over HTTPS (requires trust proxy set to true)
  })
);

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all("*", async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
