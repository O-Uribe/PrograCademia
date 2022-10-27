import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const UserHomesr = () => {
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
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text ">Ingrese un nombre</span>
            </label>
            <input type="text" name="playerName" className="input input-sm w-full max-w-xs input-bordered" onChange={handlePlayerNameChange} />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text ">Ingrese el PIN</span>
            </label>
            <input type="text" name="pin" className="input input-sm w-full max-w-xs input-bordered" onChange={handlePINChange} />
          </div>
          <div>
            <br/>
            <Link to="/user/lobbysr" state = {[playerName, pin]}>
              <button type="submit" className="btn btn-xl btn-outline-light btn-submit-data-user">
                Ir a la sala de espera
              </button>
            </Link>
          </div>
        </div>
        <Footer/>
    </React.Fragment>
  );
};

export default UserHomesr;
