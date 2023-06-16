
const express = require('express');
const app = express();
const User = require('../../models/user');
const ProfilePicture = require('../../models/UserProfile');
exports.ProfilePhoto = async(req,res) => {
    try {
        const imagefile = req.file;
       
        console.log(imagefile);
        if (imagefile) {
            
            const profilepicture = await ProfilePicture({
                image: req.file.path
            });
            
            profilepicture.save().
                then(uploaded=> {
                    console.log('successfully uploaded', uploaded);
                }).catch(error=>{
                    console.log('the error is' ,error);
            });
          
        }
        else {
            console.log('try again');
        }
    } catch (error){
        console.log(error);
}
    }
  


