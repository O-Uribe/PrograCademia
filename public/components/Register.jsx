import React from "react";
import Formulario from "./Form/Formulario_register";
import styles from "../css/register.module.css";

const Register = () => {
    return (
        <>
            <div className={styles.register}>
                <Formulario/>
            </div>
        </>
    )
}
export default Register;