const express     = require('express')
const next        = require('next')
const bodyParser  = require('body-parser')
const mongoose    = require('mongoose')
const passport    = require('passport')
const LocalStrategy = require('passport-local')
const User    = require('./components/models/User')
const seedDB  = require('./seeds')
const methodOverride = require('method-override')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const authRoute    = require('./components/routes/authRoute')(app)
const commentRoute = require('./components/routes/commentRoute')(app)
const photoRoute   = require('./components/routes/photoRoute')(app)

//connect to server
mongoose.connect("mongodb://localhost:27017/photolink",{useNewUrlParser:true});

//seedDB(); //seed the db

app.prepare()
.then(() => {
    const server = express()
    server.use(bodyParser.json())
    server.use(methodOverride("_method"))

    //PASSPORT CONFIGURATION==========================
    server.use(require('express-session')({
        secret: "my secret",
        resave: false,
        saveUninitialized: false,
    }))
    server.use(passport.initialize());
    server.use(passport.session());
    passport.use(new LocalStrategy(User.authenticate()));
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());

    //ROUTES
    server.use('/',authRoute);
    server.use('/',photoRoute);
    server.use('/',commentRoute);
  
    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(process.env.PORT|| 3000, (err) => {
        if (err) throw err
        console.log('> Server is Ready ')
    })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})