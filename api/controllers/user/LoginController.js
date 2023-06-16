const User = require('../../models/user');
const bcrypt = require('bcrypt');
exports.login = async (req, res) => {
    const { username, password } = req.body;
    console.log(username);
    console.log(password);
   

    // checking if username and password exists in database or not
    //first we need to find the user object based on name with finOne method
    User.findOne({ username }, function (error, user) {
        if (error) {
            
            res.status(500).json({ message: "internal server error while searching for user" });
        } else if (!user) {
          
            res.status(401).json({ message: ' user not found' });
        
        } else {//after gettting user object we need to compare our given password with hashed password returned by user object
            bcrypt.compare( password,user.password, function (error, result) {
                if (error) {
                    console.log(error);
                    res.status(500).json({ message: "internal server error" });
                }
                else if (result == false) {
                    res.status(401).json({ message: "username and password did not match" });

                }
                else {
                    res.status(200).json({ message: "username and password successfully verified" });
                 
                }
           
            });
        }
    
    });
       
}

   
 
   
