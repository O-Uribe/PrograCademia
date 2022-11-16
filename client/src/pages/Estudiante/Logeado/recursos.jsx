import React from 'react'
import Navbaral from '../../../components/Navbaralumno'
import Footer from '../../../components/Footer'
export const Recursos = () => {
  return (
    <>
    
      <div className='flex flex-col items-center justify-center h-full absolute top-0 text-white w-full'>
      <div className="w-full absolute inset-x-0 top-0"><Navbaral/></div>
      <main>
        <div className="hero min-h-screen ">
          <div className="hero-content flex-col lg:flex-row bg-base-200">
            {/* <img src="https://www.venturapp.com/wp-content/uploads/2016/03/html_elementos_etiquetas_usadas-680x350.jpg" className="max-w-sm rounded-lg shadow-2xl" /> */}
            <div>
              <h1 className="text-5xl font-bold">Recursos</h1>
              <p className="py-6">En este sitio podras encontrar todo lo que necesitas saber para aprobar los quiz.</p>
              <a href="https://www.w3schools.com/">
                <button className="btn1 btn-primary">Ir al sitio</button>
              </a> 
            </div>
          </div>
        </div>
      </main>
      <div className="w-full absolute inset-x-0 bottom-0"><Footer/></div>
      </div>
    </>
  )
}