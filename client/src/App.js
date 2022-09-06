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
	const [messages, setMessages] = useState([]);

  
  	const handleSubmit = (e) => {
    	e.preventDefault();
    	socket.emit('message', message);
		
		const newMessage = {
      		body: message,
      		from: 'Yo'
    	};
   		setMessages([ newMessage, ...messages ]);
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
      		setMessages([message, ...messages]);   
    	};
    	socket.on('message', receiveMessage);
    	return () => {
      		socket.off('message', receiveMessage);       
  		};
	}, [messages]);


	if (juegoterminado)
		return (
      	<main className="app">
        	<div className="juego-terminado">
				<div className='h-screen bg-zinc-800 text-white flex items-center'>
					<span>
						{" "} 
						Obtuviste {puntuación} de {preguntas.length}
						{" "}
					</span>
					<button onClick={() => (window.location.href = "/")}>{" "} Volver a jugar </button>				
				</div>
        	</div>
      </main>
    );


	return (
		<main className="app">
			<div className="">
				<div className="lado-izquierdo">
					<div className="numero-pregunta">
						<span> Pregunta {preguntaActual + 1} de </span> {preguntas.length}
					</div>
					<div className="titulo-pregunta">
						{preguntas[preguntaActual].titulo}
					</div>
					<div>
						{!desactivar ? (
							<span className="tiempo-restante">
								Tiempo restante: {tiempoRestante}
								{" "}
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
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
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
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
					>
					{respuesta.textoRespuesta}
					</button>
					))}
				</div>				
			</div>


					<div className="h-screen bg-zinc-800 text-white flex items-center justify-center">
						<form onSubmit={handleSubmit} className="bg-zinc-900 p-10">
							<h3 className='text-xl font-bold my-2'> Chat con websockets</h3>
							<input 
								type="text" 
								onChange={e=>setMessage(e.target.value)} 
								value={message}
								className="border-2 border-zinc-500 p-2 text-black"	
							/>
							<ul className='h-80 overflow-y-auto'>
								{messages.map((message, index) => (
									<li key={index} className={ `my-2 p-2 table text-sm rounded-md ${message.from === "Yo" ? "bg-sky-700 ml-auto": "bg-black"}`}>
										<p>{message.from}: {message.body}</p>
									</li>
								))}	
							</ul>	
						</form>
					</div>
		</main>
);}

export default App;
