const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

const userRoute = require("./routes/UserRoute");
app.use("/", userRoute);

app.listen(8080, () => {
    console.log("Server running on port 8080.");
});