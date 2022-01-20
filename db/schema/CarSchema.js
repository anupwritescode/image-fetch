const Schema = require('mongoose').Schema;

const CarSchema = new Schema({
    carName: String,
    grade: String,
    colour: String,
    manufactureYear: Number,
    link: String
}, {
    collection: 'cars'
});

module.exports = CarSchema;