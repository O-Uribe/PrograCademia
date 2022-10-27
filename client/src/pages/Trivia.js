import React, { useEffect } from 'react';

import StopGame from '../components/StopGame';
import Questions from '../components/Questions';
import Countdown from '../components/Countdown';
import Minipodium from '../components/MiniPodium';
import Navbarpr from '../components/Navbarprofe';
import videoBg from '../assets/fondo.mp4'
import Footer from '../components/Footer';
const Trivia = (props) => {
  const { socketHost, onGameEnd } = props;

  useEffect(() => {
    if (socketHost) {
      socketHost.on('podium', (podium) => {
        onGameEnd(podium);
      });
    }
  }, [socketHost, onGameEnd]);

  return props.triviaData ? (
    <React.Fragment>
      <video src={videoBg} autoPlay loop muted className="h-screen object-cover w-full" />
      <div className='flex flex-col items-center justify-center h-full absolute top-0 text-white w-full'>
        <body id="page-top" className='bg-base-200'>
        <div className="w-full absolute inset-x-0 top-0"><Navbarpr/></div>
            <div>
                <div>
                    <Countdown socket={socketHost} />
                </div>
                <Questions triviaData={props.triviaData} />
                <Minipodium socketHost={socketHost} />
                <div>
                <h3>Preguntas</h3>
                </div>

            <div>
                {props.triviaData.options.map((option, index) => (
                <button
                    id={`answer${index}`}
                    key={`button-${index}`}
                    className={`answer-trivia${index} text-white text-center answer-trivia d-flex flex-wrap w-50 border p-3`}
                >
                    {option.description}
                </button>
                ))}
            </div>
            <div>
            <br />
            </div>
            <div>
            <button onClick={() => socketHost.emit('next-question')}>
                Siguiente
            </button>
            <StopGame
              socket={socketHost}
              setSocketUser={props.setSocketUser}
              setSocket={props.setSocket}
            />
          </div>
        </div>
      </body>
      <div className="w-full absolute inset-x-0 bottom-0"><Footer/></div>
      </div>
    </React.Fragment>
  ) : (
    <>
    <video src={videoBg} autoPlay loop muted className="h-screen object-cover w-full" />
      <div className='flex flex-col items-center justify-center h-full absolute top-0 text-white w-full'>
      <div className="w-full absolute inset-x-0 top-0"><Navbarpr/></div>
        <>Cargando Quiz...</>
        <div className="w-full absolute inset-x-0 bottom-0"><Footer/></div>
      </div>
    </>
    
  );
};

export default Trivia;
