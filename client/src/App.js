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
import UserHomesr from './pages/UserHomesr';
import UserLobbysr from './pages/UserLobbysr';
import Quiz from './pages/quiz';
import {Start} from './pages/Start.jsx';
import { MainProfe } from "./pages/MainProfe";
import {MainAlumno} from './pages/MainAlumno'
import { Register } from "./pages/Register";
import { RegisterAlu } from "./pages/RegisterAlu";
import { Loginprofe } from "./pages/Loginprofe";
import { Loginestudiante } from "./pages/Loginestudiante";
import Chat from './components/chat';
import Pruebas from './pages/pruebas';
import ShowProfesor from './pages/ShowProfesor';
import { ShowEstudiante } from './pages/ShowAlu';
import { Recursos } from "./pages/recursos";
import Formulario from './pages/formulario';
import Particle from "./components/Particle";
import Cards from "./pages/cards";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Chat2 from "./components/Chat2";
import Profile from "./pages/Profile"
let BASE_URL = "http://localhost:5000";

function App() {
    const [trivia, setTrivia] = useState(null);
    const [socket, setSocket] = useState(null);
    const [socketUser, setSocketUser] = useState(null);
    const [triviaData, setTriviaData] = useState(null);
    const [triviaDataUser, setTriviaDataUser] = useState({ options: [] });
    const [podium,] = useState([]);
    const userpr=localStorage.getItem("loginprofe");
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
                <Route path="/host/lobby" element={
                <HostLobby
                    BASE_URL={BASE_URL}
                    trivia={trivia}
                    setSocket={setSocket}
                    setTriviaData={setTriviaData}
                    socket={socket}/> 
                } />


                <Route exact path="/user" element={<UserHome />} />
                <Route exact path="/usersr" element={<UserHomesr />} />

                <Route exact path="/" element={<Start/>} />

                <Route exact path="/mainprofe" element={<ProtectedRoute user={userpr} children={<MainProfe />} redirectTo="/loginprofe" val={1}/>} />
                <Route exact path="/MainAlumno" element={<ProtectedRoute user={useral} children={<MainAlumno/>} redirectTo="/loginalu" val={1}/>}/>
                <Route exact path="/registrarse" element={<Register/>} />
                <Route exact path="/registrarsealu" element={<RegisterAlu/>} />
                <Route exact path="/loginprofe" element={<ProtectedRoute user={userpr} children={<Loginprofe/>} redirectTo="/mainprofe" val={2}/>} />
                <Route exact path="/loginalu" element={<ProtectedRoute user={useral} children={<Loginestudiante/>} redirectTo="/mainalumno" val={2}/>} />
                <Route exact path="/recursos" element={<Recursos/>} />
                
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
                <Route path="/admin/stats" element={<DashBoard />} />
                <Route path="/admin/mostrar/profesor" element={<ShowProfesor/>} />
                <Route path="/admin/mostrar/alumno" element={<ShowEstudiante/>} />
                </Routes>
            </main>
        </div>
    </Router>
  )
}
export default App
