import nats from "node-nats-streaming";

console.clear();

const stan = nats.connect("ticketing", "abc", {
  url: "http://localhost:4222",
});

stan.on("connect", () => {
  console.log("Publisher connected to NATS Streaming Server");

  const data = JSON.stringify({
    id: "123",
    title: "Linkin Park World Tour",
    price: 999,
  });

  stan.publish("ticket:created", data, () => {
    console.log("Event published!");
  });
});
