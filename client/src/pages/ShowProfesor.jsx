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

    function handleDelete(id) {
        fetch(`http://localhost:5000/profesor/${id}`, {
            method: "DELETE",
        }).then((response) => {
            if (response.ok) {
                alert("Profesor Eliminado");
                window.location.reload();
            }
        });
    }

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
                            <td>
                                <button onClick={() => handleDelete(profesor._id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ShowProfesor;
