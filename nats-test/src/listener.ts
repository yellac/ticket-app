import nats from "node-nats-streaming";
import { randomBytes } from "crypto";
import { TicketCreatedListener } from "./events/ticket-created-listener";

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

  new TicketCreatedListener(stan).listen();
});

// SIGINT: When user presses Ctrl+C to terminate
process.on("SIGINT", () => stan.close());
// SIGTREM: When other processes or the system itself send the terminate signal
process.on("SIGTERM", () => stan.close());
