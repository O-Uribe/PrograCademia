//Puerto
const port = process.env.PORT || 5000;

const express = require("express");
const http = require("http");
const morgan = require("morgan");
const cors = require("cors");
const SocketServer = require("socket.io");


//Import classes
const {LiveGames} = require('./utils/liveGames');
const {Players} = require('./utils/players');

//Inicializamos el servidor
const app = express();
const server = http.createServer(app);
const io  = SocketServer(server,{
	cors: {
			origin: "http://localhost:3000",
	},
});


require("dotenv").config({ path: "./config.env" });

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(require("./routes/record"));

io.on("connection", (socket) => {

	//SOCKET CHAT
	socket.on("message", (body) => {
		socket.broadcast.emit("message", {
      	body,
      	from: socket.id.slice(8),
    	});
  	});


	//SOCKET PRIMERA CONEXION DE HOST
	socket.on('host-join', (data) =>{
		//Check to see if id passed in url corresponds to id of kahoot game in database
		MongoClient.connect(url, function(err, db) {
			if (err) throw err;
			var dbo = db.db("kahootDB");
			var query = { id:  parseInt(data.id)};
			dbo.collection('kahootGames').find(query).toArray(function(err, result){
				if(err) throw err;
				
				//A kahoot was found with the id passed in url
				if(result[0] !== undefined){
					var gamePin = Math.floor(Math.random()*90000) + 10000; //new pin for game

					games.addGame(gamePin, socket.id, false, {playersAnswered: 0, questionLive: false, gameid: data.id, question: 1}); //Creates a game with pin and host id

					var game = games.getGame(socket.id); //Gets the game data

					socket.join(game.pin);//The host is joining a room based on the pin

					console.log('Game Created with pin:', game.pin); 

					//Sending game pin to host so they can display it for players to join
					socket.emit('showGamePin', {
						pin: game.pin
					});
				}else{
					socket.emit('noGameFound');
				}
				db.close();
			});
		});
	});
});



const dbo = require("./db/conn");
 
server.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Servidor iniciado en el puerto: ${port}`);
});