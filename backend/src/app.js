const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

// Routes
const userRoute = require("./routes/UserRoute");
app.use("/user", userRoute);

app.listen(8080, () => {
    console.log("Server running on port 8080.");
});