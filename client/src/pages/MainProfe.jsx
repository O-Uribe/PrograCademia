import React from 'react'
import { Link } from 'react-router-dom'
import Navbarpr from '../components/Navbarprofe'
import Footer from '../components/Footer'
export const MainProfe = () => {
  return (
    <>
      <Navbarpr/>
      <main className='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
          <Link to="/host/chooseTrivia" className="btn btn-outline"> Iniciar un quiz </Link>
          <a href='https://restapi-progracademia.herokuapp.com/new-entry' className='btn btn-outline'>Crear quiz</a>
          <Link to='/host/quiz' className="btn btn-outline">Ver quiz</Link>
      </main>
      <Footer/>
    </>
  )
}
