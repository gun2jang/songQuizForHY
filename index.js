const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();
const server = http.createServer(app);

// route
const auth = require('./routers/auth');
app.use('/auth', auth);

const lobby = require('./routes/lobby');
app.use('/lobby', lobby);


let roomNumber =  1;
const rooms = require('./routers/rooms');
app.use(`/room${roomNumber}`, rooms);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/firstPage.html');
});


app.use('/account', require('./routers/account'))

server.listen(port, () => {
    console.log(`Socket.IO server running at http://localhost:${port}/`);
});