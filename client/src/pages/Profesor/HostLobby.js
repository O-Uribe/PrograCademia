import io from 'socket.io-client';
import Footer from '../../components/Footer';
import Navbarpr from '../../components/Navbarprofe';
import UserOnline from '../../components/UserOnline';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const socket = io("http://localhost:5000");

const HostLobby = (props) => {
    const {setTriviaData} = props;
    const [usersOnline, setUsersOnline] = useState([]);

    const [triviaList, setTriviaList] = useState([]);
    const [pin, setPin] = useState('');

    
    useEffect(() => {
        fetch('http://localhost:5000/list')
        .then((res) => res.json())
        .then((result) => {
            setTriviaList(result.triviaList);
            setPin(result.pin);
        })
    }, []);

    useEffect(() => {
        socket.on("users-on", (list) => {
            setUsersOnline(list);
        });

        socket.on('question', (triviaData) => {
            const newTriviaData = triviaData;
            setTriviaData(newTriviaData);
        });

    },);    

    let map = new Map();
    for (const item of usersOnline) {
        map.set("nombre", item.playerName); 
    }
    const startGame = () => {
        socket.emit("start-game", {
            map: map,
        });
    };

    const selectCategoria1 = () => {
        socket.emit("categoria", {
            categoria: 'Logica de Programación',
        });
        alert("Categoria seleccionada: Logica de Programación");
    };

    const selectCategoria2 = () => {
        socket.emit("categoria", {
            categoria: 'Science:Computers',
        });
        alert("Categoria seleccionada: Science:Computers");
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
                                    <div>
                                        <div className = 'inline-block w-1/2' >
                                            <br/>
                                            <button className="btn btn-primary" onClick={selectCategoria1}>Logica de Programación</button>
                                            <button className="btn btn-primary" onClick={selectCategoria2}>Science:Computers</button>
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
                                        <button className="btn1" 
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