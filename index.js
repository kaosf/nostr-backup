const npub = "a6f1f450080b65ba75da8ac7328f91c94f8314b2cc4aa719c516852a29388f0b";
const relay = "wss://yabu.me";

const WebSocketClient = require("websocket").client;

const client = new WebSocketClient();

client.on("connectFailed", (error) => {
  console.log("Connect Error: " + error.toString());
});

client.on("connect", (connection) => {
  console.log("WebSocket Client Connected");
  connection.on("error", (error) => {
    console.log("Connection Error: " + error.toString());
  });
  connection.on("close", () => {
    console.log("echo-protocol Connection Closed");
  });
  connection.on("message", (message) => {
    if (message.type === "utf8") {
      console.log(message);
    }
  });

  const send = () => {
    if (connection.connected) {
      connection.sendUTF(
        JSON.stringify(["REQ", "my-sub", { authors: [npub] }])
      );
      setTimeout(send, 1000);
    }
  };
  send();
});

client.connect(relay);
