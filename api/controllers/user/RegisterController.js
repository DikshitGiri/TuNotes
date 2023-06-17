const User =require( '../../models/user');

const hash = require( 'bcrypt');


const saltRounds = 10;

exports.createUser = async (req, res) => {
//  const{ image }=req.file;
//     console.log(image);
    
    const { username, email, password, address } = req.body;
    
    // const image = req.file.filename;
    // const uploads = multer({ storage });
    
    console.log(username);
    console.log(email);
 

    const existinguser = await User.findOne({ email });
    if (existinguser) {
    return res.status(422).json({ message: 'E-mail already in use' });
    }
    const hashedpassword = await hash(password, saltRounds);
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
