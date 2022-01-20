const mongoose = require('mongoose');

const connectionURI = 'mongodb://127.0.0.1/rotormotors';
mongoose.connect(connectionURI, {useNewUrlParser: true, useUnifiedTopology: true});

const rotormotors = mongoose.connection;

rotormotors.on('error', console.error.bind(console, 'Mongoose connection error.'))