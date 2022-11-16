import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbaral from '../../../components/Navbaralumno'
import Footer from '../../../components/Footer';
const UserHome = () => {
  const [pin, setPin] = useState('');
  const [playerName, setPlayerName] = useState('');

  const handlePINChange = (event) => {
    setPin({
      ...pin,
      [event.target.name]: event.target.value,
    });
  };
  const handlePlayerNameChange = (event) => {
    setPlayerName({ ...playerName, [event.target.name]: event.target.value });
  };
  return (
    <React.Fragment>
      <main className="h-screen w-screen">
      <div className="w-full absolute inset-x-0 top-0"><Navbaral/></div>
            <div className='flex flex-col items-center justify-center h-full absolute top-0 text-white w-full'>
            <div className="absolute dark:bg-gray-800 dark:border-gray-700 rounded-2xl w-2/6 text-center">
            
        
          <div>
              <h1>Ingrese un nombre</h1>
            <input type="text" name="playerName" className="input input-sm w-full max-w-xs input-bordered" onChange={handlePlayerNameChange} />
          </div>
          <div>
              <h1>Ingrese el PIN</h1>
            <input type="text" name="pin" className="input input-sm w-full max-w-xs input-bordered" onChange={handlePINChange} />
          </div>
          <div>
            <br/>
            <Link to="/user/lobby" state = {[playerName, pin]}>
              <button type="submit" className="btn1 btn-primary">
                Ir a la sala de espera
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full absolute inset-x-0 bottom-0"><Footer/></div>
        </div>

        </main>

    </React.Fragment>
  );
};

export default UserHome;
