const express = require("express");
const app = express();
const client = require("./redis");

// const userRoute = require("./routes/UserRoute");
// app.use("/", userRoute);

app.listen(8080, () => {
    console.log("Server running on port 8080.");
});