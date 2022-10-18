import React from 'react'
import { Link } from 'react-router-dom';

export const Loginestudiante = () => {
  return (
    <><div>aca va el login del profe,boton para dps cuando este listo redireccionar con este path</div>
    <button className="btn btn-outline"><Link to="/user">hola soy un boton</Link></button></>
  )
}
