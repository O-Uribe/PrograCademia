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
        const [busqueda, setBusqueda] = React.useState("");
        const [tablaUsuarios, setTablaUsuarios] = React.useState([]);
    
        React.useEffect(() => {
            fetch("http://localhost:5000/estudiante")
                .then((response) => response.json())
                .then((data) => {
                    setEstudiantes(data)
                    setTablaUsuarios(data)
                });
                
        }, []);

        function handleDelete(id) {
            if(window.confirm("¿Está seguro de eliminar este estudiante?")) {
                fetch(`http://localhost:5000/estudiante/${id}`, {
                method: "DELETE",
            }).then((response) => {
                if (response.ok) {
                    alert("Estudiante Eliminado");
                    // Actualizar la lista de estudiantes
                    fetch("http://localhost:5000/estudiante")
                        .then((response) => response.json())
                        .then((data) => setEstudiantes(data));
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
            setEstudiantes(resultadosBusqueda);
        };


    return (
        <>
        <div className="overflow-auto">
            <h1 class="font-medium leading-tight text-4xl mt-0 mb-2">Estudiantes</h1>
        </div>
        {/* Tabla de Estudiantes */}
        <div class="overflow-x-auto">
            {/* Buscador de Estudiante */}
            <div className="form-control">
                <div className="input-group">
                    <input type="text" 
                    placeholder="Buscar Estudiante por Nombre o Apellido"
                    onChange={handleChange} 
                    value={busqueda} 
                    className="input input-bordered w-96" />
                    <span className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </span>
                </div>
            </div>
            <table className="table table-zebra w-full">
                <thead>
                    <tr>
                        <th>Rut</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Contraseña</th>
                        <th>Año de Ingreso</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {estudiantes.map((estudiante) => (
                        <tr key={estudiante._id}>
                            <td>{estudiante.rut}</td>
                            <td>{estudiante.nombre}</td>
                            <td>{estudiante.apellido}</td>
                            <td>{estudiante.email}</td>
                            <td>{estudiante.password}</td>
                            <td>{estudiante.ingreso}</td>
                            <td>
                                <button onClick={() => handleDelete(estudiante._id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    );
};

export default ShowEstudiante;