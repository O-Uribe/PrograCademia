const http =require('http')
const cors=require('cors')
const express = require('express')
const morgan = require('morgan')
const SocketServer= require('socket.io')

const app = express();
const server = http.createServer(app);
const io =   SocketServer(server, {
    cors: {
        origin: 'http://localhost:3000',
    }
});


app.use(cors());
app.use(morgan('dev')); 

io.on('connection', (socket) => {
    console.log(socket.id)
    socket.on('message', (message) => {
        socket.broadcast.emit('message', {
            body: message,
            from: socket.id            
        });     
    });
});

//conexion base de datos
const mongoose = require('mongoose')

const uri = `mongodb+srv://nico2:nico123@cluster0.oxwjx.mongodb.net/Integra_test`;
mongoose.connect(uri,
  {useNewUrlParser: true, useUnifiedTopology: true }
)
  .then(() => console.log('Base de datos conectada'))
  .catch(e => console.log(e))


    
server.listen(4000, () => {console.log('Servidor iniciado en el puerto', 4000);});

