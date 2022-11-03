import React, { useEffect } from 'react';
import io from 'socket.io-client';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
const socket = io("http://localhost:5000");
const UserLobbysr = (props) => {
    const data = useLocation();
    const [playerNameState, pinState] = data.state;

    const playerName = playerNameState.playerName;
    const pin = pinState.pin;
    const { setSocketUser, socketUser, BASE_URL } = props;
    const navigate = useNavigate();
    const handleOnClick = () => navigate(`/chat2/${playerName}`);
    useEffect(() => {
        if (!socketUser) {
            let newSocketUser;
            if (BASE_URL === 'http://localhost:5000') {
                newSocketUser = io(`/${pin}`, {
                    query: `playerName=${playerName}`,
                });
            } else {
                newSocketUser = io(`${BASE_URL}/${pin}`, {
                    query: `playerName=${playerName}`,
                });
            }
            setSocketUser(newSocketUser);
        }

        if (socketUser) {               
            socketUser.on('question', (data) => {
                props.setTriviaDataUser(data);
                navigate('/user/trivia');
            });        
        }
        localStorage.setItem("chatConnected", "true");
    }, [navigate, props, setSocketUser, pin, socketUser, BASE_URL, playerName]);
    const submitNickname = () => {
        socket.emit("user nickname", playerName);
      };
    return (
        <>
        
        <div className='flex flex-col items-center justify-center h-full absolute top-0 text-white w-full'>
        <Link className="text-center btn-ghost normal-case text-xl w-full bg-base-200" to="/">
            Progracademia!
        </Link>
        <div className="mx-auto flex-1 flex flex-col items-center justify-center px-2 lg:flex-row ">
                <div className="card shadow-xl image-full">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p></p>
                        <div className="card-actions justify-center">
                            <button 
                                className="btn btn-primary text-white"
                                onClick={()=>{
                                    handleOnClick();
                                    submitNickname();
                                }}
                            >chat</button>
                        </div>
                    </div>
                </div>
            <div className="lg:divider-horizontal"></div>
            <div className="card shadow-xl image-full">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p> 
                            El PIN de la sala es {pin}
                            <br/>
                            Tu usuario es {playerName}
                        </p>
                        <div className="card-actions justify-center">
                        <Link>
                            <h3>
                            El juego comenzara pronto
                            </h3>
                        </Link>
                        </div>
                    </div>
                </div>
        </div>
            <div className="w-full absolute inset-x-0 bottom-0"><Footer/></div>
            </div>
            </>
    );
};

export default UserLobbysr;
