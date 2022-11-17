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
            return null;
        });
        setProfesores(resultadosBusqueda);
    };

    return (
        <React.Fragment>
        <div class="overflow-x-auto">
            <h1>Profesores</h1>
            {/* Buscador de Estudiante */}
            <div className="form-control">
                <div className="input-group">
                    <input type="text" 
                    placeholder="Buscar Profesor por Nombre o Apellido"
                    onChange={handleChange} 
                    value={busqueda} 
                    className="input input-bordered w-96" />
                    <span className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </span>
                </div>
            </div>
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>Rut</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Contraseña</th>
                    </tr>
                </thead>
                <tbody>
                    {profesores.map((profesor) => (
                        <tr key={profesor._id}>
                            <td>{profesor.rut}</td>
                            <td>{profesor.nombre}</td>
                            <td>{profesor.apellido}</td>
                            <td>{profesor.email}</td>
                            <td>{profesor.password}</td>
                            <td>
                                <button onClick={() => handleDelete(profesor._id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </React.Fragment>
    );
};

export default ShowProfesor;
