var express = require('express');
const controllerFlights = require('../controller/controllerFlights');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', controllerFlights.index)

module.exports = router;
