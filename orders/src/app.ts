import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";
import { errorHandler, NotFoundError, currentUser } from "@hcyticketing/common";

import { createTicketRouter } from "./routes/new";
import { showTicketRouter } from "./routes/show";
import { indexTicketRouter } from "./routes";
import { updateTicketRouter } from "./routes/update";

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

app.use(createTicketRouter);
app.use(showTicketRouter);
app.use(indexTicketRouter);
app.use(updateTicketRouter);

app.all("*", async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
