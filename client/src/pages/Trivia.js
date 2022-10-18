import React, { useEffect } from 'react';

import StopGame from '../components/StopGame';
import Questions from '../components/Questions';
import Countdown from '../components/Countdown';
import Minipodium from '../components/MiniPodium';
import Navbarpr from '../components/Navbarprofe';


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
        <body id="page-top">
          <Navbarpr/>
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
    </React.Fragment>
  ) : (
    <><Navbarpr /><>Cargando Quiz...</></>
    
  );
};

export default Trivia;
