import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import { Link } from 'react-router-dom';
import UserOnline from '../../components/UserOnline';
import io from 'socket.io-client';

import Navbarpr from '../../components/Navbarprofe';
import Footer from '../../components/Footer'; 

const socket = io("http://localhost:5000");



const Race = () => {
    const data = useLocation();
    const alumnos = data.state;
    const [jugadores, setJugadores] = useState([]);

    //const [alumnosConectados, setAlumnosConectados] = React.useState([]);


    useEffect(() => {

        console.log(alumnos);
        let identificacion = alumnosSeparados();
        console.log("Jugadores desde lobby",identificacion);

        socket.on("question", () => {
        });


        socket.on("correct-answer", (data) => {
            setJugadores([data]);
            console.log(jugadores);
        });


        socket.on("wrong-answer", (data) => {  
            setJugadores([data]);
            console.log(jugadores);
        });
             
        // socket.on("Alumnos", (alu) => {
        //     setAlumnosConectados(alu);
        // });
    },[]);


    // function jugadoresConectados() {
    //     let jugadores = [];
    //     for (let i = 0; i < alumnos.length; i++) {
    //         jugadores.push(alumnos[i].playerName);
    //     }
    //     return jugadores;
    // }

    const muestraJugadores = () => {
        let jugadores = [];
        for (let i = 0; i < alumnos.length; i++) {
            jugadores.push(alumnos[i].playerName);
        }
        
        console.log("Jugadores desde muestraJugadores",jugadores);
        return jugadores;
    }


    function alumnosSeparados() {
        const map = new Map();
        for (const item of alumnos) {
            if(!map.has(item.playerName)){
                map.set(item.playerName, true);    // set any value to Map
            }
        }
        const alumnoSeparado = [...map.keys()];
        return alumnoSeparado;
    }

        

    return (
        
        <div id="page-top"> 
            <div className='bg-base-200 rounded-md pt-6 px-6'>
                <div className='artboard artboard-horizontal phone-5'>
                    <div className="w-full absolute inset-x-0 top-0"><Navbarpr/></div>
                    <div className="flex flex-col items-center text-2xl font-bold">
                        <h3>Carrera</h3>
                    </div>
                    <div className='inline-flex flex-col'>
                        <div className="flex space-x-4...">
                            {alumnos.map((el, index) => (
                                <div key={index} className="block focus:outline-none">
                                    <br/>
                                    <UserOnline nickname={el.playerName}/>
                                </div>
                                ))
                            }
                        </div> 
                    </div>
                    
                    {/* Puntos de jugadore */}


                    <br />
                    <div className="w-full absolute inset-x-0 bottom-0">
                        <Footer/>
                    </div>
                </div>
            </div>

            <div className='Volver'>
                <Link to="/host/chooseTrivia">
                    <button type="button" className="btn btn-primary">Volver</button>
                </Link>

            </div>
        </div>    
    );
}

export default Race;
        
