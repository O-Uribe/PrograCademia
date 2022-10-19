import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
export const Loginprofe = () => {
  return (
    <React.Fragment>
      <main className='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
        <div>aca va el login del profe,boton para dps cuando este listo redireccionar con este path</div>
        <button className="btn btn-outline">
            <Link to="/mainprofe"> hola soy un boton </Link>
        </button>
      </main>
    <Footer/>
    </React.Fragment>
    
  )
}
