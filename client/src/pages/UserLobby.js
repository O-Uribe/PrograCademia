import React, { useEffect } from 'react';
import socketIO from 'socket.io-client';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbaral from '../components/Navbaralumno';
import Footer from '../components/Footer';
import Chat from '../components/chat'
import { Link } from 'react-router-dom';


const UserLobby = (props) => {
    const history = useNavigate();
    const data = useLocation();
    const [playerNameState, pinState] = data.state;

    const playerName = playerNameState.playerName;
    const pin = pinState.pin;
    const { setSocketUser, socketUser, BASE_URL } = props;

    useEffect(() => {
        if (!socketUser) {
        let newSocketUser;

        if (BASE_URL === 'http://localhost:5000') {
            newSocketUser = socketIO(`/${pin}`, {
            query: `playerName=${playerName}`,
            });
        } else {
            newSocketUser = socketIO(`${BASE_URL}/${pin}`, {
            query: `playerName=${playerName}`,
            });
        }

        setSocketUser(newSocketUser);
        }

        if (socketUser) {
        socketUser.on('question', (data) => {
            props.setTriviaDataUser(data);
            history.push('/user/trivia');
        });
        }
    }, [history, props, setSocketUser, pin, socketUser, BASE_URL, playerName]);
    return (
        <><Navbaral />
        <div className='mx-auto flex-1 flex flex-col items-center px-2 lg:flex-row'>
            <Chat/>
            <div className="lg:divider-horizontal"></div>
            <div className="card w-96 bg-base-100 text-neutral-content">
                <div className="card-body items-center text-center">
                    <h3>
                        El PIN de la sala es {pin}
                    </h3>
                    <h3>
                        Tu usuario es {playerName}
                    </h3>
                    <p>El juego comenzará cuando el profesor lo decida,
                            espera pacientemente porfavor!</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
        </div><Footer/></>
    );
};

export default UserLobby;
