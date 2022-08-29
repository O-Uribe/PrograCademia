const express = require('express');
const http = require('http');
const app = express();
const servidor = http.createServer(app);

const socketIO = require('socket.io');
const io = socketIO(servidor);


io.on('connection', socket => {

    socket.on('conectado', () => {
        console.log('Usuario conectado');
    });

    socket.on('mensaje', (nombre, mensaje) => {
        io.emit('mensajes', {nombre, mensaje});
    });

    socket.on('disconnect', () => {
        io.emit('mensaje', {servidor:"Servidor",mensaje: 'Usuario desconectado'});
    });


});    

    
servidor.listen(3000, () => {console.log('Servidor iniciado');});

