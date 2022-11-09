import React, { useEffect } from 'react';
import io from 'socket.io-client';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../../../components/Footer';
import { Link } from 'react-router-dom';
const socket = io("http://localhost:5000");


const UserLobbysr = (props) => {
    const data = useLocation();
    const [playerNameState, pinState] = data.state;

    const playerName = playerNameState.playerName;
    const pin = pinState.pin;
    const navigate = useNavigate();
    const handleOnClick = () => navigate(`/chat2/${playerName}`);


    useEffect(() => {
        socket.on('question', (data) => {
            props.setTriviaDataUser(data);
            navigate('/user/trivia');
        });
        localStorage.setItem("chatConnected", "true");
    });
    
    
    const submitNickname = () => {
        socket.emit("user nickname", playerName);
    };
    
    return (
        <>
            <div className='flex flex-col items-center justify-center h-full absolute top-0 text-white w-full'>
            <Link className="text-center btn-ghost normal-case text-xl w-full bg-base-200" to="/">
                Progracademia!
            </Link>
            <div className="mx-auto flex-1 flex flex-col items-center justify-center px-2 lg:flex-row ">
                <div className="lg:divider-horizontal"></div>
                <div className="card shadow-xl image-full">
                        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div className="card-body">
                            <p className="ml-2 text-ml font-bold text-black-500"> 
                                El PIN de la sala es {pin}
                                <br/>
                                Hola {playerName} has entrado a la sala con éxito!
                            </p>
                            <br/>
                            <button className="btn btn-warning"
                                    onClick={()=>{
                                        handleOnClick();
                                        submitNickname();}}
                                    >
                                    chat
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
            <div className="w-full absolute inset-x-0 bottom-0"><Footer/></div>
            </div>
        </>
    );
};

export default UserLobbysr;
