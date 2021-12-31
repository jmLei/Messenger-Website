const express = require("express");
const http = require("http");
const redis = require("redis");

const app = express();

// Connect Redis to Node.js
(async () => {
    const client = redis.createClient();
    client.on("error", (err) => console.log("Redis Client Error", err));
    await client.connect();
    await client.set("key", "value");
    const value = await client.get("key");
})();

app.listen(8080, "127.0.0.1");
console.log("Node server running on port 8080");