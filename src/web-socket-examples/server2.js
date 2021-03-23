import { io } from 'socket.io-client';
import { colorfulLog } from "colorful-log-cx";

const socket = io('http://localhost:8000');

const createSocketClient = (name, interval) => {
    socket.on('connect', () => {
    
        colorfulLog(`${name} connected!`);
    
        setInterval(() => {
            socket.emit('message', `Hello from ${name}`);
        }, interval)
    });
    
    socket.on('disconnect', () => colorfulLog(`${name} disconnected.`));    
    socket.on('someOtherEvent', (msg) => colorfulLog(msg));

}

createSocketClient('Client server 1', 2000);
createSocketClient('Client server 2', 5000)