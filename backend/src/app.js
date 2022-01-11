require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(express.cookieParser());

// cors
const cors = require("cors");
const whitelist = [ "http://localhost:3000" ];
const corsOptions = {
    origin: function(origin, callback) {
        if(!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS."));
        }
    },
    credentials: true
}

app.use(cors(corsOptions));

app.use((req, res, next) => {
    res.header("Content-Type", "application/json;charset=UTF-8");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", 
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

// Routes

const chatroomRoute = require("./routes/ChatroomRoute");
const userRoute = require("./routes/UserRoute");

app.use("/user", userRoute);
app.use("/chatroom", chatroomRoute);

// requests

app.get("/hello", (req, res) => {
    res.send({message: "Hello"});
});

app.listen(8080, () => {
    console.log("Server running on port 8080.");
});
