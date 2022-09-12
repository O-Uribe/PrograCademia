import * as Yup from "yup";
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

const formSchema = Yup.object().shape({
  contraseña: Yup.string()
    .required('Contraseña requerida')
    .min(8, 'Debe tener al menos 8 caracteres'),
    repetirContraseña: Yup.string()
    .required('Confirmación requerida')
    .oneOf([Yup.ref('contraseña')], 'Las contraseñas no coinciden'),
  email: Yup.string()
    .required('Email requerido')
    .email('Email inválido'),
  nombre: Yup.string()
    .required('Nombre requerido'),
  apellido: Yup.string()
    .required('Apellido requerido'),
  rut: Yup.number()
    .required('RUT requerido')
    .min(1000000, 'RUT inválido')
    .max(99999999, 'RUT inválido')
    .positive().integer(),
  rol: Yup.string()
    .required('Rol requerido'),
  añoIngreso: Yup.number()
    .required('Año de ingreso requerido')
    .positive().integer()
});

export { formSchema }