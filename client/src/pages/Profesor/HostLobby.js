import io from 'socket.io-client';
import Footer from '../../components/Footer';
import Navbarpr from '../../components/Navbarprofe';
import UserOnline from '../../components/UserOnline';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

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

        let contadorEstudiantes = 0;
        socket.on("users-on", (list) => {
            setUsersOnline(list);
            contadorEstudiantes = list.length;
        });

        socket.on('playerName', (user) => {
            //setUser(user);
        });

        socket.on('question', (triviaData) => {
            const newTriviaData = triviaData;
            setTriviaData(newTriviaData);
        });

    },);    

    let id = 0;

    let map = new Map();
    for (const item of usersOnline) {
        id++;
        map.set("nombre", item.playerName); 
        map.set("id", id);
    }
    const estudiantes = [...map.values()];


    const startGame = () => {
        socket.emit("start-game", {
            estudiantes: estudiantes,
        });
    };

    
    
    return (
        <React.Fragment>
            <div className='flex flex-col items-center justify-center h-full absolute top-0 text-white w-full'>
                <div className="w-full absolute inset-x-0 top-0"><Navbarpr/></div>
                    <div className='object-center text-center'>
                        <div className="container d-flex align-items-center flex-column"> 
                            <div className='bg-gray-800 rounded-md pt-5 shadow-2xl'>
                                <div className ="artboard artboard-horizontal phone-2">
                                    <div className="row">
                                        <div className="col-12">
                                            <h1 className="text-4xl font-bold"> Bienvenido a la sala de espera!</h1>
                                        </div>
                                    </div>                                                        
                                    <div className="row">
                                        <div className="col-12">
                                            <br/>
                                            <h2 className="text-2xl font-bold">Pin de la sala: {pin}</h2>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <br/>
                                            <h2 className="text-2xl font-bold"> Lista de estudiantes conectados:</h2>
                                            <br/>
                                            <div className="container d-flex align-items-center justify-content-center flex-column">
                                                {usersOnline.map((el, index) => (
                                                    <div key={index} className="block focus:outline-none truncate">
                                                        <UserOnline nickname={el.playerName} />
                                                        <br/>
                                                    </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="/race" state={usersOnline}>
                                        <button className="bg-purple-700 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-full" 
                                            onClick={startGame}
                                            >Iniciar juego
                                        </button>
                                    </Link>
                               
                                </div>     
                            </div>            
                        </div>
                    </div>
                <div className="w-full absolute inset-x-0 bottom-0"><Footer/></div>
            </div>
    </React.Fragment>
  );
};

export default HostLobby;