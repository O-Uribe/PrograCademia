import React from 'react'
import { Link } from 'react-router-dom'
import {Howl} from 'howler';
import img from '../assets/Icons/alumno.png'
const sound = new Howl({
  src: ['sonidos/mario.mp3'],
  volume:0.2
});
function cerrarsesion(){
    localStorage.removeItem("loginalum")
    localStorage.removeItem("AlumNombre")
    localStorage.removeItem("AlumApellido")
    window.location.href = '/';  
}
const Navbaral=()=>{
    return(
        <div className='navbar bg-base-100'>
            <div className='navbar-start'>
                <div className='dropdown dropdown-hover'>
                <label tabIndex={0} className='btn btn-ghost btn-circle'>
                    <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M4 6h16M4 12h16M4 18h7'
                    />
                    </svg>
                </label>
                <ul
                    tabIndex={0}
                    className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
                >
                    <li>
                    <Link to='/MainAlumno' onClick={()=>sound.play()}>Inicio</Link>
                    </li>
                    <li>
                    <Link to='/user' onClick={()=>sound.play()}>Jugar</Link>
                    </li>
                    <li>
                    <Link to='/MainAlumno' onClick={()=>sound.play()}>Historial</Link>
                    </li>
                    <li>
                    <Link to='/Recursos' onClick={()=>sound.play()}>Recursos</Link>
                    </li>
                </ul>
                </div>
            </div>
            <div className='navbar-center'>
                <Link to='/' className='btn btn-ghost text-xl text-center normal-case md:text-3xl' onClick={()=>sound.play()}>
                Progracademia!
                </Link>
            </div>
            <div className='navbar-end'>
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img src={img}/>
                    </div>
                </label>
                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                    <li><button className="justify-between">Perfil</button></li>
                    <li><button>Configuraciones</button></li>
                    <li><button onClick={()=>cerrarsesion()}>Cerrar Sesion</button></li>
                </ul>
                </div>
                </div>
        </div>
    )
}
export default Navbaral;