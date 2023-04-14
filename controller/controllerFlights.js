const Flights = require('../model/flights')

module.exports = {
    index: async (req, res)=>{
    const flights = await Flights.find()
    res.render('flights', {
        flights : flights
    })
}

}
