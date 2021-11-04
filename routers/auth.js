const router = require('express').Router();
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const bodyParser = require('body-parser');
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;

const storeKey = {
    host: "localhost",
    port: 3333,
    user: "root",
    password: "1472",
    database: "sessionStore",
};

const sessionStore = new MySQLStore(storeKey);

router.use(
    session({
        secret: "secret key",
        store : sessionStore,
        resave: false,
        saveUninitialized: false,
    })
);

router.use(bodyParser.urlencoded({extended: false}));



router.post('/login', (req, res) => {
    req.session.username = req.body.id;
    res.redirect('/lobby');
})

router.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if(err) {
            res.render('/errorpage');
        }
        
    });
    res.redirect('/');

})


module.exports = router;