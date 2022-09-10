import React from "react"
import { useForm } from "react-hook-form";
import { contrasena_Repetida } from "./actions/validator";
import { ErrorMessage } from "@hookform/error-message";
import styles from "../../css/form.module.css";
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
const Formulario =() => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className={styles.container}>
            <h2>Formulario</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className={styles.label} >Nombre</label>
                    <input type="text" name="nombre" className={styles.input} {...register("nombre",{
                        required: {value:true, message:"Campo obligatorio"},
                        maxLength: {value: 20, message:"Máximo 20 caracteres"}
                    })} />
                    <ErrorMessage 
                    errors={errors} 
                    name="nombre"
                    render={({message}) => 
                    <p className={styles.error}>{message}</p>}
                    />
                </div>
                <div>
                    <label className={styles.label}>Apellido</label>
                    <input type="text" name="apellido" className={styles.input} {...register("apellido",{
                        required: {value:true, message:"Campo obligatorio"},
                        maxLength: {value: 20, message:"Máximo 20 caracteres"}
                    })}/>
                </div>
                <div>
                    <label className={styles.label}>Email</label>
                    <input type="email" name="email" className={styles.input} {...register("email",{
                        required: {value:true, message:"Campo obligatorio"},}
                    )}/>
                </div>
                <div>
                    <label className={styles.label}>RUT</label>
                    <input type="number" name="rut" className={styles.input} {...register("rut",{
                        required: {value:true, message:"Campo obligatorio"},
                        maxLength: {value: 9, message:"Máximo 9 caracteres"}
                    })}/>
                </div>
                <div>
                    <label className={styles.label}>Contraseña</label>
                    <input type="password" name="contraseña" className={styles.input} {...register("contraseña",{
                        required: {value:true, message:"Campo obligatorio"},
                    })}/>
                </div>
                <div>
                    <label className={styles.label}>Repetir contraseña</label>
                    <input type="password" name="repetirContraseña" className={styles.input} {...register("repetirContraseña",{
                        required: {value:true, message:"Campo obligatorio"},
                        /*validate: contrasena_Repetida*/
                    })}/>
                </div>
                <div>
                    <label className={styles.label}>Rol</label>
                    <select name="rol" className={styles.input} {...register("rol",{
                        required: {value:true, message:"Campo obligatorio"},
                    })}>
                        <option value="profesor">Profesor</option>
                        <option value="estudiante">Estudiante</option>
                    </select>
                </div>
                <div>
                    <label className={styles.label}>Año de ingreso</label>
                    <input type="number" name="añoIngreso" className={styles.input} {...register("añoIngreso",{
                        required: {value:true, message:"Campo obligatorio"},
                    })}/>
                </div>
                <div>
                    <button type="submit" className={styles.button}>Enviar</button>
                </div>
            </form>
        </div>
)}

export default Formulario