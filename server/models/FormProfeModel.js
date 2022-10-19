//const mongoose = require('mongoose');
import mongoose from 'mongoose';
import config from './config.js';
const PROFE_COLLECTION = config().PROFE_COLLECTION;
//const collection = require('../config.js').PROFE_COLLECTION;
/*
  Inputs para register de profesor

  nombre
  apellido
  rut
  email
  password

*/
const FormProfeSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    rut: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},{
    collection: PROFE_COLLECTION,
    timestamps: true // Guarda la fecha de creación y actualización
});

//module.exports = mongoose.model('FormProfe', FormProfeSchema);

export.default mongoose.model('FormProfe', FormProfeSchema);
    