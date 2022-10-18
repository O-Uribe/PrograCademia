import React from 'react';
import { Link } from 'react-router-dom';
import {Howl} from 'howler';

const sound = new Howl({
  src: ['sonidos/mario.mp3'],
  volume:0.2
});
const Home = () => {
  
  return (
    <React.Fragment>
        <Link className="btn btn-ghost normal-case text-xl" to="/">
                    Progracademia!
            </Link>
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="px-6 py-8 rounded shadow-md w-full">
                <Link to="/loginprofe">
                    <button className="btn btn-sm" onClick={()=>sound.play()}>
                        Ingresar como profesor 
                    </button>
                </Link>
                <Link to="/loginalu">
                    <button className="btn btn-sm"  onClick={()=>sound.play()}>
                    Ingresar como estudiante
                    </button>
                </Link>
                <Link to="/admin/stats">
                    <button className="btn btn-sm"  onClick={()=>sound.play()}>
                        Estadísticas
                    </button>
                </Link>
                <Link to="/registrarse">
                    <button className="btn btn-sm"  onClick={()=>sound.play()}>
                        Registrarse
                    </button>
                </Link>
            </div>
            </div>
    </React.Fragment>
  );
};

export default Home;
