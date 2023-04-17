const Flights = require('../model/flights')

module.exports = {
    index: async (req, res)=>{
    const flights = await Flights.find()
    res.render('index', {
        flights : flights
    })
},

    new: (req, res)=>{
        res.render('new')
    },

    create: async (req, res)=>{
        const newFlight = await Flights.create(req.body)
            res.redirect(`/${newFlight._id}`)
    },

}
