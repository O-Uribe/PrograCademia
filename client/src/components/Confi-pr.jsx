import axios from "axios";
import React from "react";
import Dropzone from 'react-dropzone'

const Config = (props)=>{

    const loginProJSON = localStorage.getItem('loginpro')
    const profesor = JSON.parse(loginProJSON)

    const nombre=profesor.nombre
    const apellido=profesor.apellido
    const correo=profesor.email
    const img=localStorage.getItem("Profe_URL")
    const img2="https://res.cloudinary.com/dyewwjcfi/image/upload/v1668005667/Imagenes%20Generales/sin_fpbfcs.jpg"
    const [image,setImage]=React.useState({Array:[]})
    const folder=process.env.REACT_APP_API_FOLDER2
    const key =process.env.REACT_APP_API_KEY;
    const cloud_name=process.env.REACT_APP_API_CLOUD_NAME    
    const [loading,setLoading]=React.useState("")
    let url=""
    const comprobar=()=>{
        if(!img){
            url=img2
        }else{
            url=img
        }
    }
    function volver(){
        window.location.href="/mainprofe"
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
                window.localStorage.setItem("Profe_URL",fileURL)
            })
        })
        axios.all(uploaders).then(()=>{
            setLoading("false")
        })
    }
    return(
        <>
        <div className="bg-base-200 rounded-3xl">
        <div className="flex p-5 bg-base-200 rounded-2xl" onLoad={comprobar()}>
                <div className="flex flex-col relative w-full ">
                    <div className="mb-4">
                        <img src={url} className="rounded-full"/>
                    </div>
                    <div className="btn1 bg-primary inset-x-0 bottom-0 ">
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
            <button className="btn1 w-full bg-primary" onClick={()=>volver()}>Volver</button>
        </div>
        </>
    )
}

export  default Config
