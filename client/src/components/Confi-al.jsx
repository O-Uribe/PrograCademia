import axios from "axios";
import React from "react";
import Dropzone from 'react-dropzone'

const folder=process.env.REACT_APP_API_FOLDER
const key =process.env.REACT_APP_API_KEY;
const cloud_name=process.env.REACT_APP_API_CLOUD_NAME

const Config = (props)=>{
    const nombre=localStorage.getItem("AlumNombre")
    const apellido=localStorage.getItem("AlumApellido")
    const correo=localStorage.getItem("loginalum")
    const img=localStorage.getItem("Alum_URL")
    const img2="https://res.cloudinary.com/dyewwjcfi/image/upload/v1668005667/Imagenes%20Generales/sin_fpbfcs.jpg"
    const [image,setImage]=React.useState({Array:[]})
    const folder=process.env.REACT_APP_API_FOLDER
    const key =process.env.REACT_APP_API_KEY;
    const cloud_name=process.env.REACT_APP_API_CLOUD_NAME    
    const [loading,setLoading]=React.useState("")
    let url=""
    const comprobar=()=>{
        if(!img){
            url=img2
            console.log(url)
        }else{
            url=img
            console.log(url)
        }
    }
    const handleDrop=(files)=>{
        const uploaders=files.map((file)=>{
            const formData=new FormData();
            formData.append("file",file);
            formData.append("tags",`codeinfuse,medium,gist`);
            formData.append("upload_preset",folder);
            formData.append("api_key",key);
            formData.append("timestamp",(Date.now()/1000|0));
            setLoading("true")
            return axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,formData,{
                headers:{"X-Requested-With":"XMLHttpRequest"}
            })
            .then((response)=>{
                const data = response.data
                const fileURL=data.secure_url;
                url=fileURL
                localStorage.setItem("Alum_URL",fileURL)
            })
        })
        axios.all(uploaders).then(()=>{
            setLoading("false")
        })
    }
    return(
        <>
        <input type="checkbox" id="my-modal-3" className="modal-toggle " />
        <div className="modal ">
        <div className="modal-box relative bg-base-200"> 
        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <div className="flex p-5 bg-base-200 rounded-2xl" onLoad={comprobar()}>
                <div className="flex flex-col relative w-full ">
                    <div className="mb-4">
                        <img src={url} className="rounded-full"/>
                    </div>
                    <div className="btn bg-primary inset-x-0 bottom-0 ">
                        <Dropzone
                        onDrop={handleDrop}
                        onchage={(e)=>setImage(e.target.value)}
                        value={image}
                        >
                            {({getRootProps,getInputProps})=>(
                                <section>
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()}/>
                                        <p>Subir Aqui</p>
                                    </div>
                                </section>
                            )}
                        </Dropzone>
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

export  default Config
