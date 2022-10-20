//const express = require('express');
import express from 'express';
const router = express.Router();

//const FormProfe = require('../models/FormProfeModel');
// @route   POST register/profesor

router.route("/register/profesor").post(async (req, res) => {
    const { nombre, apellido, rut, email, password } = req.body;
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
);

export default router;