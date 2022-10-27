import React from 'react'
import { Link } from 'react-router-dom';
import {Howl} from 'howler';
import Footer from '../components/Footer';
import videoBg from '../assets/fondo.mp4'
const sound = new Howl({
  src: ['sonidos/mario.mp3'],
  volume:0.2
});
export const Start = () => {
  return (
    <>
        <main className="h-screen w-screen">
        <video src={videoBg} autoPlay loop muted className="h-full object-cover w-full" />
          <div className="flex flex-col items-center justify-center h-full absolute top-0 text-white w-full">
            <div className='bg-base-200  sm:rounded-md'>
            <h2 className="mb-8 text-3xl text-center">Bienvenido a Progracademia</h2>
            <>
              <Link to="/home" className="w-full text-center  btn btn-outline bg-primary" onClick={()=>sound.play()}>Jugar</Link>
            </>
            </div>
          <div className="w-full absolute inset-x-0 bottom-0"><Footer/></div>
          </div>
        </main> 
    </>
      
  )
}
