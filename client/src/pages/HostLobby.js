import io from 'socket.io-client';
import Footer from '../components/Footer';
import Navbarpr from '../components/Navbarprofe';
import UserOnline from '../components/UserOnline';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import { Alert } from "@material-tailwind/react";


const socket = io("http://localhost:5000");

const HostLobby = (props) => {
    //const [usersOnline, setPlayers] = useState([]);
    const data = useLocation();
    const pin = data.state;
    const {setTriviaData, BASE_URL } = props;
    //const [user, setUser] = useState("");
    const [usersOnline, setUsersOnline] = useState([]);
    
    useEffect(() => {
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

            socket.on("users-on", (list) => {
                setUsersOnline(list);
            });

            socket.on('playerName', (user) => {
                //setUser(user);
            });

            socket.on('question', (triviaData) => {
                const newTriviaData = triviaData;
                setTriviaData(newTriviaData);
            });

    },);    

    
    return (
        <React.Fragment>

                <div className='flex flex-col items-center justify-center h-full absolute top-0 text-white w-full'>
                <div className="w-full absolute inset-x-0 top-0"><Navbarpr/></div>
                <div className='object-center text-center'>
                <div className="container d-flex align-items-center flex-column">
            

                <h2 className="pin-host-lobby masthead-heading text-uppercase mb-0 text-white">
                    El PIN es {pin}
                </h2>
                <Link to="/host/trivia">
                    <button
                    onClick={() => socket.emit('start-game')}
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
                <br></br>
                <div className="container d-flex align-items-center justify-content-center flex-column">
                    {usersOnline.map((el, index) => (
                        <div key={index} className="block focus:outline-none truncate">
                            <UserOnline nickname={el.playerName} />
                        </div>
                        ))
                    }

                </div>
                </div>
            </div>
            <div className="w-full absolute inset-x-0 bottom-0"><Footer/></div>
            </div>
            <div>
            </div>
    </React.Fragment>
  );
};

export default HostLobby;
