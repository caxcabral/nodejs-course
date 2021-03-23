import { io } from 'socket.io-client';

const socket = io('http://localhost:8000');

const createSocketClient = (name, interval) => {
    socket.on('connect', () => {
    
        console.log(`${name} connected!`);
    
        setInterval(() => {
            socket.emit('message', `Hello from ${name}`);
        }, interval)
    });
    
    socket.on('disconnect', () => console.log(`${name} disconnected.`));    
    socket.on('someOtherEvent', (msg) => console.log(msg));

}

createSocketClient('Cliente server 1', 2000);
createSocketClient('Client server 2', 5000)