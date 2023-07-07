const express=require('express');
const router = express.Router();
const multer = require('multer');
const diskStorage = multer.diskStorage;
const  {extname}  = require('path');
const { captureUserId } = require('../middleware/captureUserId');
router.use(captureUserId);// Apply the captureUserId middleware to the UserProfileRouter
// import userid from '../controllers/user/LoginController';
const storage = diskStorage({ //it defines where to store and what should be the filename
    destination: (req, file, cb) => {
        cb(null, './ProfilePhoto')
    },
    filename: (req, file, cb) => {
      
        cb(null, Date.now()+extname(file.originalname))//writing null because we are not writing anything to handle error here
    }
});
const upload = multer({ storage: storage });// left storage is the property of multer which stores storage engine configuration 
const ProfilePhotoController = require ('../controllers/user/ProfilePhotoController');
// const { model } = require('mongoose');
router.route('/').post(captureUserId,upload.single('image'), ProfilePhotoController.ProfilePhoto); //image is a field in form to upload images
// upload.single creates a file property and uploads to the request  object which then can be accessed by invoking controller.
// The controller function: Once the middleware finishes processing the file, it passes the control to the controller function specified as the next handler. In this case, the ProfilePicture.ProfilePhoto function is the controller function. It is responsible for handling the request and generating a response.
module.exports= router;
 