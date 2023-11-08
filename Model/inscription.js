const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InscriptionSchema = new Schema(
    {
        class_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Class'
        },
        name: {
            type: String,
            required: [true, "Please add your family name"]
        },
        given_name: {
            type: String,
            required: [true, "Please add your name"]
        },
        age: {
            type: Number,
            required: [true, "Please add your age"]
        },
        date_of_birth: {
            type: String,
            required: [true, "Please add your date of birth"]
        },
        city: {
            type: String,
            required: [true, "Please add your city"]
        },
        object: {
            type: String,
            required: [true, "Please add your object in life"]
        },
        grade: {
            type: String,
            required: [true, "Please add your class"]
        },
        dad_name:{
            type: String,
            required: [true, "Please add your dad name"]
        },
        dad_contact:{
            type: String,
            required: [true, "Please add your dad contact"]
        },
        dad_profession: {
            type: String,
            required: [true, "Please add your dad's profession"]
        },
        mom_name:{
            type: String,
            required: [true, "Please add your mom name"]
        },
        mom_contact: {
            type: String,
            required: [true, "Please add your mom contact"]
        },
        mom_profession: {
            type: String,
            default: [null]
        },
        tutor_name:{
            type: String,
            default: [null]
        },
        tutor_contact: {
            type: String,
            default: [null]
        },
        tutor_profession: {
            type: String,
        },
        profil: {
            type: String
        }
    }, {timestamps: true});

module.exports = mongoose.model('Student', InscriptionSchema)