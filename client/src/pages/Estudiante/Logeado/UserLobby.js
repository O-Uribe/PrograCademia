import React, { useEffect } from 'react';
import socketIO from 'socket.io-client';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../../../components/Footer';
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
        <><div className='flex flex-col items-center justify-center h-full absolute top-0 text-white w-full'>
        <div className='ark:bg-gray-800 dark:border-gray-700'>
            <div className="mx-auto flex-1 flex flex-col items-center justify-center px-2 lg:flex-row">
                <div className="lg:divider-horizontal"></div>
                <div className="card shadow-xl image-full">
                        <div className="card-body">
                            <p className="ml-2 text-ml font-bold text-black-500"> 
                                El PIN de la sala es {pin}
                                <br/>
                                Hola {playerName} has entrado a la sala con éxito!
                            </p>
                            <br/>
                            <button className="btn1 btn-primary"
                                    onClick={()=>{
                                        handleOnClick();
                                        submitNickname();}}
                                    >
                                    Entrar al chat
                            </button>
                            <br/>
                            <div className="card-actions justify-center">
                                <p className= "ml-2 text-ml font-bold text-black-500"> 
                                    El profesor iniciará la partida cuando todos los jugadores esten listos. 
                                </p>
                            </div>
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
