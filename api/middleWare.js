let loggedUser=null;
exports.setLoggedInUserId=(userId)=>{
loggedUser=userId;
}

exports.getLoggedInUserId=()=>{
return loggedUser;
}

exports.captureUserId=(req,res,next)=>{
    req.userId=loggedUser;
    // console.log('Captured userId:', req.userId);
    next();

}




