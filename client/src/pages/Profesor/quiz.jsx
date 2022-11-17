import UseFetch from '../../components/UseFetch';
import React, { useState, useEffect } from 'react';
function Quiz() {
  const [url] = useState("https://restapi-progracademia.herokuapp.com/api/preguntas");
  const estado = UseFetch(url);
  const { cargando, dato } = estado;
  //console.log(data);

  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [tiempoRespuesta, setTiempoRespuesta] = useState(15);
  const [areDisabled, setAreDisabled] = useState(false);
  const [answersShown, setAnswersShown] = useState(false);


  
  function handleAnswerSubmit(isCorrect, e,rp){
    if(isCorrect) {
      e.target.classList.add("correct");
      e.target.classList.remove("btnquiz");
      setPuntuacion(puntuacion + 1)
      setAreDisabled(true)
    }else{
      e.target.classList.add("incorrect");
      e.target.classList.remove("btnquiz");
      setAreDisabled(true)
    }

    setTimeout(() => {
      if (preguntaActual === dato.length - 1) {
        setIsFinished(true);
        setTiempoRespuesta(15);
      } else {
        setPreguntaActual(preguntaActual + 1);
        setTiempoRespuesta(15);
        e.target.classList.remove("incorrect");
        e.target.classList.remove("correct");
        e.target.classList.add("btnquiz");
        setAreDisabled(false)
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
    <div className='flex flex-col items-center justify-center h-full absolute top-0 text-white w-full'>
      <main className='app'>
        <div className="bg-no-repeat  justify-center mb-6 col-lg-3 col-md-3 rounded  m-1 py-2">
          <h2>
            Obtuviste {puntuacion} de {dato.length}
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
    </>
  )

  if(answersShown) return (
    <>
      <div className='flex flex-col items-center justify-center h-full absolute top-0 text-white w-full'>
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <main className='app'>
        <div className="flex flex-col justify-around relative w-full">
          <div className="mb-5">
            <span>Pregunta {preguntaActual + 1} de</span> {dato.length}
          </div>
          <div className="mb-3">
            {dato[preguntaActual].titulo}
          </div>
          <div>
            {dato[preguntaActual].opciones.filter(
              (opcion) => opcion.isCorrect
              )[0].textoRespuesta
            }
          </div>
          <button onClick={() => {
            if (preguntaActual === dato.length - 1) {
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
    <div className='relative w-fit h-fit max-h max-w-5xl dark:bg-gray-800 rounded-2xl'>
        {
          cargando
          ?
          <p>Cargando...</p>
          :
          <main className=''>
            <div className="flex flex-col  inset-x-0 top-0">
              <div className="mb-3 text-center ">
                {dato[preguntaActual].titulo}
              </div>
              <br></br>
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
            <br></br>
            <div className='inset-x-0 bottom-0'>
            <div className="grid grid-cols-2">
              {dato[preguntaActual].opciones.map((respuesta) => (
                <button
                    className='btnquiz'
                    disabled={areDisabled}
                    key={respuesta.textoRespuesta} 
                    onClick={(e) => handleAnswerSubmit(respuesta.isCorrect,e,respuesta)}
                    >
                  {respuesta.textoRespuesta}
                  
                </button>
              ))}
            </div>
            <div className='text-center'>
              <br></br>
            <div>
                <span>Pregunta {preguntaActual + 1} de</span> {dato.length}
              </div>
            </div>
            </div>
          </main>
        }
    </div>
    </>
  );
}

export default Quiz;
