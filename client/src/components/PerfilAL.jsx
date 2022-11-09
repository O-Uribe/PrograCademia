import React from "react";


const Perfil = (props)=>{
    const nombre=localStorage.getItem("AlumNombre")
    const apellido=localStorage.getItem("AlumApellido")
    const correo=localStorage.getItem("loginalum")
    const img=localStorage.getItem("Alum_URL")
    const img2="https://res.cloudinary.com/dyewwjcfi/image/upload/v1668005667/Imagenes%20Generales/sin_fpbfcs.jpg"
    let url=""
    const comprobar=()=>{
        if(!img){
            url=img2
        }else{
            url=img
        }
    }
    return(
        <>
        <input type="checkbox" id="my-modal-4" className="modal-toggle " />
        <div className="modal ">
        <div className="modal-box relative bg-base-200"> 
        <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <div className="flex p-5 bg-base-200 rounded-2xl" onLoad={comprobar()}>
                <div className="flex flex-col relative w-full ">
                    <div className="mb-4">
                        <img src={url} className="rounded-full"/>
                    </div>
                </div>
                <div className="lg:divider-horizontal"></div>
                <div className="flex flex-col text-center w-full bg-base-300">
                    <div className="uppercase">Informacion</div>
                    <div className="text-xl">
                        <h2>Nombre: <br/>{nombre}</h2>
                        <h2>Apellido: <br/>{apellido}</h2>
                        <h2>Correo Electronico: <br/>{correo}</h2>
                    </div>
                    
                </div>
        </div>
        </div>
        </div>
        </>
    )
}

export  default Perfil
