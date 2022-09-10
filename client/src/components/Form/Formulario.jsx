import React from "react"
import { useForm } from "react-hook-form";
import { contrasena_Repetida } from "./actions/validator";
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

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className={styles.container}>
            <h2>Formulario</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Nombre</label>
                    <input type="text" name="nombre" className={styles.field} {...register("nombre",{
                        required: {value:true, message:"Campo obligatorio"},
                        /*maxLength: {value: 20, message:"Máximo 20 caracteres"}*/
                    })} />
                    {/*{errors.nombre?.type === "required" && <p>Hola</p>}*/}
                </div>
                <div>
                    <label>Apellido</label>
                    <input type="text" name="apellido" className={styles.field} {...register("apellido",{
                        required: {value:true, message:"Campo obligatorio"},
                        maxLength: {value: 20, message:"Máximo 20 caracteres"}
                    })}/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" className={styles.field} {...register("email",{
                        required: {value:true, message:"Campo obligatorio"},}
                    )}/>
                </div>
                <div>
                    <label>RUT</label>
                    <input type="number" name="rut" className={styles.field} {...register("rut",{
                        required: {value:true, message:"Campo obligatorio"},
                        maxLength: {value: 9, message:"Máximo 9 caracteres"}
                    })}/>
                </div>
                <div>
                    <label>Contraseña</label>
                    <input type="password" name="contraseña" className={styles.field} {...register("contraseña",{
                        required: {value:true, message:"Campo obligatorio"},
                    })}/>
                </div>
                <div>
                    <label>Repetir contraseña</label>
                    <input type="password" name="repetirContraseña" className={styles.field} {...register("repetirContraseña",{
                        required: {value:true, message:"Campo obligatorio"},
                        /*validate: contrasena_Repetida*/
                    })}/>
                </div>
                <div>
                    <label>Rol</label>
                    <select name="rol" className={styles.field} {...register("rol",{
                        required: {value:true, message:"Campo obligatorio"},
                    })}>
                        <option value="profesor">Profesor</option>
                        <option value="estudiante">Estudiante</option>
                    </select>
                </div>
                <div>
                    <label>Año de ingreso</label>
                    <input type="number" name="añoIngreso" className={styles.field} {...register("añoIngreso",{
                        required: {value:true, message:"Campo obligatorio"},
                    })}/>
                </div>
                <div>
                    <button type="submit" className={styles.field}>Enviar</button>
                </div>
            </form>
        </div>
)}

export default Formulario