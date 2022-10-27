import React, { useEffect } from 'react';
import io from 'socket.io-client';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Chat from '../components/chat'
import { Link } from 'react-router-dom';

const UserLobbysr = (props) => {
    const Navigate = useNavigate();
    const data = useLocation();
    const [playerNameState, pinState] = data.state;

    const playerName = playerNameState.playerName;
    const pin = pinState.pin;
    const { setSocketUser, socketUser, BASE_URL } = props;


    useEffect(() => {
        if (!socketUser) {
            let newSocketUser;
            if (BASE_URL === 'http://localhost:5000') {
                newSocketUser = io(`/${pin}`, {
                    query: `playerName=${playerName}`,
                });
            } else {
                newSocketUser = io(`${BASE_URL}/${pin}`, {
                    query: `playerName=${playerName}`,
                });
            }
            setSocketUser(newSocketUser);
        }

        if (socketUser) {               
            socketUser.on('question', (data) => {
                props.setTriviaDataUser(data);
                Navigate.push('/user/trivia');
            });        
        }
    }, [Navigate, props, setSocketUser, pin, socketUser, BASE_URL, playerName]);
    
    return (
        <>
        <Link className="text-center btn-ghost normal-case text-xl w-full bg-base-200" to="/">
            Progracademia!
        </Link>
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

export default UserLobbysr;
