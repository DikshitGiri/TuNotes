const User = require('../../models/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;
exports.createUser =async (req, res) => {
    const { username, email, password,address } = req.body;
    // console.log(username,email,password);
    // res.send(username, email, password);
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
    // res.json(user);
 
   
}