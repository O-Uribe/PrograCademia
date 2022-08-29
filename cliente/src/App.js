import React, { useState } from 'react';
import socket from './componentes/socket';
import './App.css';
import Chat from './componentes/chat';




function App() {
  
  const [nombre, setNombre] = useState('');
  const [registrado, setRegistrado] = useState(false);

  const registrar = (e) => {
    e.preventDefault();
    if(nombre !== ''){
      setRegistrado(true);
    }
  
  }  

    return (
    <div className="App">
      {
        !registrado &&
        <form onSubmit={registrar}>
          <label htmlFor=''>Introduzca su nombre</label>
          <input type='text' value={nombre} onChange={e => setNombre(e.target.value)} />
          <button>Entrar al chat</button>
        </form>
      }

      {
        registrado && 
        <Chat nombre={nombre}/>
      }
    </div>
    )
}


export default App;
