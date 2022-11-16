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
      <div className="p-4 w-full text-center bg-white rounded-lg border shadow-md sm:p-12 dark:bg-gray-900 dark:border-gray-800">
          <div className="mx-auto flex-1 flex flex-col items-center justify-center px-2 lg:flex-row ">
                <div className="card shadow-xl w-fit dark:bg-gray-800 dark:border-gray-700">
                    <div className="card-body">
                        <p></p>
                        <div className="card-actions justify-center">
                        <Link to="/user">
                            <button className="btn1 btn-primary text-white">
                                Jugar
                            </button>
                        </Link>
                        </div>
                    </div>
                </div>
                <div className="lg:divider-horizontal"></div> 
                <div className="card shadow-xl w-fit dark:bg-gray-800 dark:border-gray-700">
                    <div className="card-body">
                        <p></p>
                        <div className="card-actions justify-center">
                        <Link>
                            <button className="btn1 btn-primary"  >
                            Historial
                            </button>
                        </Link>
                        </div>
                    </div>
                </div>
                <div className="lg:divider-horizontal"></div> 
                        
            </div>
            </div>
          <div className="w-full absolute inset-x-0 bottom-0"><Footer/></div>
      </div>
      </main>
    </>
  )
}