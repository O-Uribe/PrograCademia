import React from "react";
import { useForm } from "react-hook-form";
import styles from "../../css/form.module.css";

/* 
    
        CAMPOS FORM:
        - Email
        - Contraseña
    
    */

const Formulario = () => {
    const {  register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className={styles.container}>
            <h2>Login</h2>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className={styles.label}>Email</label>
                    <input type="email" name="email" className={styles.input} {...register("email")} />
                </div>
                <div>
                    <label className={styles.label}>Contraseña</label>
                    <input type="password" name="contraseña" className={styles.input} {...register("contraseña")}/>
                </div>
                <div>
                    <button type="submit" className={styles.button}>Enviar</button>
                </div>
            </form>
            <div>
                <a href="/register">Registrate acá!</a>
            </div>
        </div>
    )
}
export default Formulario;