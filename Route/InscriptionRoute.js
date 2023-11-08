const express = require('express');
const Auth = require('../Controller/InscriptionController');
const picture = require('../middleware/File');
const route = express.Router();

route.post('/mety', picture.single('profil') , Auth.Inscript);
route.get('/obtenir/:id', Auth.getAllStudent);
route.put('/update/:id', Auth.updateStudent)
module.exports = route