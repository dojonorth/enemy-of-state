var assert = require('chai').assert;
var BeebStream = require('../../lib/aggregates/BeebStream');
var EventStore = require('../../lib/EventStore');

describe('BeebStream', function () {
    it('should get generated from an event store', function () {
        var eventStore = new EventStore();

        eventStore.save({event: 'BeebAdded', data: {id: 1, date: new Date(), content: 'welcome to beebstream'}})
        eventStore.save({event: 'BeebAdded', data: {id: 2, date: new Date(), content: 'awesome'}})
        eventStore.save({event: 'BeebAdded', data: {id: 3, date: new Date(), content: 'yay'}})

        var beebStream = new BeebStream(eventStore.getAllEvents());

        assert.deepEqual([
            {id: 1, date: new Date(), content: 'welcome to beebstream'},
            {id: 2, date: new Date(), content: 'awesome'},
            {id: 3, date: new Date(), content: 'yay'}
        ], beebStream.toArray());
    });

    it('should disregard unknown events', function () {
        var eventStore = new EventStore();

        eventStore.save({event: 'BeebAdded', data: {id: 1, date: new Date(), content: 'welcome to beebstream'}})
        eventStore.save({event: 'BeebTweeted', data: {id: 2, date: new Date(), content: 'awesome'}})
        eventStore.save({event: 'BeebAdded', data: {id: 3, date: new Date(), content: 'yay'}})

        var beebStream = new BeebStream(eventStore.getAllEvents());

        assert.deepEqual([
            {id: 1, date: new Date(), content: 'welcome to beebstream'},
            {id: 3, date: new Date(), content: 'yay'}
        ], beebStream.toArray());
    });
});
