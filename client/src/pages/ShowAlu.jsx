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

        function handleEdit(id) {
            
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
            setEstudiantes(resultadosBusqueda);
        };


    return (
        <>
        {/* Tabla de Estudiantes */}
        <div class="overflow-x-auto">
            <h1>Estudiantes</h1>
            {/* Buscador de Estudiante */}
            <div className="container">
                <input type="text" 
                placeholder="Buscar Estudiante por Nombre o Apellido" 
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
                        <th>Contraseña</th>
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
                            <td>{estudiante.password}</td>
                            <td>{estudiante.ingreso}</td>
                            <td>
                                <button onClick={() => handleDelete(estudiante._id)}>Eliminar</button>
                            </td>
                            <td>
                                <button onClick={() => handleEdit(estudiante._id)}>Editar</button>
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