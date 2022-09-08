const mongoose = require('mongoose');
const URI = "mongodb+srv://nico:nico123@cluster0.oxwjx.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;