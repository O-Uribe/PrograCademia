import { useState, useEffect } from 'react'

export const UseFetch = (url) => {
    const [resultado, setResultado] = useState({ cargando: true, dato: null });

    useEffect( ()=>{
        getData(url);
    },[url])

    async function getData(url) {
        try{
            setResultado({cargando: true, data:null});
            const respues = await fetch(url, {mode:'cors'});
            const data = await respues.json();
      
            setResultado({ cargando: false, data });
        }
        catch(e){
            console.log(e);
        }
    }

    return resultado;
}

export default UseFetch;
