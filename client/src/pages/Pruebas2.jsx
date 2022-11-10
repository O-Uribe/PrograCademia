import React from 'react'
import UseFetch from '../components/UseFetch'
import { useState } from 'react';





export const Pruebas2 = () => {

    const [url] = useState("https://restapi-progracademia.herokuapp.com/api/preguntas/");
    const estado = UseFetch(url);
    const { cargando, dato } = estado;

  return (
    <div>
        
        
        
       
       {JSON.stringify(dato[1].categoria)}
        
        
        
        
        </div>
  )
}

export default Pruebas2
