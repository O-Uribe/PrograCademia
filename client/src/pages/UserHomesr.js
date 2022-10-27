import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import videoBg from '../assets/fondo.mp4'
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
      <video src={videoBg} autoPlay loop muted className="h-screen object-cover w-full" />
        <div className="flex flex-col items-center justify-center h-full absolute top-0 text-white w-full">
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
          <div className="w-full absolute inset-x-0 bottom-0"><Footer/></div>
        </div>
    </React.Fragment>
  );
};

export default UserHomesr;
