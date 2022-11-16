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

    const selectCategoria = (src) => {
        socket.emit("categoria", {
            categoria: src,
        });
    };

    function handleChange(src) {
        selectCategoria(src);
    }
    
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
                                            <div className="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                                                <input id="bordered-radio-1" type="radio" name="bordered-radio" value=''className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={() => handleChange(triviaList[0].name)}/>
                                                <label for="bordered-radio-1" className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Logica de Programación</label>
                                            </div>
                                            <div className="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                                                <input checked id="bordered-radio-2" type="radio" name="bordered-radio" value='' className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"onClick={() => handleChange(triviaList[1].name)}/>
                                                <label for="bordered-radio-2" className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Science:Computers</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <br/>
                                            <h2 className="text-2xl font-bold">Lista de estudiantes conectados:</h2>
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