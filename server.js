// const express = require('express');
// const http = require('http');
// const socketIO = require('socket.io');

// const app = express();
// const server = http.createServer(app);
// const io = socketIO(server);

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', (socket) => {
//     console.log('A user connected');

//     // Listen for user messages
//     socket.on('user-message', (data) => {
//         // Broadcast the message to all connected clients
//         io.emit('user-message', data);
//     });

//     socket.on('disconnect', () => {
//         console.log('A user disconnected');
//     });
// });

// const PORT = process.env.PORT || 3000;
// server.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });



const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('user-message', (data) => {
        io.emit('user-message', data);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
