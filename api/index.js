import express, { json } from "express";
import morgan from "morgan";
import { Server as SocketServer } from "socket.io";
import http, { maxHeaderSize } from "http";
import cors from "cors";
import { PORT } from "./config.js";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import router from "./src/Routes/index.js";
// import { config } from "dotenv";
// import { DB_PASSWORD } from "./config.js";

// import connection  from "./src/Database/index.js"

const password = "wsdy450usdtLz89b";

const uri = `mongodb+srv://sebastian:${password}@cluster0.ji8l9rz.mongodb.net/?retryWrites=true&w=majority`;

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const server = http.createServer(app);
const io = new SocketServer(server, {
  cors: {
    origin: "*",
  },
});
app.use(json());
app.use(cors());
app.use(morgan("dev"));

io.on("connection", (socket) => {
  socket.on("message", (message) => {
    console.log(message);
    socket.broadcast.emit("message", {
      body: message,
      from: socket.id,
    });
  });
});

// app.use(express.static(join(__dirname, "../client/build")));

app.use("/", router);

server.listen(PORT, async () => {
  try {
    console.log("server start", PORT);
    console.log(uri);
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("conectado");
  } catch (e) {
    console.error(e);
  }
});
