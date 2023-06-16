const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './ProfilePhoto')
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, Date.now() + path.extname(file.originalname))//writing null because we are not writing anything to handle error here
    }
});
const upload = multer({ storage: storage });
const ProfilePicture  = require('../controllers/user/ProfilePhotoController');
// const { model } = require('mongoose');
router.route('/').post(upload.single('image'), ProfilePicture.ProfilePhoto); //image is a field in form to upload images
// upload.single creates a file property and uploads to the request  object which then can be accessed by invoking controller.
// The controller function: Once the middleware finishes processing the file, it passes the control to the controller function specified as the next handler. In this case, the ProfilePicture.ProfilePhoto function is the controller function. It is responsible for handling the request and generating a response.
module.exports = router;
 