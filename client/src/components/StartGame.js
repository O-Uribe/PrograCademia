import React from 'react';
import { Link } from 'react-router-dom';

const StartGame = (props) => {
  return (
    <Link to="/Trivia">
      <button className="startGame" onClick={() => props.socket.emit('new game')}>
        Iniciar Quiz
      </button>
    </Link>
  );
};

export default StartGame;
