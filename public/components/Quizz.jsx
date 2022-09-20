import React from 'react';

import { useState, useEffect } from "react";

import preguntas from "./QuizzApp/actions/preguntas";



const Quizz = () => {

    const [preguntaActual, setPreguntaActual] = useState(0);
    const [puntuación, setPuntuación] = useState(0);
    const [juegoterminado, setjuegoterminado] = useState(false);
    const [tiempoRestante, setTiempoRestante] = useState(10);
    const [desactivar, setdesactivar] = useState(false);
	const [respuestas, setrespuestas] = useState(false);


    function Siguientepregunta(isCorrect, e) {
		// añadir puntuación
		if (isCorrect) setPuntuación(puntuación + 1);
		// cambiar a la siguiente pregunta
		 // añadir estilos de pregunta
		 e.target.classList.add(isCorrect ? "correct" : "incorrect");
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

    


    
	if (juegoterminado)
        return (
			<main className="app">
				<div className="juego-terminado">
					<span>
						{" "} 
						Obtuviste {puntuación} de {preguntas.length}
						{" "}
					</span>
					<div><button onClick={() => (window.location.href = "/quizz")}>{" "} Volver a jugar </button></div>
					<div><button onClick={() => (window.location.href = "/")}>{" "} Inicio </button></div>				
					<div>
						<button onClick={() => {
							setjuegoterminado(false);
							setrespuestas(true);
							setPreguntaActual(0);
							}}>
							Ver respuestas
          				</button>
					</div>
				</div>
			</main>	
			
    );
	if(respuestas)
		return(
		<main className="app">
        <div className="lado-izquierdo">
          <div className="numero-pregunta">
            <span> Pregunta {preguntaActual + 1} de</span> {preguntas.length}
          </div>
          <div className="titulo-pregunta">
            {preguntas[preguntaActual].titulo}
          </div>
          <div>
            {
              preguntas[preguntaActual].opciones.filter(
                (opcion) => opcion.isCorrect
              )[0].textoRespuesta
            }
          </div>
          <button
            onClick={() => {
              if (preguntaActual === preguntas.length - 1) {
                window.location.href = "/quizz";
              } else {
                setPreguntaActual(preguntaActual + 1);
              }
            }}
          >
            {preguntaActual === preguntas.length - 1
              ? "Volver a jugar"
              : "Siguiente"}
          </button>
        </div>
      </main>
	);return (
            <main className="app">
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
            </main>
    );
}



export default Quizz;