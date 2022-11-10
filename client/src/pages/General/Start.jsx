import React from 'react'
import { Link } from 'react-router-dom';
import {Howl} from 'howler';
import Footer from '../../components/Footer';
const sound = new Howl({
  src: ['sonidos/mario.mp3'],
  volume:0.2
});
export const Start = () => {
  return (
    <>
        <main className="h-screen w-screen">
            <div className="flex flex-col items-center justify-center h-full absolute top-0 text-white w-full">
                <div class="p-4 w-full text-center bg-white rounded-lg border shadow-md sm:p-12 dark:bg-gray-800 dark:border-gray-700">
                    <h1 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Bienvenido a Progracademia!</h1>
                    <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Haz click en el boton "Jugar" para ingresar como profesor o estudiante</p>
                        <div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                        <Link to="/home" onClick={()=>sound.play()} class="-mt-1 font-sans text-sm font-semibold">
                            <button type="button" class="btntext-gray-900  text-xl bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">PLAY</button>
                        </Link>
                    </div>
                </div>
            </div>    
        </main> 
    </>
      
  )
}
