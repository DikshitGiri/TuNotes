

const moongose = require("mongoose");
const userSchema = moongose.Schema({
    username: {
        type: String,
        required: true

    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required:true,
    },    
        
    
    avatar: Buffer,
});

module.exports=moongose.model('User', userSchema)
