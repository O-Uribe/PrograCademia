import React, { useEffect } from 'react';
import Questions from '../../components/Questions';
import Navbarpr from '../../components/Navbarprofe';
import Footer from '../../components/Footer';
import io from 'socket.io-client';

const socket = io("http://localhost:5000");

  
const Race = () => {

    useEffect(() => {
        socket.on('question', (triviaData) => {
            const newTriviaData = triviaData;
        });

    },[]);

    return (
            <div className='flex flex-col items-center justify-center h-full absolute top-0 text-white w-full'>
            <body id="page-top" className='bg-base-200'>
            <div className="w-full absolute inset-x-0 top-0"><Navbarpr/></div>
                <div>
                    <div>
                        <h3>Carrera</h3>
                    </div>
                <div>
                <br />
                </div>
            </div>
          </body>
          <div className="w-full absolute inset-x-0 bottom-0"><Footer/></div>
          </div>
    );
}
export default Race;
        
