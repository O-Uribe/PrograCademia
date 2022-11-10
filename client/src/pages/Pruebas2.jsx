import React from 'react'
import UseFetch from '../components/UseFetch'
import { useState } from 'react';





export const Pruebas2 = () => {

    const [url] = useState("https://restapi-progracademia.herokuapp.com/api/preguntas/");
    const estado = UseFetch(url);
    const { cargando, dato } = estado;

    return (
      <>
        <div>
          {
            cargando
            ?
            <p>...Cargando</p>
            :
            <div>
              <button onClick={()=>{
                dato.map((dato)=>{
                  console.log(dato.categoria)
                })
              }}>hola</button>
            </div>
          }
        </div>
      </>
    )
}

export default Pruebas2


              /*<button onClick={dato.map((dato)=>{
                alert(dato.categoria)
              })}>hola</button>*/
