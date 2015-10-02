'use strict';

function BeebStream (stream) {
    this.beebs = stream.filter(function (beebEvent) {
        return beebEvent.event === 'BeebAdded';
    }).map(function (beebEvent) {
        return beebEvent.data;
    });
}

BeebStream.prototype.toArray = function () {
    return this.beebs;
};

module.exports = BeebStream;
