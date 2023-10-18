const express = require('express')
const route = express.Router()
const authenticate = require('../middleware/Authenticate')
const Auth = require('../Controller/UserController')

route.post('/', Auth.SignIn)
route.post('/login', Auth.login)

module.exports = route