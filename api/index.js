import express from "express";
import morgan from "morgan";
import { Server as SocketServer } from "socket.io";
import http, { maxHeaderSize } from "http";
import cors from "cors";
import { PORT } from "./config.js";
import {dirname, join} from "path";
import { fileURLToPath } from "url";
import connection  from "./src/Database/"

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url))
const server = http.createServer(app);
const io = new SocketServer(server, {
  cors: {
    origin: "*",
  },
});

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

app.use(express.static(join(__dirname, "../client/build")))

server.listen(PORT, async ()=>{
  try{
    console.log("server start", PORT);
    await connection()
    console.log()

  }catch(e){
    console.error(e)
  }

});


