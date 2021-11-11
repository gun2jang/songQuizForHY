const router = require('express').Router();

router.get('/', (req, res) => {
  // data 처리
  req.query.user_id

  // response
  res.json({
    status: '200',
    data: 'successed'
  })
})

router.post('/')

module.exports = router