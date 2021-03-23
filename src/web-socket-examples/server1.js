import express from 'express';
import http from 'http';
import socketIo from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', socket => {
    console.log(`Connected to: ${socket.client.id}`);
            
    // const randomNumber = Math.ceil(Math.random()*100);
    socket.on('message', (data) => {console.log(data)});
    
    socket.on('disconnect', () => {
        console.log(`Disconnected from ${socket.client.id}`);
    });
});

server.listen(8000, () => console.log('Waiting for connection on port 8000.'));