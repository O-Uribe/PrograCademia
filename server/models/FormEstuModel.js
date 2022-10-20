/*
  Inputs para register de Estudiante

  nombre
  apellido
  rut
  email
  password
  año de ingreso

*/

import mongoose from 'mongoose';
import config from '../config.js';

const ESTU_COLLECTION = config().ESTU_COLLECTION;

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


export default mongoose.model('FormEstu', FormEstuSchema);