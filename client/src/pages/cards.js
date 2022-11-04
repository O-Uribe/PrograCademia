import React, { useState } from 'react'
import Card from './card';
import UseFetch from '../components/UseFetch';

function Cards() {
    const [url] = useState("https://restapi-progracademia.herokuapp.com/api/preguntas/");
    const estado = UseFetch(url);
    const { cargando, dato } = estado;
    const [search, setSearch] = useState('');

    const results = !search ? dato : dato.filter((data) => data.titulo.toLowerCase().includes(search.toLocaleLowerCase()))

    const searcher = (e) => {
        setSearch(e.target.value);
        console.log(e.target.value);
    }

    return (
        <div>
            {
                cargando
                ?
                <p>...Cargando</p>
                :
                <div>
                    <input value={search} onChange={searcher} type='text' placeholder='Search' className='form-control'></input>
                    <div className='container d-flex justify-content-center align-items-center h-100'>
                        <div className='row'>
                            {
                                results.map(p => (
                                    <div className='col-md-4' key={p._id}>
                                        <Card titulo={p.titulo} categoria={p.categoria}/>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Cards