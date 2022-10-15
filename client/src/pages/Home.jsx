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
            <div>
              <Link to="/host/chooseTrivia">
                <button className="btn btn-sm" onClick={()=>sound.play()}>
              <Link to="/host/chooseTrivia">Ingresar como profesor</Link>
                  
                </button>
              </Link>
              <Link to="/user">
                <button className="btn btn-sm"  onClick={()=>sound.play()}>
                  Ingresar como estudiante
                </button>
              </Link>
              <Link to="/admin/stats">
                <button className="btn btn-sm"  onClick={()=>sound.play()}>
                  Estadísticas
                </button>
              </Link>
            </div>
    </React.Fragment>
  );
};

export default Home;
