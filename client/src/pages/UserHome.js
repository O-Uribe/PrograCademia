import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbaral from '../components/Navbaralumno'
import Footer from '../components/Footer';
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
        <div className="flex flex-col items-center justify-center h-full absolute top-0 text-white w-full">
        <div className="w-full absolute inset-x-0 top-0"><Navbaral/></div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Ingrese un nombre</span>
            </label>
            <input type="text" name="playerName" className="input input-sm w-full max-w-xs input-bordered" onChange={handlePlayerNameChange} />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Ingrese el PIN</span>
            </label>
            <input type="text" name="pin" className="input input-sm w-full max-w-xs input-bordered" onChange={handlePINChange} />
          </div>
          <div>
            <br/>
            <Link to="/user/lobby" state = {[playerName, pin]}>
              <button type="submit" className="btn btn-primary">
                Ir a la sala de espera
              </button>
            </Link>
          </div>
          <div className="w-full absolute inset-x-0 bottom-0"><Footer/></div>
        </div>
    </React.Fragment>
  );
};

export default UserHome;
