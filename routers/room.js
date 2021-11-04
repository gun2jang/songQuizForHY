const router = require('express').Router();

const { Server } = require("socket.io");
const io = new Server(server);

const songList = [];
const roomCapacity = 3;

// for(let i = 0;i<roomCapacity;i++){
//   io.of();
// }

router.get('/room/:roomNum', (req, res) => {
  res.render()
  io.on('connection', (socket) => {
    username = req.session.username;

    socket.on('ready', () => {
      io.
    })
    socket.on('gamestart', () => {
      io.emit('isReady')
    })

    socket.on('answer', (msg, username) => {
      if (songList[stageNum].answer == msg) {
        io.in.emit('correct', (msg, username) => {

        })
      } else {
        io.emit('wrong', ()=>{})
      }
    });
  });
  io.on('disconnection', (socket) => {
    // some code
  })
})

module.exports = router;