import React from 'react'
import { useState } from 'react'
import { Cards } from './cards'
import { UseFetch } from '../components/UseFetch'





export const Searchcard = () => {
  //hooks
  const [url, setUrl] = useState("https://restapi-progracademia.herokuapp.com/api/preguntas")
  const estado = UseFetch(url) /*Devuelve el objeto que tiene UseFetch (cargando, data) */
  const { cargando, dato } = estado /*obtener los datos del objeto que entrego UseFetch */
  const [search, setSearch] = useState("")

  //Funcion que nos ayuda a capturar los valores dados por el usuario
  const searcher = (e) => {
    setSearch(e.target.value)
  }
  //Filtramos los datos

  const res = !search ? dato : dato.filter((dato) => dato.titulo().toLowerCase().includes(search.toLocaleLowerCase()))



    return (
      <div>
        <input value={search} onChange={searcher} type="text" placeholder='¡pregunta!' className='form-control'></input>

        {
          cargando
            ?
            <h1>Cargando...</h1>
            :
            <div>
              
                <Cards dato={res} />
              
            </div>
        }

      </div>
    )
  }

  export default Searchcard