import React from "react";


function UserOnline({ nickname }) {
  return (
      <div className="pl-6 flex items-center">
        <div className="block pr-2">
          <img
            alt="avatar"
            //src="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            src="https://res.cloudinary.com/dyewwjcfi/image/upload/v1668001820/Imagenes%20Generales/alumno_gw2ns4.png"
            className="rounded-full h-10 w-10 "
          />
        </div>

        <p className="text-white text-m text-left font-auto">{nickname}</p>            

      </div>
  );
}

export default UserOnline;
