import express from 'express';
const app = express();
import cors from 'cors';
import mongoose from 'mongoose';

import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import {Server as SocketServer} from 'socket.io';
import http from 'http';

import config from './config.js';
const port = config().PORT;

//middleware


app.use(cors());
app.use(express());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//DB
const uri = config().MONGO_URI;

try {
    mongoose.connect(uri);
    console.log('Connected to MongoDB');
} catch (error) {
    console.log('Error connecting to MongoDB:', error.message);
}

// Routes
import router from './Routes/FormsRoute.js';
import exp from 'constants';
import { CONNREFUSED } from 'dns';
import { Socket } from 'dgram';
import { connect } from 'http2';
import { on } from 'events';
app.use('/', router);

//app.use(express);
const server = http.createServer(app);
const io = new SocketServer(server, {
    cors: {
        origin: '*',
        //methods: ['GET', 'POST']
    }
});

let namespace;


//Chat
let usersConnected = new Map();

io.on("connection", (socket) => {
    let { id } = socket.client;

    socket.on("user nickname", (nickname) => {
        usersConnected.set(nickname, [socket.client.id, socket.id]);
        io.emit("users-on", Array.from(usersConnected.keys()));

        io.emit("playerName", nickname, socket.client.id);

    });
  
    socket.on("chat message", ({ nickname, msg }) => {
        socket.broadcast.emit("chat message", { nickname, msg });
    });
  
    socket.on("chat message private", ({ toUser, nickname, msg }) => {
        let socketId = usersConnected.get(toUser)[1];
        io.to(socketId).emit("private msg", { id, nickname, msg });
    });

    socket.on('categoria', (categoria) => {
        console.log(categoria);
        socket.broadcast.emit('categoria', categoria);
    });


    socket.on('start-game', (Alumnos) => {
        console.log('Game started!');

        socket.broadcast.emit('Alumnos', Alumnos);

        socket.broadcast.emit('startGame');
    });

    socket.on('correct-answer', (data) => {
        console.log(data);
        socket.broadcast.emit('correct-answer',data);
    });

    socket.on('wrong-answer', (data) => {
        console.log(data);
        socket.broadcast.emit('wrong-answer',data);
    });
    


    socket.on("disconnect", () => {
        let tempUserNickname;
    
        for (let key of usersConnected.keys()) {
            if (usersConnected.get(key)[0] === id) {
                tempUserNickname = key;
                usersConnected.delete(key);
                break;
            }
        }
        io.emit("users-on", Array.from(usersConnected.keys()));
      
        socket.broadcast.emit("user-disconnected", tempUserNickname);
    });
});    

//////////////////////////Trivia//////////////////////////
app.get('/list', (req, res) => {
    const triviaData = {
        triviaList: [
        { id: 1, name: 'Logica de Programación' },
        { id: 2, name: 'Science:Computers' },
        ],
        pin: Math.floor(Math.random() * 10),
    };
    res.json(triviaData);
});


const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(join(__dirname, '../client/build')));

server.listen(
    port, () => {
        console.log(`Servidor ejecutado en el puerto ${port}`);
    }
);
