// server.js (WebSocket server)
const http = require('http');
const { Server } = require('socket.io');

const server = http.createServer();
const io = new Server(server,{
    cors:{
        origin:["http://localhost:3000","http://localhost:3002"]
    }
});

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('message', (data) => {
        console.log('Received message:', data);
        io.emit('message', data);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
    console.log(`WebSocket server running on port ${PORT}`);
});
