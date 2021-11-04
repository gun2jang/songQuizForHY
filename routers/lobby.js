const router = require('express').Router();
const rooms = 3;
const currNum = [];
currNum.length = rooms;
currNum.fill(0);
const capacity = 8;

router.get('/', (req, res) =>{
    res.render('/lobby', req);
})

router.get(`/room:id`, (req, res) => {
    res.render('/room', req);
});


module.exports = router;