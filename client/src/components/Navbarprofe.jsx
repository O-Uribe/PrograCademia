/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link } from 'react-router-dom'
import Perfil from './Perfilpr';

function cerrarsesion(){
    localStorage.removeItem("loginpro")
    localStorage.removeItem("token")
    window.location.href = '/';  
}
const img=localStorage.getItem("Profe_URL")
const img2="https://res.cloudinary.com/dyewwjcfi/image/upload/v1668004357/Imagenes%20Generales/Profe_bmbops.png" 
let url=""
const comprobar=()=>{
    if(!img){
        url=img2
    }else{
        url=img
    }
}
const Navbarpr=()=>{
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
                    className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
                >
                    <li>
                    <Link to='/mainprofe' >Inicio</Link>
                    </li>
                    <li>
                    <Link to='/host/chooseTrivia' >Iniciar Quiz</Link>
                    </li>
                    <li>
                    <a href='https://restapi-progracademia.herokuapp.com/new-entry'>Crear quiz</a>
                    </li>
                </ul>
                </div>
            </div>
            <div className='navbar-center'>
                <Link to='/' className=' btn-ghost text-xl normal-case md:text-3xl' >
                Progracademia!
                </Link>
            </div>
            <div className='navbar-end'>
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className=" btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full"onLoad={comprobar()}>
                    <img src={url}/>
                    </div>
                </label>
                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                    <li><label  htmlFor="my-modal-4">Perfil</label></li>
                    <li><Link to="/profile2" htmlFor="my-modal-3">Configuracion</Link></li>
                    <li><button onClick={()=>cerrarsesion()}>Cerrar Sesion</button></li>
                </ul>
                </div>
                </div>
                <Perfil/>
        </div>
    )
}
export default Navbarpr;