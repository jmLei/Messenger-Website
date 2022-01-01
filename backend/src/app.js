const express = require("express");
const app = express();
const client = require("./redis");
const User = require("./models/User");

// const userRoute = require("./routes/UserRoute");
// app.use("/", userRoute);

app.listen(8080, () => {
    console.log("Server running on port 8080.");
});