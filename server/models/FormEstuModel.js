/*
  Inputs para register de Estudiante

  nombre
  apellido
  rut
  email
  password
  año de ingreso

*/

const mongoose = require('mongoose');
const { ESTU_COLLECTION } = require('../config');
const collection = require('../config.js').ESTU_COLLECTION;

const FormEstuSchema = new mongoose.Schema({
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
    },
    ingreso: {
        type: String,
        required: true
    }
},{
    collection: ESTU_COLLECTION,
    timestamps: true // Guarda la fecha de creación y actualización
});

module.exports = mongoose.model('FormEstu', FormEstuSchema);