// server.js
const WebSocket = require("ws");

// 1. Create a WebSocket Server on port 3000
const wss = new WebSocket.Server({ port: 3000 });

console.log("WebSocket server is running on ws://localhost:3000");

// 2. Event listener for when a new client connects
wss.on("connection", function connection(ws) {
    console.log("New client connected!");

    // Send a welcome message to the specific client that just connected
    ws.send("Welcome to the WebSocket Chat Room!");

    // 3. Event listener for receiving messages from a client
    ws.on("message", function incoming(message) {
        console.log("Received raw message:", message.toString());

        // 4. Broadcast the message to ALL connected clients
        wss.clients.forEach(function each(client) {
            // Check if the connection is open before sending
            if (client.readyState === WebSocket.OPEN) {
                client.send(message.toString());
            }
        });
    });

    // 5. Event listener for when a client disconnects
    ws.on("close", () => {
        console.log("Client disconnected");
    });
});