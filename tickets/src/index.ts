import mongoose from "mongoose";
import { natsWrapper } from "./nats-wrapper";
import { app } from "./app";

const init = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defined");
  }
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI must be defined");
  }

  try {
    await natsWrapper.connect("ticketing", "dffdsasdf", "http://nats-srv:4222");
    natsWrapper.client.on("close", () => {
      console.log("NATS connection closed");
      process.exit();
    });
    // SIGINT: When user presses Ctrl+C to terminate
    process.on("SIGINT", () => natsWrapper.client.close());
    // SIGTREM: When other processes or the system itself send the terminate signal
    process.on("SIGTERM", () => natsWrapper.client.close());

    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }

  app.listen(3000, () => {
    console.log("Listening on port 3000!");
  });
};

init();
