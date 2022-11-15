import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../../components/Footer';
import io from 'socket.io-client';

const socket = io("http://localhost:5000");

const UserHomesr = () => {
    const [pin, setPin] = useState('');
    const [playerName, setPlayerName] = useState('');
    const [identificador, setIdentificador] = useState('');

    const handlePINChange = (event) => {
        setPin({...pin,[event.target.name]: event.target.value});
    };

    const handlePlayerNameChange = (event) => {
        setPlayerName({ ...playerName, [event.target.name]: event.target.value });
    };

    const handleIdentificadorChange = (event) => {
        setIdentificador({ ...identificador, [event.target.name]: event.target.value });
    };


    const handleSubmit = () => {
        socket.emit('user nickname', playerName);
    };


    return (
        <React.Fragment>
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
                <Link to="/user/lobbysr" state={[playerName, pin, identificador]}>
                <button type="submit" onClick={handleSubmit}className="btn btn-primary btn-sm">
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
