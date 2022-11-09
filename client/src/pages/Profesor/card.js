import React from 'react'
import swal from 'sweetalert2';
import Modals from '../../components/modals';
function Card(p) {
    function borrar(){
        fetch('https://restapi-progracademia.herokuapp.com/api/preguntas/'+p._id,{
            method: 'DELETE',
            mode: 'cors',
        }).then((response) =>{
            if(!response.ok){
                throw new Error('Algo salio mal');
            }
        }).catch((e) => {
            console.log(e);
        });
    }

    function seguro(){
        swal.fire({
            tittle: 'Advertencia',
            text: '¿Esta seguro que desea eliminar esta pregunta?',
            icon: 'error',
            showDenyButton: true,
            denyButtonText: 'No',
            confirmButtonText: 'Si'
        }).then(response => {
            if(response.isConfirmed){
                borrar();
                swal.fire('Exito','La pregunta se elimino correctamente.', 'success');
                window.location.reload(true);
            }else if(response.isDenied){
                swal.fire('OK','No se borro nada', 'info');
            }else{
                swal.fire('Error','Ha ocurrido un error', 'error');
            }
        })
    }

    return (
        <>
        <div className="card w-96 bg-base-100 shadow-xl">
        <label htmlFor="my-modal-3">
            <figure className="px-10 pt-10">
                <img src="https://res.cloudinary.com/dyewwjcfi/image/upload/v1668033693/Imagenes%20Generales/pre_us7tza.webp" alt="Shoes" className="rounded-xl" />
            </figure>
        </label>
            <div className="card-body items-center text-center">
                <h4 className='card-title'>{p.titulo}</h4>
                <p className='card-text'>{p.categoria}</p>
                <div className="card-actions">
                <button className='btn btn-primary' onClick={() => {
                        seguro();
                    }}>Borrar
                </button>
                </div>
            </div>
        </div>
        <div className="lg:divider-vertical"></div> 
        <Modals titulo={p.titulo} categoria={p.categoria} tipoPre={p.tipo_Pregunta} dif={p.dificultad} id={p._id} opciones={p.opciones}/>
        </>
    )
}

export default Card