# Enemy of State

This dojo is focussed around event sourcing. In the JS subfolder, you will find a very simple node app for a new anonymous twitter clone called Beebr.

To get it set up, `cd js` and then `npm install`. Once installed, you should be able to `npm start` and visit http://localhost:3000 to see the basic clone.

Looking through the code, you will hopefully see that these lists are not initially objects representing individual posts, but rather a series of events which are being sent into aggregators to derive models before passing them into a very simple view.

## Task 1 - Delete a Beeb

The current event aggregation naïvely only responds to BeebAdded events, now we want to make it aware of BeebDeleted events. The event should probably only consist of the event name with a payload of the ID you wish to delete.

This can be exercised in two ways - first, there is our BeebStreamSpec file - probably the way to get the quickest feedback on your aggregation. You can run these tests by running `npm test`.

And then there is the front end manifestation of this, if you add some example eventstores to the controller, you should be able to restart your node instance to see 'real life' versions of this code.

## Task 2 - 
