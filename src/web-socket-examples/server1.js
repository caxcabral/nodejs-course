import express from 'express';
import http from 'http';
import socketIo from 'socket.io';
import { colorfulLog } from "colorful-log-cx";

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', socket => {
    colorfulLog(`Connected to: ${socket.client.id}`);
            
    // const randomNumber = Math.ceil(Math.random()*100);
    socket.on('message', (data) => {colorfulLog(data)});
    
    socket.on('disconnect', () => {
        colorfulLog(`Disconnected from ${socket.client.id}`);
    });
});

server.listen(8000, () => colorfulLog('Waiting for connection on port 8000.', ''));