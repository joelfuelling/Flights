const mongoose = require('mongoose')

// Create Schema
const flightSchema = new mongoose.Schema({
    airline: {type: String, enum:['american','southwest','united'], },
    airport: {type: String, enum:['AUS', 'DFW', 'DEN', 'LAX', 'SAN'], default: 'DEN' },
    flightNo: {type: Number, min: 10, max: 1000},
    departs: {type: Date,  }
})

    
// Connect your schema to a Model
const Flight = mongoose.model('Flight', flightSchema)
// Export the model
module.exports = Flight

