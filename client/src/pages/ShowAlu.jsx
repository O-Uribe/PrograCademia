/*
  Inputs para register de Estudiante

  nombre
  apellido
  rut
  email
  password
  año de ingreso

*/

import React from "react";

export const ShowEstudiante = () => {
    
        //Mostrar Todos los estudiantes de la Base de Datos
        const [estudiantes, setEstudiantes] = React.useState([]);
    
        React.useEffect(() => {
            fetch("http://localhost:5000/estudiante")
                .then((response) => response.json())
                .then((data) => setEstudiantes(data));
        }, []);

    return (
        <div>
            <h1>Estudiantes</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Rut</th>
                        <th>Email</th>
                        <th>Año de Ingreso</th>
                    </tr>
                </thead>
                <tbody>
                    {estudiantes.map((estudiante) => (
                        <tr key={estudiante._id}>
                            <td>{estudiante.nombre}</td>
                            <td>{estudiante.apellido}</td>
                            <td>{estudiante.rut}</td>
                            <td>{estudiante.email}</td>
                            <td>{estudiante.ingreso}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ShowEstudiante;