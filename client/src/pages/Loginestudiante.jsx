import React from 'react'
import { Link } from 'react-router-dom';

export const Loginestudiante = () => {
  return (
    <>
    <div>aca va el login del profe,boton para dps cuando este listo redireccionar con este path</div>
    <Link to="/MainAlumno">    
        <button className="btn btn-outline">
            hola soy un boton
        </button>
    </Link>
    </>
  )
}
