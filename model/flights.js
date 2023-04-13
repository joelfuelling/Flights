const mongoose = require('mongoose')

// Create Schema
const flightSchema = new mongoose.Schema({
    airline: {type: String, enum:['american', 'southwest', 'united']},
    airport: {type: String, enum:['AUS', 'DFW', 'DEN', 'LAX', 'SAN'], default: 'DEN'},
    flightNo: Number,
    departs: Date,
})
// Connect your schema to a Model
const Flight = mongoose.model('Flight', flightSchema)
// Export the model
module.exports = Flight

console.log(flightSchema)