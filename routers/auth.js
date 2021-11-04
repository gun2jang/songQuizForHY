const router = require('express').Router();
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

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


// passport init and session
router.use(passport.initialize());
router.use(passport.session());

passport.serializeUser(function(user, done){
    done(null, user.id);
});

passport.deserializeUser(function(id, done){
    done(null, id);
});



router.post('/signin', (req, res) => {
    
})


module.exports = router;