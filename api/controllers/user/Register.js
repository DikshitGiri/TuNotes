
const User = require('../../models/user');
const { check } = require('express-validator');
const bcrypt = require('bcrypt');



const saltRounds = 10;

exports.createUser = async (req, res) => {

    
    const { username, email, password,address } = req.body;
    console.log(username);
    console.log(email);
    const existinguser = await User.findOne({ email });
    if (existinguser) {
    return res.status(422).json({ message: 'E-mail already in use' });
    }
    const hashedpassword = await bcrypt.hash(password, saltRounds);
//    console.log("hashed",hashedpassword)

    
  
  

    const user = await User({
        username:username,
        email:email,
        password:hashedpassword,
        address:address
    });
    
    await user.save();
    res.status(200).json({ message: 'user created successfully' });
    
 
 
   
}