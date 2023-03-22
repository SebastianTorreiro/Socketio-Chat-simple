import express from "express";
import morgan from "morgan";
import { Server as SocketServer } from "socket.io";
import http, { maxHeaderSize } from "http";
import cors from "cors";
import { PORT } from "./config.js";
import { measureMemory } from "vm";

const app = express();
const server = http.createServer(app);
const io = new SocketServer(server,{
    cors: {
        origin:'*'
    }
});

app.use(cors());
app.use(morgan("dev"));

io.on('connection', (socket)=>{

    socket.on('message', message =>{
        console.log(message)
        socket.broadcast.emit('message', message)
    }) 
})



server.listen(PORT);
console.log("server start", PORT);
