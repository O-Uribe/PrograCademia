import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
const Record = (props) => (
 <tr>
   <td>{props.record.nombre}</td>
    <td>{props.record.apellido}</td>
    <td>{props.record.email}</td>
    <td>{props.record.rut}</td>
    <td>{props.record.password}</td>
    <td>{props.record.rol}</td>
    <td>{props.record.anio_ingreso}</td>
   <td>
     <Link className="btn btn-link" to={`/edit/${props.record._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteRecord(props.record._id);
       }}
     >
       Borrar
     </button>
   </td>
 </tr>
);
 
export default function RecordList() {
 const [records, setRecords] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:3000/record/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();
     setRecords(records);
   }
 
   getRecords();
 
   return;
 }, [records.length]);
 
 // This method will delete a record
 async function deleteRecord(id) {
   await fetch(`http://localhost:3000/${id}`, {
     method: "DELETE"
   });
 
   const newRecords = records.filter((el) => el._id !== id);
   setRecords(newRecords);
 }
 
 // This method will map out the records on the table
 function recordList() {
   return records.map((record) => {
     return (
       <Record
         record={record}
         deleteRecord={() => deleteRecord(record._id)}
         key={record._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div>
      <div onclick="mostrar()" class="btn_jugar" id="btn_inicio"><button>Jugar</button></div>

      <div class="btn_registrarse" id="btn_1" ><button>Registrarse</button></div>

      <div class="btn_iniciarsesion" id="btn_2" ><button>Iniciar Sesion</button></div>

      <div class="btn_jugarsin" action="player/juego/index.html" id="btn_3" >
    
        <form action="player/juego/index.html">
          <button type="submit" >Jugar sin cuenta</button>
        </form>  

      </div>
   </div>
 );
}