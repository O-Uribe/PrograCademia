//Puerto
const path = require('path');
const morgan = require("morgan");
const cors = require("cors");

const express = require('express');
const socketIO = require('socket.io');

const PORT = 5000;
const app = express();
const server = app.listen(PORT, () => console.log(`Servidor Iniciado en el puerto ${PORT}`));

const io = socketIO(server);
app.use(express.static(path.join(__dirname, 'build')));
let namespace;


const trivia = [
    {
      question: 'Pregunta 1?',
      options: [
        { id: 1, description: '1' },
        { id: 2, description: '2' },
        { id: 3, description: '3' },
        { id: 4, description: '4' },
      ],
    },  
    {
      question: 'Pregunta 1?',
      options: [
        { id: 1, description: '1' },
        { id: 2, description: '2' },
        { id: 3, description: '3' },
        { id: 4, description: '4' },
      ],
    },  
    {
      question: 'Pregunta 1?',
      options: [
        { id: 1, description: '1' },
        { id: 2, description: '2' },
        { id: 3, description: '3' },
        { id: 4, description: '4' },
      ],
    },
  ];
  



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
});



// const dbo = require("./db/conn");
 
// server.listen(PORT, () => {
//   // perform a database connection when server starts
//   dbo.connectToServer(function (err) {
//     if (err) console.error(err);
 
//   });
//   console.log(`Servidor iniciado en el puerto: ${port}`);
// });




app.get('/host-game', (req, res) => {
    const { pin } = req.query;

    namespace = io.of(`/${pin}`);

    namespace.on('connection', (socket) => {
    console.log('client connected');

    socket.join('gameroom');
    });

    res.json({ connected: true });
});

app.get('/start-game', (req, res) => {
    console.log('emiting a game!');
    const { questionNumber } = req.query;

    namespace.emit('question', {
    question: trivia[questionNumber].question,
    options: trivia[questionNumber].options,
    });

    res.json({ gameStarted: true });
});

app.get('/next-question', (req, res) => {
    const { questionNumber } = req.query;

    namespace.emit('question', {
    question: trivia[questionNumber].question,
    options: trivia[questionNumber].options,
    });

    res.json({ questionSent: true });
});

app.get('/podium', (req, res) => {
    namespace.emit('podium', {
    0: { name: 'Nicolas Rivarola', score: 3 },
    1: { name: 'Hernan Peralta', score: 2 },
    2: { name: 'Leonel Gauna', score: 1 },
    });

    res.json({ podiumSent: true });
});


app.get('/trivialist', (req, res) => {
    const triviaData = {
    triviaList: [
        { id: 1, name: 'trivia1' },
        { id: 1, name: 'trivia2' },
    ],
    pin: Math.floor(Math.random() * 10),
    };
    res.json(triviaData);
});

app.get('/trivia/:pin/:selectedTrivia', (req, res) => {
    const { pin } = req.params;

    namespace = io.of(`/${pin}`);
    namespace.counter = 0;

    namespace.on('connection', (socket) => {
    console.log('client connected');

    if (Object.values(namespace.clients().connected).length === 1) {
        console.log('host joined!');
        socket.host = true;
    }

    if (!socket.host) {
        console.log('player joined!');
        socket.join('gameroom');
    }

    socket.on('start-game', () => {
        namespace.emit('question', {
        question: trivia[namespace.counter].question,
        options: trivia[namespace.counter].options,
        });
    });

    socket.on('next-question', () => {
        namespace.counter += 1;
        namespace.emit('question', {
        question: trivia[namespace.counter].question,
        options: trivia[namespace.counter].options,
        });
    });

    socket.on('disconnect', () => {
        console.log('client disconnected');
    });
    });

    res.json({ connected: true });
});

app.get('/answers', (req, res) => {
    namespace.emit('mini-podium', [
    { option: 1, count: 1 },
    { option: 2, count: 0 },
    ]);
    res.json({ miniPodiumSent: true });
});