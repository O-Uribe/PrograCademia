import React from 'react'
import pre from '../img/pre.webp';
import swal from 'sweetalert2';

function Card({titulo, categoria, id}) {
    function borrar(){
        fetch('https://restapi-progracademia.herokuapp.com/api/preguntas/'+id,{
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
        <div className='card text-center' style={{width:'20rem'}}>
            <img src={pre} alt=''></img>
            <div className='card-body bg-dark text-light'>
                <h4 className='card-title'>{titulo}</h4>
                <p className='card-text'>{categoria}</p>
                <button className='btn btn-outline-secondary border-0' onClick={() => {
                        seguro();
                    }}>Borrar
                </button>
            </div>
        </div>
    )
}

export default Card