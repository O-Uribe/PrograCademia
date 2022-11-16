import React from "react";


// Formulario para editar un estudiante en la base de datos
// Recibe como prop el estudiante a editar
// Usando daisyUI window modal
/*
    Datos del estudiante:
    - Rut
    - Nombre
    - Apellido
    - Email
    - Contraseña
    - Año de Ingreso
*/
export const EditForm = ({ estudiante }) => {


    // Estado para guardar los datos del estudiante
    const [datos, setDatos] = React.useState({
        rut: estudiante.rut,
        nombre: estudiante.nombre,
        apellido: estudiante.apellido,
        email: estudiante.email,
        password: estudiante.password,
        ingreso: estudiante.ingreso,
    });




    // Estado para guardar el mensaje de error
    const [error, setError] = React.useState("");

    // Función para manejar los cambios en los inputs
    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value,
        });
    };

    // Función para manejar el submit del formulario
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(datos);
        /*
        // Validar que los datos no estén vacíos
        if (
            !datos.rut ||
            !datos.nombre ||
            !datos.apellido ||
            !datos.email ||
            !datos.password ||
            !datos.anio_ingreso
        ) {
            setError("Todos los campos son obligatorios");
            return;
        }
        // Enviar los datos al servidor
        console.log(datos);
        */
    };

    return (
        <React.Fragment>
            <label htmlFor="my-modal-5" className="btn">Editar</label>
                <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box w-11/12 max-w-5xl">
                            <div>
                                <label htmlFor="my-modal-5" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            </div>
                            <h1 className="text-2xl font-bold">Editar Estudiante</h1>
                            <div class="flex space-x-3">
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Rut</span>
                                    </label>
                                    <input type="text" 
                                    placeholder="Rut" 
                                    id = "rut"
                                    defaultValue={datos.rut} 
                                    onChange= {handleInputChange}
                                    className="input input-bordered w-full max-w-xs" />
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Nombre</span>
                                    </label>
                                    <input type="text"
                                    placeholder="Nombre"
                                    id = "Nombre"
                                    value={datos.nombre}
                                    onChange= {handleInputChange}
                                    className="input input-bordered w-full max-w-xs" />
                                </div>
                            </div>
                            <div class="flex space-x-3">
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Apellido</span>
                                    </label>
                                    <input type="text"
                                    placeholder="Apellido"
                                    id = "apellido"
                                    defaultValue={datos.apellido}
                                    onChange= {handleInputChange}
                                    className="input input-bordered w-full max-w-xs" />
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text"
                                    placeholder="Email"
                                    id = "email"
                                    defaultValue={datos.email}
                                    onChange= {handleInputChange}
                                    className="input input-bordered w-full max-w-xs" />
                                </div>
                            </div>
                            <div class="flex space-x-3">
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Contraseña</span>
                                    </label>
                                    <input type="text"
                                    placeholder="Contraseña"
                                    id = "password"
                                    defaultValue={datos.password}
                                    onChange= {handleInputChange}
                                    className="input input-bordered w-full max-w-xs" />
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Año de Ingreso</span>
                                    </label>
                                    <input type="text"
                                    placeholder="Año de Ingreso"
                                    id = "ingreso"
                                    defaultValue={datos.ingreso}
                                    onChange= {handleInputChange}
                                    className="input input-bordered w-full max-w-xs" />
                                </div>
                            </div>
                            <div className="form-control w-full max-w-xs overflow-auto ">
                                <button className="btn btn-primary" onClick={handleSubmit}>Editar</button>
                            </div>
                        </div>
                    </div>
        </React.Fragment>   
    );
};

export default EditForm;