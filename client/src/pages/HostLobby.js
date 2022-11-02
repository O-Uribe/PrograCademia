import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import io from 'socket.io-client';
import Players from '../components/Players';
import Navbarpr from '../components/Navbarprofe';
import Footer from '../components/Footer';
import videoBg from '../assets/fondo.mp4'
const HostLobby = (props) => {
    const [players, setPlayers] = useState([]);
    const data = useLocation();
    const pin = data.state;
    const { socket, setTriviaData, BASE_URL } = props;

    
    useEffect(() => {
        console.log('hostsocket', props.socket);
        if (!props.socket) {
        fetch(`http://localhost:5000/trivia/${pin}/${props.trivia}`).then(() => {
            let newSocketHost;
            if (BASE_URL === 'http://localhost:5000') {
            newSocketHost = io(`/${pin}`);
            } else {
            newSocketHost = io(`${BASE_URL}/${pin}`);
            }
            props.setSocket(newSocketHost);
        });
        }
    }, [pin, props, BASE_URL]);

    useEffect(() => {
        if (socket) {
        socket.on('question', (triviaData) => {
            const newTriviaData = triviaData;
            setTriviaData(newTriviaData);
        });
        
        socket.on('playerlist', (players) => {
            const newPlayers = players;
            setPlayers(newPlayers);
        });
        }
    }, [socket, setTriviaData]);

    return (
        <React.Fragment>
            <video src={videoBg} autoPlay loop muted className="h-screen object-cover w-full" />
                <div className='flex flex-col items-center justify-center h-full absolute top-0 text-white w-full'>
                <div className="w-full absolute inset-x-0 top-0"><Navbarpr/></div>
            <div className='object-center text-center'>
                <div className="container d-flex align-items-center flex-column">
                <h2 className="pin-host-lobby masthead-heading text-uppercase mb-0 text-white">
                    El PIN es {pin}
                </h2>
                <Link to="/host/trivia">
                    <button
                    onClick={() => props.socket.emit('start-game')}
                    className="btn btn-primary"
                    >
                    Iniciar Juego
                    </button>
                </Link>
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                    <i className="fas fa-star"></i>
                    </div>
                    <div className="divider-custom-line"></div>
                </div>
                <h2 className="pin-host-lobby text-center text-uppercase text-white">
                    Usuarios Conectados:
                </h2>
                <br />
                <div className="container d-flex align-items-center justify-content-center flex-column">
                    <Players className="" players={players} />
                </div>
                </div>
            </div>
            <div className="w-full absolute inset-x-0 bottom-0"><Footer/></div>
            </div>
    </React.Fragment>
  );
};

export default HostLobby;
