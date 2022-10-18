import React from 'react'
import { Link } from 'react-router-dom';

export const Loginprofe = () => {
  return (
    <>
      <div>aca va el login del profe,boton para dps cuando este listo redireccionar con este path</div>
      <button className="btn btn-outline">
          <Link to="/mainprofe"> hola soy un boton </Link>
      </button>
    </>
  )
}
