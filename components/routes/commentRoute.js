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

    checkCommentOwnerShip = (req, res, next) => {
        if(req.isAuthenticated()){
            Comment.findById(req.params.comment_id, (err, foundComment) => {
                if(err){
                    res.redirect('back');
                }else{
                    if(foundComment.author.id.equals(req.user._id)){
                        next();
                    }else{
                        //redirect to login page
                        res.redirect('back');
                    }
                }
            })
        }else{
            res.redirect('/login');
        }
    }

    //edit comment
    router.put('/:id/:comment_id', checkCommentOwnerShip, (req, res) => {
        let update = { text: req.body.text}
        Comment.findByIdAndUpdate(req.params.comment_id,update,{new: true},(err, updatedcomment) => {
            if(err){
                console.log(err);
            }else{
                res.send(updatedcomment);
            }
        })
    })

    //DESTROY comment
    router.delete('/:id/:comment_id', checkCommentOwnerShip, (req, res) => {
        Comment.findByIdAndDelete(req.params.comment_id,(err,deletedComment) => {
            if(err){
                console.log(err)
            }else{
                res.send(deletedComment);
            }
        })
    })

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