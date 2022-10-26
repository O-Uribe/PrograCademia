/*
  Inputs para register de profesor

  nombre
  apellido
  rut
  email
  password

*/
import React from "react";

export const ShowProfesor = () => {

    //Mostrar Todos los profesores de la Base de Datos
    const [profesores, setProfesores] = React.useState([]);

    React.useEffect(() => {
        fetch("http://localhost:5000/profesor")
            .then((response) => response.json())
            .then((data) => setProfesores(data));
    }, []);


    return (
        <div>
            <h1>Profesores</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Rut</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {profesores.map((profesor) => (
                        <tr key={profesor._id}>
                            <td>{profesor.nombre}</td>
                            <td>{profesor.apellido}</td>
                            <td>{profesor.rut}</td>
                            <td>{profesor.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ShowProfesor;
