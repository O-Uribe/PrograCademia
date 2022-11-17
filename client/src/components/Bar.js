import React, {useEffect, useState} from "react";
import Chart from "react-apexcharts";


let nuevosJugadores = [];
function Bar({ jugadores }) {

    
    console.log("Largo arreglo jugadores", nuevosJugadores.length);


    if(nuevosJugadores.length === 0){
        nuevosJugadores.push({
            name: jugadores.playername,
            points: jugadores.points,
            color: generaColor()
        });
    }
    else 
    {
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
                puntos: jugadores.points,
            });
        }
    }

    if(nuevosJugadores[0].nombre === undefined){
        nuevosJugadores[0].nombre = " ";
        nuevosJugadores[0].puntos = 0;
    }

    function generaColor(){
        return "#"+((1<<24)*Math.random()|0).toString(16);
    }

    console.log("Nuevos jugadores", nuevosJugadores);

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
                        
                        {(() => {
                            if (nuevosJugadores.length === 0) {
                                return (
                                    <div className="flex flex-col items-center text-2xl font-bold">
                                        <h3>No hay jugadores</h3>
                                    </div>
                                );
                            } else {
                                return (
                                    <Chart
                                    type="bar"
                                    width="500"
                                    height="350"
                                    series={[
                                        {
                                        name: "Puntos",
                                        data: nuevosJugadores.slice(1).map((jugador) => jugador.puntos),
                                        },
                                    ]}
                                    options={{
                                        title: {
                                        text: "PrograRace",
                                        align: "center",
                                        margin: 20,
                                        offsetY: 20,
                                        style: {
                                            fontSize: "25px",
                                        },
                                        },
                                        chart: {
                                        background: "#272936",
                                        },

                                        subtitle: {
                                        text: "Progracademia",
                                        },

                                        colors: ["#F87171"],
                                        theme: { mode: "dark" },

                                        xaxis: {
                                        tickPlacement: "off",
                                        categories: nuevosJugadores.slice(1).map((jugador) => jugador.nombre),
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
                                />);
                            }
                        })()}

                            

                        </div>
                    </div>
                </div>
            </div>
        </div>  
      </div>

  );
}

export default Bar;


