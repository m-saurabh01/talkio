import Message from '../model/Message.js'; 
export default (io) => {
    io.on('connection', (socket) => {
        console.log('New client connected:', socket.id);

        socket.on('message', async (data) => {
            const message = await Message.create(data);
            io.emit('chat-message', message);
        });

        socket.on('disconnect', () => {
            console.log('Client disconnected:', socket.id);
        });
    });
};
