const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

// Routes

const chatroomRoute = require("./routes/ChatroomRoute");
const userRoute = require("./routes/UserRoute");

console.log(typeof chatroomRoute);
console.log(typeof userRoute);


// app.use("/user", userRoute);
// app.use("/chatroom", chatroomRoute);

app.listen(8080, () => {
    console.log("Server running on port 8080.");
});
