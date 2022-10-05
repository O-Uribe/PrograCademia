import React from "react";

export default function OffLine(){

return (
    <div>
        <h1 id = "title">Entrar a la sala</h1>
        <form>
            <div class="form-field">
                <label id = "label"> Escriba su nombre </label>
                <input id = "name" type = "text" name="name" autofocus/>
            </div>
            <br></br> 
            <div class="form-field">
                <label id = "label"> Codigo de sala </label>
                <input id = "pin" type="number" name="pin"/>
            </div>
            <br></br> 
            <div class="form-field">
                <button id = "joinButton">Entrar</button>
            </div>
        </form>
        <br></br> 
    </div>
  );
}