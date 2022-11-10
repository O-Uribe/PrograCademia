import React, { useEffect} from 'react';
import {useLocation, useState} from 'react-router-dom';
import io from 'socket.io-client';
import UserOnline from '../../components/UserOnline';
import Navbarpr from '../../components/Navbarprofe';
import Footer from '../../components/Footer'; 

const socket = io("http://localhost:5000");



const Race = () => {
    const data = useLocation();
    const alumnos = data.state;

    useEffect(() => {
        socket.on('question', (triviaData) => {
            const newTriviaData = triviaData;
        });
    },[]);

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
                        {/* <div className="flex space-x-4...">
                            {alumnos.map((el, index) => (
                                <div key={index} className="block focus:outline-none">
                                    <br/>
                                    <UserOnline nickname={el.playerName}/> 
                                </div>
                                ))
                            }
                        </div> */}
                    </div>
                    <div>

                    </div>
                    {alumnosSeparados()}
                    <br />
                    <div className="w-full absolute inset-x-0 bottom-0">
                        <Footer/>
                    </div>
                </div>
            </div>
        </div>    
    );
}

export default Race;
        
