import React, {useEffect, useState} from "react";
import Chart from "react-apexcharts";


let nuevosJugadores = [];
function Bar({ jugadores }) {
    if(nuevosJugadores.length === 0){
        nuevosJugadores.push({
            nombre: jugadores.playername,
            puntos: jugadores.points,
            color: "#FF0000"
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

    function generaColor(){
        return "#"+((1<<24)*Math.random()|0).toString(16);
    }
    


    return (

      <div className="pl-5 pr-5 pb-5">
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-body">
                        <div className="flex items-center justify-center">

                            {/* {nuevosJugadores.map((jugador) => (
                                <div key={jugador.puntos}>
                                    <p className="text-white text-m text-left font-auto">{jugador.nombre}</p>
                                    <p className="text-white text-m text-left font-auto">{jugador.puntos}</p>
                                </div>
                            ))} */}
                
                            <Chart
                            type="bar"
                            width="500"
                            height="350"
                            series={[
                                {
                                name: "Puntos",
                                data: nuevosJugadores.map((jugador) => jugador.puntos),
                                },
                            ]}
                            options={{
                                title: {
                                text: "",
                                },

                                subtitle: {
                                text: "",
                                },

                                colors: ["#F87171"],
                                theme: { mode: "dark" },

                                xaxis: {
                                tickPlacement: "on",
                                categories: nuevosJugadores.map((jugador) => jugador.nombre),
                                },

                                yaxis: {
                                    labels: {
                                        formatter: (val) => {
                                        return `${val}`;
                                        },
                                        style: { fontSize: "20", colors: ["#ffffff"] },
                                    },
                                        title: {
                                        text: "Puntuación",
                                        style: { color: "#ffffff", fontSize: "20", fontWeight: "bold" },
                                    },
                                },

                                legend: {
                                show: true,
                                position: "right",
                                },

                                dataLabels: {
                                    formatter: (val) => {
                                        return `${val}`;
                                    },
                                    style: {
                                        colors: ["#ffffff"],
                                        fontSize: 15,
                                    },
                                },
                            }}
                            ></Chart>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
      </div>
  );
}

export default Bar;
