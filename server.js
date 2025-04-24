// const express = require('express');
// const http = require('http');
// const { Server } = require('socket.io');

// const app = express();
// const server = http.createServer(app);
// const io = new Server(server);

// // Serve static files from "public" folder
// app.use(express.static('public'));

// io.on('connection', (socket) => {
//     console.log('A user connected:', socket.id);

//     socket.on('chat message', (msg) => {
//         io.emit('chat message', msg);
//     });

//     socket.on('disconnect', () => {
//         console.log('User disconnected:', socket.id);
//     });
// });

// const PORT = process.env.PORT || 3000;
// server.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });



// //updated codee----------------------------------------------------------------------

const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files from "public" folder
app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg); // Emit the message to all clients
    });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
