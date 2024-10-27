import http from 'http';
import app from './app.js';
import { Server } from 'socket.io';
import socketService from './services/socket.js';

const server = http.createServer(app);
const io = new Server(server);
socketService(io);

const PORT = process.env.PORT_BCK || 4000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
