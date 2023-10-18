const User = require('../Model/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const SignIn = (req, res, next) =>{
    bcrypt.hash(req.body.password, 10, function(err, hashedPass){
        if(err){
            res.json({
                message: "An Error Occured"
            })
            console.log('error')
        }
        let user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPass
        })
        user.save()
        .then(user => {
            res.json({
                message: "User Added Successfully!!"
            })
        })
        .catch(error =>{
            res.json({
                message: "User not added"
            })
        }) 
    })
}

const login = (req, res, next) =>{
    var email = req.body.email
    var password = req.body.password
    User.findOne({$or: [{email: email}, {name: email}]})
    .then(user =>{
        if(user){
            bcrypt.compare(password, user.password, function(err, result){
                if(err){
                    res.json({
                        message: "An error Occured: ", err
                    })
                }
                if (result){
                    let token = jwt.sign({name: user.name}, 'theSecretToken', {expiresIn: '1h'})
                    res.json({
                        message: "Welcome to StudentHub!!",
                        token,
                        user: user.name
                    })
                }else {
                    res.json({
                        message: "Password doesn't match !!"
                    })
                }
            })
        } else{
            res.json({
                message: "User not found!!"
            })
        }
    })
}

module.exports = {
    SignIn, login
}