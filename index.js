const WebSocketClient = require("websocket").client;

const client = new WebSocketClient();

client.on('connectFailed', function(error) {
    console.log('Connect Error: ' + error.toString());
});

client.on('connect', function(connection) {
    console.log('WebSocket Client Connected');
    connection.on('error', function(error) {
        console.log("Connection Error: " + error.toString());
    });
    connection.on('close', function() {
        console.log('echo-protocol Connection Closed');
    });
    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            console.log(message);
        }
    });

    function send() {
        if (connection.connected) {
            connection.sendUTF(JSON.stringify(['REQ', 'my-sub', { authors: ["a6f1f450080b65ba75da8ac7328f91c94f8314b2cc4aa719c516852a29388f0b"] }]));
            setTimeout(send, 1000);
        }
    }
    send();
});

client.connect("wss://yabu.me");
