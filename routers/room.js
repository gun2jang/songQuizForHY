const router = require('express').Router();

io.on('connection', (socket) => {
    socket.on('chat message', msg => {
      io.emit('chat message', msg);
    });
});

module.exports = router;