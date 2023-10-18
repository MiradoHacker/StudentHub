const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyparser = require('body-parser')

const AuthRoute = require('./Route/UserRoute')

mongoose.connect('mongodb://127.0.0.1:27017/studentHub')
const db = mongoose.connection
db.on('error', (error) =>{
    console.log(error);
})
db.once('open', ()=>{
    console.log('Connection Established with MongoDB!!')
})

const app = express()
PORT = 8000

app.listen(PORT, function(){
    console.log('listening on port', PORT)
})

app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

app.use('/user', AuthRoute)
