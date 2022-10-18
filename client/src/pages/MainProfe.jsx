import React from 'react'
import { Link } from 'react-router-dom'
import Navbarpr from '../components/Navbarprofe'

export const MainProfe = () => {
  return (
    <>
      <Navbarpr/>
      <main>
          <Link to="/host/chooseTrivia" className="btn btn-outline"> Iniciar un quiz </Link>
          <a href='https://restapi-progracademia.herokuapp.com/new-entry' className='btn btn-outline'>Crear quiz</a>
      </main>
    </>
  )
}
