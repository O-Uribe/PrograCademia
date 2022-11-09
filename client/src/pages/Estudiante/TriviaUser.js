import React, { useState, useEffect } from 'react';
import StopGame from '../../components/StopGame';
import Questions from '../../components/Questions';
import Countdown from '../../components/Countdown';
const Trivia = (props) => {
  const [isClicked, setIsClicked] = useState('');
  const [isDisabled, setIsDisabled] = useState('');

  const onGameEnd = props.onGameEnd;
  const { socketUser } = props;

  useEffect(() => {
    if (socketUser) {
      socketUser.on('podium', (podium) => {
        onGameEnd(podium);
      });
    }
    setIsClicked(false);
    setIsDisabled('');
    return () => {};
  }, [onGameEnd, socketUser]);

  return props.triviaData ? (
    <>
    <body className="bg-primary absolute">
        <div className="text-center text-white bg-secondary text-uppercase">
            <Countdown socket={socketUser} />
        </div>

        <div className="d-flex align-items-center justify-content-center text-center">
            <Questions triviaData={props.triviaData} />
        </div>

        <div className="divider-custom divider">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
                <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
        </div>   
        <div className="div bg-primary answers d-flex justify-content-between flex-wrap">
            {props.triviaData.options.map((option, index) => (
                <button
                    id={`answer${index}`}
                    key={`index-${index}`}
                    className={`answer-trivia${index}  text-white text-center answer-trivia d-flex flex-wrap w-50 border p-3 ${isDisabled} ${
                        isClicked === option.description ? 'selected' : ''
                    }`}
                    onClick={() => {
                        setIsClicked(option.description);
                        setIsDisabled('clicked');
                        socketUser.emit('answer', option.id);
                        socketUser.emit('show-mini-podium');
                    }}
                >
                {option.description}
                </button>
            ))}
        </div>
        <br />
        <div>
            <StopGame
                socket={socketUser}
                setSocketUser={props.setSocketUser}
                setSocket={props.setSocket}
            />
        </div>
    </body>
    </>
    ) : (
    'Cargando Quiz...'
    );
    };

export default Trivia;
