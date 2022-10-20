import express from 'express';
const router = express.Router();
/*
const FormProfe = require('../models/FormProfeModel');
const FormEstu = require('../models/FormEstuModel');
*/
import FormProfe from '../models/FormProfeModel.js';
import FormEstu from '../models/FormEstuModel.js';

// @route   POST register/profesor

router.route("/register/profesor").post(async (req, res) => {
    // verificar que el rut no exista
    const { nombre, apellido, rut, email, password } = req.body;
    const rutExists = await FormProfe.findOne({ rut: rut });
    if (rutExists) {
        return res.status(400).json({ error: "Rut ya existe" });
    }else{
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
            console.log(error.message);
            res.status(500).send('Server error');
        }
    }
});

// @route   POST login/profesor

router.route("/login/profesor").post(async (req, res) => {
    const { email, password } = req.body;
    try {
        let loginProfe = await FormProfe.findOne({ email });
        if (!loginProfe) {
            return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
        }
        if (password !== loginProfe.password) {
            return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
        }
        res.send('Profesor logueado');
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server error');
    }
});


// @route   POST register/estudiante

router.route("/register/estudiante").post(async (req, res) => {
    const { nombre, apellido, rut, email, password, ingreso } = req.body;
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
        console.log(error.message);
        res.status(500).send('Server error');
    }
});

// @route   POST login/estudiante

router.route("/login/estudiante").post(async (req, res) => {
    const { email, password } = req.body;
    try {
        let loginEstu = await FormEstu.findOne({ email });
        if (!loginEstu) {
            return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
        }
        if (password !== loginEstu.password) {
            return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
        }
        res.send('Estudiante logueado');
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server error');
    }
});

export default router;