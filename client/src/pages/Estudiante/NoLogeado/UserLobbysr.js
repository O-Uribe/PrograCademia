import React, { useEffect } from 'react';
import io from 'socket.io-client';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../../../components/Footer';

const socket = io("http://localhost:5000");


const UserLobbysr = (props) => {
    const data = useLocation();
    const [playerNameState, pinState] = data.state;

    const playerName = playerNameState.playerName;
    const pin = pinState.pin;
    const navigate = useNavigate();

    const [categoria, setCategoria] = React.useState("Lógica de Programacion");

    useEffect(() => {
        socket.on('startGame', (data) => {
            props.setTriviaDataUser(data);
            navigate('/game', {state: [playerName, categoria]});
        });

        socket.on('categoria', (data) => {
            props.setTriviaDataUser(data);
            setCategoria(data.categoria);
        });

        localStorage.setItem("chatConnected", "true");
    });
       
    
    return (
        <>
            <div className='flex flex-col items-center justify-center h-full absolute top-0 text-white w-full'>
                <div className='ark:bg-gray-800 dark:border-gray-700'>
                    <div className="mx-auto flex-1 flex flex-col items-center justify-center px-2 lg:flex-row">
                        <div className="lg:divider-horizontal"></div>
                        <div className="card bg-gray-800 w-full p-6 rounded-lg shadow-xl">
                                <div className="card-body text-center">
                                    <p className="ml-2 text-2xl font-bold text-white">
                                        El PIN de la sala es <span className=' inline text-sky-400'>{pin} </span>
                                        <br/>
                                        Hola <span className=' inline text-sky-400'>{playerName} </span> has entrado a la sala con éxito!
                                    </p>
                                    <br/>
                                    <span className="ml-2 text-xl font-bold text-white">
                                        La categoría seleccionada es: 
                                        <div className=' text-3xl font-bold text-white'>
                                            {categoria}
                                        </div>

                                    </span>
                                    <br/>
                                    <div className="card-actions justify-center">
                                    <p className="ml-2 text-2xl font-bold text-white">
                                        El juego comenzará cuando el profesor lo inicie
                                    </p>
                                    <br/>
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
