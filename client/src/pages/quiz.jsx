import UseFetch from '../components/UseFetch';
import React, { useState, useEffect } from 'react';
import videoBg from '../assets/fondo.mp4'
function Quiz() {
  const [url] = useState("https://restapi-progracademia.herokuapp.com/api/preguntas");
  const estado = UseFetch(url);
  const { cargando, data } = estado;
  //console.log(data);

  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [tiempoRespuesta, setTiempoRespuesta] = useState(15);
  const [areDisabled, setAreDisabled] = useState(false);
  const [answersShown, setAnswersShown] = useState(false);

  function handleAnswerSubmit(isCorrect, e){
    // añadir puntuacion
    if(isCorrect) setPuntuacion(puntuacion + 1);
    // añadir estilos de pregunta
    e.target.classList.add(isCorrect 
      ? "correct" 
      : "incorrect"
      );
    // cambiar a la siguiente pregunta
    setTimeout(() => {
      if (preguntaActual === data.length - 1) {
        setIsFinished(true);
        setTiempoRespuesta(15);
      } else {
        setPreguntaActual(preguntaActual + 1);
        setTiempoRespuesta(15);
      }
    }, 1000);
  }

  useEffect(() => {
    const intervalo = setInterval(() => {
      if(tiempoRespuesta > 0) setTiempoRespuesta((prev) => prev - 1);
      if(tiempoRespuesta === 0) setAreDisabled(true);
    }, 1000);

    return () => clearInterval(intervalo);
  }, [tiempoRespuesta]);

  if (isFinished) return (
    <>
    <video src={videoBg} autoPlay loop muted className="h-screen object-cover w-full" />
    <div className='flex flex-col items-center justify-center h-full absolute top-0 text-white w-full'>
    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <main className='app'>
        <div className="bg-no-repeat  justify-center mb-6 col-lg-3 col-md-3 rounded  m-1 py-2">
          <h2>
            Obtuviste {puntuacion} de {data.length}
          </h2>
          <br/>
          <button onClick={() => (window.location.href = '/host/quiz')} className='btnter'>
            Volver a Jugar
          </button>
          <button onClick={() => {
            setIsFinished(false);
            setAnswersShown(true);
            setPreguntaActual(0);
          }}
          className='btnter '
          >
            Ver Respuestas
          </button>
        </div>
      </main>
    </div>
    </div>
    </>
  )

  if(answersShown) return (
    <>
    <video src={videoBg} autoPlay loop muted className="h-screen object-cover w-full" />
      <div className='flex flex-col items-center justify-center h-full absolute top-0 text-white w-full'>
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <main className='app'>
        <div className="flex flex-col justify-around relative w-full">
          <div className="mb-5">
            <span>Pregunta {preguntaActual + 1} de</span> {data.length}
          </div>
          <div className="mb-3">
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
              window.location.href = '/mainprofe';
            } else {
              setPreguntaActual(preguntaActual + 1);
            }
          }}
          className='btnquiz'
          >
            Continuar
          </button>
        </div>
      </main>
    </div>
    </div>
    </>
  );

  return (
    <>
    <video src={videoBg} autoPlay loop muted className="h-fit object-cover w-full" />
                <div className='flex flex-col items-center justify-center h-full absolute top-0 text-white w-full'>
    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <div className="App">
        {
          cargando
          ?
          <p>Cargando...</p>
          :
          <main className='app'>
            <div className="flex flex-col justify-around relative w-full">
              <div className="mb-5">
                <span>Pregunta {preguntaActual + 1} de</span> {data.length}
              </div>
              <div className="mb-3">
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
                  }}
                  className='btnquiz'
                  >
                    Continuar
                  </button>
                )}
              </div>
            </div>
            <div className="flex flex-col justify-between w-full">
              {data[preguntaActual].opciones.map((respuesta) => (
                <button
                    className='btnquiz' 
                    disabled={areDisabled}
                    key={respuesta.textoRespuesta} 
                    onClick={(e) => handleAnswerSubmit(respuesta.isCorrect, e)}
                    >
                  {respuesta.textoRespuesta}
                  
                </button>
              ))}
            </div>
          </main>
        }
      </div>
    </div>
    </div>
    </>
  );
}

export default Quiz;
