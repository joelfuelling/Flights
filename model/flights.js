const mongoose = require('mongoose')

// Create Schema

const destinationSchema = new mongoose.Schema({
    airport: {type: String, enum:['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],},
    arrival: {type: Date},
})
const flightSchema = new mongoose.Schema({
    airline: {type: String, enum:['american','southwest','united'], },
    airport: {type: String, enum:['AUS', 'DFW', 'DEN', 'LAX', 'SAN'], default: 'DEN' },
    flightNo: {type: Number, min: 10, max: 1000},
    departs: {type: Date,  },
    destinations: [destinationSchema]
})

    
// Connect your schema to a Model
const Flights = mongoose.model('Flights', flightSchema)
// Export the model
module.exports = Flights
