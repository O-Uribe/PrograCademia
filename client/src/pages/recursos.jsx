import React from 'react'
import Navbaral from '../components/Navbaralumno'
import Footer from '../components/Footer'
export const Recursos = () => {
  return (
    <>
      <Navbaral/>
      <main>
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://www.venturapp.com/wp-content/uploads/2016/03/html_elementos_etiquetas_usadas-680x350.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Recursos</h1>
      <p className="py-6">En este sitio podras encontrar todo lo que necesitas saber para aprobar los quiz.</p>
      <a href="https://www.w3schools.com/">
      <button className="btn btn-primary">Ir al sitio</button>
    </a> 
    </div>
  </div>
</div>
      </main>
      <Footer/>
    </>
  )
}