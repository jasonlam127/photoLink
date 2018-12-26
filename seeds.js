const mongoose = require("mongoose")
const Photo = require('./components/models/photo')
const Comment = require('./components/models/comment')

const data =[
    {
        name:"my lovely photo", 
        image: "https://cdn.pixabay.com/photo/2015/07/29/00/08/photographer-865295_1280.jpg",
        description: "ddsafas",
        author:{
            id: '12318y5915',
            username: 'meme123'
        }
    },
    {
        name:"Nice vacation place", 
        image: "https://farm2.staticflickr.com/1728/27910703437_0bb60f8a82.jpg",
        description: "amazing place",
        author:{
            id: '12318y5915',
            username: 'meme123'
        }
    },
    {
        name:"retro photo is great", 
        image: "https://cdn.pixabay.com/photo/2014/02/02/17/40/photo-256887_1280.jpg",
        description: "so good to be true",
        author:{
            id: '12318y5915',
            username: 'meme123'
        }
    }
]
const seedDB = () => {
    //remove all photos
    Photo.remove({},(err) => {
        if(err){
            console.log(err);
        }
        /*
        //all few photos
        data.forEach((seed) => {
            Photo.create(seed,(err,photo) => {
                if(err){
                    console.log(err);
                }else{
                    console.log("added photo");

                    //create a comment
                    Comment.create({
                        text:"this is great place",
                        author: "homer"
                    },(err,comment) => {
                        if(err){
                            console.log(err);
                        }else{
                            photo.comments.push(comment);
                            photo.save();
                        }
                    })
                }
            })
        })
        */
    })
    
    
}

module.exports = seedDB ;