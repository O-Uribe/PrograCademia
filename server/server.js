import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import config from './config.js';

const app = express();
const port = config().PORT;

console.log(port);

//middleware
app.use(cors());
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
app.use('/', router);


app.listen(
    port, () => {
        console.log(`Server is running on port ${port}`);
    }
);
