import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
      <main>
        <div>
          <div>
            <input
              id="name"
              type="text"
              name="playerName"
              placeholder="Porfavor Indique su nombre"
              onChange={handlePlayerNameChange}
            />
            <input
              id="name"
              type="text"
              name="pin"
              placeholder="Copie el pin indicado por el host"
              onChange={handlePINChange}
            />
          </div>
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
          <div className="container">
            <Link to="/user/lobby" state = {[playerName, pin]}>
              <button type="submit" className="btn btn-xl btn-outline-light btn-submit-data-user">
                <i></i>
                Ir a la sala de espera
              </button>
            </Link>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default UserHome;
