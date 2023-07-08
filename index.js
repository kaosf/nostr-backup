// ka's nostr backup experimental code version 20230704

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

// Envrionment
// Node.js 18.16.1
// npm 9.5.1

// Commands
//
// mkdir nostr-backup
// cd nostr-backup
// npm init
// # Enter all prompt
// npm i -S websocket
//
// # Edit this file e.g.
// vi index.js
//
// node index.js

// package.json
/*
{
  "name": "nostr-backup",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "websocket": "^1.0.34"
  }
}
*/

// ref.
// https://github.com/bordalix/nostr-backup/blob/742c425ef596a070f7404f27d3ed9a2f18b1e056/index.html
// nostr-util.js getEvents https://nostr-utils.pages.dev/js/nostr-utils.js
// https://github.com/bordalix/nostr-backup/blob/742c425ef596a070f7404f27d3ed9a2f18b1e056/js/nostr-backup.js
// https://github.com/bordalix/nostr-backup/blob/742c425ef596a070f7404f27d3ed9a2f18b1e056/js/relays.js
// https://github.com/theturtle32/WebSocket-Node/tree/cce6d468986dd356a52af5630fd8ed5726ba5b7a#client-example
