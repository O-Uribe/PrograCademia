import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
export const Loginestudiante = () => {
  return (
    <React.Fragment>
      <main className='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2"'>
        <div>aca va el login del profe,boton para dps cuando este listo redireccionar con este path</div>
        <Link to="/MainAlumno">    
            <button className="btn btn-outline">
                hola soy un boton
            </button>
        </Link>
      </main>
      <Footer/>
    </React.Fragment>
  )
}
