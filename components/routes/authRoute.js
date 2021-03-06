const express = require('express')
const router = express.Router();
const User    = require('../models/User')
const passport    = require('passport')

module.exports = function(app) {
    // SHOW sign up form
    router.get('/signup', (req,res) => {
        const actualPage = '/signup' ;
        const queryParams = {user:req.user};
        app.render(req, res,actualPage,queryParams);
    })
    // sign up submit
    router.post('/signup', (req,res) => {
        let newUser = new User({username:req.body.username});
        User.register(newUser,req.body.password, (err,user) => {
            if(err){
                res.send(err.message);
            }else{
                passport.authenticate("local")(req,res, ()=> {
                    //redirect to homepage
                    res.send('success');
                })
            }
        })
    })
    //SHOW login form
    router.get('/login', (req,res) => {
        const actualPage = '/login' ;
        const queryParams = {user:req.user};
        app.render(req, res,actualPage,queryParams);
    })
    //log in
    router.post('/login', (req, res, next) => {
        passport.authenticate('local', (err, user, info)=>{
        
          if (err) { 
            return res.send(err.message); 
          }
          if (!user) {
            return res.send(info.message)
          }
          req.logIn(user, function(err) {
            if (err) { return res.send(info.message) }
            return res.send('success');
          });

        })(req, res, next);
      });

    //Log Out
    router.get('/logout',(req,res) => {
        req.logout();
        //redirect to mainpage
        res.redirect('/');
    })

    return router;
}