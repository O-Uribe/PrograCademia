import React, {useState}from "react";
import {Route, Routes, useNavigate } from 'react-router-dom';


//Importamos omponentes
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import Chat from "./components/chat";

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


//importamos el css
import './styles/index.css'
import './styles/lobby.css'
import './styles/style.css'


let BASE_URL = "http://localhost:5000";


function App() {
    const [trivia, setTrivia] = useState(null);
    const [socket, setSocket] = useState(null);
    const [socketUser, setSocketUser] = useState(null);
    const [triviaData, setTriviaData] = useState(null);
    const [triviaDataUser, setTriviaDataUser] = useState({ options: [] });
    const [podium, setPodium] = useState([]);
    const history = useNavigate();

    const onGameEnd = (result) => {
        setPodium(result);
        history.push('/podium');
      };
    

  return (
    <div className="App">
        <Navbar />
        <Home />
        <Routes>
    	    <Route exact path="/" element={<RecordList />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/create" element={<Create />} />
            <Route path="/Chat" element={<Chat />} />

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

            <Route path="/host/lobby" element={
            <HostLobby
                BASE_URL={BASE_URL}
                trivia={trivia}
                setSocket={setSocket}
                setTriviaData={setTriviaData}
                socket={socket}/> 
            } />


            <Route exact path="/user" element={<UserHome />} />
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
                onGameEnd={onGameEnd}
                triviaData={triviaDataUser}
                setSocketUser={setSocketUser}
                setSocket={setSocket}/>

            } />
            <Route path="/host/trivia" element={
            <Trivia
                socketHost={socket}
                onGameEnd={onGameEnd}
                triviaData={triviaData}
                setSocketUser={setSocketUser}
                setSocket={setSocket}/>
            } />
            <Route path="/admin/stats" element={<DashBoard />} />
        </Routes>
   </div>
  );
}
  
export default App;





