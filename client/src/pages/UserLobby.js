import React, { useEffect } from 'react';
import socketIO from 'socket.io-client';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbaral from '../components/Navbaralumno';

const UserLobby = (props) => {
    const history = useNavigate();
    const data = useLocation();
    const [playerNameState, pinState] = data.state;

    const playerName = playerNameState.playerName;
    const pin = pinState.pin;
    const { setSocketUser, socketUser, BASE_URL } = props;

    console.log("esta es la data", data);

    useEffect(() => {
        if (!socketUser) {
        let newSocketUser;

        if (BASE_URL === 'http://localhost:5000') {
            newSocketUser = socketIO(`/${pin}`, {
            query: `playerName=${playerName}`,
            });
        } else {
            newSocketUser = socketIO(`${BASE_URL}/${pin}`, {
            query: `playerName=${playerName}`,
            });
        }

        setSocketUser(newSocketUser);
        }

        if (socketUser) {
        socketUser.on('question', (data) => {
            props.setTriviaDataUser(data);
            history.push('/user/trivia');
        });
        }
    }, [history, props, setSocketUser, pin, socketUser, BASE_URL, playerName]);
    return (
        <><Navbaral /><main>
            <div>
                <div>
                    <h2>
                        El PIN de la sala es {pin}
                    </h2>
                    <h3>
                        Tu usuario es {playerName}
                    </h3>
                </div>
                <br />
                <div>
                    <div style={{ width: '18rem' }}>
                        <h2>Bienvenido a Progracademia!</h2>
                        <div>
                            Espere a que su profesor inicie el Quiz
                        </div>
                        <div>
                            El juego comenzará cuando el profesor lo decida,
                            espera pacientemente porfavor!
                        </div>
                    </div>
                </div>
            </div>
        </main></>
    );
};

export default UserLobby;
