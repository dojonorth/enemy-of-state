var express = require('express');
var router = express.Router();
var EventStore = require('../lib/EventStore');
var BeebStream = require('../lib/aggregates/BeebStream');

/* GET home page. */
router.get('/', function (req, res) {
    var streamId = req.query.stream || 0;

    var es1 = new EventStore();

    es1.save({event: 'BeebAdded', data: {date: new Date(), content: 'welcome to beebstream'}})
    es1.save({event: 'BeebAdded', data: {date: new Date(), content: 'awesome'}})
    es1.save({event: 'BeebAdded', data: {date: new Date(), content: 'yay'}})

    var es2 = new EventStore();

    es2.save({event: 'BeebAdded', data: {date: new Date(), content: 'welcome to beebstream2'}})
    es2.save({event: 'BeebAdded', data: {date: new Date(), content: 'awesome'}})
    es2.save({event: 'BeebAdded', data: {date: new Date(), content: 'yay'}})

    var streams = [es1, es2];
    var es = streams[streamId];

    var beebStream = new BeebStream(es.getAllEvents());

    res.render('index', { title: 'Beebr', beebs: beebStream.toArray()});
});

module.exports = router;
