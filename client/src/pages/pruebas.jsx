import React from 'react'
import videoBg from '../assets/videoBg.mp4'
import { Link } from 'react-router-dom';
const pruebas = () => {
  return (
    <div className='h-screen w-full'>
        <div className=" h-full absolute top-0 left-0 w-full"></div>
        <video src={videoBg} autoPlay loop muted className="h-full object-cover w-full" />
        <div className="flex flex-col items-center justify-center h-full absolute top-0 text-black w-full">
        <h1 className="mb-8 text-3xl text-center">Bienvenido a Progracademia</h1>
              <>
                <Link to="/home" className="w-full text-center py-3 btn btn-outline bg-orange-700" >Jugar</Link>
              </>
        </div>
    </div>
  )
}

export default pruebas