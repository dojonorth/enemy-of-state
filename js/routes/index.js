var express = require('express');
var router = express.Router();
var getEventStore = require('../lib/EventStoreFactory');
var BeebStream = require('../lib/aggregates/BeebStream');

/* GET home page. */
router.get('/', function (req, res) {
    var streamId = req.query.stream;

    var es = getEventStore(streamId);
    var beebStream = new BeebStream(es.getAllEvents());

    res.render('index', { title: 'Beebr', beebs: beebStream.toArray()});
});

/* GET beeb ID */
//router.get('/beeb/:id', function (req, res, next) {
//    var id = req.params.id
//});

module.exports = router;
