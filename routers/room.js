const router = require('express').Router();

const { Server } = require("socket.io");
const io = new Server(server);


router.get('/room/:roomNum', (req, res) => {
  res.render()
  io.on('connection', (socket) => {
    username = req.session.username;
      socket.on('chat message', msg, username => {
        io.emit('chat message', msg, username);
      });
  });
})

module.exports = router;