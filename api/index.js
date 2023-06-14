import cors from "cors";
import * as dotenv from "dotenv"
import express, { json } from "express";
import http from "http";
import mongoose from "mongoose";
import morgan from "morgan";
import { Server as SocketServer } from "socket.io";
import { PORT, DB_PASSWORD } from "./config.js";
import router from "./src/Routes/index.js";


dotenv.config()
const uri = `mongodb+srv://sebastian:${process.env.DB_PASSWORD}@cluster0.ji8l9rz.mongodb.net/?retryWrites=true&w=majority`;

const app = express();
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
  console.log("Cliente Conectado");
  socket.on("message", (message) => {
    console.log(message);
    socket.broadcast.emit("message", message);
  });
});

// app.use(express.static(join(__dirname, "../client/build")));

app.use("/", router);

server.listen(process.env.PORT, async () => {
  try {
    console.log("server start", process.env.PORT);
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("conectado");
  } catch (e) {
    console.error(e);
  }
});
