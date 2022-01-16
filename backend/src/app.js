require("dotenv").config();

const app = require("express")();
const httpServer = require("http").createServer(app);
const bodyParser = require("body-parser");

const io = require("socket.io")(httpServer, {
    cors: {
        origin: "http://localhost:3000"
    }
});

io.on("connection", (socket) => {
    console.log(`${socket.id} connected to the server.`);

    socket.on('message', (message) => {
        io.emit('message', message);
    });

    socket.on('disconnect', () => {
        console.log(`${socket.id} disconnected from the server.`);
    });
});

app.use(bodyParser.json());

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

const userRoute = require("./routes/UserRoute");
app.use("/user", userRoute);

httpServer.listen(8080, () => {
    console.log("Server running on port 8080.");
});
