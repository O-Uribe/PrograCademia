import './App.css';
import io from 'socket.io-client';
import preguntas from "./prueba/preguntas.js"
import { useState, useEffect } from "react";

const socket = io('http://localhost:4000');



function App() {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuación, setPuntuación] = useState(0);
  const [juegoterminado, setjuegoterminado] = useState(false);
  const [tiempoRestante, setTiempoRestante] = useState(10);
  const [desactivar, setdesactivar] = useState(false);

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([{
    body : 'Bienvenido al chat',
    from: 'Usuario 1'   
  }]);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit('message', message);
    const newMessage = {
      body: message,
      from: 'Yo'
    };
    setMessage([...messages, newMessage]);
    setMessage('');
  };


  function Siguientepregunta(isCorrect, e) {
    // añadir puntuación
    if (isCorrect) setPuntuación(puntuación + 1);
    // cambiar a la siguiente pregunta
    setTimeout(() => {
      if (preguntaActual === preguntas.length - 1) {
        setjuegoterminado(true);
      } else {
        setPreguntaActual(preguntaActual + 1);
        setTiempoRestante(10);
      }
    }, 1000);
  }

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (tiempoRestante > 0) setTiempoRestante((prev) => prev - 1);
      if (tiempoRestante === 0) setdesactivar(true);
    }, 1000);
  return () => clearInterval(intervalo);
  }, [tiempoRestante]);

  
  useEffect(() => {
    const receiveMessage = (message) => {
      setMessages([...messages, message]);   
    };

    socket.on('message', receiveMessage);

    return () => {
      socket.off('message', receiveMessage);       
  };}, []);




  if (juegoterminado)
    return (
      <main className="app">
        <div className="juego-terminado">
          <span>
            {" "}
            Obtuviste {puntuación} de {preguntas.length}{" "}
          </span>
          <button onClick={() => (window.location.href = "/")}>
            {" "}
            Volver a jugar
          </button>
        </div>
      </main>
    );


  return (
    <main className="app">
    <div className="lado-izquierdo">
      <div className="numero-pregunta">
        <span> Pregunta {preguntaActual + 1} de</span> {preguntas.length}
      </div>
      <div className="titulo-pregunta">
        {preguntas[preguntaActual].titulo}
      </div>
      <div>
        {!desactivar ? (
          <span className="tiempo-restante">
            Tiempo restante: {tiempoRestante}{" "}
          </span>
        ) : (
          <button
            onClick={() => {
              setTiempoRestante(10);
              setdesactivar(false);
              if (preguntaActual === preguntas.length - 1) {
                setjuegoterminado(true);
              } else {
                setPreguntaActual(preguntaActual + 1);
              }
            }}
          >
            Continuar
          </button>
        )}
      </div>
    </div>
    <div className="lado-derecho">
      {preguntas[preguntaActual].opciones.map((respuesta) => (
        <button
          disabled={desactivar}
          key={respuesta.textoRespuesta}
          onClick={(e) => Siguientepregunta(respuesta.isCorrect, e)}
        >
          {respuesta.textoRespuesta}
        </button>
      ))}
    </div>


    <div className="Chat">
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={e=>setMessage(e.target.value)} value={message}/>
          <button>Enviar</button>
        </form>
        {messages.map((message, index) => (
          <div key={index}>
            <p>{message.from} : {message.body}</p>
          </div>
        ))}
    </div>
  </main>
  );
}

export default App;
