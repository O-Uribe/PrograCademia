import UseFetch from '../components/UseFetch';
import React, { useState, useEffect } from 'react';
//import '../quiz.css'

function Quiz() {
  const [url] = useState("https://restapi-progracademia.herokuapp.com/api/preguntas");
  const estado = UseFetch(url);
  const { cargando, data } = estado;
  //console.log(data);

  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [tiempoRespuesta, setTiempoRespuesta] = useState(10);
  const [areDisabled, setAreDisabled] = useState(false);
  const [answersShown, setAnswersShown] = useState(false);

  function handleAnswerSubmit(isCorrect, e){
    // añadir puntuacion
    if(isCorrect) setPuntuacion(puntuacion + 1);
    // añadir estilos de pregunta
    e.target.classList.add(isCorrect ? "correct" : "incorrect");
    // cambiar a la siguiente pregunta
    setTimeout(() => {
      if (preguntaActual === data.length - 1) {
        setIsFinished(true);
      } else {
        setPreguntaActual(preguntaActual + 1);
      }
    }, 500);
  }

  useEffect(() => {
    const intervalo = setInterval(() => {
      if(tiempoRespuesta > 0) setTiempoRespuesta((prev) => prev - 1);
      if(tiempoRespuesta === 0) setAreDisabled(true);
    }, 1000);

    return () => clearInterval(intervalo);
  }, [tiempoRespuesta]);

  if (isFinished) return (
    <main className='app'>
      <div className='juego-terminado'>
        <span>
          Obtuviste {puntuacion} de {data.length}
        </span>
        <button onClick={() => (window.location.href = '/host/quiz')}>
          Volver a Jugar
        </button>
        <button onClick={() => {
          setIsFinished(false);
          setAnswersShown(true);
          setPreguntaActual(0);
        }}>
          Ver Respuestas
        </button>
      </div>
    </main>
  )

  if(answersShown) return (
    <main className='app'>
      <div className='lado-izquierdo'>
        <div className='numero-pregunta'>
          <span>Pregunta {preguntaActual + 1} de</span> {data.length}
        </div>
        <div className='titulo-pregunta'>
          {data[preguntaActual].titulo}
        </div>
        <div>
          {data[preguntaActual].opciones.filter(
            (opcion) => opcion.isCorrect
            )[0].textoRespuesta
          }
        </div>
        <button onClick={() => {
          if (preguntaActual === data.length - 1) {
            window.location.href = '/';
          } else {
            setPreguntaActual(preguntaActual + 1);
          }
        }}>
          Continuar
        </button>
      </div>
    </main>
  );

  return (
    <div className="App">
      {
        cargando
        ?
        <p>Cargando...</p>
        :
        <main className='app'>
          <div className='lado-izquierdo'>
            <div className='numero-pregunta'>
              <span>Pregunta {preguntaActual + 1} de</span> {data.length}
            </div>
            <div className='titulo-pregunta'>
              {data[preguntaActual].titulo}
            </div>
            <div>{!areDisabled ? (
              <span className='tiempo-restante'>
                Tiempo restante: {tiempoRespuesta}
              </span>
              ) : (
                <button onClick={() => {
                  setTiempoRespuesta(10);
                  setAreDisabled(false);
                  setPreguntaActual(preguntaActual + 1);
                }}>
                  Continuar
                </button>
              )}
            </div>
          </div>
          <div className='lado-derecho'>
            {data[preguntaActual].opciones.map((respuesta) => (
              <button 
                   disabled={areDisabled}
                   key={respuesta.textoRespuesta} 
                   onClick={(e) => handleAnswerSubmit(respuesta.isCorrect, e)}>
                {respuesta.textoRespuesta}
              </button>
            ))}
          </div>
        </main>
      }
    </div>
  );
}

export default Quiz;
