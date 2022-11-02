import { useState, useEffect } from 'react'

export const UseFetch = (url) => {
    const [resultado, setResultado] = useState({ cargando: true, dato: null });

    useEffect( ()=>{
        getData(url);
    },[url])

    async function getData(url) {
        try{
            setResultado({cargando: true, dato:null});
            const respues = await fetch(url, {mode:'cors'});
            const dato = await respues.json();
            setResultado({ cargando: false, dato });
        }
        catch(e){
            console.log(e);
        }
    }

    return resultado;
}

export default UseFetch;
