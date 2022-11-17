import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

const Home = () => {
  
  return (
    <>
        <main className="h-screen w-screen">
            <div className='flex flex-col items-center justify-center h-full absolute top-0 text-white w-full '>
            <div className="p-4 w-full text-center bg-white rounded-lg border shadow-md sm:p-12 dark:bg-gray-900 dark:border-gray-800">
                <div className="mx-auto flex-1 flex flex-col items-center justify-center px-2 lg:flex-row ">
                    <div className="card shadow-xl w-fit dark:bg-gray-800 dark:border-gray-700">
                        <div className="card-body">
                            <h2 className="card-title">Profesor!</h2>
                            <p></p>
                            <div className="card-actions justify-end">
                            <Link to="/loginprofe">
                                <button className="btn1 btn-primary text-white" >
                                    Ingresar
                                </button>
                            </Link>
                            </div>
                        </div>
                    </div>
                    <div className="lg:divider-horizontal"></div> 
                    <div className="card shadow-xl w-fit dark:bg-gray-800 dark:border-gray-700">
                        
                        <div className="card-body">
                            <h2 className="card-title">Estudiante!</h2>
                            <p></p>
                            <div className="card-actions justify-end">
                            <Link to="/loginalu">
                                <button className="btn1 btn-primary"  >
                                Ingresar
                                </button>
                            </Link>
                            </div>
                        </div>
                    </div>
                    <div className="lg:divider-horizontal"></div> 
                    <div className="card shadow-xl w-fit dark:bg-gray-800 dark:border-gray-700">
                        
                        <div className="card-body">
                            <h2 className="card-title">Estudiante!</h2>
                            <p></p>
                            <div className="card-actions justify-end">
                            <Link to="/usersr">
                                <button className="btn1 btn-primary"  >
                                Sin Registro
                                </button>
                            </Link>
                            </div>
                        </div>
                    </div>
                    <div className="lg:divider-horizontal"></div> 
                    <div className="card shadow-xl w-fit dark:bg-gray-800 dark:border-gray-700">
                    
                        <div className="card-body">
                            <h2 className="card-title">Estadistica!</h2>
                            <p></p>
                            <div className="card-actions justify-end">
                            <Link to="/admin/stats">
                                <button className="btn1 btn-primary"  >
                                    Estadísticas
                                </button>
                            </Link>
                            </div>
                        </div>
                    </div>
                            
                </div>
            </div>
            
            
            </div>
            
    </main>
    <Footer className="w-full absolute inset-x-0 bottom-0"/>
    </>
  );
};

export default Home;
