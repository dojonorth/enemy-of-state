# Enemy of State

This dojo is focussed around event sourcing. In the JS subfolder, you will find a very simple node app for a new anonymous twitter clone called Beebr.

To get it set up, `cd js` and then `npm install`. Once installed, you should be able to `npm start` and visit http://localhost:3000 to see the basic clone.

Looking through the code, you will hopefully see that these lists are not initially objects representing individual posts, but rather a series of events which are being sent into aggregators to derive models before passing them into a very simple view.

## Task 1 - Delete a Beeb

The current event aggregation naïvely only responds to BeebAdded events, now we want to make it aware of BeebDeleted events. The event should probably only consist of the event name with a payload of the ID you wish to delete.

This can be exercised in two ways - first, there is our BeebStreamSpec file - probably the way to get the quickest feedback on your aggregation. You can run these tests by running `npm test`.

And then there is the front end manifestation of this, if you add some example eventstores to the `EventStoreFactory`, you should be able to restart your node instance to see 'real life' versions of this code. It's a very simple hash map that matches a ?stream= query string to an event store, defaulting to an index one.

## Task 2 - Link to a single Beeb

The next thing we want to do is to link to a single beeb. In the routes file, you will find the commented out beginnings of a link for a single ID. 

For this task, you will possibly realise that our BeebStream aggregate provides far too much information for a simple view to handle easily. It is probably that we'll need another aggregate to pass to a view which gathers only the information about a single posting.

Once you have an aggregate, you will want to pass this to a view, this may well be something similar (or the same as) the index page. Don't fret too much about making it look pretty (goodness knows, we didn't).

The last remaining question in this task is, does it handle deleted Beebs? Does it respond appropriately? (410s vs 404s?)

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
