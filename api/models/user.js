
const { default: mongoose } = require("mongoose");
// const moongose = require("mongoose");
const userSchema = mongoose.Schema({
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


module.exports=mongoose.model('user', userSchema)
