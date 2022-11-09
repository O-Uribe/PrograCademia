import axios from "axios";
import React from "react";
import Dropzone from 'react-dropzone'

const folder=process.env.REACT_APP_API_FOLDER
const key =process.env.REACT_APP_API_KEY;
const cloud_name=process.env.REACT_APP_API_CLOUD_NAME

const Imagenes = (props)=>{
    const [image,setImage]=React.useState({Array:[]})
    const folder=process.env.REACT_APP_API_FOLDER
    const key =process.env.REACT_APP_API_KEY;
    const cloud_name=process.env.REACT_APP_API_CLOUD_NAME    
    const [loading,setLoading]=React.useState("")

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
                let specificArrayInObject=image.Array;
                specificArrayInObject.push(fileURL)
                const newObj={...image,specificArrayInObject};
                setImage(newObj)
                console.log(image)
            })
        })
        axios.all(uploaders).then(()=>{
            setLoading("false")
        })
    }

    function verimagen(){
        if(loading==="true"){
            return <h3>Cargando</h3>
        }
        if(loading ==="false"){
            return(
                <h3>
                    {image.Array.length<=0
                    ?"No hay imagenes"
                    :image.Array.map((item,index)=>(
                        <img
                        alt="Imagen"
                        className="h-fit w-fit"
                        src={item}
                        />
                    )

                    )
                    }
                </h3>
            )
        }
    }
    return(
        <div className="bg-base-200 border-2 p-5">
            <Dropzone
            classname="border-2 p-5 "
            onDrop={handleDrop}
            onchage={(e)=>setImage(e.target.value)}
            value={image}
            >
                {({getRootProps,getInputProps})=>(
                    <section>
                        <div {...getRootProps({classname:"border-2 p-5 bg-base-200"})}>
                            <input {...getInputProps()}/>
                            <span></span>
                            <p>Subir Aqui</p>
                        </div>
                    </section>
                )}
            </Dropzone>
            {verimagen()}
        </div>
    )
}

export  default Imagenes
