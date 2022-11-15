import React, { useEffect } from 'react';
import io from 'socket.io-client';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../../../components/Footer';
import { Link } from 'react-router-dom';


const socket = io("http://localhost:5000");


const UserLobbysr = (props) => {
    const data = useLocation();
    const [playerNameState, pinState, identificadorState] = data.state;

    console.log(data);
    const playerName = playerNameState.playerName;
    const pin = pinState.pin;
    const identificador = identificadorState.indeticador; 
    const navigate = useNavigate();
    const handleOnClick = () => navigate(`/chat2/${playerName}`);

    console.log("Console desde UserLobby: ", identificador);

    useEffect(() => {
        socket.on('startGame', (data) => {
            console.log(data);
            props.setTriviaDataUser(data);
            navigate('/game', {state: playerName});
        });
        localStorage.setItem("chatConnected", "true");
    });
       

    const submitNickname = () => {
        socket.emit("user nickname", playerName);
    };
    
    return (
        <>
            <div className='flex flex-col items-center justify-center h-full absolute top-0 text-white w-full'>
                <div className='ark:bg-gray-800 dark:border-gray-700'>
                    <div className="mx-auto flex-1 flex flex-col items-center justify-center px-2 lg:flex-row">
                        <div className="lg:divider-horizontal"></div>
                        <div className="card shadow-xl image-full">
                                <div className="card-body">
                                    <p className="ml-2 text-ml font-bold text-black-500"> 
                                        El PIN de la sala es {pin}
                                        <br/>
                                        Hola {playerName} has entrado a la sala con éxito!

                                        <br/>
                                        Tu idSocket es: {identificador}
                                    </p>
                                    <br/>
                                    <button className="btn btn-primary"
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

export default UserLobbysr;
