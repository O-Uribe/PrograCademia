import React from 'react'
import { Link } from 'react-router-dom'
import Navbaral from '../components/Navbaralumno'
import Footer from '../components/Footer'
export const MainAlumno = () => {
  return (
    <>
      <Navbaral/>
      <main className='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
          <Link to="/user" className="btn btn-outline"> Jugar </Link>
          <button className="btn btn-outline">Historial de partidas</button>
      </main>
      <Footer/>
    </>
  )
}