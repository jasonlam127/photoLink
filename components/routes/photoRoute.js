const express = require('express')
const router = express.Router();
const Photo   = require('../models/photo')
const multer = require('multer')
require('dotenv').load()

const storage = multer.diskStorage({
    filename: function(req, file, callback) {
      callback(null, Date.now() + file.originalname);
    }
});

const imageFilter = function (req, file, cb) {
    // accept image files only
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};
const upload = multer({ storage: storage, fileFilter: imageFilter})

const cloudinary = require('cloudinary');
    cloudinary.config({ 
    cloud_name: 'diawd3qjb', 
    api_key: '796752476622836', 
    api_secret: process.env.CLOUDINARY_API_SECRET
});
module.exports =  function(app) {

    //=================ROUTES BELOW =====================
    isLoggedIn = (req,res,next) => {
        if(req.isAuthenticated()){
            return next();
        }
        res.redirect('/login');
    }
    
    checkPhotoOwnerShip = (req, res, next) => {
        if(req.isAuthenticated()){
            Photo.findById(req.params.id, (err, foundPhoto) => {
                if(err){
                    res.redirect('back');
                }else{
                    if(foundPhoto.author.id.equals(req.user._id)){
                        next();
                    }else{
                        res.redirect('back');
                    }
                }
            })
        }else{
            res.redirect('/login');
        }
    }

    function escapeRegex(text) {
        return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    };
    
    router.get('/getPhotosSearch', (req, res) => {
        if (req.query.search) {
            const regex = new RegExp(escapeRegex(req.query.search), 'gi');
            Photo.find({"name":regex},function(err,data){
                if(err){
                    res.redirect('back');
                }else{
                    const queryParams = {user:req.user,data: data,isSearch:true};
                    app.render(req, res,'/',queryParams);
                }
            })
        }else{
            res.redirect('back');
        }
    })
    //API to get all photos in front page
    router.get('/getPhotos', (req, res) => {
        Photo.find({},function(err,data){
                if(err){
                    res.redirect('back');
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
                    let response ={error:true,errormessage:err.message}
                    res.send(response);
                }else{
                    //redirect to new photo
                    
                    let url = '/' + data._id
                    let response ={error:false,url:url}
                    res.send(response);
                }
            }
        )
    })

    //create photo by upload 
    router.post('/upload', isLoggedIn, upload.single('image'), (req, res) => {
        console.log(process.env.CLOUDINARY_API_SECRET);
        cloudinary.uploader.upload(req.file.path, function(result) {
            Photo.create(
                {
                    name: req.body.title,
                    description: req.body.description,
                    image: result.secure_url,// add cloudinary url for the image to the campground object under image propert
                    author: {
                        id: req.user._id,
                        username: req.user.username
                    }
                },(err,data) => {
                    if(err){
                        //let response ={error:true,errormessage:err.message}
                        res.redirect('back');
                    }else{
                        //redirect to new photo
                        res.redirect('/' + data._id);
                    }
                }
            )
        });
        
    })

    //EDIT photo page
    router.get('/:id/edit',checkPhotoOwnerShip,(req ,res) => {
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
    router.put('/:id',checkPhotoOwnerShip,(req, res) => {
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

    //DESTROY photo
    router.delete('/:id',checkPhotoOwnerShip,(req, res) => {
        Photo.findByIdAndDelete(req.params.id,(err) => {
            if(err){
                console.log(err)
            }else{
                res.redirect('/');
            }
        })
    })
    //Submit photo page
    router.get('/submit',isLoggedIn, (req,res) => {
        const queryParams = {user:req.user};
        app.render(req, res,'/submit',queryParams);
    })

    return router;
}