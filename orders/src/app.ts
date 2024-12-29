import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";
import { errorHandler, NotFoundError, currentUser } from "@hcyticketing/common";

import { createOrderRouter } from "./routes/new";
import { showOrderRouter } from "./routes/show";
import { indexOrderRouter } from "./routes";
import { deleteOrderRouter } from "./routes/delete";

const app = express();
app.set("trust proxy", true); // For Express app that are behind a proxy: load balancer, ingress nginx, GC
app.use(json());
app.use(
  cookieSession({
    signed: false, // Don't hash the cookie content (JWT is already signed)
    secure: process.env.NODE_ENV !== "test", // Send cookie only over HTTPS (requires trust proxy)
  })
);

app.use(currentUser);

app.use(createOrderRouter);
app.use(showOrderRouter);
app.use(indexOrderRouter);
app.use(deleteOrderRouter);

app.all("*", async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
