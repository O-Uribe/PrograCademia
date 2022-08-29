import React, { useState, useEffect, useRef } from "react";
import socket from "./socket";

const Chat = ({ nombre }) => {
    const [mensaje, setMensaje] = useState("");
    const [mensajes, setMensajes] = useState([]);

    useEffect(() => {
       socket.emit('conectado', nombre) 
    }, [nombre]);
    

    useEffect(() => {
        socket.on('mensajes', mensaje => {
            setMensajes([...mensajes, mensaje]);
    })
        return () => {socket.off()}
    }, [mensajes])

    const submit = (e) => {
        e.preventDefault();
        socket.emit("mensaje", nombre, mensaje);
    }

    return (

        <div onSubmit={submit}>
            <div>
                {mensajes.map((e, i) => <div key={i}>{e.nombre}</div>)}
            </div>
            <form>
                <label htmlFor="">Escriba su mensaje</label>
                <textarea name="" id="" cols="30" rows="10" value={mensaje} onChange={e => setMensaje(e.target.value)}> 

                </textarea>
                <button>Enviar</button>
            </form>
        </div>

    )

}
export default Chat;