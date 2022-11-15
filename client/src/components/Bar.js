import React from "react";


let nuevosJugadores = [];
function Bar({ jugadores }) {


    if(nuevosJugadores.length === 0){
        nuevosJugadores.push({
            nombre: jugadores.playername,
            puntos: jugadores.points
        });
    }else{
        let existe = false;
        for (let i = 0; i < nuevosJugadores.length; i++) {
            if(nuevosJugadores[i].nombre === jugadores.playername){
                nuevosJugadores[i].puntos = jugadores.points;
                existe = true;
            }
        }
        if(!existe){
            nuevosJugadores.push({
                nombre: jugadores.playername,
                puntos: jugadores.points
            });
        }
    }


    return (
      <div className="pl-6 flex items-center">
        {nuevosJugadores.map((jugador) => (
            <div key={jugador.puntos + Math.random()}>
                <p className="text-white text-m text-left font-auto">{jugador.nombre}</p>
                <p className="text-white text-m text-left font-auto">{jugador.puntos}</p>
            </div>
        ))}
      </div>
  );
}

export default Bar;
