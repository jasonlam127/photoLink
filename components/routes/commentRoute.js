const express = require('express')
const router = express.Router()
const Photo   = require('../models/photo')
const Comment = require('../models/comment')

module.exports = function(app) {
    isLoggedIn = (req,res,next) => {
        if(req.isAuthenticated()){
            return next();
        }
        res.redirect('/login');
    }
    //show individual photo
    router.get('/:id', (req, res) => {
        const actualPage = '/photo' ;
        Photo.findById(req.params.id).populate("comments").exec((err,data)=>{
            if(err){
                console.log(err);
                //app.render(req, res ,"/" , null)
            }else{
                //redirect back to index
                const queryParams = {  data:data , user:req.user}
                app.render(req, res, actualPage, queryParams)
            }
        })
    })
    //add comment to a photo
    router.post('/:id', isLoggedIn ,(req, res) => {
        //look up photo using ID
        Photo.findById(req.params.id,(err, photo) => {
            if(err){
                console.log(err);
            }else{
                //create new comment
                Comment.create({
                        text: req.body.text,
                        author: {
                            id: req.user._id,
                            username: req.user.username
                        }
                    },(err, comment) => {
                        if(err){
                            console.log(err);
                        }else{
                            //add comments to photo
                            photo.comments.push(comment);
                            photo.save();
                            //send new comment to reflesh photo page
                            res.send(comment);
                        }
                })
            }
        })
    })

    return router;
}