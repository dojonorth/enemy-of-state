// this is a very simple factory object to generate event streams from the
// and separate some of that nasty logic into its own thing.

var EventStore = require('./EventStore');

var streams = {
    index: function () {
        var es = new EventStore();

        es.save({event: 'BeebAdded', data: {id: 1, date: new Date(), content: 'welcome to beebstream'}})
        es.save({event: 'BeebAdded', data: {id: 2, date: new Date(), content: 'awesome'}})
        es.save({event: 'BeebAdded', data: {id: 3, date: new Date(), content: 'yay'}});

        return es;
    },
    alt: function () {
        var es = new EventStore();

        es.save({event: 'BeebAdded', data: {id: 1, date: new Date(), content: 'alt beebstream'}})
        es.save({event: 'BeebAdded', data: {id: 2, date: new Date(), content: 'awesome'}})
        es.save({event: 'BeebAdded', data: {id: 3, date: new Date(), content: 'yay'}});

        return es;
    }
}

module.exports = function (stream) {
    var stream = stream in streams ? streams[stream] : streams['index'];

    return stream();
};
