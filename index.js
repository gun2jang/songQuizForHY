const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const { Server } = require("socket.io");
const port = 3000;

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// route
const auth = require('./routers/auth');
app.use('/auth', auth);

const lobby = require('./routes/lobby');
app.use('/lobby', lobby);

let number = 1;
const rooms = require('./routers/rooms');
app.use(`/room${number}`, rooms);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/firstPage.html');
});


  
server.listen(port, () => {
    console.log(`Socket.IO server running at http://localhost:${port}/`);
});