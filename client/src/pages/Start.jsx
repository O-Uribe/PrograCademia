import React from 'react'
import { Link } from 'react-router-dom';
import {Howl} from 'howler';
import Footer from '../components/Footer';

const sound = new Howl({
  src: ['sonidos/mario.mp3'],
  volume:0.2
});
export const Start = () => {
  return (
    <>
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 bg-base-200">
          <div className=" px-6 py-8 rounded shadow-md text-white w-full">
            <h1 className="mb-8 text-3xl text-center">Bienvenido a Progracademia</h1>
            <>
              <Link to="/home" className="w-full text-center py-3 btn btn-outline bg-orange-700" onClick={()=>sound.play()}>Jugar</Link>
            </>
          </div> 
        </div>
      <Footer/>
    </>
      
  )
}
