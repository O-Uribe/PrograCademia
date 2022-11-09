import React from 'react'
import { Link } from 'react-router-dom'
import Navbaral from '../../../components/Navbaralumno'
import Footer from '../../../components/Footer'
export const MainAlumno = () => {
  return (
    <>
    <main className='h-screen w-screen'>
      <div className='flex flex-col items-center justify-center h-full absolute top-0 text-white w-full'>
      <div className="w-full absolute inset-x-0 top-0"><Navbaral/></div>
          <div className="mx-auto flex-1 flex flex-col items-center justify-center px-2 lg:flex-row ">
                <div className="card shadow-xl image-full">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p></p>
                        <div className="card-actions justify-center">
                        <Link to="/user">
                            <button className="btn btn-primary text-white">
                                Jugar
                            </button>
                        </Link>
                        </div>
                    </div>
                </div>
                <div className="lg:divider-horizontal"></div> 
                <div className="card shadow-xl image-full">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p></p>
                        <div className="card-actions justify-center">
                        <Link>
                            <button className="btn btn-primary"  >
                            Historial
                            </button>
                        </Link>
                        </div>
                    </div>
                </div>
                <div className="lg:divider-horizontal"></div> 
                        
            </div>
          <div className="w-full absolute inset-x-0 bottom-0"><Footer/></div>
      </div>
      </main>
    </>
  )
}