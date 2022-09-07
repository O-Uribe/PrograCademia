const express = require('express');
const app = express();
const morgan = require('morgan');

//configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended : false}));
app.use(express.json());

//Rutas
app.use(require('./routes/index'));
app.use('/api/preguntas',require('./routes/preguntas'));

// empezando el servidor
app.listen(app.get('port'),() => {
    console.log(`Server on port ${3000}`);
});