import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";


{/*
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://<username>:<password>@cluster0.oxwjx.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/}

const Forms = () => {
    /* 
    
        CAMPOS FORM:
        - Nombre
        - Apellido
        - Email
        - RUT // type:INT
        - Contraseña
        - Repetir contraseña
        - Rol (Profesor, Estudiante)
        - Año de ingreso (solo para estudiantes)
    
    */
    return (
        <>
            <Formik

                initialValues={{
                    Nombre: "",
                    Apellido: "",
                    Email: "",
                    RUT: "",
                    Contraseña: "",
                    Contraseña2: "",
                    ROL: "",
                    ingreso: "",
                }}
                validate={(values) => {
                    let errors = {};
                    //validacion contraseña ducplicada
                    if(values.Contraseña !== values.Contraseña2){
                        errors.Contraseña2 = "Las contraseñas no coinciden";
                    }
                    //validacion RUT
                    if(values.RUT.length !== 9){
                        errors.RUT = "El RUT debe tener 9 digitos";
                    }
                    //validacion nombre y apellido
                    if(!values.Nombre || !values.Apellido){
                        errors.Nombre = "El nombre es obligatorio";
                    }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.Nombre)){
                        errors.Nombre = "El nombre solo puede contener letras y espacios";
                    }
                    //validacion correo
                    if(!values.Email){
                        errors.Email = "El correo es obligatorio";
                    }else if(!/\S+@\S+\.\S+/.test(values.Email)){
                        errors.Email = "El correo no es valido";
                    }
                    return errors;
                }}
                onSubmit={() => {
                    console.log("Form submitted");
                }}
            >
                {({errors}) => (
                <Form className="formulario">
                <label htmlFor="Nombre"></label>
                    <Field
                    type="text" 
                    name="Nombre" 
                    id="Nombre" 
                    placeholder="Nombre" 
                    />
                <label htmlFor="Apellido"></label>
                    <Field 
                    type="text" 
                    name="Apellido" 
                    id="Apellido" 
                    placeholder="Apellido" 
                    />
                <label htmlFor="Email"></label>
                    <Field 
                    type="email" 
                    name="Email" 
                    id="Email" 
                    placeholder="Email" />
                <label htmlFor="RUT SIN PUNTOS NI DIGITO VERIFICADOR"></label>
                    <Field 
                    type="number" 
                    name="RUT" 
                    id="RUT" 
                    placeholder="xxxxxxxxx"/>
                <label htmlFor="Contraseña"></label>
                    <Field 
                    type="password" 
                    name="Contraseña" 
                    id="Contraseña" 
                    placeholder="Contraseña"
                    />
                <label htmlFor="Repetir contraseña"></label>
                    <Field 
                    type="password" 
                    name="Contraseña2" 
                    id="Contraseña2" 
                    placeholder="Contraseña2"
                    />
                    <ErrorMessage name="Contraseña2" component={() => <div className="error">{errors.Contraseña2}</div>}/>
                <label htmlFor="Rol"></label>
                    <Field name="Rol" id="Rol">
                        <option value="Profesor">Profesor</option>
                        <option value="Estudiante">Estudiante</option>
                    </Field>
                <label htmlFor="Año de ingreso"></label>
                    <Field 
                    type="number" 
                    name="Año de ingreso" 
                    id="ingreso" 
                    placeholder="Año de ingreso" 
                    />
                <button type="submit">Enviar</button>
            </Form>
        )}
        </Formik>
                
        </>
    );
}
export default Forms;