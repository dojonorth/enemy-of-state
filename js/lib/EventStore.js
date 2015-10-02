'use strict';

function EventStore() {
    this.events = [];
}

EventStore.prototype.save = function (event) {
    this.events.push(event);
};

EventStore.prototype.getAllEvents = function () {
    return this.events;
}

module.exports = EventStore;