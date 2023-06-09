const express = require('express');
const User = require("./models/user");
const app = express();
const port = '8000';
const dotenv = require("dotenv");
const cors = require('cors');
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));





// parse application/json

// const expressValidator = express - validator();
dotenv.config();
require('./models/dbConnect');
const UserRegistration = require('./routes/UserRegisterRouter');
const UserLogin = require('./routes/UserLoginRouter');
const UserProfile = require('./routes/UserProfileRouter');


// app.use( expressValidator);
app.use((req, res, next) => {
    next();
})




app.listen(port, (req, res) => console.log("running on port :http://192.168.1.86:" + port));
// app.post('/create-user', async (req, res) => {
//     const user = await User({ name: "john", email: "john@gmail.com", password: "john1234" });
//     user.save();
//     res.json(user);
// }),


app.use('/Signup', UserRegistration); 
app.use('/login', UserLogin);
app.use('/UploadProfile', UserProfile);

// app.get('/signup', (req, res) => {
//     res.send("hello world");
// })

module.exports = app;