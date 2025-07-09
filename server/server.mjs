import 'dotenv/config';
import express, { application } from 'express';
import cors from 'cors';
import { MongoClient, ObjectId } from 'mongodb';
const port = process.env.PORT || 8080;
const app = express();
app.use(cors());
app.use(express.json());

// log every request to the console
app.use((req, res, next) => {
  console.log('>', req.method, req.path);
  next();
});

// --- Change nothing above this line ---


// Connect to MongoDB
const client = new MongoClient('mongodb://localhost:27017');
const conn = await client.connect();
const db = conn.db('app');

// Events REST API

// Location Dictionary for URIs
const dictionary = {
  "magic-kingdom": "Magic Kingdom",
  "epcot": "EPCOT",
  "hollywood-studios": "Hollywood Studios",
  "animal-kingdom": "Animal Kingdom",
  "disney-springs": "Disney Springs",
  "water-park": "Water Park"
};

//This Read API endpoint is implemented correctly because it retreives the entire "events" collection. You can also find specific documents that have the location you choose to filter. However, because I added a dictionary, I also checked the query parameter against it to convert locations into the proper name, which the AI did not provide. If events are found, they are returned with a 200 status code; if none match the filter, a 404 error is returned.
app.get('/api/events', async (req, res) => {
  const loc = req.query.location;
  const q = req.query.q;

  let filter = {};

  if (loc) {
    const locName = dictionary[loc]

    if (!locName) {
      return res.status(404).json({ error: 'Invalid location filter' });
    }

    filter.location = locName;
  }

  if (q) {
    filter.$text = { $search: q };
  }

  const events = await db.collection('events')
    .find(filter)
    .toArray();

  if (events.length > 0) {
    res.status(200).json(events);
  } else {
    res.status(404).json({ error: 'No events found' });
  }
});

// This Read API endpoint is implemented correctly because it retrieves a specific "event" from the "events" collection by ID. If the id is valid and in the "events" collection, the "event" will be returned along with a 200 status code. If the id is not valid, a 404 status code and error will be given saying "Invalid event ID." If the document is not in the collection, a 404 status code will also be returned with an error that says "Event not found."
app.get('/api/events/:id', async (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    const id = new ObjectId(req.params.id);
    const event = await db.collection('events').findOne({ _id: id });

    if (event) {
      res.status(200).json(event);
    } else {
      res.status(404).json({ error: 'Event not found' });
    }
  } else {
    res.status(404).json({ error: 'Invalid event ID' });
  }
});

// This Delete API endpoint is implemented correctly because it deletes a specific "event" from the "events" collection by ID. One thing I changed was creating a newObjectId directly when I make the const id, rather than having two separate variables and steps. If the document is successfully deleted, which we would know if deletedCount is greater than 0, we send a 204 status code. If the document does not successfully delete, a 404 status code is returned with the error message saying "Failed to delete event."
app.delete('/api/events/:id', async (req, res) => {
  const id = new ObjectId(req.params.id);
  const result = await db.collection('events').deleteOne({ _id: id });
  if (result.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(404).json({ error: 'Failed to delete event' });
  }
});

// This Create API endpoint is implemented correctly because it creates a new "event" and adds it to the "events" collection. The new document is created by reading the event data from req.body and then added to the collection using insertOne(). If the new event is successfully added and result.insertedId exists, the server finds the ID and returns the object and a 201 status code; if the document is not successfully created, a 404 status code is returned with an error message saying "Failed to create event." One thing I changed was getting rid of the try and catch because this overrides the error handling.
app.post('/api/events', async (req, res) => {
  const newEvent = req.body;

  const result = await db.collection('events').insertOne(newEvent);

  if (result && result.insertedId) {
    const insertedEvent = await db.collection('events').findOne({
      _id: result.insertedId
    });
    return res.status(201).json(insertedEvent);
  } else {
    return res.status(404).json({ error: 'Failed to create event' })
  }
});

// This Update (Replace Doc) endpoint works because it replaces an "event" with new data based on its ID. One thing I changed was creating a newObjectId directly when I make the const id, rather than having two separate variables and steps. If the ID is valid, the _id field is deleted from the request body, and the document is replaced using replaceOne(). If a match is found and result.matchedCount > 0, the updated event and a 200 status code is returned. If no match is found and the event is not replaced, a 404 status code is returned.
app.put('/api/events/:id', async (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    const id = new ObjectId(req.params.id);
    const updatedEvent = req.body;

    delete updatedEvent._id;

    const result = await db.collection('events').replaceOne(
      { _id: id },
      updatedEvent
    );

    if (result.matchedCount > 0) {
      res.status(200).json(updatedEvent);
    } else {
      res.status(404).json({ error: 'Event not found' });
    }
  } else {
    res.status(404).json({ error: 'Invalid event ID' });
  }
});

// This Update (Modify Doc) endpoint works because it modifies an "event" with new data based on its ID. One thing I changed was creating a newObjectId directly when I make the const id, rather than having two separate variables and steps. If the ID is vald, the updates from the request body are applied using the $set operator in the updateOne() method. If a match is found and result.matchedCount > 0, the updated event is fetched and returned with a 200 status code. If no match is found and the event is not updated or if the ID is invalid, a 404 status code is returned with the respective error message.
app.patch('/api/events/:id', async (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    const id = new ObjectId(req.params.id);
    const updates = req.body;

    const result = await db.collection('events').updateOne(
      { _id: id },
      { $set: updates }
    );

    if (result.matchedCount > 0) {
      const updatedEvent = await db.collection('events').findOne({ _id: id });
      res.status(200).json(updatedEvent);
    } else {
      res.status(404).json({ error: 'Event not found' });
    }
  } else {
    res.status(404).json({ error: 'Invalid event ID' });
  }
});

// This RSVP endpoint works because it increases the number of attendees by 1 for a specific event using its ID. One thing I changed was creating a newObjectId directly when I make the const id, rather than having two separate variables and steps. It first checks if the ID is valid and then attempts to update the event using the $inc operator and updateOne(). If the event is found and updated, it retrieves the updated document and returns it with a 200 status code; if the ID is invalid or no event matches the ID, a 404 error is returned.
app.post('/api/events/:id/rsvp', async (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    const id = new ObjectId(req.params.id);

    const result = await db.collection('events').updateOne(
      { _id: id },
      { $inc: { number_of_attendees: 1 } }
    );

    if (result.matchedCount > 0) {
      const updatedEvent = await db.collection('events').findOne({ _id: id });
      res.status(200).json(updatedEvent);
    } else {
      res.status(404).json({ error: 'Event not found' });
    }
  } else {
    res.status(404).json({ error: 'Invalid event ID' });
  }
});

// This Cancel RSVP endpoint works because it decreases the number_of_attendees by 1 for a specific event, only if the count is greater than 0. One thing I changed was creating a newObjectId directly when I make the const id, rather than having two separate variables and steps. It checks if the ID is valid and finds the corresponding event. If the event exists and has RSVPs, it uses $inc to decrement the count and returns the updated event with a 200 status code; if the event doesn't exist, the ID is invalid, or there are no RSVPs to cancel, a 404 error is returned.
app.post('/api/events/:id/cancel-rsvp', async (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    const id = new ObjectId(req.params.id);

    const event = await db.collection('events').findOne({ _id: id });
    if (event) {
      if (event.number_of_attendees > 0) {
        const result = await db.collection('events').updateOne(
          { _id: id },
          { $inc: { number_of_attendees: -1 } }
        );

        if (result.matchedCount > 0) {
          const updatedEvent = await db.collection('events').findOne({ _id: id });
          res.status(200).json(updatedEvent);
        } else {
          res.status(404).json({ error: 'Failed to cancel RSVP' });
        }
      } else {
        res.status(404).json({ error: 'No RSVPs to cancel' });
      }
    } else {
      res.status(404).json({ error: 'Event not found' });
    }
  } else {
    res.status(404).json({ error: 'Invalid event ID' });
  }
});


// --- Change nothing below this line ---

// 404 - not found
app.use((req, res, next) => {
  res.status(404).json({ message: 'resource ' + req.url + ' not found' });
});

// 500 - Any server error
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send()
});

// start server on port
const server = app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}/`);
});
server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`error: port ${port} is already in use!`, 'kill this server! (control + c)');
    process.exit(1);
  } else {
    console.error('Server error:', error);
  }
});
