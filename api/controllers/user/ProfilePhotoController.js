
const express=require ( 'express');
const app = express();

const ProfilePicture =require('../../models/UserProfile');

exports.ProfilePhoto=(req,res)=> { // the req prop here recieves the imageurl sent from router
const id=req.userId;
    console.log(id);
        const imagefile = req.file;//url is recieved and then passed to the object
       
       // console.log(imagefile);

        if (imagefile) {
          
            const profilepicture =  ProfilePicture({
                user: id,
                image: req.file.path
            });
            
            profilepicture.save().
                then(uploaded=> {// then method is used to handle the successful completion of the asynchronous operation.
                    res.status(200).json({message:'successfully uploaded', data:uploaded});
                }).catch(error=>{
                    res.status(500).json({message:'Upload failed' ,error:error});
            });
          
        }
        else {
            console.log('try again');
            
        }
    }


  


