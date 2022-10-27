import React from 'react'
import { Link } from 'react-router-dom'
import Navbaral from '../components/Navbaralumno'
import Footer from '../components/Footer'
import videoBg from '../assets/fondo.mp4'
export const MainAlumno = () => {
  return (
    <>
    <main className='h-screen w-screen'>
      <video src={videoBg} autoPlay loop muted className="h-full object-cover w-full" />
      <div className='flex flex-col items-center justify-center h-full absolute top-0 text-white w-full'>
      <div className="w-full absolute inset-x-0 top-0"><Navbaral/></div>
          <Link to="/user" className="btn btn-outline"> Jugar </Link>
          <button className="btn btn-outline">Historial de partidas</button>
          <div className="w-full absolute inset-x-0 bottom-0"><Footer/></div>
      </div>
      </main>
    </>
  )
}