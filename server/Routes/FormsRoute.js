import express from 'express';
const router = express.Router();

import FormProfe from '../models/FormProfeModel.js';
import FormEstu from '../models/FormEstuModel.js';

//import { checkRut } from '../actions/existeRut.js';  // para un futuro

// @route   POST register/profesor

router.route("/register/profesor").post(async (req, res) => {
    // verificar que el rut no exista
    const { nombre, apellido, rut, email, password } = req.body;
    const rutExists = await FormProfe.findOne({ rut: rut });
    const emailExists = await FormProfe.findOne({ email: email });
    // Verificar que el email termine en @uct.cl
    const emailUct = email.includes("@uct.cl");

    if (rutExists || emailExists) {
        return res.status(400).send( "Rut o Email ya existente" );
    }else if(!emailUct){
        return res.status(400).send( "Email debe terminar en @uct.cl" );
    }
    else{
        try {
            let formProfe = new FormProfe({
                nombre,
                apellido,
                rut,
                email,
                password
            });
            await formProfe.save();
            res.send('Profesor registrado');
        } catch (error) {
            if (error.message.includes('validation failed')) {
                res.status(400).send("Debe completar todos los campos");
            } else {
                res.status(500).send(error.message);
            }
        }
    }
});

// @route   POST login/profesor

router.route("/login/profesor").post(async (req, res) => {
    const { email, password } = req.body;
    // verificar que el email exista
    const emailExists = await FormProfe.findOne({ email: email });
    if (!emailExists) {
        return res.status(400).send( "Email no existe" );
    }else {
        // verificar que el password sea correcto
        if (emailExists.password === password) {
            res.send('Profesor logueado');
        }else{
            res.status(400).send( "Password incorrecto" );
        }
    }
});

// @route   GET register/profesor
router.route("/profesor").get(async (req, res) => {
    try {
        const formProfe = await FormProfe.find();
        res.json(formProfe);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

//@route    GET register/profesor/:id
router.route("/profesor/:id").get(async (req, res) => {
    try {
        const formProfe = await FormProfe.findById(req.params.id);
        res.json(formProfe);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// @route   POST register/estudiante

router.route("/register/estudiante").post(async (req, res) => {
    const { nombre, apellido, rut, email, password, ingreso } = req.body;
    const rutExists = await FormEstu.findOne({ rut: rut });
    const emailExists = await FormEstu.findOne({ email: email });
    const emailUct = email.includes("@alu.uct.cl");
    if (rutExists || emailExists) {
        return res.status(400).send( "Rut o Email ya existente" );
    }else if (!emailUct){
        return res.status(400).send( "Email debe terminar en @alu.uct.cl" );
    }else{
        try {
            let formEstu = new FormEstu({
                nombre,
                apellido,
                rut,
                email,
                password,
                ingreso
            });
            await formEstu.save();
            res.send('Estudiante registrado');
        } catch (error) {
            // Si un campo no es completado se envia un mensaje de error al cliente con el campo que falta
            if (error.message.includes('validation failed')) {
                res.status(400).send("Debe completar todos los campos");
            } else {
                res.status(500).send(error.message);
            }
        }
    }
});

// @route   POST login/estudiante

router.route("/login/estudiante").post(async (req, res) => {
    const { email, password } = req.body;
    // verificar que el email exista
    const emailExists = await FormEstu.findOne({ email: email });
    if (!emailExists) {
        return res.status(400).send( "Email no existe" );
    }else {
        // verificar que el password sea correcto
        if (emailExists.password === password) {
            res.send('Alumno logueado');
        }else{
            res.status(400).send( "Password incorrecto" );
        }
    }
});

// @route   GET register/estudiante
router.route("/estudiante").get(async (req, res) => {
    try {
        const formEstu = await FormEstu.find();
        res.json(formEstu);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// @route   GET register/estudiante/:id
router.route("/estudiante/:id").get(async (req, res) => {
    try {
        const formEstu = await FormEstu.findById(req.params.id);
        res.json(formEstu);
    } catch (error) {
        res.status(500).send(error.message);
    }
});
export default router;