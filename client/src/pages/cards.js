import React, { useState } from 'react'
import Card from './card';
import UseFetch from '../components/UseFetch';

function Cards() {
    const [url] = useState("https://restapi-progracademia.herokuapp.com/api/preguntas/");
    const estado = UseFetch(url);
    const { cargando, dato } = estado;

    return (
        <div>
            {
                cargando
                ?
                <p>...Cargando</p>
                :
                <div className='container d-flex justify-content-center align-items-center h-100'>
                    <div className='row'>
                        {
                            dato.map(p => (
                                <div className='col-md-4' key={p._id}>
                                    <Card titulo={p.titulo} categoria={p.categoria}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            }
        </div>
    );
}

export default Cards