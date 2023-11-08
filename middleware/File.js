const path = require('path');
const multer = require('multer');
const { now } = require('mongoose');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'Stockage/')
    },
    filename: (req, file, cb) =>{
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    }
});

var picture = multer({
    storage: storage,
    fileFilter: (req, file, callback) => {
        if (file.mimetype == "image/jpeg"){
            callback(null, true)
        }
        else if(file.mimetype == "image/png"){
            callback(null, true)
        }
        else {
            console.log('only JPG and png are supported');
            callback(null, false)
        } 
    },
    limits: {
        fileSize: 1024 * 1024 * 2
    }
});

module.exports = picture

