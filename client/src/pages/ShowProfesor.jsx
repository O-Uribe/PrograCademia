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
    const [busqueda, setBusqueda] = React.useState("");
    const [tablaUsuarios, setTablaUsuarios] = React.useState([]);

    React.useEffect(() => {
        fetch("http://localhost:5000/profesor")
            .then((response) => response.json())
            .then((data) => {
                setProfesores(data)
                setTablaUsuarios(data)
            });
    }, []);

    function handleDelete(id) {
        if(window.confirm("¿Está seguro de eliminar este profesor?")) {
            fetch(`http://localhost:5000/profesor/${id}`, {
            method: "DELETE",
        }).then((response) => {
            if (response.ok) {
                alert("Profesor Eliminado");
                // Actualizar la lista de Profesores
                fetch("http://localhost:5000/profesor")
                    .then((response) => response.json())
                    .then((data) => setProfesores(data));
            }
        });
        }
    }
    //handlechange para buscar por nombre o apellido
    function handleChange(e) {
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    }
    const filtrar = (terminoBusqueda) => {
        var resultadosBusqueda = tablaUsuarios.filter((elemento) => {
            if (
                elemento.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
                elemento.apellido.toLowerCase().includes(terminoBusqueda.toLowerCase())
            ) {
                return elemento;
            }
        });
        setProfesores(resultadosBusqueda);
    };

    return (
        <>
        <div class="overflow-x-auto">
            <h1>Profesores</h1>
            {/* Buscador de Estudiante */}
            <div className="container">
                <input type="text" 
                placeholder="Buscar Profesor por Nombre o Apellido" 
                onChange={handleChange} 
                value={busqueda} 
                style={{color : "black"}}/>
            </div>
            <table class="table w-full">
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
        </>
    );
};

export default ShowProfesor;
