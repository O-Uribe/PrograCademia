import React, {useState}from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
//import {useNavigate } from 'react-router-dom';

//Importamos paginas
import MainAdmin from './pages/Admin/mainAdmin';
import Home from './pages/General/Home';
import HostChooseTrivia from './pages/Profesor/HostChooseTrivia';
import HostLobby from './pages/Profesor/HostLobby';
import Podium from './pages/General/Podium';
import Trivia from './pages/Profesor/Trivia';
import TriviaUser from './pages/Estudiante/TriviaUser';
import UserHome from './pages/Estudiante/Logeado/UserHome';
import UserLobby from './pages/Estudiante/Logeado/UserLobby';
import UserHomesr from './pages/Estudiante/NoLogeado/UserHomesr';
import UserLobbysr from './pages/Estudiante/NoLogeado/UserLobbysr';
import Quiz from './pages/Profesor/quiz';
import {Start} from './pages/General/Start.jsx';
import { MainProfe } from "./pages/Profesor/MainProfe";
import {MainAlumno} from './pages/Estudiante/Logeado/MainAlumno'
import { Register } from "./pages/Profesor/Register";
import { RegisterAlu } from "./pages/Estudiante/Logeado/RegisterAlu";
import { Loginprofe } from "./pages/Profesor/Loginprofe";
import { Loginestudiante } from "./pages/Estudiante/Logeado/Loginestudiante";
import Chat from './components/chat';
import Pruebas from './pages/pruebas';
import ShowProfesor from './pages/Admin/ShowProfesor';
import { ShowEstudiante } from './pages/Admin/ShowAlu';
import { Recursos } from "./pages/Estudiante/Logeado/recursos";
import Formulario from './pages/Profesor/formulario';
import Particle from "./components/Particle";
import Cards from "./pages/Profesor/cards";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Chat2 from "./components/Chat2";
import Profile from "./pages/Estudiante/Logeado/Profile";
import Game from "./pages/Estudiante/Game";
import Race from "./pages/Profesor/race";
import Profile2 from './pages/Profesor/Profile2'
import Pruebas2 from "./pages/Pruebas2"
import Quienessomos from "./pages/General/Quienessomos"
let BASE_URL = "http://localhost:5000";

function App() {
    const [trivia, setTrivia] = useState(null);
    const [socket, setSocket] = useState(null);
    const [socketUser, setSocketUser] = useState(null);
    const [triviaData, setTriviaData] = useState(null);
    const [triviaDataUser, setTriviaDataUser] = useState({ options: [] });
    const [podium,] = useState([]);


    const userpr=localStorage.getItem("loginpro");
    const useral=localStorage.getItem("loginalum");
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
        <div className='flex'>
        <Particle/>
            <main className='flex flex-col absolute text-white items-center justify-center w-screen h-screen'>
                <Routes>
                    <Route path="/chat2/:user_nickName" element={<Chat2/>}/>
                    <Route path='/home' element={<Home />} />
                    <Route path="/podium" element={
                <Podium
                    socket={socket}
                    socketUser={socketUser}
                    setSocketUser={setSocketUser}
                    setSocket={setSocket}
                    ranking={podium} />
                } />
                
                <Route exact path ="/Chat" element={<Chat/>}/>
                <Route path="/host/chooseTrivia" element={
                    <HostChooseTrivia onClickTriviaButton={(selectedTrivia) => setTrivia(selectedTrivia)} />
                } />

                <Route path="/host/quiz" element={
                    <Quiz/>
                } />

                <Route path="/host/formulario" element={
                    <Formulario/>
                } />

                <Route path="/host/preguntas" element={
                    <Cards/>
                } />

                <Route path="/pruebas" element={<Pruebas/>} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/profile2" element={<Profile2/>} />
                <Route path="/pruebas2" element={<Pruebas2/>} />
                <Route path="/host/lobby" element={
                <HostLobby
                    BASE_URL={BASE_URL}
                    trivia={trivia}
                    setSocket={setSocket}
                    setTriviaData={setTriviaData}
                    socket={socket}/> 
                } />

                <Route path="/race" element={<Race/>} />


                <Route exact path="/user" element={<UserHome />} />
                <Route exact path="/usersr" element={<UserHomesr />} />

                <Route path ="/game" element={<Game/>}/>


                <Route exact path="/" element={<Start/>} />

                <Route exact path="/mainprofe" element={<ProtectedRoute user={userpr} children={<MainProfe />} redirectTo="/loginprofe" val={1}/>} />
                <Route exact path="/MainAlumno" element={<ProtectedRoute user={useral} children={<MainAlumno/>} redirectTo="/loginalu" val={1}/>}/>
                <Route exact path="/registrarse" element={<Register/>} />
                <Route exact path="/registrarsealu" element={<RegisterAlu/>} />
                <Route exact path="/loginprofe" element={<ProtectedRoute user={userpr} children={<Loginprofe/>} redirectTo="/mainprofe" val={2}/>} />
                <Route exact path="/loginalu" element={<ProtectedRoute user={useral} children={<Loginestudiante/>} redirectTo="/mainalumno" val={2}/>} />
                <Route exact path="/recursos" element={<Recursos/>} />
                <Route exact path="/about" element={<Quienessomos/>} />
                
                <Route path="/user/lobby" element={
                <UserLobby
                    BASE_URL={BASE_URL}
                    setSocketUser={setSocketUser}
                    socketUser={socketUser}
                    setTriviaDataUser={setTriviaDataUser}/>
                } />
                <Route path="/user/lobbysr" element={
                <UserLobbysr
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
                <Route path="/admin" element={<MainAdmin/>} />
                <Route path="/admin/mostrar/profesor" element={<ShowProfesor/>} />
                <Route path="/admin/mostrar/alumno" element={<ShowEstudiante/>} />
                </Routes>
            </main>
        </div>
    </Router>
  )
}
export default App
