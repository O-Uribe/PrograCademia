const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const port = require('./config.js').PORT;

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//DB
const uri = require('./config.js').MONGO_URI;

try {
    mongoose.connect(uri);
    console.log('Connected to MongoDB');
} catch (error) {
    console.log('Error connecting to MongoDB:', error.message);
}

// Routes
const rutas = require('./Routes/FormsRoute.js');
app.use('/', rutas);


app.listen(
    port, () => {
        console.log(`Server is running on port ${port}`);
    }
);
