import React, { useEffect } from 'react';
import socketIO from 'socket.io-client';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbaral from '../components/Navbaralumno';
import Footer from '../components/Footer';
import Chat from '../components/chat'
import { Link } from 'react-router-dom';
import videoBg from '../assets/fondo.mp4'
import io from 'socket.io-client';
const socket = io("http://localhost:5000");

const UserLobby = (props) => {
    const history = useNavigate();
    const data = useLocation();
    const [playerNameState, pinState] = data.state;

    const playerName = playerNameState.playerName;
    const pin = pinState.pin;
    const { setSocketUser, socketUser, BASE_URL } = props;
    const navigate = useNavigate();
    const handleOnClick = () => navigate(`/chat2/${playerName}`);
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
    const submitNickname = () => {
        socket.emit("user nickname", playerName);
      };
    return (
        <><video src={videoBg} autoPlay loop muted className="h-screen object-cover w-full" />
        <div className='flex flex-col items-center justify-center h-full absolute top-0 text-white w-full'>
        <div className="w-full absolute inset-x-0 top-0"><Navbaral/></div>
        <div className='mx-auto flex-1 flex flex-col items-center px-2 lg:flex-row'>
        <button 
                className='btn'
                onClick={()=>{
                    handleOnClick();
                    submitNickname();
                }}
                >chat</button>
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
        </div>
        <div className="w-full absolute inset-x-0 bottom-0"><Footer/></div>
        </div>
        </>
    );
};

export default UserLobby;
