import express from 'express';
const app = express();

import cors from 'cors';
import mongoose from 'mongoose';
import config from './config.js';

const port = config().PORT;
const uri = config().MONGO_URI;

app.use(cors());
app.use(express.json());


try {
    mongoose.connect(uri);
    console.log('Connected to MongoDB');
} catch (error) {
    console.log('Error connecting to MongoDB:', error.message);
}

//Routes
//const profesorRoute = require('./Routes/ProfesorRoute');
import profesorRoute from './Routes/ProfesorRoute.js';
app.use('/', profesorRoute);

app.listen(
    port, () => {
        console.log(`Server is running on port ${port}`);
    }
);


