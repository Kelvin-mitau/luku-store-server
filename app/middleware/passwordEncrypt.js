 const bcrypt = require("bcrypt") 
 function passwordEncrypter (req,res,next){
     req.password = bcrypt.hash(req.password,10)
    next()
}

module.exports = passwordEncrypter;