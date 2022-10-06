import React from "react";
import $ from "jquery";
import io from "socket.io-client";

export default function Host() {

	var socket = io();
	var params = $.deparam(window.location.search);

	//When host connects to server
	socket.on('connect', function() {

		document.getElementById('players').value = "";
		
		//Tell server that it is host connection
		socket.emit('host-join', params);
	});

	socket.on('showGamePin', function(data){
	document.getElementById('gamePinText').innerHTML = data.pin;
	});

	//Adds player's name to screen and updates player count
	socket.on('updatePlayerLobby', function(data){
		
		document.getElementById('players').value = "";
		
		for(var i = 0; i < data.length; i++){
			document.getElementById('players').value += data[i].name + "\n";
		}
		
	});

	//Tell server to start game if button is clicked
	function startGame(){
		socket.emit('startGame');
	}
	function endGame(){
		window.location.href = "/";
	}

	//When server starts the game
	socket.on('gameStarted', function(id){
		console.log('Game Started!');
		//window.location.href="/host/game/" + "?id=" + id;
	});

	socket.on('noGameFound', function(){
	window.location.href = '../../';//Redirect user to 'join game' page
	});

    return(
        <div>
        	<button id = "cancel" onclick = {endGame()}>Cancel Game</button>
        	<h2 id = "title">Join this Game using the Game Pin: </h2>
			<h1 id = "gamePinText">PIN</h1>
			<textarea readonly id = 'players'></textarea>
			<br></br>
			<button id = 'start' onclick = {startGame()}>Start Game</button>
			<br></br>
			<br></br>
        </div>    

    )
}