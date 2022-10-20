import mongoose from 'mongoose';
import config from '../config.js';
const PROFE_COLLECTION = config().PROFE_COLLECTION;


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

export default mongoose.model('FormProfe', FormProfeSchema);