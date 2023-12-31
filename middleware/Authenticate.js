const jwt = require('jsonwebtoken')

const authenticate = function(req, res, next){
    try{
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, 'theSecreToken')
        req.user = decode
        next()
    } catch(error){
        if(error.name == 'TokenExpiredError'){
            res.status(401).json({
                message: 'Token Expired!!'
            })
        }else {
            res.json({
                message: 'Login and Authentication Failed!!'
            })
        }
    }
}

module.exports = authenticate