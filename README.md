# Enemy of State

This dojo is focussed around event sourcing. In the JS subfolder, you will find a very simple node app for a new anonymous twitter clone called Beebr.

To get it set up, `cd js` and then `npm install`. Once installed, you should be able to `npm start` and visit http://localhost:3000 to see the basic clone.

Looking through the code, you will hopefully see that these lists are not initially objects representing individual posts, but rather a series of events which are being sent into aggregators to derive models before passing them into a very simple view.

## Task 1 - Delete a Beeb

The current event aggregation naïvely only responds to BeebAdded events, now we want to make it aware of BeebDeleted events. The event should probably only consist of the event name with a payload of the ID you wish to delete.

This can be exercised in two ways - first, there is our BeebStreamSpec file - probably the way to get the quickest feedback on your aggregation. You can run these tests by running `npm test`.

And then there is the front end manifestation of this, if you add some example eventstores to the `EventStoreFactory`, you should be able to restart your node instance to see 'real life' versions of this code. It's a very simple hash map that matches a ?stream= query string to an event store, defaulting to an index one.

## Task 2 - Link to a single Beeb

/tweet/:id route.
create a new Beeb aggregate from our existing event store.
try to make it 404 (or 410 for bonus points) for a deleted Beeb.

## Task 3 - Add Beeb on front-end.

activate form.
modify event store.
refresh?

where does the ID come from? keep an ID counter somewhere?

what about server-side validation? limit chars etc.

## Task 4 - Add Users.

We're introducing an API change, people can now opt to allow users to Beeb non-anonymously.
BeebAdded now accepts UserID as part of its data field.

step a) naïvely pull this ID into the front-end, if available. Notice how we don't really need to alter any existing data, DB migrations, etc.
step b) now create some Events for a user being added to the system, name changed, photo changed - that sort of thing.
step c) display this extra information in the twitter stream. Maybe have the Beeb Aggregate call pass the event store through to a User Aggregat call?

## Task 5 - User streams

Show just a user's Beebs.

## Task 6 - Turn off anonymous Beebing
