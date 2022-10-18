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

<div className="navbar bg-base-100">
  <a className="btn btn-ghost normal-case text-xl"><Link to="/">Progracademia!</Link></a>
</div>
            <div>
                <button className="btn btn-sm" onClick={()=>sound.play()}>
              <Link to="/loginprofe">Ingresar como profesor</Link>
                  
                </button>
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
    </React.Fragment>
  );
};

export default Home;
