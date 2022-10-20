import express from 'express';
import path from 'path';
const app = express();
import cors from 'cors';
import mongoose from 'mongoose';

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
app.use('/', router);

//app.use(express);
const server = http.createServer(app);
const io = new SocketServer(server, {
    cors: {
        origin: '*',
        //methods: ['GET', 'POST']
    }
});


io.on('connection', (socket) => {
    //console.log(socket.id);
    socket.on("message", (body) => {
        socket.broadcast.emit("message", {
        body,
        from: socket.id.slice(8),
        });
    });
});




app.get('/list', (req, res) => {
    const triviaData = {
      triviaList: [
        { id: 1, name: 'trivia1' },
        { id: 1, name: 'trivia2' },
      ],
      pin: Math.floor(Math.random() * 10),
    };
    res.json(triviaData);
  });



server.listen(
    port, () => {
        console.log(`Servidor ejecutado en el puerto ${port}`);
    }
);
