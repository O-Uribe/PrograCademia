import React from "react";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react"
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import Chat from "./components/chat";
import OffLine from "./components/offline";
import Player from "./components/player";
import Game from "./components/game";
import Host from "./components/host";
import HostGame from "./components/hostGame";
import QuizCreator from "./components/quizCreator";
import LobbyCreator from "./components/lobbyCreator";
import Quiz from "./components/quiz";
import './css/index.css'
import './css/lobby.css'
import './css/style.css'



function App() {
  return (
  
    <div>
      <Navbar />
      <Routes>
    	  <Route exact path="/" element={<RecordList />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/OffLine" element={<OffLine />} /> 
        <Route path="/player" element={<Player />} />
        <Route path="/game" element={<Game />} />
        <Route path="/host" element={<Host />} />
        <Route path="/hostGame" element={<HostGame />} /> 
        <Route path="/quizcreator" element={<QuizCreator />} />
        <Route path="/lobbycreator" element={<LobbyCreator />} />
        <Route path="/quiz" element={<Quiz/>}/>
		  </Routes>
   </div>
  );
}
  
export default App;





