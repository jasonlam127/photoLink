const express = require('express')
const router = express.Router();
const Photo   = require('../models/photo')

module.exports =  function(app) {

    //=================ROUTES BELOW =====================
    isLoggedIn = (req,res,next) => {
        if(req.isAuthenticated()){
            return next();
        }
        res.redirect('/login');
    }
    
    //get all photos in front page
    router.get('/getPhotos', (req, res) => {
        Photo.find({},function(err,data){
            if(err){
                console.log(err);
                app.render(req, res ,"/" , null)
            }else{
                const queryParams = { d: data }
                res.send(queryParams);
            }
        })
    })

    //show homePage
    router.get('/', (req,res) => {
        const queryParams = {user:req.user};
        app.render(req, res,'/',queryParams);
    })

    //create photo
    router.post('/', isLoggedIn, (req, res) => {
        const actualPage = '/submit'
        Photo.create(
            {
                name: req.body.title,
                description: req.body.description,
                image: req.body.img,
                author: {
                    id: req.user._id,
                    username: req.user.username
                }
            },(err,data) => {
                if(err){
                    console.log(err);
                    //app.render(req, res ,"/" , null)
                }else{
                    //redirect to new photo
                    let url = '/' + data._id
                    res.send(url);
                }
            }
        )

    })

    //EDIT photo 
    router.get('/:id/edit',(req ,res) => {
        Photo.findById(req.params.id, (err, foundPhoto) => {
            if(err){
                console.log(err);
            }else{
                const queryParams = {user:req.user, photo:foundPhoto};
                app.render(req, res,'/edit',queryParams);
            }
        })
        
    })
    //UPDATE photo
    router.put('/:id',(req, res) => {
        //find and update the correct photo
        let update = {
            name:req.body.title,
            description:req.body.description,
            image:req.body.img
        }
        Photo.findByIdAndUpdate(req.params.id,update,(err, updatedPhoto) => {
            if(err){
                console.log(err)
            }else{
                //redirect back to photo
                let url = '/' + req.params.id
                res.send(url);
            }
        })
    })
    //Submit photo
    router.get('/submit',isLoggedIn, (req,res) => {
        const queryParams = {user:req.user};
        app.render(req, res,'/submit',queryParams);
    })

    return router;
}