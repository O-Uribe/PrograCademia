import React from "react";
import io from "socket.io-client";


export default function LobbyCreator() {

    var socket = io();

    socket.on('connect', function(){
        socket.emit('requestDbNames');//Get database names to display to user
    });
    
    socket.on('gameNamesData', function(data){
        for(var i = 0; i < Object.keys(data).length; i++){
            var div = document.getElementById('game-list');
            var button = document.createElement('button');
            
            button.innerHTML = data[i].name;
            button.setAttribute('onClick', "startGame('" + data[i].id + "')");
            button.setAttribute('id', 'gameButton');
            
            div.appendChild(button);
            div.appendChild(document.createElement('br'));
            div.appendChild(document.createElement('br'));
        }
    });
    
    function startGame(data){
        window.location.href="/host/" + "?id=" + data;
    }
    
    return(
        <div>
            <a id = "back"href = "../">Back</a>
            <h1 id = "title">Start a Kahoot Game</h1>
            
            <h4 id = "subtitle">Choose a Game Below or <a id = "link" href = "quiz-creator/">Create your Own!</a></h4>
            <div id = "game-list">      
            
            </div>

        </div>

    );
}
