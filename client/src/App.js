import React, {useState}from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
//import {useNavigate } from 'react-router-dom';

//Importamos paginas
import DashBoard from './pages/DashBoard';
import Home from './pages/Home';
import HostChooseTrivia from './pages/HostChooseTrivia';
import HostLobby from './pages/HostLobby';
import Podium from './pages/Podium';
import Trivia from './pages/Trivia';
import TriviaUser from './pages/TriviaUser';
import UserHome from './pages/UserHome';
import UserLobby from './pages/UserLobby';
import Quiz from './pages/quiz';
import {Start} from './pages/Start.jsx';
import { MainProfe } from "./pages/MainProfe";
import {MainAlumno} from './pages/MainAlumno'
import { Register } from "./pages/Register";
import { Loginprofe } from "./pages/Loginprofe";
import { Loginestudiante } from "./pages/Loginestudiante";


let BASE_URL = "http://localhost:5000";

function App() {
    const [trivia, setTrivia] = useState(null);
    const [socket, setSocket] = useState(null);
    const [socketUser, setSocketUser] = useState(null);
    const [triviaData, setTriviaData] = useState(null);
    const [triviaDataUser, setTriviaDataUser] = useState({ options: [] });
    const [podium,] = useState([]);
    //const [podium, setPodium] = useState([]);
    /*
    const Navigate = useNavigate();

    const onGameEnd = (result) => {
        setPodium(result);
        Navigate.push('/podium');
      };
    */  
  return (
    <Router>
        <div className='flex flex-col h-screen'>
            <main className='flex flex-col h-screen'>
                <Routes>
                    <Route path='/home' element={<Home />} />
                    <Route path="/podium" element={
                <Podium
                    socket={socket}
                    socketUser={socketUser}
                    setSocketUser={setSocketUser}
                    setSocket={setSocket}
                    ranking={podium} />
                } />
                
                <Route path="/host/chooseTrivia" element={
                    <HostChooseTrivia onClickTriviaButton={(selectedTrivia) => setTrivia(selectedTrivia)} />
                } />

                <Route path="/host/quiz" element={
                    <Quiz/>
                } />

                <Route path="/host/lobby" element={
                <HostLobby
                    BASE_URL={BASE_URL}
                    trivia={trivia}
                    setSocket={setSocket}
                    setTriviaData={setTriviaData}
                    socket={socket}/> 
                } />


                <Route exact path="/user" element={<UserHome />} />

                <Route exact path="/" element={<Start/>} />

                <Route exact path="/mainprofe" element={<MainProfe/>} />
                <Route exact path="/MainAlumno" element={<MainAlumno/>}/>
                <Route exact path="/registrarse" element={<Register/>} />
                <Route exact path="/loginprofe" element={<Loginprofe/>} />
                <Route exact path="/loginalu" element={<Loginestudiante/>} />

                
                <Route path="/user/lobby" element={
                <UserLobby
                    BASE_URL={BASE_URL}
                    setSocketUser={setSocketUser}
                    socketUser={socketUser}
                    setTriviaDataUser={setTriviaDataUser}/>
                } />


                <Route path="/user/trivia" element={
                <TriviaUser
                    socket={socketUser}
                    socketUser={socketUser}
                    //onGameEnd={onGameEnd}
                    triviaData={triviaDataUser}
                    setSocketUser={setSocketUser}
                    setSocket={setSocket}/>

                } />
                <Route path="/host/trivia" element={
                <Trivia
                    socketHost={socket}
                    //onGameEnd={onGameEnd}
                    triviaData={triviaData}
                    setSocketUser={setSocketUser}
                    setSocket={setSocket}/>
                } />
                <Route path="/admin/stats" element={<DashBoard />} />
                </Routes>
            </main>
        </div>
    </Router>
  )
}
export default App
