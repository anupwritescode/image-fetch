const mongoose = require('mongoose');
const carSchema = require('../schema/CarSchema');

const CarModel = mongoose.model('CarModel', carSchema, 'cars');

module.exports = CarModel;





