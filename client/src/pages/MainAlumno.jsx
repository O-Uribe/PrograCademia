import React from 'react'
import { Link } from 'react-router-dom'
import Navbaral from '../components/Navbaralumno'

export const MainAlumno = () => {
  return (
    <>
      <Navbaral/>
      <main>
          <Link to="/user" className="btn btn-outline"> Jugar </Link>
          <button className="btn btn-outline">Historial de partidas</button>
      </main>
    </>
  )
}