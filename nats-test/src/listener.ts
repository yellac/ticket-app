import nats, { Message } from "node-nats-streaming";
import { randomBytes } from "crypto";

console.clear();

const stan = nats.connect("ticketing", randomBytes(4).toString("hex"), {
  url: "http://localhost:4222",
});

stan.on("connect", () => {
  console.log("Listener connected to NATS Streaming Server");

  stan.on("close", () => {
    console.log("NATS connection closed");
    process.exit();
  });

  const option = stan
    .subscriptionOptions()
    .setManualAckMode(true)
    .setDeliverAllAvailable() // Delivering all events from the past when restarting
    .setDurableName("accounting-service"); // Keep track of all events that have been processed

  const subscription = stan.subscribe(
    "ticket:created",
    "orders-service-queue-group", // Make sure we do not accidentally dump the durable name, even for a short period of time. And to make sure event only goes to one instance of our service.
    option
  );

  subscription.on("message", (msg: Message) => {
    const data = msg.getData();

    if (typeof data === "string") {
      console.log(`Received data ${msg.getSequence()}, with data ${data}`);
    }

    msg.ack();
  });
});

// SIGINT: When user presses Ctrl+C to terminate
process.on("SIGINT", () => stan.close());
// SIGTREM: When other processes or the system itself send the terminate signal
process.on("SIGTERM", () => stan.close());
