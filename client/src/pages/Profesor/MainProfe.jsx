import React from 'react'
import { Link } from 'react-router-dom'
import Navbarpr from '../../components/Navbarprofe'
import Footer from '../../components/Footer'
export const MainProfe = () => {
  return (
    <>
    <main className='h-screen w-screen'>
      <div className='flex flex-col items-center justify-center h-full absolute top-0 text-white w-full'>
      <div className="w-full absolute inset-x-0 top-0"><Navbarpr/></div>
      <div className="mx-auto flex-1 flex flex-col items-center justify-center px-2 lg:flex-row ">
                <div className="card shadow-xl image-full">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p></p>
                        <div className="card-actions justify-end">
                        <Link to="/host/lobby" className="btn btn-primary"> Iniciar un quiz </Link>
                        </div>
                    </div>
                </div>
                <div className="lg:divider-horizontal"></div> 
                <div className="card shadow-xl image-full">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p></p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary">Crear quiz</button>
                        </div>
                    </div>
                </div>
                <div className="lg:divider-horizontal"></div> 
                <div className="card  shadow-xl image-full">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p></p>
                        <div className="card-actions justify-end">
                        <Link to='/host/quiz' className="btn btn-primary">Ver quiz</Link>
                        </div>
                    </div>
                </div>
                <div className="lg:divider-horizontal"></div>
                <div className="card shadow-xl image-full">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p></p>
                        <div className="card-actions justify-end">
                        <Link to="/host/formulario" className="btn btn-primary">Crear Pregunta</Link>
                        </div>
                    </div>
                </div>
                <div className="lg:divider-horizontal"></div>
                <div className="card shadow-xl image-full">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p></p>
                        <div className="card-actions justify-end">
                        <Link to="/host/preguntas" className="btn btn-primary">Preguntas</Link>
                        </div>
                    </div>
                </div>
            </div>
          
          
          
          <div className="w-full absolute inset-x-0 bottom-0"><Footer/></div>
      </div>
      </main>
    </>
  )
}
