var assert = require('chai').assert;
var EventStore = require('../lib/EventStore');

describe('EventStore', function () {
    it('should allow saving of events', function () {
        var eventStore = new EventStore();
        eventStore.save({event: 'SomethingCreated', data: {id: 1, meta: 'something'}});
        assert.equal(1, eventStore.events.length);
    });

    it('should allow reading events', function() {
        var eventStore = new EventStore();
        eventStore.save({eventType: 'AnEvent', eventDetails: {
            quantity: 1
        }});
        eventStore.save({eventType: 'AnEvent', eventDetails: {
            quantity: 3
        }});
        eventStore.save({eventType: 'AnEvent', eventDetails: {
            quantity: 2
        }});

        var quantities = eventStore.getAllEvents().map(function (event) {
            return event.eventDetails.quantity;
        });
        assert.deepEqual([1, 3, 2], quantities);
    });
});
