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
            <div class="artboard artboard-horizontal phone-5">
                <h1 className="mb-8 text-5xl text-center">Bienvenido a Progracademia!</h1>
                <br></br>
                <>
                    <Link to="/home" onClick={()=>sound.play()} className=" w-full text-center btn btn-xs btn-warning sm:btn-sm md:btn-md lg:btn-lg">Jugar</Link>
                </>
            </div>
            <div className="w-full absolute inset-x-0 bottom-0"><Footer/></div>
          </div>
        </main> 
    </>
      
  )
}
