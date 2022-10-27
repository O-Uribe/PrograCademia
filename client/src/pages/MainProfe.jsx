import React from 'react'
import { Link } from 'react-router-dom'
import Navbarpr from '../components/Navbarprofe'
import Footer from '../components/Footer'
import videoBg from '../assets/fondo.mp4'
export const MainProfe = () => {
  return (
    <>
    <main className='h-screen w-screen'>
      <video src={videoBg} autoPlay loop muted className="h-full object-cover w-full" />
      <div className='flex flex-col items-center justify-center h-full absolute top-0 text-white w-full'>
      <div className="w-full absolute inset-x-0 top-0"><Navbarpr/></div>
          <Link to="/host/chooseTrivia" className="btn btn-outline"> Iniciar un quiz </Link>
          <a href='https://restapi-progracademia.herokuapp.com/new-entry' className='btn btn-outline'>Crear quiz</a>
          <Link to='/host/quiz' className="btn btn-outline">Ver quiz</Link>
          <div className="w-full absolute inset-x-0 bottom-0"><Footer/></div>
      </div>
      </main>
    </>
  )
}
