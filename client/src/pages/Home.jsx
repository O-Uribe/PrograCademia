import React from 'react';
import { Link } from 'react-router-dom';
import {Howl} from 'howler';
import Footer from '../components/Footer';
import FondoCard from '../assets/Icons/fondoCard.png';

const sound = new Howl({
  src: ['sonidos/mario.mp3'],
  volume:0.2
});
const Home = () => {
  
  return (
    <>
        <main className="h-screen w-screen">
            <div className='flex flex-col items-center justify-center h-full absolute top-0 text-white w-full'>
            <Link className="text-center btn-ghost normal-case text-xl w-full bg-base-200 " to="/">
                Progracademia!
            </Link>
            <div className="mx-auto flex-1 flex flex-col items-center justify-center px-2 lg:flex-row ">
                <div className="card shadow-xl image-full">
                    <figure><img src={FondoCard} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Profesor!</h2>
                        <p></p>
                        <div className="card-actions justify-end">
                        <Link to="/loginprofe">
                            <button className="btn btn-primary text-white" onClick={()=>sound.play()}>
                                Ingresar
                            </button>
                        </Link>
                        </div>
                    </div>
                </div>
                <div className="lg:divider-horizontal"></div> 
                <div className="card shadow-xl image-full">
                    <figure><img src={FondoCard}alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Estudiante!</h2>
                        <p></p>
                        <div className="card-actions justify-end">
                        <Link to="/loginalu">
                            <button className="btn btn-primary"  onClick={()=>sound.play()}>
                            Ingresar
                            </button>
                        </Link>
                        </div>
                    </div>
                </div>
                <div className="lg:divider-horizontal"></div> 
                <div className="card  shadow-xl image-full">
                    <figure><img src={FondoCard} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Estudiante!</h2>
                        <p></p>
                        <div className="card-actions justify-end">
                        <Link to="/usersr">
                            <button className="btn btn-primary"  onClick={()=>sound.play()}>
                            Sin Registro
                            </button>
                        </Link>
                        </div>
                    </div>
                </div>
                <div className="lg:divider-horizontal"></div> 
                <div className="card  shadow-xl image-full">
                    <figure><img src={FondoCard} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Estadistica!</h2>
                        <p></p>
                        <div className="card-actions justify-end">
                        <Link to="/admin/stats">
                            <button className="btn btn-primary"  onClick={()=>sound.play()}>
                                Estadísticas
                            </button>
                        </Link>
                        </div>
                    </div>
                </div>
                        
            </div>
            <Footer className="w-full absolute inset-x-0 bottom-0"/>
            </div>
    </main>
    </>
  );
};

export default Home;
