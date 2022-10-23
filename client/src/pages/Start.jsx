import React from 'react'
import { Link } from 'react-router-dom';
import {Howl} from 'howler';
import Footer from '../components/Footer';
import videoBg from '../assets/videoBg.mp4'

const sound = new Howl({
  src: ['sonidos/mario.mp3'],
  volume:0.2
});
export const Start = () => {
  return (
    <>
        <main className="h-screen w-full">
          <video src={videoBg} autoPlay loop muted className="h-full object-cover w-full"/>
          <div className="flex flex-col items-center justify-center h-full absolute top-0 text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Bienvenido a Progracademia</h1>
            <>
              <Link to="/home" className="w-1/6 text-center  btn btn-outline bg-orange-700" onClick={()=>sound.play()}>Jugar</Link>
            </>
          <div className="w-full absolute inset-x-0 bottom-0"><Footer/></div>
          </div>
        </main> 
    </>
      
  )
}
